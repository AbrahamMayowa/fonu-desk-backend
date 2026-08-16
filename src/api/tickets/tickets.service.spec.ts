import { Test, TestingModule } from '@nestjs/testing';
import { TicketsService } from './tickets.service';
import { TicketsRepository } from './tickets.repository';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { OrganizationsRepository } from '../organizations/organizations.repository';
import { NotificationsService } from '../notifications/notifications.service';
import { NotFoundException, ForbiddenException } from '@nestjs/common';
import { ROLES } from '../../common/constants/roles.constant';

describe('TicketsService', () => {
  let ticketsService: TicketsService;
  let ticketsRepository: jest.Mocked<TicketsRepository>;
  let auditLogsService: jest.Mocked<AuditLogsService>;
  let organizationsRepository: jest.Mocked<OrganizationsRepository>;
  let notificationsService: jest.Mocked<NotificationsService>;

  const activeUser = {
    id: 'user123',
    email: 'user@example.com',
    roles: [ROLES.CUSTOMER],
    isOwner: false,
    organizationId: 'org123',
  };

  beforeEach(async () => {
    const mockTicketsRepository = {
      create: jest.fn(),
      findAndCount: jest.fn(),
      findOne: jest.fn(),
      update: jest.fn(),
      createHistory: jest.fn(),
      getHistory: jest.fn(),
      createComment: jest.fn(),
      getComments: jest.fn(),
      findAgentWithFewestTickets: jest.fn(),
      findCustomerMember: jest.fn(),
      muteTicket: jest.fn(),
      unmuteTicket: jest.fn(),
    };

    const mockAuditLogsService = {
      createLog: jest.fn(),
    };

    const mockOrganizationsRepository = {
      findFirst: jest.fn(),
    };

    const mockNotificationsService = {
      notifyTicketUpdate: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TicketsService,
        { provide: TicketsRepository, useValue: mockTicketsRepository },
        { provide: AuditLogsService, useValue: mockAuditLogsService },
        { provide: OrganizationsRepository, useValue: mockOrganizationsRepository },
        { provide: NotificationsService, useValue: mockNotificationsService },
      ],
    }).compile();

    ticketsService = module.get<TicketsService>(TicketsService);
    ticketsRepository = module.get(TicketsRepository);
    auditLogsService = module.get(AuditLogsService);
    organizationsRepository = module.get(OrganizationsRepository);
    notificationsService = module.get(NotificationsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('create', () => {
    const createDto = {
      title: 'Broken Keyboard',
      description: 'The enter key is stuck',
      priority: 'MEDIUM' as any,
    };

    it('should throw NotFoundException if organization does not exist', async () => {
      organizationsRepository.findFirst.mockResolvedValue(null);

      await expect(ticketsService.create(activeUser, createDto)).rejects.toThrow(NotFoundException);
    });

    it('should create a ticket and trigger auto-assignment if config is AUTO', async () => {
      organizationsRepository.findFirst.mockResolvedValue({ id: 'org123', ticketAssignMethod: 'AUTO' } as any);
      ticketsRepository.findAgentWithFewestTickets.mockResolvedValue('agent789');
      ticketsRepository.create.mockResolvedValue({ id: 'ticket123', organizationId: 'org123', title: 'Broken Keyboard', assignedToId: 'agent789', createdBy: { id: 'user123', firstName: 'John' } } as any);

      const result = await ticketsService.create(activeUser, createDto);

      expect(ticketsRepository.findAgentWithFewestTickets).toHaveBeenCalledWith('org123');
      expect(ticketsRepository.create).toHaveBeenCalledWith({
        title: createDto.title,
        description: createDto.description,
        priority: createDto.priority,
        organizationId: 'org123',
        businessId: undefined,
        createdById: 'user123',
        assignedToId: 'agent789',
      });
      expect(auditLogsService.createLog).toHaveBeenCalledWith(expect.objectContaining({ action: 'CREATE_TICKET' }));
      expect(result.id).toBe('ticket123');
    });
  });

  describe('createOnBehalf', () => {
    const behalfDto = {
      title: 'API Issue',
      description: 'Slow endpoints',
      priority: 'HIGH' as any,
      customerId: 'customer555',
    };

    it('should throw NotFoundException if customer is not found in organization', async () => {
      organizationsRepository.findFirst.mockResolvedValue({ id: 'org123', ticketAssignMethod: 'MANUAL' } as any);
      ticketsRepository.findCustomerMember.mockResolvedValue(null);

      await expect(ticketsService.createOnBehalf(activeUser, behalfDto)).rejects.toThrow(NotFoundException);
    });

    it('should create ticket on behalf of a valid customer', async () => {
      organizationsRepository.findFirst.mockResolvedValue({ id: 'org123', ticketAssignMethod: 'MANUAL' } as any);
      ticketsRepository.findCustomerMember.mockResolvedValue({ userId: 'customer555' } as any);
      ticketsRepository.create.mockResolvedValue({ id: 'ticket123', organizationId: 'org123', title: 'API Issue' } as any);

      const result = await ticketsService.createOnBehalf(activeUser, behalfDto);

      expect(ticketsRepository.create).toHaveBeenCalledWith(expect.objectContaining({
        createdById: 'customer555',
      }));
      expect(auditLogsService.createLog).toHaveBeenCalledWith(expect.objectContaining({ action: 'CREATE_TICKET_ON_BEHALF' }));
      expect(result.id).toBe('ticket123');
    });
  });

  describe('findAll', () => {
    it('should scope tickets to creator for customer role', async () => {
      ticketsRepository.findAndCount.mockResolvedValue([[], 0]);

      await ticketsService.findAll(activeUser, ROLES.CUSTOMER, {});

      expect(ticketsRepository.findAndCount).toHaveBeenCalledWith(
        expect.objectContaining({
          organizationId: 'org123',
          createdById: 'user123',
        }),
        0,
        10
      );
    });

    it('should scope tickets to assignee for support agent role', async () => {
      ticketsRepository.findAndCount.mockResolvedValue([[], 0]);

      await ticketsService.findAll(activeUser, ROLES.SUPPORT, {});

      expect(ticketsRepository.findAndCount).toHaveBeenCalledWith(
        expect.objectContaining({
          organizationId: 'org123',
          assignedToId: 'user123',
        }),
        0,
        10
      );
    });
    it('should omit email of assignedTo agent for customer role', async () => {
      const mockTicket = {
        id: 't1',
        title: 'Issue',
        assignedTo: { id: 'agent1', firstName: 'Jane', lastName: 'Doe', email: 'jane@agent.com' },
      };
      ticketsRepository.findAndCount.mockResolvedValue([[mockTicket as any], 1]);

      const res = await ticketsService.findAll(activeUser, ROLES.CUSTOMER, {});

      expect(res.data[0].assignedTo).toEqual({ id: 'agent1', firstName: 'Jane', lastName: 'Doe' });
      expect(res.data[0].assignedTo).not.toHaveProperty('email');
    });
  });

  describe('findOne', () => {
    it('should throw ForbiddenException if user belongs to a different organization', async () => {
      ticketsRepository.findOne.mockResolvedValue({ id: 'ticket123', organizationId: 'orgOther', createdById: 'user123' } as any);

      await expect(ticketsService.findOne('ticket123', activeUser, ROLES.CUSTOMER)).rejects.toThrow(ForbiddenException);
    });

    it('should throw ForbiddenException if customer requests ticket owned by another customer', async () => {
      ticketsRepository.findOne.mockResolvedValue({ id: 'ticket123', organizationId: 'org123', createdById: 'otherUser' } as any);

      await expect(ticketsService.findOne('ticket123', activeUser, ROLES.CUSTOMER)).rejects.toThrow(ForbiddenException);
    });

    it('should omit email of assignedTo agent when requested by a customer', async () => {
      const mockTicket = {
        id: 'ticket123',
        organizationId: 'org123',
        createdById: 'user123',
        assignedTo: { id: 'agent1', firstName: 'Jane', lastName: 'Doe', email: 'jane@agent.com' },
      };
      ticketsRepository.findOne.mockResolvedValue(mockTicket as any);

      const result = await ticketsService.findOne('ticket123', activeUser, ROLES.CUSTOMER);

      expect(result.assignedTo).toEqual({ id: 'agent1', firstName: 'Jane', lastName: 'Doe' });
      expect(result.assignedTo).not.toHaveProperty('email');
    });

    it('should include email of assignedTo agent when requested by a support agent or admin', async () => {
      const mockTicket = {
        id: 'ticket123',
        organizationId: 'org123',
        createdById: 'user123',
        assignedToId: 'user123',
        assignedTo: { id: 'user123', firstName: 'Jane', lastName: 'Doe', email: 'jane@agent.com' },
      };
      ticketsRepository.findOne.mockResolvedValue(mockTicket as any);

      const result = await ticketsService.findOne('ticket123', activeUser, ROLES.SUPPORT);

      expect(result.assignedTo).toHaveProperty('email', 'jane@agent.com');
    });
  });

  describe('addComment', () => {
    it('should throw ForbiddenException if customer tries to post internal comment', async () => {
      ticketsRepository.findOne.mockResolvedValue({ id: 'ticket123', organizationId: 'org123', createdById: 'user123' } as any);

      await expect(
        ticketsService.addComment(activeUser, 'ticket123', { content: 'Internal note', isInternal: true }, ROLES.CUSTOMER)
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('uploadImage', () => {
    it('should throw BadRequestException if file exceeds 5MB', async () => {
      // Create a base64 string that represents > 5MB of binary data (5 * 1024 * 1024 = 5242880 bytes)
      const largeBase64 = 'A'.repeat(7000000);
      await expect(ticketsService.uploadImage(`data:image/png;base64,${largeBase64}`)).rejects.toThrow('File size exceeds the maximum allowed limit of 5MB');
    });
  });
});
