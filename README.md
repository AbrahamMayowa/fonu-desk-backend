# Fonu Desk Backend - API Service

Fonu Desk is a simplified, B2B enterprise ticketing platform designed for SaaS organizations. It enables businesses to manage organizations, invite members with Role-Based Access Control (RBAC), create and track tickets, add comments, and maintain full audit logs.

---

## 1. System Architecture

The backend application is built using **NestJS**, a progressive Node.js framework, and **TypeScript**. It follows the clean architecture pattern of **Controller -> Service -> Repository -> DTO**, ensuring absolute separation of concerns.

### 1.1 Components & Flow Diagram
```mermaid
graph TD
    %% Clients
    Frontend[Next.js Frontend Client]
    
    %% API gateway / Controller entrypoint
    subgraph NestJS Backend Application
        Gateway[HTTP Controller Layer]
        
        %% Middleware & Guards
        AuthMid[Authentication Middleware]
        RoleGuard[Roles Guard]
        
        %% Services & Repositories
        subgraph Business Logic & DB Layer
            AuthService[Auth Service]
            AuthRepo[Auth Repository]
            
            TicketService[Tickets Service]
            TicketRepo[Tickets Repository]
            
            OrgService[Organizations Service]
            OrgRepo[Organizations Repository]
            
            UserService[Users Service]
            UserRepo[Users Repository]
            
            AuditService[AuditLogs Service]
            AuditRepo[AuditLogs Repository]
            
            NotifService[Notifications Service]
            NotifRepo[Notifications Repository]
        end
    end
    
    %% External systems
    subgraph Databases & External Integrations
        Database[(PostgreSQL Database)]
        Cloudinary[Cloudinary Image Storage]
        Mailtrap[SMTP Mail Service]
    end

    %% Flows
    Frontend -->|HTTP Requests| AuthMid
    AuthMid -->|Validates JWT| RoleGuard
    RoleGuard -->|Routes Authorized Request| Gateway
    
    %% Route connections
    Gateway -->|Auth Routes| AuthService
    Gateway -->|Ticket Routes| TicketService
    Gateway -->|Org/Biz Routes| OrgService
    Gateway -->|User/Invite Routes| UserService
    
    %% Service connections
    AuthService --> AuthRepo
    TicketService --> TicketRepo
    OrgService --> OrgRepo
    UserService --> UserRepo
    
    %% Shared systems
    TicketService -->|Logs Action| AuditService
    OrgService -->|Logs Action| AuditService
    UserService -->|Logs Action| AuditService
    
    TicketService -->|Triggers Alert| NotifService
    UserService -->|Sends Invite Link| Mailtrap
    AuthService -->|Sends OTP| Mailtrap
    
    NotifService --> NotifRepo
    NotifService -->|Sends Email Alert| Mailtrap
    
    AuditService --> AuditRepo
    
    %% DB mapping
    AuthRepo -->|Prisma Client| Database
    TicketRepo -->|Prisma Client| Database
    OrgRepo -->|Prisma Client| Database
    UserRepo -->|Prisma Client| Database
    AuditRepo -->|Prisma Client| Database
    NotifRepo -->|Prisma Client| Database
    
    %% File upload
    TicketService -->|Uploads base64 attachments| Cloudinary
```

---

## 2. Directory Structure

The project code is organized into feature-based modules within the `src/` directory:

```bash
src/
├── api/                  # Main Business Modules
│   ├── audit-logs/       # Audit trail logger (sensitive actions)
│   ├── auth/             # Authentication & verification logic
│   ├── businesses/       # Customer business entities (scoped to organization)
│   ├── dashboards/       # Dashboard metrics (Admin, Agent, Customer stats)
│   ├── notifications/    # Internal notifications and alerts
│   ├── organizations/    # Organization creation and metadata management
│   ├── tickets/          # Ticket creation, assignment, comment threads
│   └── users/            # Organization membership and invitations (invite/accept)
├── common/               # Shared utilities, decorators, guards, and middlewares
│   ├── constants/        # Roles constants (OWNER, ADMIN, SUPPORT, CUSTOMER)
│   ├── decorators/       # Parameter/Route decorators (@CurrentUser, @Roles)
│   ├── guards/           # Route guarding (RolesGuard)
│   ├── middlewares/      # Authentication middleware (decodes JWT)
│   └── interfaces/       # Global TS types & interfaces
├── database/             # Global Prisma client provider wrapper
└── email/                # Nodemailer and Handlebars email template engines
```

