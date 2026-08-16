import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';

@Injectable()
export class EmailService {
  private templates: Record<string, handlebars.TemplateDelegate> = {};

  constructor(private readonly mailerService: MailerService) {}

  private getTemplate(templateName: string): handlebars.TemplateDelegate {
    if (!this.templates[templateName]) {
      const templatePath = path.join(process.cwd(), 'src', 'email', 'templates', `${templateName}.hbs`);
      let templateContent = fs.readFileSync(templatePath, 'utf8');

      const layoutPath = path.join(process.cwd(), 'src', 'email', 'templates', 'layout.hbs');
      if (fs.existsSync(layoutPath) && templateName !== 'layout') {
        const layoutContent = fs.readFileSync(layoutPath, 'utf8');
        templateContent = layoutContent.replace('{{{body}}}', templateContent);
      }

      this.templates[templateName] = handlebars.compile(templateContent);
    }
    return this.templates[templateName];
  }

  async sendTicketAssignedEmail(to: string, data: any) {
    const template = this.getTemplate('ticket-assigned');
    const html = template(data);
    await this.sendMail(to, 'Ticket Assignment Notification', html);
  }

  async sendTicketUpdatedEmail(to: string, data: any) {
    const template = this.getTemplate('ticket-updated');
    const html = template(data);
    await this.sendMail(to, 'Ticket Update Notification', html);
  }

  async sendUserInviteEmail(to: string, data: { inviteLink: string }) {
    const template = this.getTemplate('user-invite');
    const html = template(data);
    await this.sendMail(to, 'You have been invited to join an organization', html);
  }

  async sendMail(to: string, subject: string, html: string) {
    await this.mailerService.sendMail({
      to,
      subject,
      html,
    });
  }
}
