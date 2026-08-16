import { Controller, Get, Post, Body, Query, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BusinessesService } from './businesses.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { GetBusinessesDto } from './dto/get-businesses.dto';
import { BusinessResponseDto, PaginatedBusinessResponseDto } from './dto/business-response.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@ApiTags('Businesses')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('businesses')
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Post()
  @Roles(ROLES.OWNER, ROLES.SUPPORT, ROLES.ADMIN)
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new business scoped to the active organization (Owner/Support/Admin)' })
  @ApiResponse({ status: 201, description: 'Business created successfully', type: BusinessResponseDto })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 409, description: 'Business name conflict' })
  async create(
    @CurrentUser() user: ActiveUserData,
    @Body() dto: CreateBusinessDto,
  ): Promise<BusinessResponseDto> {
    return this.businessesService.create(user, dto) as unknown as BusinessResponseDto;
  }

  @Get()
  @Roles(ROLES.OWNER, ROLES.SUPPORT, ROLES.ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get list of businesses for the active organization (Owner/Support/Admin)' })
  @ApiResponse({ status: 200, description: 'List of businesses retrieved successfully', type: PaginatedBusinessResponseDto })
  async findAll(
    @CurrentUser() user: ActiveUserData,
    @Query() dto: GetBusinessesDto,
  ): Promise<PaginatedBusinessResponseDto> {
    return this.businessesService.findAll(user, dto) as unknown as PaginatedBusinessResponseDto;
  }
}
