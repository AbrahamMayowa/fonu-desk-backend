# Fonu Desk - Complete API Documentation

This document provides complete, exhaustive API documentation for the **Fonu Desk Backend API**. All endpoints, authorization requirements, rate limit constraints, request payloads, query parameters, and response schemas are fully documented without omission.

---

## 1. Overview & Base Configuration

- **Base URL**: `http://localhost:4000` (Local) / Configurable via `PORT`
- **Swagger Interactive OpenAPI Docs**: `http://localhost:4000/api`
- **Content Type**: `application/json` (Payload limit: `10mb`)
- **Authentication**: Bearer JWT Token passed in `Authorization` HTTP Header

### 1.1 Global Headers
| Header Name | Value / Format | Required | Description |
|---|---|---|---|
| `Content-Type` | `application/json` | Yes (for POST/PATCH/PUT) | Payload data format |
| `Authorization` | `Bearer <JWT_TOKEN>` | Yes (for protected endpoints) | Signed JWT Bearer token issued via `/auth/login` or `/users/accept-invite` |

### 1.2 Standard HTTP Status Codes & Error Response Format
- `200 OK`: Request succeeded.
- `201 Created`: Resource successfully created.
- `400 Bad Request`: Validation failure or invalid parameter.
- `401 Unauthorized`: Missing, invalid, or expired JWT Bearer token.
- `403 Forbidden`: User role lacks permission or cross-tenant resource access attempted.
- `404 Not Found`: Target resource does not exist.
- `409 Conflict`: Unique constraint violation (e.g. duplicate email or organization name).
- `429 Too Many Requests`: Security rate limit exceeded.

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must be longer than or equal to 8 characters"
  ],
  "error": "Bad Request"
}
```

---

## 2. Authentication Module (`/auth`)

### 2.1 Register New Owner
- **HTTP Method**: `POST`
- **Endpoint**: `/auth/signup`
- **Access Control**: Public (No Auth)
- **Summary**: Register a new Organization Owner account. Dispatches email verification OTP code.

#### Request Body (`SignupDto`)
```json
{
  "email": "owner@example.com",
  "password": "SecurePassword123!",
  "firstName": "Jane",
  "lastName": "Doe"
}
```

#### Response (`201 Created` - `MessageResponseDto`)
```json
{
  "message": "Signup successful. Please verify your email with the OTP sent."
}
```

---

### 2.2 Verify Email OTP
- **HTTP Method**: `POST`
- **Endpoint**: `/auth/verify-email`
- **Access Control**: Public (Rate-Limited: Max 6 attempts per 15 minutes)
- **Summary**: Verifies user email with the sent 6-digit OTP and completes account setup.

#### Request Body (`VerifyOtpDto`)
```json
{
  "email": "owner@example.com",
  "code": "482910",
  "password": "SecurePassword123!"
}
```

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "Email verified successfully.",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "u_981247",
    "email": "owner@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "isOwner": true,
    "defaultOrganizationId": null
  }
}
```

---

### 2.3 Resend Verification OTP
- **HTTP Method**: `POST`
- **Endpoint**: `/auth/resend-verification-otp`
- **Access Control**: Public (Rate-Limited: Max 6 attempts per 30 minutes)
- **Summary**: Resends verification OTP code to unverified account.

#### Request Body (`ResendOtpDto`)
```json
{
  "email": "owner@example.com"
}
```

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "If the email is registered, a new OTP has been sent."
}
```

---

### 2.4 User Login
- **HTTP Method**: `POST`
- **Endpoint**: `/auth/login`
- **Access Control**: Public (No Auth)
- **Summary**: Authenticates registered user and issues JWT token containing active tenant context.

#### Request Body (`LoginDto`)
```json
{
  "email": "owner@example.com",
  "password": "SecurePassword123!"
}
```

#### Response (`200 OK` - `LoginResponseDto`)
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "u_981247",
    "email": "owner@example.com",
    "firstName": "Jane",
    "lastName": "Doe",
    "isOwner": true,
    "defaultOrganizationId": "org_551029"
  }
}
```

