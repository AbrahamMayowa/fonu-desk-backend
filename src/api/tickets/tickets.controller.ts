import { Controller, Get, Post, Body, Patch, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { CreateTicketOnBehalfDto } from './dto/create-ticket-on-behalf.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { CreateTicketCommentDto } from './dto/create-ticket-comment.dto';
import { GetTicketsDto } from './dto/get-tickets.dto';
import { AssignTicketDto } from './dto/assign-ticket.dto';
import { TicketResponseDto, PaginatedTicketResponseDto } from './dto/ticket-response.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@ApiTags('Tickets')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new ticket' })
  @ApiResponse({ status: 201, type: TicketResponseDto })
  async create(
    @CurrentUser() user: ActiveUserData,
    @Body() dto: CreateTicketDto,
  ): Promise<TicketResponseDto> {
    return this.ticketsService.create(user, dto) as any;
  }

  @Post('on-behalf')
  @Roles(ROLES.OWNER, ROLES.ADMIN, ROLES.SUPPORT)
  @ApiOperation({ summary: 'Create a ticket on behalf of a customer' })
  @ApiResponse({ status: 201, type: TicketResponseDto })
  async createOnBehalf(
    @CurrentUser() user: ActiveUserData,
    @Body() dto: CreateTicketOnBehalfDto,
  ): Promise<TicketResponseDto> {
    return this.ticketsService.createOnBehalf(user, dto) as any;
  }

  @Get()
  @ApiOperation({ summary: 'Get list of tickets based on user role' })
  @ApiResponse({ status: 200, type: PaginatedTicketResponseDto })
  async findAll(
    @CurrentUser() user: ActiveUserData,
    @Query() dto: GetTicketsDto,
  ): Promise<PaginatedTicketResponseDto> {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.findAll(user, role, dto) as any;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific ticket' })
  @ApiResponse({ status: 200, type: TicketResponseDto })
  async findOne(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ): Promise<TicketResponseDto> {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.findOne(id, user, role) as any;
  }

  @Patch(':id')
  @Roles(ROLES.OWNER, ROLES.ADMIN, ROLES.SUPPORT)
  @ApiOperation({ summary: 'Update ticket details (Admin, Support Agent, Owner)' })
  @ApiResponse({ status: 200, type: TicketResponseDto })
  async update(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
    @Body() dto: UpdateTicketDto,
  ): Promise<TicketResponseDto> {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.update(user, id, dto, role) as any;
  }

  @Patch(':id/assign')
  @Roles(ROLES.OWNER, ROLES.ADMIN)
  @ApiOperation({ summary: 'Assign or reassign a ticket (Owner or Admin)' })
  @ApiResponse({ status: 200, type: TicketResponseDto })
  async assign(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
    @Body() dto: AssignTicketDto,
  ): Promise<TicketResponseDto> {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.assign(user, id, dto.assignedToId, role) as any;
  }

  @Post(':id/comments')
  @ApiOperation({ summary: 'Add a comment to a ticket' })
  @ApiResponse({ status: 201, description: 'Comment added successfully' })
  async addComment(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
    @Body() dto: CreateTicketCommentDto,
  ) {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.addComment(user, id, dto, role);
  }

  @Get(':id/comments')
  @ApiOperation({ summary: 'Get all comments for a ticket' })
  @ApiResponse({ status: 200, description: 'Comments retrieved successfully' })
  async getComments(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ) {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.getComments(user, id, role);
  }

  @Get(':id/history')
  @Roles(ROLES.OWNER, ROLES.ADMIN, ROLES.SUPPORT)
  @ApiOperation({ summary: 'Get history of ticket updates' })
  @ApiResponse({ status: 200, description: 'Ticket history retrieved successfully' })
  async getHistory(
    @CurrentUser() user: ActiveUserData,
      @Param('id') id: string,
  ) {
    const role = user.roles && user.roles.length > 0 ? user.roles[0] : ROLES.CUSTOMER;
    return this.ticketsService.getHistory(user, id, role);
  }

  @Post(':id/mute')
  @ApiOperation({ summary: 'Mute notifications for a ticket' })
  @ApiResponse({ status: 200, description: 'Ticket muted successfully' })
  async muteTicket(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ) {
    return this.ticketsService.muteTicket(user.id, id);
  }

  @Post(':id/unmute')
  @ApiOperation({ summary: 'Unmute notifications for a ticket' })
  @ApiResponse({ status: 200, description: 'Ticket unmuted successfully' })
  async unmuteTicket(
    @CurrentUser() user: ActiveUserData,
    @Param('id') id: string,
  ) {
    return this.ticketsService.unmuteTicket(user.id, id);
  }
}
