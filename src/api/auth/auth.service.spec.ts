import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthRepository } from './auth.repository';
import { EmailService } from '../../email/email.service';
import { JwtService } from '@nestjs/jwt';
import { ConflictException, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { RateLimiterService } from '../../common/redis/rate-limiter.service';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt');

describe('AuthService', () => {
  let authService: AuthService;
  let authRepository: jest.Mocked<AuthRepository>;
  let emailService: jest.Mocked<EmailService>;
  let jwtService: jest.Mocked<JwtService>;

  const mockAuthRepository = {
    findUserByEmail: jest.fn(),
    createUser: jest.fn(),
    upsertTempUser: jest.fn(),
    findTempUserByEmail: jest.fn(),
    findTempUserByOtpId: jest.fn(),
    deleteTempUser: jest.fn(),
    deleteTempUserByEmail: jest.fn(),
    verifyEmailAndPromoteUser: jest.fn(),
    createOtp: jest.fn(),
    findValidOtp: jest.fn(),
    updateUser: jest.fn(),
    deleteOtp: jest.fn(),
    deleteOtpsByEmailAndType: jest.fn(),
    findUserById: jest.fn(),
  };

  const mockEmailService = {
    sendMail: jest.fn(),
    sendVerificationOtpEmail: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  };

  const mockJwtService = {
    signAsync: jest.fn(),
  };

  const mockRateLimiterService = {
    checkRateLimit: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: AuthRepository, useValue: mockAuthRepository },
        { provide: EmailService, useValue: mockEmailService },
        { provide: JwtService, useValue: mockJwtService },
        { provide: RateLimiterService, useValue: mockRateLimiterService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    authRepository = module.get(AuthRepository);
    emailService = module.get(EmailService);
    jwtService = module.get(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('signup', () => {
    const signupDto = {
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
    };

    it('should throw ConflictException if email is already in use by a verified user', async () => {
      authRepository.findUserByEmail.mockResolvedValue({ id: '123', emailVerified: true } as any);

      await expect(authService.signup(signupDto)).rejects.toThrow(ConflictException);
      expect(authRepository.findUserByEmail).toHaveBeenCalledWith(signupDto.email);
    });

    it('should create OTP, store tempUser with otpId, and send email', async () => {
      authRepository.findUserByEmail.mockResolvedValue(null);
      authRepository.createOtp.mockResolvedValue({ id: 'otp123' } as any);
      authRepository.upsertTempUser.mockResolvedValue({ id: 'temp123', email: signupDto.email, otpId: 'otp123' } as any);
      emailService.sendVerificationOtpEmail.mockResolvedValue(undefined);

      const result = await authService.signup(signupDto);

      expect(authRepository.createOtp).toHaveBeenCalled();
      expect(authRepository.upsertTempUser).toHaveBeenCalledWith({
        email: signupDto.email,
        firstName: signupDto.firstName,
        lastName: signupDto.lastName,
        otpId: 'otp123',
      });
      expect(emailService.sendVerificationOtpEmail).toHaveBeenCalledWith(
        signupDto.email,
        expect.objectContaining({ code: expect.any(String) })
      );
      expect(result).toEqual({ message: 'Signup successful. Please verify your email with the OTP sent.' });
    });
  });

  describe('verifyEmail', () => {
    const verifyOtpDto = {
      email: 'test@example.com',
      code: '123456',
      password: 'password123',
    };

    it('should throw BadRequestException if OTP is invalid or expired', async () => {
      authRepository.findValidOtp.mockResolvedValue(null);

      await expect(authService.verifyEmail(verifyOtpDto)).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if tempUser is not found and user is not verified', async () => {
      authRepository.findValidOtp.mockResolvedValue({ id: 'otp123', code: '123456' } as any);
      authRepository.findTempUserByOtpId.mockResolvedValue(null);
      authRepository.findTempUserByEmail.mockResolvedValue(null);
      authRepository.findUserByEmail.mockResolvedValue(null);

      await expect(authService.verifyEmail(verifyOtpDto)).rejects.toThrow(BadRequestException);
    });

    it('should verify email, hash password, promote tempUser to User, and return JWT token', async () => {
      const tempUser = { id: 'temp123', email: 'test@example.com', firstName: 'John', lastName: 'Doe', otpId: 'otp123' };
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
      authRepository.findValidOtp.mockResolvedValue({ id: 'otp123', code: '123456' } as any);
      authRepository.findTempUserByOtpId.mockResolvedValue(tempUser as any);
      authRepository.verifyEmailAndPromoteUser.mockResolvedValue({ id: 'user123', email: 'test@example.com', firstName: 'John', lastName: 'Doe', isOwner: true } as any);
      jwtService.signAsync.mockResolvedValue('jwtToken123');

      const result = await authService.verifyEmail(verifyOtpDto);

      expect(bcrypt.hash).toHaveBeenCalledWith(verifyOtpDto.password, 10);
      expect(authRepository.verifyEmailAndPromoteUser).toHaveBeenCalledWith(tempUser, 'otp123', 'hashedPassword');
      expect(result).toEqual({
        message: 'Email verified successfully.',
        accessToken: 'jwtToken123',
        user: {
          id: 'user123',
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
          isOwner: true,
          defaultOrganizationId: null,
        },
      });
    });
  });

  describe('login', () => {
    const loginDto = {
      email: 'test@example.com',
      password: 'password123',
    };

    it('should throw UnauthorizedException on invalid credentials', async () => {
      authRepository.findUserByEmail.mockResolvedValue(null);

      await expect(authService.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });

    it('should throw UnauthorizedException if email is not verified', async () => {
      const user = { id: 'user123', email: loginDto.email, password: 'hashedPassword', emailVerified: false };
      authRepository.findUserByEmail.mockResolvedValue(user as any);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);

      await expect(authService.login(loginDto)).rejects.toThrow(
        new UnauthorizedException('Please verify your email before logging in')
      );
    });

    it('should generate accessToken and return user on success', async () => {
      const user = {
        id: 'user123',
        email: loginDto.email,
        password: 'hashedPassword',
        firstName: 'John',
        lastName: 'Doe',
        emailVerified: true,
        isOwner: true,
        ownedOrganizations: [{ id: 'org123' }],
        memberships: [{ organizationId: 'org123', role: { name: 'OWNER' } }],
      };
      authRepository.findUserByEmail.mockResolvedValue(user as any);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      jwtService.signAsync.mockResolvedValue('token123');

      const result = await authService.login(loginDto);

      expect(jwtService.signAsync).toHaveBeenCalledWith({
        id: user.id,
        email: user.email,
        roles: ['OWNER', 'OWNER'],
        isOwner: true,
        organizationId: 'org123',
      });
      expect(result).toEqual({
        accessToken: 'token123',
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          isOwner: true,
          defaultOrganizationId: 'org123',
        },
      });
    });
  });

  describe('switchOrganization', () => {
    it('should throw UnauthorizedException if user does not belong to target organization', async () => {
      const user = {
        id: 'user123',
        ownedOrganizations: [],
        memberships: [],
      };
      authRepository.findUserById.mockResolvedValue(user as any);

      await expect(authService.switchOrganization('user123', 'org999')).rejects.toThrow(
        new UnauthorizedException('You do not have access to this organization')
      );
    });

    it('should issue a new token for target organization membership and update defaultOrganizationId', async () => {
      const user = {
        id: 'user123',
        email: 'test@example.com',
        isOwner: false,
        ownedOrganizations: [],
        memberships: [{ organizationId: 'org123', role: { name: 'SUPPORT' } }],
      };
      authRepository.findUserById.mockResolvedValue(user as any);
      jwtService.signAsync.mockResolvedValue('newToken');

      const result = await authService.switchOrganization('user123', 'org123');

      expect(authRepository.updateUser).toHaveBeenCalledWith('user123', {
        defaultOrganizationId: 'org123',
      });
      expect(jwtService.signAsync).toHaveBeenCalledWith({
        id: user.id,
        email: user.email,
        roles: ['SUPPORT'],
        isOwner: false,
        organizationId: 'org123',
      });
      expect(result).toEqual({ accessToken: 'newToken' });
    });
  });
});