---

### 2.5 Request Password Reset Code
- **HTTP Method**: `POST`
- **Endpoint**: `/auth/forgot-password`
- **Access Control**: Public (No Auth)
- **Summary**: Sends a 6-digit password reset OTP to registered user email.

#### Request Body (`ForgotPasswordDto`)
```json
{
  "email": "owner@example.com"
}
```

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "If the email exists, a reset code has been sent."
}
```

---

### 2.6 Change Password via OTP
- **HTTP Method**: `POST`
- **Endpoint**: `/auth/change-password`
- **Access Control**: Public (Rate-Limited: Max 6 attempts per 15 minutes)
- **Summary**: Resets user password using the sent password reset OTP.

#### Request Body (`ChangePasswordDto`)
```json
{
  "email": "owner@example.com",
  "code": "918234",
  "newPassword": "NewSecurePassword456!"
}
```

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "Password has been successfully changed."
}
```

---

### 2.7 Switch Active Organization
- **HTTP Method**: `PATCH`
- **Endpoint**: `/auth/switch-organization`
- **Access Control**: Bearer JWT Token Required
- **Summary**: Switches active organization context for multi-tenant users and returns an updated JWT token.

#### Request Body (`SwitchOrganizationDto`)
```json
{
  "organizationId": "org_992104"
}
```

#### Response (`200 OK` - `SwitchOrganizationResponseDto`)
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 3. Users & Membership Module (`/users`)

### 3.1 Get Current User Profile
- **HTTP Method**: `GET`
- **Endpoint**: `/users/me`
- **Access Control**: Bearer JWT Token Required (All Roles)
- **Summary**: Retrieves user profile, owned organizations, active memberships, and default organization context.

#### Response (`200 OK` - `UserDetailsResponseDto`)
```json
{
  "id": "u_981247",
  "email": "owner@example.com",
  "firstName": "Jane",
  "lastName": "Doe",
  "isOwner": true,
  "defaultOrganizationId": "org_551029",
  "ownedOrganizations": [
    { "id": "org_551029", "name": "Acme Corp", "ticketAssignMethod": "AUTO" }
  ],
  "memberships": [
    {
      "id": "mem_102",
      "organizationId": "org_551029",
      "role": { "name": "OWNER" }
    }
  ]
}
```

---

