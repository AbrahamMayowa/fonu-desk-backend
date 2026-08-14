# Project Rules

- When creating or updating a controller endpoint in this NestJS project, you MUST always include a Swagger `@ApiResponse()` decorator with a strongly typed `type` property corresponding to the response body DTO.
- Never return naked objects from a controller. Always define a DTO class for responses and use `@ApiProperty()` for its fields.
