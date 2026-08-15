# Project Rules

- When creating or updating a controller endpoint in this NestJS project, you MUST always include a Swagger `@ApiResponse()` decorator with a strongly typed `type` property corresponding to the response body DTO.
- Never return naked objects from a controller. Always define a DTO class for responses and use `@ApiProperty()` for its fields.
- Security Scope: Always scope queries using `organizationId` from `currentUser` to ensure users only access data within their organization, or organizations they own.
- Quality Standards: Always implement error handling, logging, secure coding practices, and pagination. Always record audit trails for sensitive or delicate actions using the `AuditLogsService`.
- Error Handling: Where you use a `try-catch` block, in the `catch` you must either return a specified error message or a generic error message using NestJS exceptions (e.g., `InternalServerErrorException`, `NotFoundException`).
- Logging Consistency: The logger must be consistent. Always use a static string for the logger message along with a JSON stringified object for the data. For example: `this.logger.error('User invite failed', JSON.stringify({ organizationId: '', initiator: '' }))`.
- Controller Delegation: Do not add any business logic in the controller. Controllers should solely handle routing and immediately delegate execution to services.
- Database Validation: When validating uniqueness or state, explicitly query the database (e.g., `findFirst`) to check for existence/conflicts before taking action, rather than expecting or catching database constraint errors (e.g., Prisma unique constraint errors).
- Architecture Pattern: All new modules must strictly follow the `Controller` -> `Service` -> `Repository` -> `DTO` pattern. Services should never interact directly with the database (e.g., PrismaService); all database operations must be delegated to dedicated Repository classes.
- Prisma Import: All Prisma types and client MUST be imported from `@prisma-pg` (not `@prisma/client` or `@prisma-local`).