### 3.2 List Organization Customers
- **HTTP Method**: `GET`
- **Endpoint**: `/users/customers`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`, `SUPPORT`)
- **Query Parameters**:
  - `businessId` (string, optional): Filter customers by B2B Business ID.

#### Response (`200 OK` - `[OrganizationMemberResponseDto]`)
```json
[
  {
    "id": "mem_881",
    "userId": "u_3301",
    "organizationId": "org_551029",
    "role": { "id": "r_cust", "name": "CUSTOMER" },
    "business": { "id": "biz_771", "name": "Stark Industries" },
    "user": { "id": "u_3301", "firstName": "Tony", "lastName": "Stark", "email": "tony@stark.com" }
  }
]
```

---

### 3.3 List Active Organization Members
- **HTTP Method**: `GET`
- **Endpoint**: `/users/organization`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)

#### Response (`200 OK` - `[OrganizationMemberResponseDto]`)
```json
[
  {
    "id": "mem_102",
    "userId": "u_981247",
    "organizationId": "org_551029",
    "role": { "id": "r_admin", "name": "ADMINISTRATOR" },
    "user": { "id": "u_981247", "firstName": "Jane", "lastName": "Doe", "email": "owner@example.com" }
  }
]
```

---

### 3.4 List Members of Specific Business
- **HTTP Method**: `GET`
- **Endpoint**: `/users/business/:businessId`
- **Access Control**: Bearer Token (`OWNER`)
- **Path Parameters**: `businessId` (string, required)

#### Response (`200 OK` - `[OrganizationMemberResponseDto]`)
```json
[
  {
    "id": "mem_881",
    "userId": "u_3301",
    "organizationId": "org_551029",
    "role": { "id": "r_cust", "name": "CUSTOMER" },
    "businessId": "biz_771",
    "user": { "id": "u_3301", "firstName": "Tony", "lastName": "Stark", "email": "tony@stark.com" }
  }
]
```

---

### 3.5 Invite New Member
- **HTTP Method**: `POST`
- **Endpoint**: `/users/invite`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Summary**: Sends invitation link via email to join active organization with a specific role and optional business association.

#### Request Body (`InviteUserDto`)
```json
{
  "email": "newmember@example.com",
  "roleId": "role_supp_123",
  "businessId": "biz_771"
}
```

#### Response (`201 Created` - `InviteUserResponseDto`)
```json
{
  "message": "Invitation sent successfully.",
  "invitation": {
    "id": "inv_9901",
    "email": "newmember@example.com",
    "organizationId": "org_551029",
    "roleId": "role_supp_123",
    "businessId": "biz_771",
    "token": "inv_token_abc123",
    "status": "PENDING",
    "expiresAt": "2026-08-23T17:00:00.000Z"
  }
}
```

---

### 3.6 Accept Invitation
- **HTTP Method**: `POST`
- **Endpoint**: `/users/accept-invite`
- **Access Control**: Public (No Auth)
- **Summary**: Accepts invitation token, creates account password, and returns login JWT token.

#### Request Body (`AcceptInviteDto`)
```json
{
  "token": "inv_token_abc123",
  "firstName": "Bruce",
  "lastName": "Wayne",
  "password": "SecurePassword123!"
}
```

#### Response (`200 OK` - `AcceptInviteResponseDto`)
```json
{
  "message": "Invitation accepted successfully.",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "u_7781",
    "email": "newmember@example.com",
    "firstName": "Bruce",
    "lastName": "Wayne",
    "isOwner": false,
    "defaultOrganizationId": "org_551029"
  }
}
```

---

### 3.7 Remove User from Organization
- **HTTP Method**: `DELETE`
- **Endpoint**: `/users/:id`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Path Parameters**: `id` (string, required - Target User ID)

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "User removed successfully."
}
```

---

### 3.8 Deactivate User Membership
- **HTTP Method**: `PATCH`
- **Endpoint**: `/users/:id/deactivate`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Path Parameters**: `id` (string, required - Target User ID)

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "User status updated successfully."
}
```

---

### 3.9 Activate User Membership
- **HTTP Method**: `PATCH`
- **Endpoint**: `/users/:id/activate`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Path Parameters**: `id` (string, required - Target User ID)

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "User status updated successfully."
}
```

---

### 3.10 Reassign User Role
- **HTTP Method**: `PATCH`
- **Endpoint**: `/users/:id/role`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Path Parameters**: `id` (string, required - Target User ID)

#### Request Body (`UpdateMemberRoleDto`)
```json
{
  "roleId": "role_admin_456"
}
```

#### Response (`200 OK` - `MessageResponseDto`)
```json
{
  "message": "User role updated successfully."
}
```

---

### 3.11 Get Organization Invitations
- **HTTP Method**: `GET`
- **Endpoint**: `/users/invites`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Query Parameters**:
  - `page` (number, optional, default: `1`)
  - `limit` (number, optional, default: `10`)
  - `status` (string, optional: `PENDING`, `ACCEPTED`)

