import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma, User, Otp, TempUser } from '@prisma-pg';

export type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    ownedOrganizations: true;
    memberships: {
      include: {
        role: true;
        organization: true;
      };
    };
  };
}>;

export type OtpWithTempUser = Prisma.OtpGetPayload<{
  include: { tempUser: true };
}>;

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) { }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findUserByEmail(email: string): Promise<UserWithRelations | null> {
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

  async findUserById(id: string): Promise<UserWithRelations | null> {
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

  async updateUser(id: string, data: Prisma.UserUpdateInput | Prisma.UserUncheckedUpdateInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async createTempUser(data: { email: string; firstName: string; lastName: string; otpId?: string }): Promise<TempUser> {
    return this.prisma.tempUser.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        ...(data.otpId ? { otpId: data.otpId } : {}),
      },
    });
  }

  async upsertTempUser(data: { email: string; firstName: string; lastName: string; otpId?: string }): Promise<TempUser> {
    return this.prisma.tempUser.create({
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        ...(data.otpId ? { otpId: data.otpId } : {}),
      },
    });
  }

  async findTempUserByOtpId(otpId: string): Promise<TempUser | null> {
    return this.prisma.tempUser.findUnique({
      where: { otpId },
    });
  }

  async findTempUserByEmail(email: string): Promise<TempUser | null> {
    return this.prisma.tempUser.findFirst({
      where: { email },
      orderBy: { createdAt: 'desc' },
    });
  }

  async deleteTempUser(id: string): Promise<void> {
    await this.prisma.tempUser.delete({
      where: { id },
    });
  }

  async deleteTempUserByEmail(email: string): Promise<void> {
    await this.prisma.tempUser.deleteMany({
      where: { email },
    });
  }

  async verifyEmailAndPromoteUser(tempUser: TempUser, otpId: string, hashedPassword: string): Promise<User> {
    return this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email: tempUser.email,
          password: hashedPassword,
          firstName: tempUser.firstName,
          lastName: tempUser.lastName,
          emailVerified: true,
          isOwner: true,
        },
      });

      await tx.tempUser.delete({
        where: { id: tempUser.id },
      });

      await tx.otp.delete({
        where: { id: otpId },
      });

      return user;
    });
  }

  async createOtp(data: Prisma.OtpCreateInput): Promise<Otp> {
    return this.prisma.otp.create({ data });
  }

  async findValidOtp(email: string, code: string, type: string): Promise<OtpWithTempUser | null> {
    return this.prisma.otp.findFirst({
      where: {
        email,
        code,
        type,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        tempUser: true,
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
