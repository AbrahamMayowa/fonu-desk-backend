import { ApiProperty } from '@nestjs/swagger';
import { TicketAssignMethod } from '@prisma-pg';

export class OrganizationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  ownerId: string;

  @ApiProperty({ enum: TicketAssignMethod })
  ticketAssignMethod: TicketAssignMethod;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class PaginatedOrganizationResponseDto {
  @ApiProperty({ type: [OrganizationResponseDto] })
  data: OrganizationResponseDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