#### Response (`200 OK` - `PaginatedInvitationResponseDto`)
```json
{
  "data": [
    {
      "id": "inv_9901",
      "email": "newmember@example.com",
      "status": "PENDING",
      "role": { "name": "SUPPORT_AGENT" },
      "expiresAt": "2026-08-23T17:00:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

---

### 3.12 Resend Invitation
- **HTTP Method**: `POST`
- **Endpoint**: `/users/invites/:id/resend`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Path Parameters**: `id` (string, required - Invitation ID)

#### Response (`200 OK` - `InviteUserResponseDto`)
```json
{
  "message": "Invitation resent successfully.",
  "invitation": {
    "id": "inv_9901",
    "email": "newmember@example.com",
    "status": "PENDING"
  }
}
```

---

### 3.13 Get All System Roles
- **HTTP Method**: `GET`
- **Endpoint**: `/users/roles`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)

#### Response (`200 OK` - `[RoleDto]`)
```json
[
  { "id": "r_owner", "name": "OWNER", "description": "Organization Owner" },
  { "id": "r_admin", "name": "ADMINISTRATOR", "description": "Tenant Admin" },
  { "id": "r_supp", "name": "SUPPORT", "description": "Support Agent" },
  { "id": "r_cust", "name": "CUSTOMER", "description": "B2B End Customer" }
]
```

---

## 4. Organizations Module (`/organizations`)

### 4.1 Create Organization
- **HTTP Method**: `POST`
- **Endpoint**: `/organizations`
- **Access Control**: Bearer Token (`OWNER` only)

#### Request Body (`CreateOrganizationDto`)
```json
{
  "name": "Acme Technologies",
  "ticketAssignMethod": "AUTO"
}
```

#### Response (`201 Created` - `OrganizationResponseDto`)
```json
{
  "id": "org_551029",
  "name": "Acme Technologies",
  "ownerId": "u_981247",
  "ticketAssignMethod": "AUTO",
  "createdAt": "2026-08-16T17:00:00.000Z",
  "updatedAt": "2026-08-16T17:00:00.000Z"
}
```

---

### 4.2 List Owned Organizations
- **HTTP Method**: `GET`
- **Endpoint**: `/organizations`
- **Access Control**: Bearer Token (`OWNER` only)
- **Query Parameters**: `page`, `limit`, `search`

#### Response (`200 OK` - `PaginatedOrganizationResponseDto`)
```json
{
  "data": [
    {
      "id": "org_551029",
      "name": "Acme Technologies",
      "ticketAssignMethod": "AUTO"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

---

### 4.3 Get All User Joined Organizations
- **HTTP Method**: `GET`
- **Endpoint**: `/organizations/user/me`
- **Access Control**: Bearer Token (All Roles)

#### Response (`200 OK` - `UserOrganizationsResponseDto`)
```json
{
  "data": [
    {
      "id": "org_551029",
      "name": "Acme Technologies",
      "role": "OWNER"
    }
  ]
}
```

---

### 4.4 Get Organization Details
- **HTTP Method**: `GET`
- **Endpoint**: `/organizations/:id`
- **Access Control**: Bearer Token (`OWNER` only)
- **Path Parameters**: `id` (string, required)

#### Response (`200 OK` - `OrganizationResponseDto`)
```json
{
  "id": "org_551029",
  "name": "Acme Technologies",
  "ownerId": "u_981247",
  "ticketAssignMethod": "AUTO"
}
```

---

### 4.5 Update Organization Details
- **HTTP Method**: `PATCH`
- **Endpoint**: `/organizations/:id`
- **Access Control**: Bearer Token (`OWNER` only)
- **Path Parameters**: `id` (string, required)

#### Request Body (`UpdateOrganizationDto`)
```json
{
  "name": "Acme Global Solutions"
}
```

#### Response (`200 OK` - `OrganizationResponseDto`)
```json
{
  "id": "org_551029",
  "name": "Acme Global Solutions",
  "ticketAssignMethod": "AUTO"
}
```

---

### 4.6 Delete Organization
- **HTTP Method**: `DELETE`
- **Endpoint**: `/organizations/:id`
- **Access Control**: Bearer Token (`OWNER` only)

#### Response (`200 OK` - `OrganizationResponseDto`)
```json
{
  "id": "org_551029",
  "name": "Acme Global Solutions",
  "deletedAt": "2026-08-16T17:30:00.000Z"
}
```

---

### 4.7 Update Ticket Assignment Strategy
- **HTTP Method**: `PATCH`
- **Endpoint**: `/organizations/:id/ticket-assignment`
- **Access Control**: Bearer Token (`OWNER` only)

#### Request Body (`UpdateTicketAssignmentDto`)
```json
{
  "ticketAssignMethod": "MANUAL"
}
```

#### Response (`200 OK` - `OrganizationResponseDto`)
```json
{
  "id": "org_551029",
  "ticketAssignMethod": "MANUAL"
}
```

---

## 5. Businesses Module (`/businesses`)

### 5.1 Create Customer Business
- **HTTP Method**: `POST`
- **Endpoint**: `/businesses`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`, `SUPPORT`)

#### Request Body (`CreateBusinessDto`)
```json
{
  "name": "Stark Enterprise Solutions",
  "industry": "Aerospace & Defense"
}
```

#### Response (`201 Created` - `BusinessResponseDto`)
```json
{
  "id": "biz_771",
  "name": "Stark Enterprise Solutions",
  "industry": "Aerospace & Defense",
  "organizationId": "org_551029",
  "ownerId": "u_981247",
  "createdAt": "2026-08-16T17:00:00.000Z"
}
```

---

### 5.2 List Customer Businesses
- **HTTP Method**: `GET`
- **Endpoint**: `/businesses`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`, `SUPPORT`)
- **Query Parameters**: `page`, `limit`, `search`

#### Response (`200 OK` - `PaginatedBusinessResponseDto`)
```json
{
  "data": [
    {
      "id": "biz_771",
      "name": "Stark Enterprise Solutions",
      "industry": "Aerospace & Defense",
      "organizationId": "org_551029"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

---

## 6. Tickets Module (`/tickets`)

### 6.1 Upload Ticket Image Attachment
- **HTTP Method**: `POST`
- **Endpoint**: `/tickets/upload-image`
- **Access Control**: Bearer JWT Token Required
- **Summary**: Accepts a base64 encoded image string (max 5MB file limit), uploads to Cloudinary storage, and returns CDN file URL.

#### Request Body (`UploadTicketImageDto`)
```json
{
  "base64Image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
}
```

#### Response (`201 Created` - `UploadImageResponseDto`)
```json
{
  "fileUrl": "https://res.cloudinary.com/fonu-desk/image/upload/v169214/ticket_att_1.png",
  "fileName": "ticket_att_1"
}
```

---

### 6.2 Create Ticket
- **HTTP Method**: `POST`
- **Endpoint**: `/tickets`
- **Access Control**: Bearer JWT Token Required (All Roles)

#### Request Body (`CreateTicketDto`)
```json
{
  "title": "Database connection latencyspike",
  "description": "Getting 504 timeouts on endpoint /api/v1/orders",
  "priority": "HIGH",
  "businessId": "biz_771",
  "attachments": [
    {
      "fileName": "screenshot_error.png",
      "fileUrl": "https://res.cloudinary.com/fonu-desk/image/upload/v169214/ticket_att_1.png",
      "fileType": "image/png"
    }
  ]
}
```

#### Response (`201 Created` - `TicketResponseDto`)
```json
{
  "id": "tick_1001",
  "title": "Database connection latency spike",
  "description": "Getting 504 timeouts on endpoint /api/v1/orders",
  "status": "OPEN",
  "priority": "HIGH",
  "createdById": "u_3301",
  "assignedToId": "u_agent_99",
  "organizationId": "org_551029",
  "businessId": "biz_771",
  "createdBy": {
    "id": "u_3301",
    "firstName": "Tony",
    "lastName": "Stark",
    "email": "tony@stark.com"
  },
  "assignedTo": {
    "id": "u_agent_99",
    "firstName": "Steve",
    "lastName": "Rogers"
  },
  "createdAt": "2026-08-16T17:15:00.000Z",
  "updatedAt": "2026-08-16T17:15:00.000Z"
}
```

---

### 6.3 Create Ticket on Behalf of Customer
- **HTTP Method**: `POST`
- **Endpoint**: `/tickets/on-behalf`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`, `SUPPORT`)

#### Request Body (`CreateTicketOnBehalfDto`)
```json
{
  "customerId": "u_3301",
  "title": "Integration Key Reset",
  "description": "Customer needs production webhook secret rotated",
  "priority": "MEDIUM",
  "businessId": "biz_771"
}
```

#### Response (`201 Created` - `TicketResponseDto`)
```json
{
  "id": "tick_1002",
  "title": "Integration Key Reset",
  "status": "OPEN",
  "createdById": "u_3301"
}
```

---

### 6.4 List Tickets
- **HTTP Method**: `GET`
- **Endpoint**: `/tickets`
- **Access Control**: Bearer Token Required
- **Privacy Rule**: When requested by `CUSTOMER` role, `assignedTo.email` is omitted.
- **Query Parameters**: `page`, `limit`, `search`, `status`, `priority`

#### Response (`200 OK` - `PaginatedTicketResponseDto`)
```json
{
  "data": [
    {
      "id": "tick_1001",
      "title": "Database connection latency spike",
      "status": "OPEN",
      "priority": "HIGH",
      "createdById": "u_3301",
      "assignedToId": "u_agent_99",
      "assignedTo": {
        "id": "u_agent_99",
        "firstName": "Steve",
        "lastName": "Rogers"
      }
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

---

### 6.5 Get Ticket Details
- **HTTP Method**: `GET`
- **Endpoint**: `/tickets/:id`
- **Access Control**: Bearer Token Required
- **Privacy Rule**: When requested by `CUSTOMER` role, `assignedTo.email` is omitted.
- **Path Parameters**: `id` (string, required)

#### Response (`200 OK` - `TicketResponseDto`)
```json
{
  "id": "tick_1001",
  "title": "Database connection latency spike",
  "description": "Getting 504 timeouts on endpoint /api/v1/orders",
  "status": "OPEN",
  "priority": "HIGH",
  "createdById": "u_3301",
  "assignedToId": "u_agent_99",
  "assignedTo": {
    "id": "u_agent_99",
    "firstName": "Steve",
    "lastName": "Rogers"
  }
}
```

---

### 6.6 Update Ticket
- **HTTP Method**: `PATCH`
- **Endpoint**: `/tickets/:id`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`, `SUPPORT`)
- **Path Parameters**: `id` (string, required)

