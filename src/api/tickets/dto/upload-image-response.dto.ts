import { ApiProperty } from '@nestjs/swagger';

export class UploadImageResponseDto {
  @ApiProperty()
  fileUrl: string;

  @ApiProperty()
  fileName: string;
}
