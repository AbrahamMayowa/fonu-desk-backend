import { IsEmail, IsString, Length, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangePasswordDto {
  @ApiProperty({ example: 'owner@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'The reset OTP received via email' })
  @IsString()
  @Length(6, 6)
  code: string;

  @ApiProperty({ example: 'newStrongPassword123' })
  @IsString()
  @MinLength(8)
  newPassword: string;
}