#### Request Body (`UpdateTicketDto`)
```json
{
  "status": "IN_PROGRESS",
  "priority": "URGENT"
}
```

#### Response (`200 OK` - `TicketResponseDto`)
```json
{
  "id": "tick_1001",
  "status": "IN_PROGRESS",
  "priority": "URGENT"
}
```

---

### 6.7 Assign / Reassign Ticket
- **HTTP Method**: `PATCH`
- **Endpoint**: `/tickets/:id/assign`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)

#### Request Body (`AssignTicketDto`)
```json
{
  "assignedToId": "u_agent_88"
}
```

#### Response (`200 OK` - `TicketResponseDto`)
```json
{
  "id": "tick_1001",
  "assignedToId": "u_agent_88"
}
```

---

### 6.8 Add Ticket Comment
- **HTTP Method**: `POST`
- **Endpoint**: `/tickets/:id/comments`
- **Access Control**: Bearer Token Required
- **Rule**: Customers are blocked from posting internal staff notes (`isInternal: true`).

#### Request Body (`CreateTicketCommentDto`)
```json
{
  "content": "Investigating logs in staging cluster now.",
  "isInternal": true
}
```

#### Response (`201 Created`)
```json
{
  "id": "comm_501",
  "content": "Investigating logs in staging cluster now.",
  "isInternal": true,
  "ticketId": "tick_1001",
  "authorId": "u_agent_88",
  "createdAt": "2026-08-16T17:20:00.000Z"
}
```

