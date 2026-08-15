import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class UploadTicketImageDto {
  @ApiProperty({ description: 'Base64 encoded image string', example: 'data:image/jpeg;base64,...' })
  @IsString()
  @IsNotEmpty()
  base64Image: string;
}
