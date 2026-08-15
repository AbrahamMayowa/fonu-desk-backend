import { Injectable, InternalServerErrorException, NotFoundException, Logger, ForbiddenException } from '@nestjs/common';
import { TicketsRepository } from './tickets.repository';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { CreateTicketOnBehalfDto } from './dto/create-ticket-on-behalf.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { GetTicketsDto } from './dto/get-tickets.dto';
import { Prisma } from '@prisma-pg';
import { AuditLogsService } from '../audit-logs/audit-logs.service';
import { OrganizationsRepository } from '../organizations/organizations.repository';
import { NotificationsService } from '../notifications/notifications.service';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';
import { ROLES } from '../../common/constants/roles.constant';

@Injectable()
export class TicketsService {
  private readonly logger = new Logger(TicketsService.name);

  constructor(
    private readonly ticketsRepository: TicketsRepository,
    private readonly auditLogsService: AuditLogsService,
    private readonly organizationsRepository: OrganizationsRepository,
    private readonly notificationsService: NotificationsService,
  ) {}

  async create(user: ActiveUserData, dto: CreateTicketDto) {
    try {
      const org = await this.organizationsRepository.findFirst({ id: user.organizationId, deletedAt: null });
      if (!org) {
        throw new NotFoundException('Organization not found');
      }

      let assignedToId: string | null = null;
      if (org.ticketAssignMethod === 'AUTO') {
        assignedToId = await this.ticketsRepository.findAgentWithFewestTickets(org.id);
      }

      const ticket = await this.ticketsRepository.create({
        title: dto.title,
        description: dto.description,
        priority: dto.priority,
        organizationId: user.organizationId,
        businessId: dto.businessId,
        createdById: user.id,
        assignedToId,
      });

      await this.auditLogsService.createLog({
        action: 'CREATE_TICKET',
        entityType: 'Ticket',
        entityId: ticket.id,
        actorId: user.id,
        organizationId: ticket.organizationId,
        details: { title: ticket.title },
      });

      if (assignedToId) {
        await this.notificationsService.createNotification(
          assignedToId,
          'New Ticket Assigned',
          `You have been automatically assigned to ticket: ${ticket.title}`
        );
      }

      return ticket;
    } catch (error) {
      this.logger.error('Failed to create ticket', JSON.stringify({ userId: user.id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to create ticket');
    }
  }

  async createOnBehalf(user: ActiveUserData, dto: CreateTicketOnBehalfDto) {
    try {
      const org = await this.organizationsRepository.findFirst({ id: user.organizationId, deletedAt: null });
      if (!org) {
        throw new NotFoundException('Organization not found');
      }

      let assignedToId: string | null = null;
      if (org.ticketAssignMethod === 'AUTO') {
        assignedToId = await this.ticketsRepository.findAgentWithFewestTickets(org.id);
      }

      const ticket = await this.ticketsRepository.create({
        title: dto.title,
        description: dto.description,
        priority: dto.priority,
        organizationId: user.organizationId,
        businessId: dto.businessId,
        createdById: dto.customerId,
        assignedToId,
      });

      await this.auditLogsService.createLog({
        action: 'CREATE_TICKET_ON_BEHALF',
        entityType: 'Ticket',
        entityId: ticket.id,
        actorId: user.id,
        organizationId: ticket.organizationId,
        details: { title: ticket.title, onBehalfOf: dto.customerId },
      });

      if (assignedToId) {
        await this.notificationsService.createNotification(
          assignedToId,
          'New Ticket Assigned',
          `You have been automatically assigned to ticket: ${ticket.title}`
        );
      }

      return ticket;
    } catch (error) {
      this.logger.error('Failed to create ticket on behalf', JSON.stringify({ userId: user.id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to create ticket on behalf');
    }
  }

  async findAll(user: ActiveUserData, role: string, dto: GetTicketsDto) {
    try {
      const { search, status, priority, page = 1, limit = 10 } = dto;
      const skip = (page - 1) * limit;

      const where: Prisma.TicketWhereInput = {
        organizationId: user.organizationId,
        ...(status && { status }),
        ...(priority && { priority }),
        ...(search && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } },
          ],
        }),
      };

      if (role === ROLES.CUSTOMER) {
        where.createdById = user.id;
      } else if (role === ROLES.SUPPORT) {
        where.assignedToId = user.id;
      }

      const [data, total] = await this.ticketsRepository.findAndCount(where, skip, limit);

      return {
        data,
        total,
        page,
        limit,
      };
    } catch (error) {
      this.logger.error('Failed to fetch tickets', JSON.stringify({ userId: user.id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch tickets');
    }
  }

  async findOne(id: string, user: ActiveUserData, role: string) {
    try {
      const ticket = await this.ticketsRepository.findOne(id);
      if (!ticket) {
        throw new NotFoundException(`Ticket with ID ${id} not found`);
      }

      if (ticket.organizationId !== user.organizationId) {
        throw new ForbiddenException('Cannot access ticket in another organization');
      }

      if (role === ROLES.CUSTOMER && ticket.createdById !== user.id) {
        throw new ForbiddenException('You can only view your own tickets');
      }

      if (role === ROLES.SUPPORT && ticket.assignedToId !== user.id) {
        throw new ForbiddenException('You can only view tickets assigned to you');
      }

      return ticket;
    } catch (error) {
      this.logger.error('Failed to fetch ticket', JSON.stringify({ id, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch ticket');
    }
  }

  async update(user: ActiveUserData, id: string, dto: UpdateTicketDto, role: string) {
    try {
      const existing = await this.findOne(id, user, role);

      const ticket = await this.ticketsRepository.update(id, dto);

      for (const [key, newValue] of Object.entries(dto)) {
        if (newValue !== undefined) {
          const oldValue = existing[key];
          if (oldValue !== newValue) {
            await this.ticketsRepository.createHistory({
              fieldChanged: key,
              oldValue: String(oldValue),
              newValue: String(newValue),
              ticketId: ticket.id,
              changedById: user.id,
            });
          }
        }
      }

      await this.auditLogsService.createLog({
        action: 'UPDATE_TICKET',
        entityType: 'Ticket',
        entityId: ticket.id,
        actorId: user.id,
        organizationId: ticket.organizationId,
        details: { updatedFields: Object.keys(dto) },
      });

      return ticket;
    } catch (error) {
      this.logger.error('Failed to update ticket', JSON.stringify({ userId: user.id, id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to update ticket');
    }
  }

  async assign(user: ActiveUserData, id: string, assignedToId: string, role: string) {
    try {
      const existing = await this.findOne(id, user, role);

      const ticket = await this.ticketsRepository.update(id, { assignedTo: { connect: { id: assignedToId } } });

      await this.ticketsRepository.createHistory({
        fieldChanged: 'assignedToId',
        oldValue: existing.assignedToId || 'unassigned',
        newValue: assignedToId,
        ticketId: ticket.id,
        changedById: user.id,
      });

      await this.auditLogsService.createLog({
        action: 'ASSIGN_TICKET',
        entityType: 'Ticket',
        entityId: ticket.id,
        actorId: user.id,
        organizationId: ticket.organizationId,
        details: { assignedToId },
      });

      await this.notificationsService.createNotification(
        assignedToId,
        'Ticket Assigned',
        `You have been manually assigned to ticket: ${ticket.title}`
      );

      return ticket;
    } catch (error) {
      this.logger.error('Failed to assign ticket', JSON.stringify({ userId: user.id, id, assignedToId, error: error.message }));
      throw new InternalServerErrorException('Failed to assign ticket');
    }
  }

  async addComment(user: ActiveUserData, id: string, dto: any, role: string) {
    try {
      const ticket = await this.findOne(id, user, role);
      const isInternal = dto.isInternal || false;
      
      // Customers cannot post internal comments
      if (role === ROLES.CUSTOMER && isInternal) {
        throw new ForbiddenException('Customers cannot post internal comments');
      }

      const comment = await this.ticketsRepository.createComment({
        content: dto.content,
        isInternal,
        ticketId: ticket.id,
        authorId: user.id,
      });

      await this.auditLogsService.createLog({
        action: 'ADD_TICKET_COMMENT',
        entityType: 'Ticket',
        entityId: ticket.id,
        actorId: user.id,
        organizationId: ticket.organizationId,
      });

      return comment;
    } catch (error) {
      this.logger.error('Failed to add ticket comment', JSON.stringify({ userId: user.id, id, dto, error: error.message }));
      throw new InternalServerErrorException('Failed to add ticket comment');
    }
  }

  async getComments(user: ActiveUserData, id: string, role: string) {
    try {
      await this.findOne(id, user, role);
      // Customers only see non-internal comments
      const includeInternal = role !== ROLES.CUSTOMER;
      return this.ticketsRepository.getComments(id, includeInternal);
    } catch (error) {
      this.logger.error('Failed to fetch ticket comments', JSON.stringify({ userId: user.id, id, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch ticket comments');
    }
  }

  async getHistory(user: ActiveUserData, id: string, role: string) {
    try {
      await this.findOne(id, user, role);
      // Customers shouldn't see ticket history according to general helpdesk practices, but if they should we can allow.
      // Assuming only staff see history for security.
      if (role === ROLES.CUSTOMER) {
        throw new ForbiddenException('Customers cannot view ticket history');
      }
      return this.ticketsRepository.getHistory(id);
    } catch (error) {
      this.logger.error('Failed to fetch ticket history', JSON.stringify({ userId: user.id, id, error: error.message }));
      throw new InternalServerErrorException('Failed to fetch ticket history');
    }
  }
}
