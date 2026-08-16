import { Controller, Get, Post, Delete, Patch, Body, Param, Query, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam, ApiQuery } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { InviteUserDto } from './dto/invite-user.dto';
import { AcceptInviteDto } from './dto/accept-invite.dto';
import { UpdateMemberRoleDto } from './dto/update-member-role.dto';
import { GetInvitesDto } from './dto/get-invites.dto';
import { 
  UserDetailsResponseDto, 
  OrganizationMemberResponseDto, 
  InviteUserResponseDto, 
  MessageResponseDto,
  InvitationResponseDto,
  PaginatedInvitationResponseDto
} from './dto/responses.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { ROLES } from '../../common/constants/roles.constant';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user details' })
  @ApiResponse({ status: 200, description: 'User details retrieved successfully', type: UserDetailsResponseDto })
  async getMe(@CurrentUser() user: ActiveUserData): Promise<UserDetailsResponseDto> {
    return this.usersService.getUserDetails(user.id) as unknown as UserDetailsResponseDto;
  }

  @Get('customers')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN, ROLES.SUPPORT)
  @ApiOperation({ summary: 'Get list of customers (optionally filtered by businessId)' })
  @ApiResponse({ status: 200, description: 'List of customers retrieved successfully', type: [OrganizationMemberResponseDto] })
  async getCustomers(
    @CurrentUser() user: ActiveUserData,
    @Query('businessId') businessId?: string,
  ): Promise<OrganizationMemberResponseDto[]> {
    return this.usersService.getCustomers(user, businessId) as unknown as OrganizationMemberResponseDto[];
  }

  @Get('organization')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @ApiOperation({ summary: 'Get list of users in the active organization' })
  @ApiResponse({ status: 200, description: 'List of users retrieved successfully', type: [OrganizationMemberResponseDto] })
  async getUsersByOrganization(@CurrentUser() user: ActiveUserData): Promise<OrganizationMemberResponseDto[]> {
    return this.usersService.getUsersByOrganization(user) as unknown as OrganizationMemberResponseDto[];
  }

  @Get('business/:businessId')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER)
  @ApiOperation({ summary: 'Get list of users for a specific business' })
  @ApiParam({ name: 'businessId', type: 'string' })
  @ApiResponse({ status: 200, description: 'List of users retrieved successfully', type: [OrganizationMemberResponseDto] })
  async getUsersByBusiness(
    @CurrentUser() user: ActiveUserData,
    @Param('businessId') businessId: string
  ): Promise<OrganizationMemberResponseDto[]> {
    return this.usersService.getUsersByBusiness(user, businessId) as unknown as OrganizationMemberResponseDto[];
  }

  @Post('invite')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Invite a new user to the organization' })
  @ApiResponse({ status: 201, description: 'User invited successfully', type: InviteUserResponseDto })
  @ApiResponse({ status: 409, description: 'User already a member' })
  async inviteUser(
    @CurrentUser() user: ActiveUserData,
    @Body() dto: InviteUserDto
  ): Promise<InviteUserResponseDto> {
    return this.usersService.inviteUser(user, dto);
  }

  @Post('accept-invite')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Accept an invitation and set up account' })
  @ApiResponse({ status: 200, description: 'Invitation accepted successfully', type: MessageResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid or expired token' })
  async acceptInvite(@Body() dto: AcceptInviteDto): Promise<MessageResponseDto> {
    return this.usersService.acceptInvite(dto);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Remove a user from the organization (soft delete)' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User removed successfully', type: MessageResponseDto })
  async removeUser(
    @CurrentUser() user: ActiveUserData,
    @Param('id') targetUserId: string
  ): Promise<MessageResponseDto> {
    return this.usersService.removeUser(user, targetUserId);
  }

  @Patch(':id/deactivate')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Deactivate a user in the organization' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deactivated successfully', type: MessageResponseDto })
  async deactivateUser(
    @CurrentUser() user: ActiveUserData,
    @Param('id') targetUserId: string
  ): Promise<MessageResponseDto> {
    return this.usersService.toggleUserStatus(user, targetUserId, false);
  }

  @Patch(':id/activate')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Activate a user in the organization' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User activated successfully', type: MessageResponseDto })
  async activateUser(
    @CurrentUser() user: ActiveUserData,
    @Param('id') targetUserId: string
  ): Promise<MessageResponseDto> {
    return this.usersService.toggleUserStatus(user, targetUserId, true);
  }

  @Patch(':id/role')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Reassign a role to a user in the organization' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User role updated successfully', type: MessageResponseDto })
  async reassignRole(
    @CurrentUser() user: ActiveUserData,
    @Param('id') targetUserId: string,
    @Body() dto: UpdateMemberRoleDto
  ): Promise<MessageResponseDto> {
    return this.usersService.reassignRole(user, targetUserId, dto.roleId);
  }

  @Get('invites')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all invitations for the active organization' })
  @ApiResponse({ status: 200, description: 'List of invitations retrieved successfully', type: PaginatedInvitationResponseDto })
  async getInvitations(
    @CurrentUser() user: ActiveUserData,
    @Query() dto: GetInvitesDto,
  ): Promise<PaginatedInvitationResponseDto> {
    return this.usersService.getInvitations(user, dto) as unknown as PaginatedInvitationResponseDto;
  }

  @Post('invites/:id/resend')
  @UseGuards(RolesGuard)
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Resend an invitation' })
  @ApiParam({ name: 'id', type: 'string', description: 'Invitation ID' })
  @ApiResponse({ status: 200, description: 'Invitation resent successfully', type: InviteUserResponseDto })
  @ApiResponse({ status: 404, description: 'Invitation not found' })
  @ApiResponse({ status: 409, description: 'Invitation already accepted' })
  async resendInvite(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ): Promise<InviteUserResponseDto> {
    return this.usersService.resendInvite(user, id);
  }
}
