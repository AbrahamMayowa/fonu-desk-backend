import { Controller, Get, Query, UseGuards, UnauthorizedException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuditLogsService } from './audit-logs.service';
import { GetAuditLogsDto } from './dto/get-audit-logs.dto';
import { PaginatedAuditLogsResponseDto } from './dto/audit-log-response.dto';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ROLES } from '../../common/constants/roles.constant';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { ActiveUserData } from '../../common/interfaces/active-user-data.interface';

@ApiTags('Audit Logs')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Roles(ROLES.OWNER, ROLES.ADMIN)
@Controller('audit-logs')
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Get()
  @ApiOperation({ summary: 'Get audit logs for current organization' })
  @ApiResponse({ status: 200, type: PaginatedAuditLogsResponseDto })
  async getAuditLogs(
    @CurrentUser() user: ActiveUserData,
    @Query() dto: GetAuditLogsDto,
  ): Promise<PaginatedAuditLogsResponseDto> {
    if (!user.organizationId) {
      throw new UnauthorizedException('User must belong to an organization');
    }
    return this.auditLogsService.findAll(user.organizationId, dto);
  }
}
