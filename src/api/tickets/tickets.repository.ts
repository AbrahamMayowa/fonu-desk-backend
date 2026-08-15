import { Injectable } from '@nestjs/common';
import { PrismaService } from '@database/prisma.service';
import { Prisma } from '@prisma-pg';

@Injectable()
export class TicketsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.TicketUncheckedCreateInput) {
    return this.prisma.ticket.create({ 
      data,
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
        assignedTo: { select: { id: true, firstName: true, lastName: true, email: true } },
      }
    });
  }

  async findAndCount(where: Prisma.TicketWhereInput, skip: number, take: number) {
    return Promise.all([
      this.prisma.ticket.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
          assignedTo: { select: { id: true, firstName: true, lastName: true, email: true } },
        }
      }),
      this.prisma.ticket.count({ where }),
    ]);
  }

  async findOne(id: string) {
    return this.prisma.ticket.findUnique({
      where: { id },
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
        assignedTo: { select: { id: true, firstName: true, lastName: true, email: true } },
      }
    });
  }

  async update(id: string, data: Prisma.TicketUpdateInput) {
    return this.prisma.ticket.update({
      where: { id },
      data,
      include: {
        createdBy: { select: { id: true, firstName: true, lastName: true, email: true } },
        assignedTo: { select: { id: true, firstName: true, lastName: true, email: true } },
      }
    });
  }

  async createHistory(data: Prisma.TicketHistoryUncheckedCreateInput) {
    return this.prisma.ticketHistory.create({ data });
  }

  async getHistory(ticketId: string) {
    return this.prisma.ticketHistory.findMany({
      where: { ticketId },
      orderBy: { createdAt: 'desc' },
      include: {
        changedBy: { select: { id: true, firstName: true, lastName: true } }
      }
    });
  }

  async createComment(data: Prisma.TicketCommentUncheckedCreateInput) {
    return this.prisma.ticketComment.create({ data });
  }

  async getComments(ticketId: string, includeInternal: boolean) {
    const where: Prisma.TicketCommentWhereInput = { ticketId };
    if (!includeInternal) {
      where.isInternal = false;
    }
    return this.prisma.ticketComment.findMany({
      where,
      orderBy: { createdAt: 'asc' },
      include: {
        author: { select: { id: true, firstName: true, lastName: true } }
      }
    });
  }

  async findAgentWithFewestTickets(organizationId: string) {
    const role = await this.prisma.role.findUnique({ where: { name: 'SUPPORT' } });
    if (!role) return null;

    const agents = await this.prisma.organizationMember.findMany({
      where: {
        organizationId,
        roleId: role.id,
        isActive: true,
        deletedAt: null,
      },
      select: { userId: true },
    });

    if (agents.length === 0) return null;

    const agentIds = agents.map(a => a.userId);

    const ticketCounts = await this.prisma.ticket.groupBy({
      by: ['assignedToId'],
      where: {
        assignedToId: { in: agentIds },
        organizationId,
        status: { in: ['OPEN', 'IN_PROGRESS'] },
      },
      _count: {
        _all: true,
      },
    });

    let leastBusyAgentId = agentIds[0];
    let minTickets = Infinity;

    for (const agentId of agentIds) {
      const countInfo = ticketCounts.find(t => t.assignedToId === agentId);
      const count = countInfo ? countInfo._count._all : 0;
      if (count < minTickets) {
        minTickets = count;
        leastBusyAgentId = agentId;
      }
    }

    return leastBusyAgentId;
  }
}
