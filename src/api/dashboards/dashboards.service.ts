import { Injectable, Logger } from '@nestjs/common';
import { DashboardsRepository } from './dashboards.repository';

@Injectable()
export class DashboardsService {
  private readonly logger = new Logger(DashboardsService.name);

  constructor(private readonly dashboardsRepository: DashboardsRepository) {}

  async getAdminStats(organizationId: string) {
    return this.dashboardsRepository.getAdminStats(organizationId);
  }

  async getAdminRecentTickets(organizationId: string) {

    return this.dashboardsRepository.getAdminRecentTickets(organizationId);
  }

  async getAdminRecentActivity(organizationId: string) {
    return this.dashboardsRepository.getAdminRecentActivity(organizationId);
  }

  async getAgentStats(organizationId: string, agentId: string) {

    return this.dashboardsRepository.getAgentStats(organizationId, agentId);
  }

  async getAgentRecentTickets(organizationId: string, agentId: string) {
    return this.dashboardsRepository.getAgentRecentTickets(organizationId, agentId);
  }

  async getAgentUnassignedTickets(organizationId: string) {
    return this.dashboardsRepository.getAgentUnassignedTickets(organizationId);
  }

  async getCustomerStats(organizationId: string, userId: string) {
    return this.dashboardsRepository.getCustomerStats(organizationId, userId);
  }

  async getCustomerRecentTickets(organizationId: string, userId: string) {
    return this.dashboardsRepository.getCustomerRecentTickets(organizationId, userId);
  }
}
