process.env.JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-dev';
process.env.FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from '@database/prisma.service';
import { TicketsRepository } from '../src/api/tickets/tickets.repository';
import { OrganizationsRepository } from '../src/api/organizations/organizations.repository';
import { JwtService } from '@nestjs/jwt';
import { ROLES } from '../src/common/constants/roles.constant';

describe('TicketsController (e2e)', () => {
  let app: INestApplication<App>;
  let ticketsRepository: jest.Mocked<TicketsRepository>;
  let organizationsRepository: jest.Mocked<OrganizationsRepository>;
  let jwtService: JwtService;

  const mockPrismaService = {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  };

  const mockTicketsRepository = {
    create: jest.fn(),
    findAndCount: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    createHistory: jest.fn(),
    createComment: jest.fn(),
    getComments: jest.fn(),
    findAgentWithFewestTickets: jest.fn(),
    findCustomerMember: jest.fn(),
    muteTicket: jest.fn(),
    unmuteTicket: jest.fn(),
  };

  const mockOrganizationsRepository = {
    findFirst: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .overrideProvider(TicketsRepository)
      .useValue(mockTicketsRepository)
      .overrideProvider(OrganizationsRepository)
      .useValue(mockOrganizationsRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    ticketsRepository = moduleFixture.get(TicketsRepository);
    organizationsRepository = moduleFixture.get(OrganizationsRepository);
    jwtService = moduleFixture.get(JwtService);
  });

  afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  const getAuthToken = async (userId: string, role: string, orgId = 'org123', isOwner = false) => {
    return jwtService.signAsync({
      id: userId,
      email: `${userId}@example.com`,
      roles: [role],
      isOwner,
      organizationId: orgId,
    });
  };

  describe('POST /tickets', () => {
    it('should create a ticket and return 201', async () => {
      const token = await getAuthToken('cust123', ROLES.CUSTOMER);
      organizationsRepository.findFirst.mockResolvedValue({ id: 'org123', ticketAssignMethod: 'MANUAL' } as any);
      ticketsRepository.create.mockResolvedValue({ id: 't1', title: 'Test Ticket', status: 'OPEN' } as any);

      return request(app.getHttpServer())
        .post('/tickets')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'Test Ticket',
          description: 'Help needed',
          priority: 'MEDIUM',
        })
        .expect(201)
        .expect((res) => {
          expect(res.body.id).toBe('t1');
        });
    });
  });

  describe('POST /tickets/on-behalf', () => {
    it('should allow admin to create ticket on behalf of a customer', async () => {
      const token = await getAuthToken('admin123', ROLES.ADMIN);
      organizationsRepository.findFirst.mockResolvedValue({ id: 'org123', ticketAssignMethod: 'MANUAL' } as any);
      ticketsRepository.findCustomerMember.mockResolvedValue({ userId: 'cust123' } as any);
      ticketsRepository.create.mockResolvedValue({ id: 't2', title: 'On Behalf Ticket' } as any);

      return request(app.getHttpServer())
        .post('/tickets/on-behalf')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'On Behalf Ticket',
          description: 'Help for customer',
          priority: 'HIGH',
          customerId: 'cust123',
        })
        .expect(201);
    });

    it('should forbid customers from calling on-behalf endpoint', async () => {
      const token = await getAuthToken('cust123', ROLES.CUSTOMER);

      return request(app.getHttpServer())
        .post('/tickets/on-behalf')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: 'On Behalf Ticket',
          description: 'Help for customer',
          priority: 'HIGH',
          customerId: 'cust456',
        })
        .expect(403);
    });
  });

  describe('GET /tickets/:id', () => {
    it('should block ticket access if in another organization', async () => {
      const token = await getAuthToken('cust123', ROLES.CUSTOMER, 'org123');
      ticketsRepository.findOne.mockResolvedValue({
        id: 't1',
        organizationId: 'orgOther',
        createdById: 'cust123',
      } as any);

      return request(app.getHttpServer())
        .get('/tickets/t1')
        .set('Authorization', `Bearer ${token}`)
        .expect(403);
    });
  });

  describe('POST /tickets/:id/comments', () => {
    it('should block customer from creating internal comments', async () => {
      const token = await getAuthToken('cust123', ROLES.CUSTOMER);
      ticketsRepository.findOne.mockResolvedValue({
        id: 't1',
        organizationId: 'org123',
        createdById: 'cust123',
      } as any);

      return request(app.getHttpServer())
        .post('/tickets/t1/comments')
        .set('Authorization', `Bearer ${token}`)
        .send({
          content: 'Internal comment content',
          isInternal: true,
        })
        .expect(403);
    });
  });
});
