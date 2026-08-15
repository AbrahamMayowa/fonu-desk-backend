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
      const templateContent = fs.readFileSync(templatePath, 'utf8');
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

  async sendMail(to: string, subject: string, html: string) {
    await this.mailerService.sendMail({
      to,
      subject,
      html,
    });
  }
}
