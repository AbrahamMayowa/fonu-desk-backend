---
name: email-pattern
description: Always use the centralized EmailService and Handlebars templates for email notifications
---

# Email Template Pattern

When implementing email notifications in this project, you MUST adhere to the following pattern to maintain a clean and scalable architecture:

## Guidelines
1. **Templates Location**: All email templates must be created as Handlebars (`.hbs`) files in the `src/email/templates/` directory. Do not hardcode HTML templates as raw strings inside services.
2. **EmailService Encapsulation**: The logic to compile the templates and send the emails must reside in `src/email/email.service.ts`.
3. **Specific Sending Methods**: Do not expose the generic `sendMail` method to other modules if possible. Instead, create specific methods for each use case (e.g., `sendTicketNotificationMail`, `sendWelcomeMail`) inside `EmailService`.
4. **Triggering Emails**: Other modules (like `TicketsService` or `NotificationsService`) should inject `EmailService` and call the specific sending methods, passing the required data context for the Handlebars template.
5. **No Nested Functions**: Never define nested functions (closures/lambdas containing complex logic) inside class methods. Always extract them into separate `private` class methods to maintain readability and testability.
