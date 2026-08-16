import { Injectable, NotFoundException, UnauthorizedException, ConflictException, BadRequestException, Logger, ForbiddenException, InternalServerErrorException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InviteUserDto } from './dto/invite-user.dto';
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { EmailService } from '../../email/email.service';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { ROLES } from '../../common/constants/roles.constant';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';
import { GetInvitesDto } from './dto/get-invites.dto';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly emailService: EmailService,
    private readonly auditLogsService: AuditLogsService,
    private readonly jwtService: JwtService,
  ) {}

  async getUserDetails(userId: string) {
    const user = await this.usersRepository.findUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    // Remove password before returning
    const { password, ...safeUser } = user;
    return safeUser;
  }

  async getUsersByOrganization(currentUser: ActiveUserData) {
    return this.usersRepository.findUsersByOrganization(currentUser.organizationId);
  }

  async getUsersByBusiness(currentUser: ActiveUserData, businessId: string) {
    // Only owners can get users by business as per the requirement
    if (!currentUser.isOwner) {
      throw new UnauthorizedException('Only owners can access business users');
    }
    const business = await this.usersRepository.findBusinessById(businessId);
    if (!business || business.ownerId !== currentUser.id) {
      throw new UnauthorizedException('You do not have permission for this business.');
    }
    
    // We get the business users scoped to the current user's active organization,
    // assuming business users are also mapped within that active organization.
    return this.usersRepository.findUsersByBusiness(currentUser.organizationId, businessId);
  }

  async getCustomers(currentUser: ActiveUserData, businessId?: string) {
    if (!currentUser.isOwner && !currentUser.roles.includes(ROLES.ADMIN) && !currentUser.roles.includes(ROLES.SUPPORT)) {
      throw new UnauthorizedException('Only authorized staff can view customers');
    }
    return this.usersRepository.findCustomers(currentUser.organizationId, businessId);
  }

  async inviteUser(currentUser: ActiveUserData, dto: InviteUserDto) {
    try {
      // Check if user is already a member
      const existingUser = await this.usersRepository.findUserByEmail(dto.email);
      if (existingUser) {
        const existingMember = await this.usersRepository.getMember(currentUser.organizationId, existingUser.id);
        if (existingMember && !existingMember.deletedAt) {
          throw new ConflictException('User is already a member of this organization');
        }
      }

      // Check role existence
      const role = await this.usersRepository.findRoleById(dto.roleId);
      if (!role) {
        throw new NotFoundException('Role not found');
      }

      // Check business validation for customers
      if (role.name === ROLES.CUSTOMER) {
        if (!dto.businessId) {
          throw new BadRequestException('When inviting a customer, you must select the business the customer belongs to');
        }
      }

      // Check business existence if provided
      if (dto.businessId) {
        const business = await this.usersRepository.findBusinessById(dto.businessId);
        if (!business) {
          throw new NotFoundException('Business not found');
        }
      }

      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiration

      const invitation = await this.usersRepository.createInvitation({
        email: dto.email,
        organizationId: currentUser.organizationId,
        roleId: dto.roleId,
        businessId: dto.businessId,
        token,
        expiresAt,
      });

      const frontendUrl = process.env.FRONTEND_URL;
      const inviteLink = `${frontendUrl}/accept-invite?token=${token}`;

      this.emailService.sendUserInviteEmail(dto.email, { inviteLink });

      await this.auditLogsService.createLog({
        action: 'INVITE_USER',
        entityType: 'Invitation',
        entityId: invitation.id,
        actorId: currentUser.id,
        organizationId: currentUser.organizationId,
        details: { email: dto.email, roleId: dto.roleId, businessId: dto.businessId },
      });

      this.logger.log('User invitation created and sent', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, invitationId: invitation.id }));

      return { message: 'Invitation sent successfully', invitationId: invitation.id };
    } catch (error) {
      this.logger.error('Failed to invite user', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, email: dto.email, error: error.message }));
      if (
        error instanceof ConflictException ||
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to invite user');
    }
  }

  async acceptInvite(dto: AcceptInviteDto) {
    const invitation = await this.usersRepository.findInvitationByToken(dto.token);
    if (!invitation) {
      throw new NotFoundException('Invalid invitation token');
    }
    if (invitation.status === 'ACCEPTED') {
      throw new ConflictException('Invitation has already been accepted');
    }
    if (invitation.expiresAt < new Date()) {
      throw new BadRequestException('Invitation has expired');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const { user, roleName } = await this.usersRepository.executeTransaction(async (tx) => {
      // 1. Check if user already exists (maybe they signed up independently)
      let user = await tx.user.findUnique({ where: { email: invitation.email } });
      
      // 2. Create user if they don't exist
      if (!user) {
        user = await tx.user.create({
          data: {
            email: invitation.email,
            password: hashedPassword,
            firstName: dto.firstName,
            lastName: dto.lastName,
            emailVerified: true, // Auto-verified via invite email
            defaultOrganizationId: invitation.organizationId,
          }
        });
      } else if (!user.defaultOrganizationId) {
        user = await tx.user.update({
          where: { id: user.id },
          data: { defaultOrganizationId: invitation.organizationId },
        });
      }

      // 3. Create or update organization member (scoping the role to this org)
      const existingMember = await tx.organizationMember.findUnique({
        where: {
          userId_organizationId: {
            userId: user.id,
            organizationId: invitation.organizationId,
          }
        }
      });

      if (!existingMember) {
        await tx.organizationMember.create({
          data: {
            userId: user.id,
            organizationId: invitation.organizationId,
            roleId: invitation.roleId,
            businessId: invitation.businessId,
            isActive: true,
          }
        });
      } else if (existingMember.deletedAt || !existingMember.isActive) {
        await tx.organizationMember.update({
          where: { id: existingMember.id },
          data: {
            roleId: invitation.roleId,
            businessId: invitation.businessId || existingMember.businessId,
            isActive: true,
            deletedAt: null,
          }
        });
      }

      // 4. Mark invitation as accepted
      await tx.invitation.update({
        where: { id: invitation.id },
        data: { status: 'ACCEPTED' }
      });

      const role = await tx.role.findUnique({ where: { id: invitation.roleId } });

      return { user, roleName: role?.name || null };
    });

    const roles: string[] = [];
    if (user.isOwner) {
      roles.push(ROLES.OWNER);
    }
    if (roleName) {
      roles.push(roleName);
    }

    const defaultOrgId = user.defaultOrganizationId || invitation.organizationId;

    const payload = {
      id: user.id,
      email: user.email,
      roles,
      isOwner: user.isOwner,
      organizationId: invitation.organizationId,
    };

    const accessToken = await this.jwtService.signAsync(payload);

    this.logger.log('Invitation accepted successfully', JSON.stringify({ userId: user.id, organizationId: invitation.organizationId }));

    return {
      message: 'Invitation accepted successfully',
      accessToken,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isOwner: user.isOwner,
        defaultOrganizationId: defaultOrgId,
      },
    };
  }

  async removeUser(currentUser: ActiveUserData, targetUserId: string) {
    const member = await this.usersRepository.getMember(currentUser.organizationId, targetUserId);
    if (!member || member.deletedAt) {
      throw new NotFoundException('User is not a member of this organization');
    }

    await this.usersRepository.softDeleteMember(currentUser.organizationId, targetUserId);
    return { message: 'User successfully removed from organization' };
  }

  async toggleUserStatus(currentUser: ActiveUserData, targetUserId: string, isActive: boolean) {
    const member = await this.usersRepository.getMember(currentUser.organizationId, targetUserId);
    if (!member || member.deletedAt) {
      throw new NotFoundException('User is not an active member of this organization');
    }

    await this.usersRepository.updateMemberStatus(currentUser.organizationId, targetUserId, isActive);
    return { message: `User successfully ${isActive ? 'activated' : 'deactivated'}` };
  }

  async reassignRole(currentUser: ActiveUserData, targetUserId: string, roleId: string) {
    const member = await this.usersRepository.getMember(currentUser.organizationId, targetUserId);
    if (!member || member.deletedAt) {
      throw new NotFoundException('User is not an active member of this organization');
    }

    await this.usersRepository.updateMemberRole(currentUser.organizationId, targetUserId, roleId);
    return { message: 'User role updated successfully' };
  }

  async getInvitations(currentUser: ActiveUserData, dto: GetInvitesDto) {
    try {
      const { page = 1, limit = 10 } = dto;
      const skip = (page - 1) * limit;

      const [data, total] = await Promise.all([
        this.usersRepository.findInvitationsByOrganization(currentUser.organizationId, skip, limit),
        this.usersRepository.countInvitationsByOrganization(currentUser.organizationId),
      ]);

      this.logger.log('Retrieved invitations list', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, page, limit }));

      return { data, total };
    } catch (error) {
      this.logger.error('Failed to get invitations list', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, error: error.message }));
      throw new InternalServerErrorException('Failed to retrieve invitations list');
    }
  }

  async resendInvite(currentUser: ActiveUserData, id: string) {
    try {
      const invitation = await this.usersRepository.findInvitationById(id);
      if (!invitation || invitation.organizationId !== currentUser.organizationId) {
        throw new NotFoundException('Invitation not found');
      }

      if (invitation.status === 'ACCEPTED') {
        throw new ConflictException('Invitation has already been accepted');
      }

      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // 7 days expiration

      const updatedInvitation = await this.usersRepository.updateInvitation(id, {
        token,
        expiresAt,
        status: 'PENDING',
      });

      const frontendUrl = process.env.FRONTEND_URL;
      const inviteLink = `${frontendUrl}/accept-invite?token=${token}`;

      this.emailService.sendUserInviteEmail(invitation.email, { inviteLink });

      await this.auditLogsService.createLog({
        action: 'RESEND_INVITATION',
        entityType: 'Invitation',
        entityId: id,
        actorId: currentUser.id,
        organizationId: currentUser.organizationId,
        details: { email: invitation.email, roleId: invitation.roleId, businessId: invitation.businessId },
      });

      this.logger.log('Resent user invitation', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, invitationId: id }));

      return {
        message: 'Invitation resent successfully',
        invitationId: updatedInvitation.id,
      };
    } catch (error) {
      this.logger.error('Failed to resend invitation', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, invitationId: id, error: error.message }));
      if (
        error instanceof NotFoundException ||
        error instanceof ConflictException
      ) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to resend invitation');
    }
  }

  async getAllRoles(currentUser: ActiveUserData) {
    try {
      const roles = await this.usersRepository.findAllRoles();
      return roles;
    } catch (error) {
      this.logger.error('Failed to get roles list', JSON.stringify({ organizationId: currentUser.organizationId, actorId: currentUser.id, error: error.message }));
      throw new InternalServerErrorException('Failed to retrieve roles list');
    }
  }
}
