import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { TicketAssignMethod } from '@prisma-pg';

export class UpdateTicketAssignmentDto {
  @ApiProperty({ enum: TicketAssignMethod })
  @IsEnum(TicketAssignMethod)
  @IsNotEmpty()
  method: TicketAssignMethod;
}
