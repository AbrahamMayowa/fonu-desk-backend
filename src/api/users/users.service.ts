import { Injectable, NotFoundException, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InviteUserDto } from './dto/invite-user.dto';
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { EmailService } from '../../email/email.service';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { ROLES } from '../../common/constants/roles.constant';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly emailService: EmailService,
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
    // Check if user is already a member
    const existingUser = await this.usersRepository.findUserByEmail(dto.email);
    if (existingUser) {
      const existingMember = await this.usersRepository.getMember(currentUser.organizationId, existingUser.id);
      if (existingMember && !existingMember.deletedAt) {
        throw new ConflictException('User is already a member of this organization');
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

    // In a real app, this would be a proper URL to the frontend
    const inviteLink = `http://localhost:3000/accept-invite?token=${token}`;

    await this.emailService.sendMail(
      dto.email,
      'You have been invited to join an organization',
      `<p>You have been invited. Click <a href="${inviteLink}">here</a> to accept and set up your account.</p>`,
    );

    return { message: 'Invitation sent successfully', invitationId: invitation.id };
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

    return this.usersRepository.executeTransaction(async (tx) => {
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
          }
        });
      }

      // 3. Create organization member (scoping the role to this org)
      await tx.organizationMember.create({
        data: {
          userId: user.id,
          organizationId: invitation.organizationId,
          roleId: invitation.roleId,
          businessId: invitation.businessId,
          isActive: true,
        }
      });

      // 4. Mark invitation as accepted
      await tx.invitation.update({
        where: { id: invitation.id },
        data: { status: 'ACCEPTED' }
      });

      return { message: 'Invitation accepted successfully' };
    });
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
}
