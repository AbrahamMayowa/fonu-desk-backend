import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma, User, Otp } from '@prisma/client';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        ownedOrganizations: true,
        memberships: {
          include: {
            role: true,
            organization: true,
          },
        },
      },
    });
  }

  async findUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        ownedOrganizations: true,
        memberships: {
          include: {
            role: true,
            organization: true,
          },
        },
      },
    });
  }

  async updateUser(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async createOtp(data: Prisma.OtpCreateInput): Promise<Otp> {
    return this.prisma.otp.create({ data });
  }

  async findValidOtp(email: string, code: string, type: string): Promise<Otp | null> {
    return this.prisma.otp.findFirst({
      where: {
        email,
        code,
        type,
        expiresAt: {
          gt: new Date(),
        },
      },
    });
  }

  async deleteOtp(id: string): Promise<void> {
    await this.prisma.otp.delete({
      where: { id },
    });
  }

  async deleteOtpsByEmailAndType(email: string, type: string): Promise<void> {
    await this.prisma.otp.deleteMany({
      where: {
        email,
        type,
      },
    });
  }
}
