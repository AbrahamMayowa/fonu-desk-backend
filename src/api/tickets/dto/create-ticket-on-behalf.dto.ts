import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TicketPriority } from '@prisma-pg';
import { TicketAttachmentDto } from './create-ticket.dto';

export class CreateTicketOnBehalfDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ enum: TicketPriority, required: false })
  @IsEnum(TicketPriority)
  @IsOptional()
  priority?: TicketPriority;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  businessId?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @ApiProperty({ type: TicketAttachmentDto, required: false })
  @ValidateNested()
  @Type(() => TicketAttachmentDto)
  @IsOptional()
  attachment?: TicketAttachmentDto;

  @ApiProperty({ type: [TicketAttachmentDto], required: false })
  @ValidateNested({ each: true })
  @Type(() => TicketAttachmentDto)
  @IsOptional()
  attachments?: TicketAttachmentDto[];
}
