import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma, Business } from '@prisma-pg';

@Injectable()
export class BusinessesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.BusinessUncheckedCreateInput): Promise<Business> {
    return this.prisma.business.create({
      data,
    });
  }

  async findFirst(where: Prisma.BusinessWhereInput): Promise<Business | null> {
    return this.prisma.business.findFirst({
      where,
    });
  }

  async findAndCount(where: Prisma.BusinessWhereInput, skip: number, take: number): Promise<[Business[], number]> {
    return Promise.all([
      this.prisma.business.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.business.count({ where }),
    ]);
  }
}
