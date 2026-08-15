import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';

@Injectable()
export class DashboardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getAdminStats(organizationId: string) {
    const [totalTickets, openTickets, closedTickets, unassignedTickets, totalCustomers, totalAgents] = await Promise.all([
      this.prisma.ticket.count({ where: { organizationId } }),
      this.prisma.ticket.count({ where: { organizationId, status: 'OPEN' } }),
      this.prisma.ticket.count({ where: { organizationId, status: 'CLOSED' } }),
      this.prisma.ticket.count({ where: { organizationId, assignedToId: null } }),
      this.prisma.organizationMember.count({
        where: {
          organizationId,
          role: { name: 'CUSTOMER' },
          isActive: true,
        },
      }),
      this.prisma.organizationMember.count({
        where: {
          organizationId,
          role: { name: 'SUPPORT_AGENT' },
          isActive: true,
        },
      }),
    ]);

    return { totalTickets, openTickets, closedTickets, unassignedTickets, totalCustomers, totalAgents };
  }

  async getAdminRecentTickets(organizationId: string) {
    return this.prisma.ticket.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
        assignedTo: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });
  }

  async getAdminRecentActivity(organizationId: string) {
    return this.prisma.auditLog.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        actor: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });
  }

  async getAgentStats(organizationId: string, agentId: string) {
    const [assignedTickets, openAssignedTickets, resolvedAssignedTickets, unassignedTickets] = await Promise.all([
      this.prisma.ticket.count({ where: { organizationId, assignedToId: agentId } }),
      this.prisma.ticket.count({ where: { organizationId, assignedToId: agentId, status: 'OPEN' } }),
      this.prisma.ticket.count({ where: { organizationId, assignedToId: agentId, status: 'RESOLVED' } }),
      this.prisma.ticket.count({ where: { organizationId, assignedToId: null } }),
    ]);

    return { assignedTickets, openAssignedTickets, resolvedAssignedTickets, unassignedTickets };
  }

  async getAgentRecentTickets(organizationId: string, agentId: string) {
    return this.prisma.ticket.findMany({
      where: { organizationId, assignedToId: agentId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });
  }

  async getAgentUnassignedTickets(organizationId: string) {
    return this.prisma.ticket.findMany({
      where: { organizationId, assignedToId: null },
      orderBy: { createdAt: 'desc' },
      take: 5,
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
      },
    });
  }

  async getCustomerStats(organizationId: string, userId: string) {
    const whereClause = { organizationId, createdById: userId };
    
    const [totalTickets, openTickets, closedTickets] = await Promise.all([
      this.prisma.ticket.count({ where: whereClause }),
      this.prisma.ticket.count({ where: { ...whereClause, status: 'OPEN' } }),
      this.prisma.ticket.count({ where: { ...whereClause, status: 'CLOSED' } }),
    ]);

    return { totalTickets, openTickets, closedTickets };
  }

  async getCustomerRecentTickets(organizationId: string, userId: string) {
    const whereClause = { organizationId, createdById: userId };

    return this.prisma.ticket.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
      take: 5,
    });
  }
}
