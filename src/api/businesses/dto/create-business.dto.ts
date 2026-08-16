import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateBusinessDto {
  @ApiProperty({ minLength: 2, description: 'Name of the business' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @ApiPropertyOptional({ description: 'Industry of the business' })
  @IsOptional()
  @IsString()
  industry?: string;
}
