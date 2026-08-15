import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateOrganizationDto {
  @ApiPropertyOptional({ minLength: 5 })
  @IsOptional()
  @IsString()
  @MinLength(5)
  name?: string;
}
