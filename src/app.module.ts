import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '@database/prisma.module';
import { EmailModule } from './email/email.module';
import { AuthModule } from './api/auth/auth.module';
import { UsersModule } from './api/users/users.module';
import { AuthenticationMiddleware } from './common/middlewares/auth.middleware';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { LoggerModule } from './common/logger/logger.module';
import { AuditLogsModule } from './api/audit-logs/audit-logs.module';
import { OrganizationsModule } from './api/organizations/organizations.module';
import { NotificationsModule } from './api/notifications/notifications.module';
import { TicketsModule } from './api/tickets/tickets.module';
import { DashboardsModule } from './api/dashboards/dashboards.module';
import { BusinessesModule } from './api/businesses/businesses.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    EmailModule,
    AuthModule,
    UsersModule,
    LoggerModule,
    AuditLogsModule,
    OrganizationsModule,
    NotificationsModule,
    TicketsModule,
    DashboardsModule,
    BusinessesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude(
        { path: 'auth/signup', method: RequestMethod.POST },
        { path: 'auth/login', method: RequestMethod.POST },
        { path: 'auth/verify-email', method: RequestMethod.POST },
        { path: 'auth/resend-verification-otp', method: RequestMethod.POST },
        { path: 'auth/forgot-password', method: RequestMethod.POST },
        { path: 'auth/change-password', method: RequestMethod.POST },
        { path: 'users/accept-invite', method: RequestMethod.POST }
      )
      .forRoutes('*');
  }
}
