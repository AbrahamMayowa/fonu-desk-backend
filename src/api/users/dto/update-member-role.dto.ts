import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateMemberRoleDto {
  @ApiProperty({ description: 'The ID of the new role to assign' })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  roleId: string;
}
