import { ApiProperty } from '@nestjs/swagger';
import { TicketResponseDto } from '../../tickets/dto/ticket-response.dto';
import { AuditLogResponseDto } from '../../audit-logs/dto/audit-log-response.dto';


export class AdminStatsResponseDto {
  @ApiProperty({ example: 120, description: 'Total tickets in the organization' })
  totalTickets: number;

  @ApiProperty({ example: 45, description: 'Number of open tickets' })
  openTickets: number;

  @ApiProperty({ example: 60, description: 'Number of closed tickets' })
  closedTickets: number;

  @ApiProperty({ example: 15, description: 'Number of unassigned tickets' })
  unassignedTickets: number;

  @ApiProperty({ example: 350, description: 'Total number of customers' })
  totalCustomers: number;

  @ApiProperty({ example: 12, description: 'Total number of support agents' })
  totalAgents: number;
}

export class AgentStatsResponseDto {
  @ApiProperty({ example: 25, description: 'Total tickets assigned to the agent' })
  assignedTickets: number;

  @ApiProperty({ example: 10, description: 'Number of open assigned tickets' })
  openAssignedTickets: number;

  @ApiProperty({ example: 15, description: 'Number of resolved assigned tickets' })
  resolvedAssignedTickets: number;

  @ApiProperty({ example: 8, description: 'Total unassigned tickets in the organization' })
  unassignedTickets: number;
}

export class CustomerStatsResponseDto {
  @ApiProperty({ example: 15, description: 'Total tickets created by the customer/business' })
  totalTickets: number;

  @ApiProperty({ example: 5, description: 'Number of open tickets' })
  openTickets: number;

  @ApiProperty({ example: 10, description: 'Number of closed tickets' })
  closedTickets: number;
}

export class DashboardRecentTicketsResponseDto {
  @ApiProperty({ type: [TicketResponseDto] })
  data: TicketResponseDto[];
}

export class DashboardRecentActivityResponseDto {
  @ApiProperty({ type: [AuditLogResponseDto] })
  data: AuditLogResponseDto[];
}
