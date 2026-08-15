import { Injectable, NotFoundException, UnauthorizedException, InternalServerErrorException, ConflictException, Logger } from '@nestjs/common';
import { Prisma } from '@prisma-pg';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { GetOrganizationsDto } from './dto/get-organizations.dto';
import { UpdateTicketAssignmentDto } from './dto/update-ticket-assignment.dto';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { OrganizationsRepository } from './organizations.repository';

@Injectable()
export class OrganizationsService {
  private readonly logger = new Logger(OrganizationsService.name);

  constructor(
    private readonly organizationsRepository: OrganizationsRepository,
    private readonly auditLogsService: AuditLogsService,
  ) {}

  async create(ownerId: string, dto: CreateOrganizationDto) {
    try {
      const existing = await this.organizationsRepository.findFirst({
        name: dto.name, ownerId, deletedAt: null
      });

      if (existing) {
        throw new ConflictException('Organization name must be unique for the owner');
      }

      const org = await this.organizationsRepository.create({
        name: dto.name,
        ownerId,
      });

      await this.auditLogsService.createLog({
        action: 'CREATE_ORGANIZATION',
        entityType: 'Organization',
        entityId: org.id,
        actorId: ownerId,
        organizationId: org.id,
        details: { name: org.name },
      });

      return org;
    } catch (error) {
      this.logger.error('Failed to create organization', JSON.stringify({ ownerId, dto, error: error.message }));
      this.logger.error('Failed to create organization', JSON.stringify({ ownerId, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to create organization');
    }
  }

  async findAll(ownerId: string, dto: GetOrganizationsDto) {
    try {
      const { search, page = 1, limit = 10 } = dto;
      const skip = (page - 1) * limit;

      const where: Prisma.OrganizationWhereInput = {
        ownerId,
        deletedAt: null,
        ...(search && {
          name: { contains: search, mode: 'insensitive' },
        }),
      };

      const [data, total] = await this.organizationsRepository.findAndCount(where, skip, limit);

      return {
        data,
        total,
        page,
        limit,
      };
    } catch (error) {
      this.logger.error('Failed to fetch organizations', JSON.stringify({ ownerId, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch organizations');
    }
  }

  async findOne(ownerId: string, id: string) {
    try {
      const org = await this.organizationsRepository.findFirst({ id, deletedAt: null });
      if (!org) {
        throw new NotFoundException(`Organization with ID ${id} not found`);
      }
      if (org.ownerId !== ownerId) {
        throw new UnauthorizedException('You can only access organizations you own');
      }
      return org;
    } catch (error) {
      this.logger.error('Failed to fetch organization', JSON.stringify({ ownerId, id, error: error.message }));
      this.logger.error('Failed to fetch organization', JSON.stringify({ ownerId, id, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch organization');
    }
  }

  async update(ownerId: string, id: string, dto: UpdateOrganizationDto) {
    try {
      await this.findOne(ownerId, id); // check existence and ownership

      if (dto.name) {
        const existing = await this.organizationsRepository.findFirst({
          name: dto.name, ownerId, id: { not: id }, deletedAt: null
        });

        if (existing) {
          throw new ConflictException('Organization name must be unique for the owner');
        }
      }

      const org = await this.organizationsRepository.update({ id }, { ...dto });

      await this.auditLogsService.createLog({
        action: 'UPDATE_ORGANIZATION',
        entityType: 'Organization',
        entityId: org.id,
        actorId: ownerId,
        organizationId: org.id,
        details: { updatedFields: Object.keys(dto) },
      });

      return org;
    } catch (error) {
      this.logger.error('Failed to update organization', JSON.stringify({ ownerId, id, dto, error: error.message }));
      this.logger.error('Failed to update organization', JSON.stringify({ ownerId, id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to update organization');
    }
  }

  async remove(ownerId: string, id: string) {
    try {
      await this.findOne(ownerId, id); // check existence and ownership
      const org = await this.organizationsRepository.update({ id }, { deletedAt: new Date() });

      await this.auditLogsService.createLog({
        action: 'DELETE_ORGANIZATION',
        entityType: 'Organization',
        entityId: org.id,
        actorId: ownerId,
        organizationId: org.id,
      });

      return org;
    } catch (error) {
      this.logger.error('Failed to delete organization', JSON.stringify({ ownerId, id, error: error.message }));
      this.logger.error('Failed to delete organization', JSON.stringify({ ownerId, id, error: error.message }));
      throw new InternalServerErrorException('Failed to delete organization');
    }
  }

  async updateTicketAssignment(ownerId: string, id: string, dto: UpdateTicketAssignmentDto) {
    try {
      await this.findOne(ownerId, id); // check existence and ownership

      const org = await this.organizationsRepository.update(
        { id },
        { ticketAssignMethod: dto.method }
      );

      await this.auditLogsService.createLog({
        action: 'UPDATE_TICKET_ASSIGNMENT_METHOD',
        entityType: 'Organization',
        entityId: org.id,
        actorId: ownerId,
        organizationId: org.id,
        details: { method: dto.method },
      });

      return org;
    } catch (error) {
      this.logger.error('Failed to update ticket assignment method', JSON.stringify({ ownerId, id, dto, error: error.message }));
      this.logger.error('Failed to update ticket assignment method', JSON.stringify({ ownerId, id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to update ticket assignment method');
    }
  }

  async findUserOrganizations(userId: string) {
    try {
      const organizations = await this.organizationsRepository.findUserOrganizations(userId);
      return { organizations };
    } catch (error) {
      this.logger.error('Failed to fetch user organizations', JSON.stringify({ userId, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch user organizations');
    }
  }
}
