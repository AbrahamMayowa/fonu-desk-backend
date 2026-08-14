import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class InviteUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'The email of the user to invite' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'uuid', description: 'The role ID to assign to the user' })
  @IsNotEmpty()
  @IsUUID()
  roleId: string;

  @ApiPropertyOptional({ example: 'uuid', description: 'Optional business ID if the user is scoped to a business' })
  @IsOptional()
  @IsUUID()
  businessId?: string;
}
