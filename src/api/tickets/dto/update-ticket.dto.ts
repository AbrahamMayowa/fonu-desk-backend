import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TicketStatus, TicketPriority } from '@prisma-pg';

export class UpdateTicketDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ enum: TicketStatus, required: false })
  @IsEnum(TicketStatus)
  @IsOptional()
  status?: TicketStatus;

  @ApiProperty({ enum: TicketPriority, required: false })
  @IsEnum(TicketPriority)
  @IsOptional()
  priority?: TicketPriority;
}