---

### 6.9 Get Ticket Comments
- **HTTP Method**: `GET`
- **Endpoint**: `/tickets/:id/comments`
- **Access Control**: Bearer Token Required
- **Rule**: Internal comments (`isInternal: true`) are filtered out for `CUSTOMER` role users.

#### Response (`200 OK`)
```json
[
  {
    "id": "comm_501",
    "content": "Investigating logs in staging cluster now.",
    "isInternal": false,
    "author": { "id": "u_agent_88", "firstName": "Peter", "lastName": "Parker" },
    "createdAt": "2026-08-16T17:20:00.000Z"
  }
]
```

---

### 6.10 Get Ticket Attachments
- **HTTP Method**: `GET`
- **Endpoint**: `/tickets/:id/attachments`
- **Access Control**: Bearer Token Required

#### Response (`200 OK` - `[TicketAttachmentResponseDto]`)
```json
[
  {
    "id": "att_901",
    "fileName": "screenshot_error.png",
    "fileUrl": "https://res.cloudinary.com/fonu-desk/image/upload/v169214/ticket_att_1.png",
    "fileType": "image/png",
    "ticketId": "tick_1001",
    "uploadedById": "u_3301",
    "createdAt": "2026-08-16T17:15:00.000Z"
  }
]
```

---

