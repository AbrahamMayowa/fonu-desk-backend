import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma } from '@prisma-pg';

@Injectable()
export class OrganizationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.OrganizationUncheckedCreateInput) {
    return this.prisma.organization.create({
      data,
    });
  }

  async findFirst(where: Prisma.OrganizationWhereInput) {
    return this.prisma.organization.findFirst({
      where,
    });
  }

  async findAndCount(where: Prisma.OrganizationWhereInput, skip: number, take: number) {
    return Promise.all([
      this.prisma.organization.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.organization.count({ where }),
    ]);
  }

  async update(where: Prisma.OrganizationWhereUniqueInput, data: Prisma.OrganizationUpdateInput) {
    return this.prisma.organization.update({
      where,
      data,
    });
  }

  async findUserOrganizations(userId: string) {
    return this.prisma.organization.findMany({
      where: {
        deletedAt: null,
        OR: [
          { ownerId: userId },
          {
            memberships: {
              some: {
                userId,
                isActive: true,
                deletedAt: null,
              },
            },
          },
        ],
      },
      orderBy: { name: 'asc' },
    });
  }
}