---

## 3. Database Schema

The database utilizes PostgreSQL mapped through **Prisma ORM** (configured under `@prisma-pg`). Key schemas include:

- **User**: Represents registered accounts (owners, staff, customers) and manages global verification state.
- **Organization**: Top-level tenant. Has an owner and controls ticket assignment configuration (`AUTO` or `MANUAL`).
- **OrganizationMember**: Map table connecting Users, Organizations, Roles, and optional Business entities to scope B2B user membership.
- **Business**: Represents B2B customer organizations/companies onboarded under the primary Tenant.
- **Ticket**: Represents support requests scoped to organizations and optionally customer businesses. Can be auto-assigned.
- **TicketComment**: Thread comments (supports internal comments restricted to support/owners).
- **TicketAttachment**: Cloudinary URLs for attachments uploaded during ticket creation.
- **TicketHistory**: Automatically logs changes to ticket parameters (e.g., status, priority).
- **AuditLog**: Complete system-wide immutable action log of sensitive tenant changes.
- **Otp**: Stores temporary validation codes (email verification, password reset).
- **Invitation**: Tracks pending/accepted user invitations (contains tokens and role configurations).

---

## 4. Environment Variables Configuration

Copy the environment variables template to prepare your local configuration:
```bash
cp .env.example .env
```

| Variable Name | Purpose | Example / Default Value |
|---|---|---|
| `PORT` | Local server port | `4000` |
| `FRONTEND_URL` | Frontend URL for generating links | `http://localhost:3000` |
| `DB_HOST` | Database host | `127.0.0.1` |
| `DB_PORT` | Database port | `5432` |
| `DB_USER` | Database user name | `postgres` |
| `DB_PASSWORD` | Database password | `password123` |
| `DB_NAME` | Database schema name | `fonu-desk` |
| `DATABASE_URL` | Prisma Connection string | `postgresql://postgres:password123@127.0.0.1:5432/fonu-desk?schema=public` |
| `JWT_SECRET` | Secret used to sign authentication tokens | `super-secret-key-for-dev` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary storage bucket | `your_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API Key | `your_api_key` |
| `CLOUDINARY_API_SECRET` | Cloudinary Secret Key | `your_api_secret` |
| `SMTP_HOST` | Outgoing email server | `smtp.mailtrap.io` |
| `SMTP_PORT` | Outgoing email port | `2525` |
| `SMTP_SECURE` | Secure connection (SSL/TLS) | `false` |
| `SMTP_USER` | SMTP username | `your_username` |
| `SMTP_PASSWORD` | SMTP password | `your_password` |
| `SMTP_FROM_EMAIL` | From email header | `noreply@example.com` |

---

## 5. Setup & Running Instructions

### 5.1 Local Development Environment
Prerequisites: **Node.js 20+**, **Yarn**, and a running **PostgreSQL** database.

1. **Install Dependencies**:
   ```bash
   yarn install
   ```

2. **Configure Database**:
   Set `DATABASE_URL` in `.env` and run migrations:
   ```bash
   yarn run prisma:dev
   ```

3. **Seed Database Roles**:
   Populate roles (`ADMIN`, `SUPPORT`, `CUSTOMER`):
   ```bash
   yarn run prisma:seed
   ```

4. **Start Application**:
   ```bash
   # Start in hot-reload watch mode
   yarn run start:dev
   
   # Start in production mode
   yarn run start:prod
   ```
   *The Swagger API documentation will be available at `http://localhost:4000/api`.*

### 5.2 Running via Docker Compose
Prerequisites: **Docker** and **Docker Compose**.

Build and spin up the complete application stack (NestJS API + PostgreSQL DB):
```bash
docker compose up --build
```
On startup, the backend automatically:
1. Waits for PostgreSQL to be fully ready and accepting connections.
2. Deploys the latest database migrations (`prisma migrate deploy`).
3. Seeds the default Roles into the database.
4. Launches the NestJS HTTP server on port `4000`.

---

## 6. Testing Guide

The codebase has unit tests for key business logic and E2E integration tests for major endpoints. They utilize mocks to run fast and reliably out of the box.

```bash
# Run unit tests
yarn run test

# Run E2E integration tests
yarn run test:e2e

# Run test coverage report
yarn run test:cov
```
