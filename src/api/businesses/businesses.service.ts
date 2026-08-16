import { Injectable, NotFoundException, ConflictException, InternalServerErrorException, Logger, HttpException } from '@nestjs/common';
import { Prisma } from '@prisma-pg';
import { CreateBusinessDto } from './dto/create-business.dto';
import { GetBusinessesDto } from './dto/get-businesses.dto';
import { BusinessesRepository } from './businesses.repository';
import { OrganizationsRepository } from '../organizations/organizations.repository';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@Injectable()
export class BusinessesService {
  private readonly logger = new Logger(BusinessesService.name);

  constructor(
    private readonly businessesRepository: BusinessesRepository,
    private readonly organizationsRepository: OrganizationsRepository,
    private readonly auditLogsService: AuditLogsService,
  ) {}

  async create(currentUser: ActiveUserData, dto: CreateBusinessDto) {
    try {
      // 1. Fetch organization to check existence and resolve the ownerId
      const org = await this.organizationsRepository.findFirst({
        id: currentUser.organizationId,
        deletedAt: null,
      });

      if (!org) {
        throw new NotFoundException('Active organization not found');
      }

      // 2. Validate uniqueness of the business name within the organization
      const existing = await this.businessesRepository.findFirst({
        name: dto.name,
        organizationId: currentUser.organizationId,
      });

      if (existing) {
        throw new ConflictException('A business with this name already exists in this organization');
      }

      // 3. Create the business
      const business = await this.businessesRepository.create({
        name: dto.name,
        industry: dto.industry,
        ownerId: org.ownerId,
        organizationId: currentUser.organizationId,
      });

      // 4. Record audit log
      await this.auditLogsService.createLog({
        action: 'CREATE_BUSINESS',
        entityType: 'Business',
        entityId: business.id,
        actorId: currentUser.id,
        organizationId: currentUser.organizationId,
        details: { name: business.name, industry: business.industry },
      });

      // 5. Consistent logging
      this.logger.log(
        'Business created successfully',
        JSON.stringify({
          businessId: business.id,
          organizationId: currentUser.organizationId,
          actorId: currentUser.id,
        }),
      );

      return business;
    } catch (error) {
      this.logger.error(
        'Failed to create business',
        JSON.stringify({
          organizationId: currentUser.organizationId,
          actorId: currentUser.id,
          error: error.message,
        }),
      );
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create business');
    }
  }

  async findAll(currentUser: ActiveUserData, dto: GetBusinessesDto) {
    try {
      const { search, page = 1, limit = 10 } = dto;
      const skip = (page - 1) * limit;

      const where: Prisma.BusinessWhereInput = {
        organizationId: currentUser.organizationId,
        ...(search && {
          name: { contains: search, mode: 'insensitive' },
        }),
      };

      const [data, total] = await this.businessesRepository.findAndCount(where, skip, limit);

      this.logger.log(
        'Retrieved businesses list',
        JSON.stringify({
          organizationId: currentUser.organizationId,
          actorId: currentUser.id,
          page,
          limit,
        }),
      );

      return {
        data,
        total,
        page,
        limit,
      };
    } catch (error) {
      this.logger.error(
        'Failed to fetch businesses',
        JSON.stringify({
          organizationId: currentUser.organizationId,
          actorId: currentUser.id,
          error: error.message,
        }),
      );
      if (error instanceof HttpException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to fetch businesses');
    }
  }
}
