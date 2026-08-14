import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma, User, OrganizationMember, Invitation } from '@prisma-local';
export type UserWithMemberships = Prisma.UserGetPayload<{
  include: {
    memberships: {
      where: { deletedAt: null };
      include: {
        role: true;
        organization: true;
        business: true;
      };
    };
  };
}>;

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) { }

  async findUserById(id: string): Promise<UserWithMemberships | null> {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        memberships: {
          where: { deletedAt: null },
          include: {
            role: true,
            organization: true,
            business: true,
          }
        }
      }
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findUsersByOrganization(organizationId: string) {
    return this.prisma.organizationMember.findMany({
      where: {
        organizationId,
        deletedAt: null,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          }
        },
        role: true,
        business: true,
      }
    });
  }

  async findUsersByBusiness(organizationId: string, businessId: string) {
    return this.prisma.organizationMember.findMany({
      where: {
        organizationId,
        businessId,
        deletedAt: null,
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          }
        },
        role: true,
      }
    });
  }

  async getMember(organizationId: string, userId: string) {
    return this.prisma.organizationMember.findUnique({
      where: {
        userId_organizationId: {
          userId,
          organizationId,
        }
      },
      include: {
        role: true
      }
    });
  }

  async createInvitation(data: Prisma.InvitationCreateInput): Promise<Invitation> {
    return this.prisma.invitation.create({ data });
  }

  async findInvitationByToken(token: string): Promise<Invitation | null> {
    return this.prisma.invitation.findUnique({
      where: { token },
    });
  }

  async updateInvitationStatus(id: string, status: string) {
    return this.prisma.invitation.update({
      where: { id },
      data: { status },
    });
  }

  async createOrganizationMember(data: Prisma.OrganizationMemberCreateInput): Promise<OrganizationMember> {
    return this.prisma.organizationMember.create({ data });
  }

  async updateMemberStatus(organizationId: string, userId: string, isActive: boolean) {
    return this.prisma.organizationMember.update({
      where: {
        userId_organizationId: {
          userId,
          organizationId,
        }
      },
      data: { isActive },
    });
  }

  async updateMemberRole(organizationId: string, userId: string, roleId: string) {
    return this.prisma.organizationMember.update({
      where: {
        userId_organizationId: {
          userId,
          organizationId,
        }
      },
      data: { roleId },
    });
  }

  async softDeleteMember(organizationId: string, userId: string) {
    return this.prisma.organizationMember.update({
      where: {
        userId_organizationId: {
          userId,
          organizationId,
        }
      },
      data: { deletedAt: new Date() },
    });
  }

  // Helper to execute atomic transactions
  async executeTransaction<T>(fn: (tx: any) => Promise<T>): Promise<T> {
    return this.prisma.$transaction(fn);
  }

  async findOrganizationById(id: string) {
    return this.prisma.organization.findUnique({
      where: { id },
    });
  }

  async findBusinessById(id: string) {
    return this.prisma.business.findUnique({
      where: { id },
    });
  }
}
