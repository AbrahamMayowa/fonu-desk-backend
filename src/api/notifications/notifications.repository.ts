import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma } from '@prisma-pg';

@Injectable()
export class NotificationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.NotificationUncheckedCreateInput) {
    return this.prisma.notification.create({
      data,
    });
  }

  async findAndCount(where: Prisma.NotificationWhereInput, skip: number, take: number) {
    return Promise.all([
      this.prisma.notification.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.notification.count({ where }),
    ]);
  }

  async updateMany(where: Prisma.NotificationWhereInput, data: Prisma.NotificationUpdateManyMutationInput) {
    return this.prisma.notification.updateMany({
      where,
      data,
    });
  }
}
