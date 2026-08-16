import { Module } from '@nestjs/common';
import { BusinessesService } from './businesses.service';
import { BusinessesRepository } from './businesses.repository';
import { BusinessesController } from './businesses.controller';
import { PrismaModule } from '@database/prisma.module';
import { OrganizationsModule } from '../organizations/organizations.module';
import { AuditLogsModule } from '../audit-logs/audit-logs.module';

@Module({
  imports: [
    PrismaModule,
    OrganizationsModule,
    AuditLogsModule,
  ],
  controllers: [BusinessesController],
  providers: [
    BusinessesService,
    BusinessesRepository,
  ],
  exports: [
    BusinessesService,
    BusinessesRepository,
  ],
})
export class BusinessesModule {}
