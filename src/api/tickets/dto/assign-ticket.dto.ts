import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AssignTicketDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  assignedToId: string;
}
