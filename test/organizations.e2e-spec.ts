process.env.JWT_SECRET = process.env.JWT_SECRET || 'super-secret-key-for-dev';
process.env.FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from '@database/prisma.service';
import { OrganizationsRepository } from '../src/api/organizations/organizations.repository';
import { BusinessesRepository } from '../src/api/businesses/businesses.repository';
import { JwtService } from '@nestjs/jwt';
import { ROLES } from '../src/common/constants/roles.constant';

describe('Organizations & Businesses (e2e)', () => {
  let app: INestApplication<App>;
  let organizationsRepository: jest.Mocked<OrganizationsRepository>;
  let businessesRepository: jest.Mocked<BusinessesRepository>;
  let jwtService: JwtService;

  const mockPrismaService = {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  };

  const mockOrganizationsRepository = {
    create: jest.fn(),
    findFirst: jest.fn(),
    findAndCount: jest.fn(),
    update: jest.fn(),
    findUserOrganizations: jest.fn(),
  };

  const mockBusinessesRepository = {
    create: jest.fn(),
    findFirst: jest.fn(),
    findAndCount: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .overrideProvider(OrganizationsRepository)
      .useValue(mockOrganizationsRepository)
      .overrideProvider(BusinessesRepository)
      .useValue(mockBusinessesRepository)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    organizationsRepository = moduleFixture.get(OrganizationsRepository);
    businessesRepository = moduleFixture.get(BusinessesRepository);
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

  describe('OrganizationsController', () => {
    describe('POST /organizations', () => {
      it('should allow Owner to create organization', async () => {
        const token = await getAuthToken('owner123', ROLES.OWNER, 'org123', true);
        organizationsRepository.findFirst.mockResolvedValue(null);
        organizationsRepository.create.mockResolvedValue({ id: 'org789', name: 'New Org', ownerId: 'owner123' } as any);

        return request(app.getHttpServer())
          .post('/organizations')
          .set('Authorization', `Bearer ${token}`)
          .send({ name: 'New Org' })
          .expect(201)
          .expect((res) => {
            expect(res.body.id).toBe('org789');
          });
      });

      it('should block non-owner roles from creating organizations', async () => {
        const token = await getAuthToken('cust123', ROLES.CUSTOMER);

        return request(app.getHttpServer())
          .post('/organizations')
          .set('Authorization', `Bearer ${token}`)
          .send({ name: 'New Org' })
          .expect(403);
      });
    });

    describe('GET /organizations/user/me', () => {
      it('should allow any role to retrieve organization memberships', async () => {
        const token = await getAuthToken('cust123', ROLES.CUSTOMER);
        organizationsRepository.findUserOrganizations.mockResolvedValue([{ id: 'org123', name: 'My Org' }] as any);

        return request(app.getHttpServer())
          .get('/organizations/user/me')
          .set('Authorization', `Bearer ${token}`)
          .expect(200)
          .expect((res) => {
            expect(res.body.organizations).toHaveLength(1);
          });
      });
    });
  });

  describe('BusinessesController', () => {
    describe('POST /businesses', () => {
      it('should allow Admin to create a business', async () => {
        const token = await getAuthToken('admin123', ROLES.ADMIN);
        organizationsRepository.findFirst.mockResolvedValue({ id: 'org123', ownerId: 'owner123' } as any);
        businessesRepository.findFirst.mockResolvedValue(null);
        businessesRepository.create.mockResolvedValue({ id: 'b123', name: 'Biz Inc', organizationId: 'org123' } as any);

        return request(app.getHttpServer())
          .post('/businesses')
          .set('Authorization', `Bearer ${token}`)
          .send({ name: 'Biz Inc', industry: 'SaaS' })
          .expect(201)
          .expect((res) => {
            expect(res.body.id).toBe('b123');
          });
      });

      it('should forbid Customers from creating businesses', async () => {
        const token = await getAuthToken('cust123', ROLES.CUSTOMER);

        return request(app.getHttpServer())
          .post('/businesses')
          .set('Authorization', `Bearer ${token}`)
          .send({ name: 'Biz Inc', industry: 'SaaS' })
          .expect(403);
      });
    });
  });
});
