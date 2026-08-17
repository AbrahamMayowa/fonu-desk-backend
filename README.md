# Fonu Desk Backend - API Service

Fonu Desk is a simplified, B2B enterprise ticketing platform designed for SaaS organizations. It enables businesses to manage organizations, invite members with Role-Based Access Control (RBAC), manage customer business entities, create and track support tickets with base64 attachments, add comments, enforce rate limiting on security endpoints, and maintain full audit logs.

---

## 1. System Architecture

The backend application is built using **NestJS**, a progressive Node.js framework, and **TypeScript**. It follows the clean architecture pattern of **Controller -> Service -> Repository -> DTO**, ensuring absolute separation of concerns.

![Fonu Desk Product Architecture](docs/po_architecture_diagram.png)

### 1.1 Components & Flow Diagram
```mermaid
graph TD
    %% Clients
    Frontend[Next.js Frontend Client]
    
    %% API gateway / Controller entrypoint
    subgraph NestJS Backend Application
        Gateway[HTTP Controller Layer]
        
        %% Middleware, Guards & Security
        AuthMid[Authentication Middleware]
        RoleGuard[Roles Guard]
        RateLimiter[Rate Limiter Service]
        
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

            BizService[Businesses Service]
            BizRepo[Businesses Repository]
            
            AuditService[AuditLogs Service]
            AuditRepo[AuditLogs Repository]
            
            NotifService[Notifications Service]
            NotifRepo[Notifications Repository]
            
            DashService[Dashboards Service]
        end
    end
    
    %% External systems & Cache Layer
    subgraph Databases & External Integrations
        Database[(PostgreSQL Database)]
        RedisStore[(Redis / In-Memory Store)]
        Cloudinary[Cloudinary Image Storage]
        Mailtrap[SMTP Mail Service]
    end

    %% Flows
    Frontend -->|HTTP Requests| AuthMid
    AuthMid -->|Validates JWT| RoleGuard
    RoleGuard -->|Routes Authorized Request| Gateway
    
    %% Route connections
    Gateway -->|Auth & Switch Org Routes| AuthService
    Gateway -->|Ticket Routes| TicketService
    Gateway -->|Org Routes| OrgService
    Gateway -->|User & Invite Routes| UserService
    Gateway -->|Business Management Routes| BizService
    Gateway -->|Dashboard Metrics Routes| DashService
    
    %% Rate Limiting Flow
    AuthService -->|Checks rate limits| RateLimiter
    RateLimiter -->|Increments / TTL| RedisStore
    
    %% Service connections
    AuthService --> AuthRepo
    TicketService --> TicketRepo
    OrgService --> OrgRepo
    UserService --> UserRepo
    BizService --> BizRepo
    
    %% Shared systems
    TicketService -->|Logs Action| AuditService
    OrgService -->|Logs Action| AuditService
    UserService -->|Logs Action| AuditService
    BizService -->|Logs Action| AuditService
    
    TicketService -->|Triggers Alert| NotifService
    UserService -->|Sends Branded Invite Link| Mailtrap
    AuthService -->|Sends Verification/Reset OTP| Mailtrap
    
    NotifService --> NotifRepo
    NotifService -->|Sends Email Notification| Mailtrap
    
    AuditService --> AuditRepo
    
    %% DB mapping
    AuthRepo -->|Prisma Client @prisma-pg| Database
    TicketRepo -->|Prisma Client @prisma-pg| Database
    OrgRepo -->|Prisma Client @prisma-pg| Database
    UserRepo -->|Prisma Client @prisma-pg| Database
    BizRepo -->|Prisma Client @prisma-pg| Database
    AuditRepo -->|Prisma Client @prisma-pg| Database
    NotifRepo -->|Prisma Client @prisma-pg| Database
    
    %% File upload
    TicketService -->|Uploads base64 attachments 10MB limit| Cloudinary
```

---

## 2. Directory Structure

The project code is organized into feature-based modules within the `src/` directory:

```bash
src/
├── api/                  # Main Business Feature Modules
│   ├── audit-logs/       # Immutable audit trail logging for sensitive tenant actions
│   ├── auth/             # Authentication, verification, login, OTP & organization switching
│   ├── businesses/       # Customer business entities (scoped to organization)
│   ├── dashboards/       # Multi-role dashboard metrics (Admin, Agent, Customer stats)
│   ├── notifications/    # Internal notifications and email alert dispatchers
│   ├── organizations/    # Organization tenancy, membership & assignment config
│   ├── tickets/          # Ticket management, auto-assignment, thread comments & attachments
│   └── users/            # User membership, RBAC management, invitation flow & accept logic
├── common/               # Shared cross-cutting concerns, utilities & guards
│   ├── constants/        # System constants & Role definitions (OWNER, ADMIN, SUPPORT, CUSTOMER)
│   ├── decorators/       # Custom TS decorators (@CurrentUser, @Roles)
│   ├── guards/           # Role-based access control guards (RolesGuard)
│   ├── logger/           # Structured Winston logger module
│   ├── middlewares/      # Bearer token JWT authentication middleware
│   ├── redis/            # Redis & In-Memory Rate Limiting engine (RateLimiterService)
│   └── interfaces/       # Shared TypeScript types & JwtPayload contracts
├── database/             # Prisma Service & @prisma-pg PostgreSQL connection module
└── email/                # Nodemailer integration & Handlebars branded email templates
```

---

## 3. Database Schema

The database utilizes PostgreSQL mapped through **Prisma ORM** (configured under `@prisma-pg`). Key schemas include:

