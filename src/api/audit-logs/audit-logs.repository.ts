import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma } from '@prisma-pg';

@Injectable()
export class AuditLogsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.AuditLogUncheckedCreateInput) {
    return this.prisma.auditLog.create({
      data,
    });
  }

  async findAndCount(where: Prisma.AuditLogWhereInput, skip: number, take: number) {
    return Promise.all([
      this.prisma.auditLog.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.auditLog.count({ where }),
    ]);
  }
}
