import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsService } from './organizations.service';
import { OrganizationsRepository } from './organizations.repository';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';

describe('OrganizationsService', () => {
  let service: OrganizationsService;
  let repo: jest.Mocked<OrganizationsRepository>;
  let auditLogsService: jest.Mocked<AuditLogsService>;

  beforeEach(async () => {
    const mockRepo = {
      create: jest.fn(),
      findFirst: jest.fn(),
      findAndCount: jest.fn(),
      update: jest.fn(),
      findUserOrganizations: jest.fn(),
    };

    const mockAuditLogsService = {
      createLog: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganizationsService,
        { provide: OrganizationsRepository, useValue: mockRepo },
        { provide: AuditLogsService, useValue: mockAuditLogsService },
      ],
    }).compile();

    service = module.get<OrganizationsService>(OrganizationsService);
    repo = module.get(OrganizationsRepository);
    auditLogsService = module.get(AuditLogsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('should throw ConflictException if organization name is already in use for this owner', async () => {
      repo.findFirst.mockResolvedValue({ id: 'org123', name: 'My Org', ownerId: 'owner123' } as any);

      await expect(service.create('owner123', { name: 'My Org' })).rejects.toThrow(ConflictException);
    });

    it('should create an organization successfully and log audit trail', async () => {
      repo.findFirst.mockResolvedValue(null);
      repo.create.mockResolvedValue({ id: 'org123', name: 'My Org', ownerId: 'owner123' } as any);

      const result = await service.create('owner123', { name: 'My Org' });

      expect(repo.create).toHaveBeenCalledWith({ name: 'My Org', ownerId: 'owner123' });
      expect(auditLogsService.createLog).toHaveBeenCalledWith(expect.objectContaining({ action: 'CREATE_ORGANIZATION' }));
      expect(result.id).toBe('org123');
    });
  });

  describe('findOne', () => {
    it('should throw NotFoundException if organization does not exist', async () => {
      repo.findFirst.mockResolvedValue(null);

      await expect(service.findOne('owner123', 'orgId')).rejects.toThrow(NotFoundException);
    });

    it('should throw UnauthorizedException if requested by another user than the owner', async () => {
      repo.findFirst.mockResolvedValue({ id: 'org123', ownerId: 'differentOwner' } as any);

      await expect(service.findOne('owner123', 'org123')).rejects.toThrow(UnauthorizedException);
    });

    it('should return the organization on success', async () => {
      repo.findFirst.mockResolvedValue({ id: 'org123', ownerId: 'owner123', name: 'My Org' } as any);

      const result = await service.findOne('owner123', 'org123');

      expect(result.name).toBe('My Org');
    });
  });

  describe('remove', () => {
    it('should perform soft-delete by setting deletedAt and logging', async () => {
      repo.findFirst.mockResolvedValue({ id: 'org123', ownerId: 'owner123' } as any);
      repo.update.mockResolvedValue({ id: 'org123', deletedAt: new Date() } as any);

      await service.remove('owner123', 'org123');

      expect(repo.update).toHaveBeenCalledWith({ id: 'org123' }, expect.objectContaining({ deletedAt: expect.any(Date) }));
      expect(auditLogsService.createLog).toHaveBeenCalledWith(expect.objectContaining({ action: 'DELETE_ORGANIZATION' }));
    });
  });
});
