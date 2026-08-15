import { Injectable, Logger, InternalServerErrorException } from '@nestjs/common';
import { Prisma } from '@prisma-pg';
import { GetAuditLogsDto } from './dto/get-audit-logs.dto';
import { AuditLogsRepository } from './audit-logs.repository';

@Injectable()
export class AuditLogsService {
  private readonly logger = new Logger(AuditLogsService.name);

  constructor(private readonly auditLogsRepository: AuditLogsRepository) {}

  async createLog(data: {
    action: string;
    entityType: string;
    entityId: string;
    actorId: string;
    organizationId?: string;
    details?: any;
  }) {
    try {
      return await this.auditLogsRepository.create(data);
    } catch (error) {
      this.logger.error('Failed to create audit log', JSON.stringify({ data, error: error.message }));
    }
  }

  async findAll(organizationId: string, dto: GetAuditLogsDto) {
    try {
      const { search, entityType, action, page = 1, limit = 10 } = dto;
      const skip = (page - 1) * limit;

      const where: Prisma.AuditLogWhereInput = {
        organizationId,
        ...(entityType && { entityType }),
        ...(action && { action }),
        ...(search && {
          OR: [
            { action: { contains: search, mode: 'insensitive' } },
            { entityType: { contains: search, mode: 'insensitive' } },
          ],
        }),
      };

      const [data, total] = await this.auditLogsRepository.findAndCount(where, skip, limit);

      return {
        data,
        total,
        page,
        limit,
      };
    } catch (error) {
      this.logger.error('Failed to fetch audit logs', JSON.stringify({ organizationId, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch audit logs');
    }
  }
}
