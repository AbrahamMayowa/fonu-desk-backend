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

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly emailService: EmailService,
    private readonly jwtService: JwtService,
  ) {}

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async signup(dto: SignupDto) {
    const existingUser = await this.authRepository.findUserByEmail(dto.email);
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.authRepository.createUser({
      email: dto.email,
      password: hashedPassword,
      firstName: dto.firstName,
      lastName: dto.lastName,
      isOwner: true, // They are signing up as an owner
    });

    // Generate and store OTP
    const code = this.generateOtp();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    await this.authRepository.createOtp({
      email: user.email,
      code,
      type: 'VERIFY_EMAIL',
      expiresAt,
    });

    // Send Email
    await this.emailService.sendMail(
      user.email,
      'Welcome! Verify your email',
      `<p>Your verification code is <strong>${code}</strong>. It expires in 15 minutes.</p>`,
    );

    return { message: 'Signup successful. Please verify your email with the OTP sent.' };
  }

  async verifyEmail(dto: VerifyOtpDto) {
    const otpRecord = await this.authRepository.findValidOtp(dto.email, dto.code, 'VERIFY_EMAIL');

    if (!otpRecord) {
      throw new BadRequestException('Invalid or expired OTP');
    }

    const user = await this.authRepository.findUserByEmail(dto.email);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.authRepository.updateUser(user.id, { emailVerified: true });
    await this.authRepository.deleteOtp(otpRecord.id);

    return { message: 'Email verified successfully.' };
  }

  async resendVerificationOtp(dto: ResendOtpDto) {
    const user = await this.authRepository.findUserByEmail(dto.email);
    
    if (!user) {
      // Don't leak user existence
      return { message: 'If the email is registered, a new OTP has been sent.' };
    }

    if (user.emailVerified) {
      throw new ConflictException('Email is already verified.');
    }

    // Invalidate existing verify email OTPs
    await this.authRepository.deleteOtpsByEmailAndType(user.email, 'VERIFY_EMAIL');

    // Generate new OTP
    const code = this.generateOtp();
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + 15);

    await this.authRepository.createOtp({
      email: user.email,
      code,
      type: 'VERIFY_EMAIL',
      expiresAt,
    });

    // Send Email
    await this.emailService.sendMail(
      user.email,
      'Welcome! Verify your email',
      `<p>Your new verification code is <strong>${code}</strong>. It expires in 15 minutes.</p>`,
    );

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

    // Get default organization if present (for owners, their first owned organization)
    let defaultOrganizationId: string | null = null;
    if (user.ownedOrganizations && user.ownedOrganizations.length > 0) {
      defaultOrganizationId = user.ownedOrganizations[0].id;
    } else if (user.memberships && user.memberships.length > 0) {
      defaultOrganizationId = user.memberships[0].organizationId;
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
    const isOwner = user.ownedOrganizations.some(org => org.id === newOrganizationId);
    const isMember = user.memberships.some(mem => mem.organizationId === newOrganizationId);

    if (!isOwner && !isMember) {
      throw new UnauthorizedException('You do not have access to this organization');
    }

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

    await this.emailService.sendMail(
      user.email,
      'Password Reset Request',
      `<p>Your password reset code is <strong>${code}</strong>. It expires in 15 minutes.</p>`,
    );

    return { message: 'If the email exists, a reset code has been sent.' };
  }

  async changePassword(dto: ChangePasswordDto) {
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
