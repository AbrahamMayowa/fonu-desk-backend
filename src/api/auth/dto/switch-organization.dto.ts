import { IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SwitchOrganizationDto {
  @ApiProperty({ example: 'uuid-string', description: 'The ID of the organization to switch to' })
  @IsString()
  @IsUUID()
  organizationId: string;
}