- **User**: Represents registered accounts (owners, staff, customers), tracking global email verification state, passwords, and active default organization references.
- **TempUser**: Staging model storing unverified user registrations pending OTP verification.
- **Organization**: Top-level tenant container. Manages owner references and ticket assignment strategies (`AUTO` or `MANUAL`).
- **OrganizationMember**: Join table connecting Users, Organizations, Roles (`ADMIN`, `SUPPORT`, `CUSTOMER`), and optional Customer Businesses to scope B2B user membership.
- **Business**: Customer enterprise/company entities onboarded under a primary Organization tenant.
- **Ticket**: Represents support requests scoped to organizations and customer businesses, controlling lifecycle states, priorities, agent assignments, and base64 attachments.
- **TicketComment**: Thread comments with support for internal comments (visible strictly to support agents and owners).
- **TicketAttachment**: Cloudinary file metadata and access URLs uploaded during ticket creation.
- **TicketHistory**: Automated audit log capturing ticket status, priority, and assignment updates over time.
- **AuditLog**: Complete system-wide immutable action log recording sensitive tenant changes.
- **Otp**: Temporary validation codes for email verification (`VERIFY_EMAIL`) and password resets (`RESET_PASSWORD`) with TTL expiration.
- **Invitation**: Tracks pending and accepted organization invitation tokens, roles, and business assignments.

---

## 4. Environment Variables Configuration

Copy the environment variables template to prepare your local configuration:
```bash
cp .env.example .env
```

| Variable Name | Purpose | Example / Default Value |
|---|---|---|
| `PORT` | Local server port | `4000` |
| `NODE_ENV` | Application environment | `development` |
| `FRONTEND_URL` | Frontend URL for CORS and invitation links | `http://localhost:3000` |
| `DB_HOST` | Database host | `127.0.0.1` |
| `DB_PORT` | Database port | `5432` |
| `DB_USER` | Database user name | `postgres` |
| `DB_PASSWORD` | Database password | `password123` |
| `DB_NAME` | Database schema name | `fonu-desk` |
| `DATABASE_URL` | Prisma connection string | `postgresql://postgres:password123@127.0.0.1:5432/fonu-desk?schema=public` |
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

### 5.2 Request Body & Security Features
- **10MB Payload Limit**: Body parsers (`json` and `urlencoded`) are configured to accept payloads up to `10mb` to support base64 image file uploads during ticket creation.
- **Rate Limiting**: Security-critical authentication routes (`/auth/verify-email`, `/auth/resend-verification-otp`, `/auth/change-password`) are guarded by `RateLimiterService` (Redis / in-memory fallback), returning HTTP `429 Too Many Requests` when limits are exceeded.

### 5.3 Dockerization & Running via Docker Compose

> [!IMPORTANT]  
> **CRITICAL: The `.env` File is Required**  
> `docker-compose.yml` does **NOT** contain hardcoded fallback secrets or default passwords. All runtime configuration values (PostgreSQL credentials, `DATABASE_URL`, `JWT_SECRET`, Cloudinary, SMTP) **MUST** be present in your `.env` file before running Docker Compose.

#### 1. Prepare Environment Variables (`.env`)
Ensure a `.env` file exists in the backend root directory (`fonu-desk-backend/.env`).

```env
# Database Credentials for Docker Postgres container
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=fonu-desk

# Connection URL pointing to the 'db' container host inside Docker
DATABASE_URL=postgresql://postgres:your_secure_password@db:5432/fonu-desk?schema=public

# Application Environment & Ports
PORT=4000
NODE_ENV=production
FRONTEND_URL=http://localhost:3000
JWT_SECRET=super-secret-key-for-dev

# Frontend API URL
NEXT_PUBLIC_API_URL=http://localhost:4000

# Integrations
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SMTP_FROM_EMAIL=your_email@gmail.com
```

> **Note on `DATABASE_URL`**: When running under Docker Compose, the database hostname **must be `db`** (e.g. `postgresql://user:pass@db:5432/fonu-desk`), matching the service name defined in `docker-compose.yml`.

---

#### 2. Build the Docker Images

Since the backend and frontend exist in separate repositories, build both images locally before running Compose:

**Step A: Build Backend Image**
```bash
# In fonu-desk-backend directory:
docker build -t fonu-desk-backend:latest .
```

**Step B: Build Frontend Image**
```bash
# In fonu-desk-frontend directory:
docker build -t fonu-desk-frontend:latest .
```

---

#### 3. Run the Stack via Docker Compose

Once both images are built and your `.env` file is ready, start the full stack:

```bash
# In fonu-desk-backend directory:
docker compose up -d
```

On startup, Docker Compose will automatically:
1. Initialize the PostgreSQL container (`fonu-desk-db`).
2. Run database migrations (`npx prisma migrate deploy`).
3. Seed initial database roles & system data (`npx prisma db seed`).
4. Launch the NestJS backend API on port `4000`.
5. Launch the Next.js frontend on port `3000`.

---

#### 4. Verification & Logs

```bash
# Check container status
docker compose ps

# View backend logs (migrations, seeding, & server status)
docker logs -f fonu-desk-backend

# View frontend logs
docker logs -f fonu-desk-frontend

# View database logs
docker logs -f fonu-desk-db
```

#### 5. Stop the Stack
```bash
docker compose down
```

---

## 6. Testing Guide

The codebase has unit tests for core business logic and E2E integration tests for major endpoints.

```bash
# Run unit tests
yarn run test

# Run E2E integration tests
yarn run test:e2e

# Run test coverage report
yarn run test:cov
```
