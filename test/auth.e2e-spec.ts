process.env.JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-dev';
process.env.FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from '@database/prisma.service';
import { AuthRepository } from '../src/api/auth/auth.repository';
import { EmailService } from '../src/email/email.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

describe('AuthController (e2e)', () => {
  let app: INestApplication<App>;
  let authRepository: jest.Mocked<AuthRepository>;
  let jwtService: JwtService;

  const mockPrismaService = {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  };

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

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .overrideProvider(AuthRepository)
      .useValue(mockAuthRepository)
      .overrideProvider(EmailService)
      .useValue(mockEmailService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    authRepository = moduleFixture.get(AuthRepository);
    jwtService = moduleFixture.get(JwtService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  describe('POST /auth/signup', () => {
    it('should register user in tempUser and return success message', async () => {
      authRepository.findUserByEmail.mockResolvedValue(null);
      authRepository.upsertTempUser.mockResolvedValue({ id: 'temp123', email: 'test@example.com' } as any);
      authRepository.createOtp.mockResolvedValue({ id: 'otp123' } as any);

      return request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.message).toContain('Signup successful');
        });
    });

    it('should return 409 if email already exists in User table', async () => {
      authRepository.findUserByEmail.mockResolvedValue({ id: 'user123', emailVerified: true } as any);

      return request(app.getHttpServer())
        .post('/auth/signup')
        .send({
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
        })
        .expect(409);
    });
  });

  describe('POST /auth/verify-email', () => {
    it('should verify OTP, promote tempUser to User, and return accessToken and user object', async () => {
      const tempUser = { id: 'temp123', email: 'test@example.com', firstName: 'John', lastName: 'Doe' };
      authRepository.findValidOtp.mockResolvedValue({ id: 'otp123', tempUser } as any);
      authRepository.findTempUserByEmail.mockResolvedValue(tempUser as any);
      authRepository.verifyEmailAndPromoteUser.mockResolvedValue({ id: 'user123', email: 'test@example.com', firstName: 'John', lastName: 'Doe', isOwner: true } as any);

      return request(app.getHttpServer())
        .post('/auth/verify-email')
        .send({
          email: 'test@example.com',
          code: '123456',
          password: 'password123',
        })
        .expect(200)
        .expect((res) => {
          expect(res.body.message).toContain('verified successfully');
          expect(res.body.accessToken).toBeDefined();
          expect(res.body.user).toBeDefined();
        });
    });
  });

  describe('POST /auth/login', () => {
    it('should sign JWT token on successful credentials verification', async () => {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const user = {
        id: 'user123',
        email: 'test@example.com',
        password: hashedPassword,
        firstName: 'John',
        lastName: 'Doe',
        emailVerified: true,
        isOwner: true,
        ownedOrganizations: [{ id: 'org123' }],
        memberships: [{ organizationId: 'org123', role: { name: 'OWNER' } }],
      };
      authRepository.findUserByEmail.mockResolvedValue(user as any);

      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        })
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('accessToken');
          expect(res.body.user.id).toBe('user123');
        });
    });

    it('should block login if email is not verified', async () => {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const user = {
        id: 'user123',
        email: 'test@example.com',
        password: hashedPassword,
        emailVerified: false,
      };
      authRepository.findUserByEmail.mockResolvedValue(user as any);

      return request(app.getHttpServer())
        .post('/auth/login')
        .send({
          email: 'test@example.com',
          password: 'password123',
        })
        .expect(401);
    });
  });

  describe('PATCH /auth/switch-organization', () => {
    it('should reissue new token for target organization', async () => {
      const validOrgId = 'a0b1c2d3-e4f5-6789-abcd-ef0123456789';
      const user = {
        id: 'user123',
        email: 'test@example.com',
        isOwner: true,
        ownedOrganizations: [{ id: validOrgId }],
        memberships: [],
      };
      authRepository.findUserById.mockResolvedValue(user as any);

      const token = await jwtService.signAsync({
        id: 'user123',
        email: 'test@example.com',
        roles: ['OWNER'],
        isOwner: true,
        organizationId: '123e4567-e89b-12d3-a456-426614174000',
      });

      return request(app.getHttpServer())
        .patch('/auth/switch-organization')
        .set('Authorization', `Bearer ${token}`)
        .send({
          organizationId: validOrgId,
        })
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveProperty('accessToken');
        });
    });
  });
});
