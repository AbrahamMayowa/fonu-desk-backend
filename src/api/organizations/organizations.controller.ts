import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { GetOrganizationsDto } from './dto/get-organizations.dto';
import { UpdateTicketAssignmentDto } from './dto/update-ticket-assignment.dto';
import { OrganizationResponseDto, PaginatedOrganizationResponseDto, UserOrganizationsResponseDto } from './dto/organization-response.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@ApiTags('Organizations')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Roles(ROLES.OWNER)
@Controller('organizations')
export class OrganizationsController {
  constructor(
    private readonly organizationsService: OrganizationsService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create an organization (Owner only)' })
  @ApiResponse({ status: 201, type: OrganizationResponseDto })
  async create(
    @CurrentUser() user: ActiveUserData,
    @Body() dto: CreateOrganizationDto,
  ): Promise<OrganizationResponseDto> {
    return this.organizationsService.create(user.id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get organizations owned by current user' })
  @ApiResponse({ status: 200, type: PaginatedOrganizationResponseDto })
  async findAll(
    @CurrentUser() user: ActiveUserData,
    @Query() dto: GetOrganizationsDto,
  ): Promise<PaginatedOrganizationResponseDto> {
    return this.organizationsService.findAll(user.id, dto);
  }

  @Get('user/me')
  @Roles(ROLES.OWNER, ROLES.ADMIN, ROLES.SUPPORT, ROLES.CUSTOMER)
  @ApiOperation({ summary: 'Get all organizations current user belongs to (No pagination)' })
  @ApiResponse({ status: 200, type: UserOrganizationsResponseDto })
  async findUserOrganizations(
    @CurrentUser() user: ActiveUserData,
  ): Promise<UserOrganizationsResponseDto> {
    return this.organizationsService.findUserOrganizations(user.id);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific organization' })
  @ApiResponse({ status: 200, type: OrganizationResponseDto })
  async findOne(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ): Promise<OrganizationResponseDto> {
    return this.organizationsService.findOne(user.id, id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific organization' })
  @ApiResponse({ status: 200, type: OrganizationResponseDto })
  async update(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
    @Body() dto: UpdateOrganizationDto,
  ): Promise<OrganizationResponseDto> {
    return this.organizationsService.update(user.id, id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a specific organization' })
  @ApiResponse({ status: 200, type: OrganizationResponseDto })
  async remove(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ): Promise<OrganizationResponseDto> {
    return this.organizationsService.remove(user.id, id);
  }

  @Patch(':id/ticket-assignment')
  @ApiOperation({ summary: 'Update ticket assignment method (Owner only)' })
  @ApiResponse({ status: 200, type: OrganizationResponseDto })
  async updateTicketAssignment(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
    @Body() dto: UpdateTicketAssignmentDto,
  ): Promise<OrganizationResponseDto> {
    return this.organizationsService.updateTicketAssignment(user.id, id, dto);
  }
}
