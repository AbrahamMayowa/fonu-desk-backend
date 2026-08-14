---
name: nestjs-swagger-response
description: Always add swagger response DTOs to every controller endpoint in NestJS
---

# NestJS Swagger Response DTOs

When creating or updating a controller endpoint in this NestJS project, you MUST always include a Swagger `@ApiResponse()` decorator with a strongly typed `type` property corresponding to the response body DTO.

## Guidelines
1. **Never return naked objects**: Always define a DTO class for responses (e.g., `UserResponseDto`).
2. **Always include `@ApiResponse`**: Attach the `@ApiResponse({ type: DtoClass })` decorator to the method.
3. **Use `ApiProperty`**: Ensure the DTO classes have `@ApiProperty()` decorators for all their fields so they show up correctly in the Swagger UI.
4. **Return Types**: Specify the method return type explicitly (e.g., `async getMe(): Promise<UserDetailsResponseDto>`).
