import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateOrganizationDto {
  @ApiProperty({ minLength: 5 })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  name: string;
}
