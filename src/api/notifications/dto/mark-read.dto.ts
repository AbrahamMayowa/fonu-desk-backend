import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString, IsNotEmpty } from 'class-validator';

export class MarkReadDto {
  @ApiProperty({ type: [String], description: 'Array of notification IDs to mark as read' })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  notificationIds: string[];
}
