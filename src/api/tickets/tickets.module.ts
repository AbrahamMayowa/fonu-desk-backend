import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { TicketsRepository } from './tickets.repository';
import { PrismaModule } from '@database/prisma.module';
import { AuditLogsModule } from '../audit-logs/audit-logs.module';
import { OrganizationsModule } from '../organizations/organizations.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [PrismaModule, AuditLogsModule, OrganizationsModule, NotificationsModule],
  controllers: [TicketsController],
  providers: [TicketsService, TicketsRepository],
  exports: [TicketsService],
})
export class TicketsModule {}
