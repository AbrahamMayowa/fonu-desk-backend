import { Injectable, ConflictException, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { EmailService } from '../../email/email.service';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResendOtpDto } from './dto/resend-otp.dto';
import * as bcrypt from 'bcrypt';
import { ROLES } from '../../common/constants/roles.constant';
import { RateLimiterService } from '../../common/redis/rate-limiter.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
    private readonly rateLimiterService: RateLimiterService,
  ) {}

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async signup(dto: SignupDto) {
    const existingUser = await this.authRepository.findUserByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    await this.authRepository.deleteOtpsByEmailAndType(dto.email, 'VERIFY_EMAIL');

    // Generate and store OTP first
    const code = this.generateOtp();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    const otpRecord = await this.authRepository.createOtp({
      email: dto.email,
      code,
      type: 'VERIFY_EMAIL',
      expiresAt,
    });

    // Create TempUser linking otpId
    await this.authRepository.upsertTempUser({
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
      otpId: otpRecord.id,
    });

    // Send Email
    this.emailService.sendVerificationOtpEmail(dto.email, { code });

    return { message: 'Signup successful. Please verify your email with the OTP sent.' };
  }

  async verifyEmail(dto: VerifyOtpDto) {
    await this.rateLimiterService.checkRateLimit('verify-email', dto.email, 6, 900);

    const otpRecord = await this.authRepository.findValidOtp(dto.email, dto.code, 'VERIFY_EMAIL');

    if (!otpRecord) {
      throw new BadRequestException('Invalid or expired OTP');
    }

    const tempUser = (await this.authRepository.findTempUserByOtpId(otpRecord.id)) || otpRecord.tempUser || (await this.authRepository.findTempUserByEmail(dto.email));
    if (!tempUser) {
      const existingUser = await this.authRepository.findUserByEmail(dto.email);
      if (existingUser && existingUser.emailVerified) {
        let defaultOrganizationId: string | null = null;
        if (existingUser.defaultOrganizationId) {
          const isOwnerOfDefault = existingUser.ownedOrganizations?.some(org => org.id === existingUser.defaultOrganizationId && !org.deletedAt);
          const isMemberOfDefault = existingUser.memberships?.some(mem => mem.organizationId === existingUser.defaultOrganizationId && mem.isActive !== false && !mem.deletedAt);
          if (isOwnerOfDefault || isMemberOfDefault) {
            defaultOrganizationId = existingUser.defaultOrganizationId;
          }
        }

        if (!defaultOrganizationId) {
          if (existingUser.ownedOrganizations && existingUser.ownedOrganizations.length > 0) {
            defaultOrganizationId = existingUser.ownedOrganizations[0].id;
          } else if (existingUser.memberships && existingUser.memberships.length > 0) {
            defaultOrganizationId = existingUser.memberships[0].organizationId;
          }
        }

        const roles: string[] = [];
        if (defaultOrganizationId) {
          const ownsActiveOrg = existingUser.ownedOrganizations?.some(org => org.id === defaultOrganizationId);
          if (ownsActiveOrg) roles.push(ROLES.OWNER);
          const activeMembership = existingUser.memberships?.find(m => m.organizationId === defaultOrganizationId);
          if (activeMembership) roles.push(activeMembership.role.name);
        } else if (existingUser.isOwner) {
          roles.push(ROLES.OWNER);
        }

        const accessToken = await this.jwtService.signAsync({
          id: existingUser.id,
          email: existingUser.email,
          roles,
          isOwner: existingUser.isOwner,
          organizationId: defaultOrganizationId,
        });

        return {
          message: 'Email verified successfully.',
          accessToken,
          user: {
            id: existingUser.id,
            email: existingUser.email,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            isOwner: existingUser.isOwner,
            defaultOrganizationId,
          },
        };
      }
      throw new BadRequestException('Invalid or expired OTP');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.authRepository.verifyEmailAndPromoteUser(tempUser, otpRecord.id, hashedPassword);

    const roles: string[] = [];
    if (user.isOwner) {
      roles.push(ROLES.OWNER);
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      email: user.email,
      roles,
      isOwner: user.isOwner,
      organizationId: null,
    });

    return {
      message: 'Email verified successfully.',
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isOwner: user.isOwner,
        defaultOrganizationId: null,
      },
    };
  }

  async resendVerificationOtp(dto: ResendOtpDto) {
    await this.rateLimiterService.checkRateLimit('resend-verification-otp', dto.email, 6, 1800);

    const existingUser = await this.authRepository.findUserByEmail(dto.email);
    if (existingUser && existingUser.emailVerified) {
      throw new ConflictException('Email is already verified.');
    }

    const tempUser = await this.authRepository.findTempUserByEmail(dto.email);
    if (!tempUser) {
      // Don't leak user existence
      return { message: 'If the email is registered, a new OTP has been sent.' };
    }

    // Invalidate existing verify email OTPs
    await this.authRepository.deleteOtpsByEmailAndType(tempUser.email, 'VERIFY_EMAIL');

    // Generate new OTP
    const code = this.generateOtp();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    const otpRecord = await this.authRepository.createOtp({
      email: tempUser.email,
      code,
      type: 'VERIFY_EMAIL',
      expiresAt,
    });

    await this.authRepository.upsertTempUser({
      email: tempUser.email,
      firstName: tempUser.firstName,
      lastName: tempUser.lastName,
      otpId: otpRecord.id,
    });

    // Send Email
    this.emailService.sendVerificationOtpEmail(tempUser.email, { code });

    return { message: 'If the email is registered, a new OTP has been sent.' };
  }

  async login(dto: LoginDto) {
    const user = await this.authRepository.findUserByEmail(dto.email);
    if (!user || !(await bcrypt.compare(dto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.emailVerified) {
      throw new UnauthorizedException('Please verify your email before logging in');
    }

    // Determine default organization:
    // First, check if user.defaultOrganizationId is set and valid
    let defaultOrganizationId: string | null = null;
    if (user.defaultOrganizationId) {
      const isOwnerOfDefault = user.ownedOrganizations?.some(org => org.id === user.defaultOrganizationId && !org.deletedAt);
      const isMemberOfDefault = user.memberships?.some(mem => mem.organizationId === user.defaultOrganizationId && mem.isActive !== false && !mem.deletedAt);
      if (isOwnerOfDefault || isMemberOfDefault) {
        defaultOrganizationId = user.defaultOrganizationId;
      }
    }

    if (!defaultOrganizationId) {
      if (user.ownedOrganizations && user.ownedOrganizations.length > 0) {
        defaultOrganizationId = user.ownedOrganizations[0].id;
      } else if (user.memberships && user.memberships.length > 0) {
        defaultOrganizationId = user.memberships[0].organizationId;
      }

      if (defaultOrganizationId) {
        await this.authRepository.updateUser(user.id, { defaultOrganizationId });
      }
    }

    const roles: string[] = [];
    if (defaultOrganizationId) {
      const ownsActiveOrg = user.ownedOrganizations?.some(org => org.id === defaultOrganizationId);
      if (ownsActiveOrg) {
        roles.push(ROLES.OWNER);
      }
      const activeMembership = user.memberships?.find(m => m.organizationId === defaultOrganizationId);
      if (activeMembership) {
        roles.push(activeMembership.role.name);
      }
    }

    const payload = { 
      id: user.id, 
      email: user.email, 
      roles, 
      isOwner: user.isOwner,
      organizationId: defaultOrganizationId,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isOwner: user.isOwner,
        defaultOrganizationId,
      }
    };
  }

  async switchOrganization(userId: string, newOrganizationId: string) {
    const user = await this.authRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify user has access to this organization
    const isOwner = user.ownedOrganizations.some(org => org.id === newOrganizationId && !org.deletedAt);
    const isMember = user.memberships.some(mem => mem.organizationId === newOrganizationId && mem.isActive !== false && !mem.deletedAt);

    if (!isOwner && !isMember) {
      throw new UnauthorizedException('You do not have access to this organization');
    }

    // Persist as user's default organization in DB
    await this.authRepository.updateUser(userId, {
      defaultOrganizationId: newOrganizationId,
    });

    const roles: string[] = [];
    const ownsActiveOrg = user.ownedOrganizations?.some(org => org.id === newOrganizationId);
    if (ownsActiveOrg) {
      roles.push(ROLES.OWNER);
    }
    const activeMembership = user.memberships?.find(m => m.organizationId === newOrganizationId);
    if (activeMembership) {
      roles.push(activeMembership.role.name);
    }

    const payload = { 
      id: user.id, 
      email: user.email, 
      roles, 
      isOwner: user.isOwner,
      organizationId: newOrganizationId,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.authRepository.findUserByEmail(dto.email);
    if (!user) {
      // Return same response to prevent email enumeration
      return { message: 'If the email exists, a reset code has been sent.' };
    }

    const code = this.generateOtp();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    await this.authRepository.createOtp({
      email: user.email,
      code,
      type: 'RESET_PASSWORD',
      expiresAt,
    });

    this.emailService.sendPasswordResetEmail(user.email, { code });

    return { message: 'If the email exists, a reset code has been sent.' };
  }

  async changePassword(dto: ChangePasswordDto) {
    await this.rateLimiterService.checkRateLimit('change-password', dto.email, 6, 900);

    const otpRecord = await this.authRepository.findValidOtp(dto.email, dto.code, 'RESET_PASSWORD');

    if (!otpRecord) {
      throw new BadRequestException('Invalid or expired reset code');
    }

    const user = await this.authRepository.findUserByEmail(dto.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
    await this.authRepository.updateUser(user.id, { password: hashedPassword });
    await this.authRepository.deleteOtp(otpRecord.id);

    return { message: 'Password has been successfully changed.' };
  }
}
