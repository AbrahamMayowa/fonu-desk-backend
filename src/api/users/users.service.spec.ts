import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { EmailService } from '../../email/email.service';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

describe('UsersService', () => {
  let service: UsersService;
  let repo: jest.Mocked<UsersRepository>;
  let emailService: jest.Mocked<EmailService>;
  let auditLogsService: jest.Mocked<AuditLogsService>;
  let jwtService: jest.Mocked<JwtService>;

  beforeEach(async () => {
    const mockRepo = {
      findRoleById: jest.fn(),
      findAllRoles: jest.fn(),
      getMember: jest.fn(),
      findUserByEmail: jest.fn(),
      createInvitation: jest.fn(),
      findInvitationByToken: jest.fn(),
      updateInvitationStatus: jest.fn(),
      createOrganizationMember: jest.fn(),
      softDeleteMember: jest.fn(),
      findOrganizationById: jest.fn(),
      findBusinessById: jest.fn(),
      findInvitationsByOrganization: jest.fn(),
      countInvitationsByOrganization: jest.fn(),
      findInvitationById: jest.fn(),
      updateInvitation: jest.fn(),
      executeTransaction: jest.fn((fn) => fn(mockRepo)),
    };

    const mockEmailService = {
      sendUserInviteEmail: jest.fn(),
    };

    const mockAuditLogsService = {
      createLog: jest.fn(),
    };

    const mockJwtService = {
      signAsync: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersRepository, useValue: mockRepo },
        { provide: EmailService, useValue: mockEmailService },
        { provide: AuditLogsService, useValue: mockAuditLogsService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get(UsersRepository);
    emailService = module.get(EmailService);
    auditLogsService = module.get(AuditLogsService);
    jwtService = module.get(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('inviteUser', () => {
    const inviteDto = {
      email: 'invitee@example.com',
      roleId: 'role123',
      businessId: 'business123',
    };

    it('should throw NotFoundException if role is not found', async () => {
      repo.findRoleById.mockResolvedValue(null);

      await expect(
        service.inviteUser({ id: 'owner123', organizationId: 'org123' } as any, inviteDto)
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException if user is already a member of the organization', async () => {
      repo.findRoleById.mockResolvedValue({ id: 'role123', name: 'SUPPORT' } as any);
      repo.findUserByEmail.mockResolvedValue({ id: 'user123' } as any);
      repo.getMember.mockResolvedValue({ id: 'membership123' } as any);

      await expect(
        service.inviteUser({ id: 'owner123', organizationId: 'org123' } as any, inviteDto)
      ).rejects.toThrow(ConflictException);
    });

    it('should successfully create invitation and send email', async () => {
      repo.findRoleById.mockResolvedValue({ id: 'role123', name: 'SUPPORT' } as any);
      repo.findUserByEmail.mockResolvedValue(null);
      repo.getMember.mockResolvedValue(null);
      repo.findBusinessById.mockResolvedValue({ id: 'business123' } as any);
      repo.createInvitation.mockResolvedValue({ id: 'invite123', token: 'token123', email: 'invitee@example.com' } as any);

      const result = await service.inviteUser(
        { id: 'owner123', organizationId: 'org123' } as any,
        inviteDto
      );

      expect(repo.createInvitation).toHaveBeenCalledWith(
        expect.objectContaining({
          email: inviteDto.email,
          roleId: inviteDto.roleId,
          organizationId: 'org123',
        })
      );
      expect(emailService.sendUserInviteEmail).toHaveBeenCalledWith(
        inviteDto.email,
        expect.objectContaining({ inviteLink: expect.stringContaining('accept-invite?token=') })
      );
      expect(auditLogsService.createLog).toHaveBeenCalledWith(
        expect.objectContaining({ action: 'INVITE_USER' })
      );
      expect(result.invitationId).toBe('invite123');
    });
  });

  describe('acceptInvite', () => {
    it('should throw NotFoundException if token is invalid', async () => {
      repo.findInvitationByToken.mockResolvedValue(null);

      await expect(service.acceptInvite({ token: 'invalidToken', password: 'password', firstName: 'John', lastName: 'Doe' })).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException if invite has already been accepted', async () => {
      repo.findInvitationByToken.mockResolvedValue({ id: 'invite123', status: 'ACCEPTED', expiresAt: new Date(Date.now() + 10000) } as any);

      await expect(service.acceptInvite({ token: 'acceptedToken', password: 'password', firstName: 'John', lastName: 'Doe' })).rejects.toThrow(ConflictException);
    });

    it('should successfully accept invite, generate access token and return user details', async () => {
      const invite = {
        id: 'invite123',
        token: 'validToken',
        email: 'invitee@example.com',
        organizationId: 'org123',
        roleId: 'role123',
        businessId: null,
        status: 'PENDING',
        expiresAt: new Date(Date.now() + 100000),
      };
      repo.findInvitationByToken.mockResolvedValue(invite as any);
      (repo.executeTransaction as jest.Mock).mockImplementation(async (fn) => {
        const txMock = {
          user: {
            findUnique: jest.fn().mockResolvedValue(null),
            create: jest.fn().mockResolvedValue({
              id: 'user123',
              email: 'invitee@example.com',
              firstName: 'John',
              lastName: 'Doe',
              isOwner: false,
              defaultOrganizationId: 'org123',
            }),
            update: jest.fn(),
          },
          organizationMember: {
            findUnique: jest.fn().mockResolvedValue(null),
            create: jest.fn().mockResolvedValue({ id: 'mem123' }),
            update: jest.fn(),
          },
          invitation: {
            update: jest.fn().mockResolvedValue({ id: 'invite123', status: 'ACCEPTED' }),
          },
          role: {
            findUnique: jest.fn().mockResolvedValue({ id: 'role123', name: 'SUPPORT' }),
          },
        };
        return fn(txMock);
      });
      jwtService.signAsync.mockResolvedValue('accessToken123');

      const result = await service.acceptInvite({
        token: 'validToken',
        password: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      });

      expect(result).toEqual({
        message: 'Invitation accepted successfully',
        accessToken: 'accessToken123',
        user: {
          id: 'user123',
          email: 'invitee@example.com',
          firstName: 'John',
          lastName: 'Doe',
          isOwner: false,
          defaultOrganizationId: 'org123',
        },
      });
    });
  });

  describe('removeUser', () => {
    it('should soft delete member', async () => {
      repo.getMember.mockResolvedValue({ id: 'membership123', role: { name: 'SUPPORT' } } as any);
      repo.softDeleteMember.mockResolvedValue({ id: 'membership123' } as any);

      const result = await service.removeUser(
        { id: 'owner123', organizationId: 'org123' } as any,
        'user123'
      );

      expect(repo.softDeleteMember).toHaveBeenCalledWith('org123', 'user123');
      expect(result).toEqual({ message: 'User successfully removed from organization' });
    });
  });

  describe('getAllRoles', () => {
    it('should return all roles', async () => {
      const roles = [{ id: 'role1', name: 'ADMINISTRATOR', description: 'Admin' }];
      repo.findAllRoles.mockResolvedValue(roles as any);

      const result = await service.getAllRoles({ id: 'user123', organizationId: 'org123' } as any);

      expect(repo.findAllRoles).toHaveBeenCalled();
      expect(result).toEqual(roles);
    });
  });
});
