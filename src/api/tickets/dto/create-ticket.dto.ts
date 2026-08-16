import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TicketPriority } from '@prisma-pg';

export class TicketAttachmentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fileUrl: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  fileType?: string;
}

export class CreateTicketDto {
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
