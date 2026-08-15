import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DashboardsService } from './dashboards.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';
import {
  AdminStatsResponseDto,
  AgentStatsResponseDto,
  CustomerStatsResponseDto,
  DashboardRecentTicketsResponseDto,
  DashboardRecentActivityResponseDto,
} from './dto/dashboard-stats.dto';

@ApiTags('Dashboards')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('dashboards')
export class DashboardsController {
  constructor(private readonly dashboardsService: DashboardsService) {}

  // --- ADMINISTRATOR ---
  
  @Get('admin/stats')
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @ApiOperation({ summary: 'Get organization stats (Admin/Owner)' })
  @ApiResponse({ status: 200, type: AdminStatsResponseDto })
  async getAdminStats(@CurrentUser() user: ActiveUserData): Promise<AdminStatsResponseDto> {
    return this.dashboardsService.getAdminStats(user.organizationId);
  }

  @Get('admin/recent-tickets')
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @ApiOperation({ summary: 'Get recently created tickets (Admin/Owner)' })
  @ApiResponse({ status: 200, type: DashboardRecentTicketsResponseDto })
  async getAdminRecentTickets(@CurrentUser() user: ActiveUserData): Promise<DashboardRecentTicketsResponseDto> {
    const data = await this.dashboardsService.getAdminRecentTickets(user.organizationId);
    return { data: data as any };
  }

  @Get('admin/recent-activity')
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @ApiOperation({ summary: 'Get recent audit logs (Admin/Owner)' })
  @ApiResponse({ status: 200, type: DashboardRecentActivityResponseDto })
  async getAdminRecentActivity(@CurrentUser() user: ActiveUserData): Promise<DashboardRecentActivityResponseDto> {
    const data = await this.dashboardsService.getAdminRecentActivity(user.organizationId);
    return { data: data as any };
  }


  // --- SUPPORT AGENT ---

  @Get('agent/stats')
  @Roles(ROLES.SUPPORT)
  @ApiOperation({ summary: 'Get agent stats (Support Agent)' })
  @ApiResponse({ status: 200, type: AgentStatsResponseDto })
  async getAgentStats(@CurrentUser() user: ActiveUserData): Promise<AgentStatsResponseDto> {
    return this.dashboardsService.getAgentStats(user.organizationId, user.id);
  }

  @Get('agent/my-tickets')
  @Roles(ROLES.SUPPORT)
  @ApiOperation({ summary: 'Get agent recently assigned tickets (Support Agent)' })
  @ApiResponse({ status: 200, type: DashboardRecentTicketsResponseDto })
  async getAgentRecentTickets(@CurrentUser() user: ActiveUserData): Promise<DashboardRecentTicketsResponseDto> {
    const data = await this.dashboardsService.getAgentRecentTickets(user.organizationId, user.id);
    return { data: data as any };
  }

  @Get('agent/unassigned-tickets')
  @Roles(ROLES.SUPPORT)
  @ApiOperation({ summary: 'Get recent unassigned tickets (Support Agent)' })
  @ApiResponse({ status: 200, type: DashboardRecentTicketsResponseDto })
  async getAgentUnassignedTickets(@CurrentUser() user: ActiveUserData): Promise<DashboardRecentTicketsResponseDto> {
    const data = await this.dashboardsService.getAgentUnassignedTickets(user.organizationId);
    return { data: data as any };
  }

  // --- CUSTOMER ---

  @Get('customer/stats')
  @Roles(ROLES.CUSTOMER)
  @ApiOperation({ summary: 'Get customer/business stats (Customer)' })
  @ApiResponse({ status: 200, type: CustomerStatsResponseDto })
  async getCustomerStats(@CurrentUser() user: ActiveUserData): Promise<CustomerStatsResponseDto> {
    return this.dashboardsService.getCustomerStats(user.organizationId, user.id);
  }

  @Get('customer/recent-tickets')
  @Roles(ROLES.CUSTOMER)
  @ApiOperation({ summary: 'Get customer/business recent tickets (Customer)' })
  @ApiResponse({ status: 200, type: DashboardRecentTicketsResponseDto })
  async getCustomerRecentTickets(@CurrentUser() user: ActiveUserData): Promise<DashboardRecentTicketsResponseDto> {
    const data = await this.dashboardsService.getCustomerRecentTickets(user.organizationId, user.id);
    return { data: data as any };
  }
}
