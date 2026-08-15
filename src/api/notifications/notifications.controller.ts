import { Controller, Get, Patch, Body, Query } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { MarkReadDto } from './dto/mark-read.dto';
import { NotificationResponseDto } from './dto/notification-response.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';

@ApiTags('notifications')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  @ApiOperation({ summary: 'Get current user notifications' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiResponse({ status: 200, description: 'List of notifications', type: [NotificationResponseDto] })
  async getMyNotifications(
    @CurrentUser() user: any,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 10;
    return this.notificationsService.getMyNotifications(user.userId, pageNum, limitNum);
  }

  @Patch('read')
  @ApiOperation({ summary: 'Mark multiple notifications as read' })
  @ApiResponse({ status: 200, description: 'Notifications marked as read successfully' })
  async markAsRead(
    @CurrentUser() user: any,
    @Body() dto: MarkReadDto,
  ) {
    return this.notificationsService.markAsRead(user.userId, dto.notificationIds);
  }
}
