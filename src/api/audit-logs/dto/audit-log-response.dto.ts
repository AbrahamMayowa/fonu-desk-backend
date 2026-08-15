import { ApiProperty } from '@nestjs/swagger';

export class AuditLogResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  action: string;

  @ApiProperty()
  entityType: string;

  @ApiProperty()
  entityId: string;

  @ApiProperty({ required: false, type: Object, nullable: true })
  details?: any | null;

  @ApiProperty()
  actorId: string;

  @ApiProperty({ required: false, nullable: true })
  organizationId?: string | null;

  @ApiProperty()
  createdAt: Date;
}

export class PaginatedAuditLogsResponseDto {
  @ApiProperty({ type: [AuditLogResponseDto] })
  data: AuditLogResponseDto[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}
