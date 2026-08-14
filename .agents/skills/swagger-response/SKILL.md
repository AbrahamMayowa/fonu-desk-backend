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

## Prisma Include Types
When writing repository methods that query Prisma with an `include` block (e.g. including related tables like `ownedOrganizations`), **never use the base Prisma model type** (e.g. `Promise<User>`) as the return type. The base model type only contains scalar fields and does not include relations, causing TypeScript build errors downstream.

Instead, always define and return a strongly-typed payload using `Prisma.ModelGetPayload`, for example:
```typescript
export type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    ownedOrganizations: true;
    memberships: {
      include: {
        role: true;
        organization: true;
      };
    };
  };
}>;
```
Always add this type definition to the repository file and use it as the return type for the query method.
