import { ApiProperty } from '@nestjs/swagger';
import { TicketStatus, TicketPriority } from '@prisma-pg';

class UserBriefDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ required: false })
  email?: string;
}

export class TicketResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ enum: TicketStatus })
  status: TicketStatus;

  @ApiProperty({ enum: TicketPriority })
  priority: TicketPriority;

  @ApiProperty()
  createdById: string;

  @ApiProperty({ required: false })
  assignedToId: string | null;

  @ApiProperty()
  organizationId: string;

  @ApiProperty({ required: false })
  businessId: string | null;

  @ApiProperty({ type: () => UserBriefDto })
  createdBy: UserBriefDto;

  @ApiProperty({ type: () => UserBriefDto, required: false })
  assignedTo: UserBriefDto | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class PaginatedTicketResponseDto {
  @ApiProperty({ type: [TicketResponseDto] })
  data: TicketResponseDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}

export class TicketAttachmentResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  fileName: string;

  @ApiProperty()
  fileUrl: string;

  @ApiProperty({ nullable: true })
  fileType: string | null;

  @ApiProperty()
  ticketId: string;

  @ApiProperty()
  uploadedById: string;

  @ApiProperty()
  createdAt: Date;
}