### 6.11 Get Ticket Update History
- **HTTP Method**: `GET`
- **Endpoint**: `/tickets/:id/history`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`, `SUPPORT`)

#### Response (`200 OK`)
```json
[
  {
    "id": "hist_101",
    "fieldChanged": "status",
    "oldValue": "OPEN",
    "newValue": "IN_PROGRESS",
    "changedBy": { "id": "u_agent_88", "firstName": "Peter", "lastName": "Parker" },
    "createdAt": "2026-08-16T17:18:00.000Z"
  }
]
```

---

### 6.12 Mute Ticket Notifications
- **HTTP Method**: `POST`
- **Endpoint**: `/tickets/:id/mute`
- **Access Control**: Bearer Token Required

#### Response (`200 OK`)
```json
{
  "message": "Ticket muted successfully"
}
```

---

### 6.13 Unmute Ticket Notifications
- **HTTP Method**: `POST`
- **Endpoint**: `/tickets/:id/unmute`
- **Access Control**: Bearer Token Required

#### Response (`200 OK`)
```json
{
  "message": "Ticket unmuted successfully"
}
```

---

## 7. Dashboards Module (`/dashboards`)

### 7.1 Admin Stats Metrics
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/admin/stats`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)

#### Response (`200 OK` - `AdminStatsResponseDto`)
```json
{
  "totalTickets": 142,
  "openTickets": 34,
  "closedTickets": 98,
  "unassignedTickets": 10,
  "totalCustomers": 450,
  "totalAgents": 12
}
```

---

### 7.2 Admin Recent Tickets
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/admin/recent-tickets`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)

#### Response (`200 OK` - `DashboardRecentTicketsResponseDto`)
```json
{
  "data": [
    {
      "id": "tick_1001",
      "title": "Database connection latency spike",
      "status": "OPEN",
      "priority": "HIGH",
      "createdAt": "2026-08-16T17:15:00.000Z"
    }
  ]
}
```

---

### 7.3 Admin Recent System Activity
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/admin/recent-activity`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)

#### Response (`200 OK` - `DashboardRecentActivityResponseDto`)
```json
{
  "data": [
    {
      "id": "audit_801",
      "action": "CREATE_TICKET",
      "entityType": "Ticket",
      "entityId": "tick_1001",
      "actor": { "firstName": "Tony", "lastName": "Stark" },
      "createdAt": "2026-08-16T17:15:00.000Z"
    }
  ]
}
```

---

