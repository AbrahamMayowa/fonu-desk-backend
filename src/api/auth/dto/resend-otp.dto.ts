import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResendOtpDto {
  @ApiProperty({ example: 'owner@example.com', description: 'The email address to resend the OTP to' })
  @IsEmail()
  email: string;
}
