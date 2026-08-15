import { Module } from '@nestjs/common';
import { DashboardsService } from './dashboards.service';
import { DashboardsController } from './dashboards.controller';
import { DashboardsRepository } from './dashboards.repository';
import { PrismaModule } from '../../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DashboardsController],
  providers: [DashboardsService, DashboardsRepository],
})
export class DashboardsModule {}