### 7.4 Support Agent Stats Metrics
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/agent/stats`
- **Access Control**: Bearer Token (`SUPPORT`)

#### Response (`200 OK` - `AgentStatsResponseDto`)
```json
{
  "assignedTickets": 18,
  "openAssignedTickets": 5,
  "resolvedAssignedTickets": 12,
  "unassignedTickets": 10
}
```

---

### 7.5 Support Agent Recent Assigned Tickets
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/agent/my-tickets`
- **Access Control**: Bearer Token (`SUPPORT`)

#### Response (`200 OK` - `DashboardRecentTicketsResponseDto`)
```json
{
  "data": [
    {
      "id": "tick_1001",
      "title": "Database connection latency spike",
      "status": "IN_PROGRESS"
    }
  ]
}
```

---

### 7.6 Support Agent Unassigned Tickets Pool
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/agent/unassigned-tickets`
- **Access Control**: Bearer Token (`SUPPORT`)

#### Response (`200 OK` - `DashboardRecentTicketsResponseDto`)
```json
{
  "data": [
    {
      "id": "tick_1005",
      "title": "SSL Certificate Expiry",
      "status": "OPEN"
    }
  ]
}
```

---

### 7.7 Customer Stats Metrics
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/customer/stats`
- **Access Control**: Bearer Token (`CUSTOMER`)

#### Response (`200 OK` - `CustomerStatsResponseDto`)
```json
{
  "totalTickets": 5,
  "openTickets": 2,
  "closedTickets": 3
}
```

---

### 7.8 Customer Recent Tickets
- **HTTP Method**: `GET`
- **Endpoint**: `/dashboards/customer/recent-tickets`
- **Access Control**: Bearer Token (`CUSTOMER`)

#### Response (`200 OK` - `DashboardRecentTicketsResponseDto`)
```json
{
  "data": [
    {
      "id": "tick_1001",
      "title": "Database connection latency spike",
      "status": "OPEN"
    }
  ]
}
```

---

## 8. Audit Logs Module (`/audit-logs`)

### 8.1 Get Organization Audit Logs
- **HTTP Method**: `GET`
- **Endpoint**: `/audit-logs`
- **Access Control**: Bearer Token (`OWNER`, `ADMIN`)
- **Query Parameters**: `page`, `limit`, `action`, `entityType`

#### Response (`200 OK` - `PaginatedAuditLogsResponseDto`)
```json
{
  "data": [
    {
      "id": "audit_801",
      "action": "ASSIGN_TICKET",
      "entityType": "Ticket",
      "entityId": "tick_1001",
      "details": { "assignedToId": "u_agent_88" },
      "actorId": "u_981247",
      "organizationId": "org_551029",
      "actor": {
        "id": "u_981247",
        "firstName": "Jane",
        "lastName": "Doe",
        "email": "owner@example.com"
      },
      "createdAt": "2026-08-16T17:18:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10
}
```

---

## 9. Notifications Module (`/notifications`)

### 9.1 Get User Notifications
- **HTTP Method**: `GET`
- **Endpoint**: `/notifications`
- **Access Control**: Bearer Token Required
- **Query Parameters**: `page`, `limit`

#### Response (`200 OK` - `[NotificationResponseDto]`)
```json
[
  {
    "id": "notif_401",
    "title": "Ticket Assigned",
    "content": "You have been assigned to ticket: Database connection latency spike",
    "isRead": false,
    "userId": "u_agent_88",
    "ticketId": "tick_1001",
    "type": "ASSIGNED",
    "createdAt": "2026-08-16T17:18:00.000Z"
  }
]
```

---

### 9.2 Mark Notifications as Read
- **HTTP Method**: `PATCH`
- **Endpoint**: `/notifications/read`
- **Access Control**: Bearer Token Required

#### Request Body (`MarkReadDto`)
```json
{
  "notificationIds": ["notif_401"]
}
```

#### Response (`200 OK`)
```json
{
  "message": "Notifications marked as read successfully"
}
```
