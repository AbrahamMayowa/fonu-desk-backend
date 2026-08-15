import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { NotificationsRepository } from './notifications.repository';
import { EmailService } from '../../email/email.service';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  constructor(
    private readonly notificationsRepository: NotificationsRepository,
    private readonly emailService: EmailService,
  ) {}

  async getMyNotifications(userId: string, page = 1, limit = 10) {
    try {
      const skip = (page - 1) * limit;
      const [data, total] = await this.notificationsRepository.findAndCount({ userId }, skip, limit);
      
      return {
        data,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      this.logger.error('Fetch notifications failed', JSON.stringify({ userId, error: error.message }));
      throw new InternalServerErrorException('An error occurred while fetching notifications');
    }
  }

  async markAsRead(userId: string, notificationIds: string[]) {
    try {
      await this.notificationsRepository.updateMany(
        {
          id: { in: notificationIds },
          userId,
        },
        { isRead: true }
      );
      return { message: 'Notifications marked as read successfully' };
    } catch (error) {
      this.logger.error('Mark notifications read failed', JSON.stringify({ userId, notificationIds, error: error.message }));
      throw new InternalServerErrorException('An error occurred while updating notifications');
    }
  }

  async createNotification(userId: string, title: string, content: string, email?: string) {
    try {
      const notification = await this.notificationsRepository.create({
        userId,
        title,
        content,
      });

      if (email) {
        await this.emailService.sendMail(email, title, content).catch((e) => {
          this.logger.error('Notification email send failed', JSON.stringify({ userId, email, error: e.message }));
        });
      }

      return notification;
    } catch (error) {
      this.logger.error('Create notification failed', JSON.stringify({ userId, title, error: error.message }));
      throw new InternalServerErrorException('An error occurred while creating notification');
    }
  }

  async notifyTicketUpdate(
    userId: string, 
    ticketId: string, 
    type: 'ASSIGNED' | 'UPDATED', 
    title: string, 
    content: string, 
    isCritical: boolean,
    email?: string,
    emailData?: any
  ) {
    try {
      const isMuted = await this.notificationsRepository.isTicketMuted(userId, ticketId);
      if (isMuted) return null;

      const notification = await this.notificationsRepository.create({
        userId,
        ticketId,
        type,
        title,
        content,
      });

      if (isCritical && email && emailData) {
        const sendPromise = type === 'ASSIGNED' 
          ? this.emailService.sendTicketAssignedEmail(email, emailData)
          : this.emailService.sendTicketUpdatedEmail(email, emailData);

        await sendPromise.catch((e) => {
          this.logger.error('Critical notification email send failed', JSON.stringify({ userId, email, error: e.message }));
        });
      }

      return notification;
    } catch (error) {
      this.logger.error('Create ticket notification failed', JSON.stringify({ userId, ticketId, error: error.message }));
      return null;
    }
  }
}
