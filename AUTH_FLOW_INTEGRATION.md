# Frontend Integration Guide: Owner Signup & Email Verification Flow

This guide details the updated Owner Signup & Email Verification flow for frontend integration with the Fonu Desk Backend API.

---

## 1. Overview of the Flow

1. **Owner Signup (`POST /auth/signup`)**:
   - The user fills out initial details (First Name, Last Name, Email).
   - If an active, verified account already exists in the `User` table for that email, the API returns `409 Conflict`.
   - If no verified account exists, the details are stored in the **`TempUser`** table, a 6-digit OTP is issued, and a verification email is sent.
   - **Key Advantage**: Password is **not** collected at this step, keeping initial registration fast and lightweight.

2. **Email Verification & Immediate Authentication (`POST /auth/verify-email`)**:
   - The user submits their email, the 6-digit OTP code received, and their chosen **password**.
   - Upon successful verification, an **atomic database transaction** executes:
     - The password is hashed using `bcrypt`.
     - The `TempUser` record is promoted to an active `User` record (`emailVerified: true`, `isOwner: true`, `password: hashedPassword`).
     - The `TempUser` record is permanently deleted.
     - The `Otp` record is deleted.
   - **Immediate Session Creation**: The API generates and returns a valid JWT **`accessToken`** and **`user`** payload in the response so the frontend can immediately authenticate the user and redirect to dashboard/organization setup without requiring a separate login step.

3. **Resend OTP (`POST /auth/resend-verification-otp`)**:
   - If the user needs a new code, submitting their email generates a new 15-minute OTP and invalidates previous codes.

---

## 2. API Endpoints Reference

### 2.1 Owner Signup
- **Endpoint**: `POST /auth/signup`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Responses**:
  - `201 Created`:
    ```json
    {
      "message": "Signup successful. Please verify your email with the OTP sent."
    }
    ```
  - `400 Bad Request` (Validation errors on fields):
    ```json
    {
      "statusCode": 400,
      "message": [
        "email must be an email",
        "firstName should not be empty"
      ],
      "error": "Bad Request"
    }
    ```
  - `409 Conflict` (Email already registered and verified):
    ```json
    {
      "statusCode": 409,
      "message": "Email already in use",
      "error": "Conflict"
    }
    ```

---

### 2.2 Verify Email OTP & Immediate Authentication
- **Endpoint**: `POST /auth/verify-email`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "code": "123456",
    "password": "StrongPassword123"
  }
  ```
- **Responses**:
  - `200 OK` (Includes JWT `accessToken` & `user` object):
    ```json
    {
      "message": "Email verified successfully.",
      "accessToken": "eyJhbGciOiJIUzI1Ni...",
      "user": {
        "id": "u1234567-e89b-12d3-a456-426614174000",
        "email": "john.doe@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "isOwner": true,
        "defaultOrganizationId": null
      }
    }
    ```
  - `400 Bad Request` (Invalid code, expired OTP, or password < 8 chars):
    ```json
    {
      "statusCode": 400,
      "message": [
        "password must be longer than or equal to 8 characters"
      ],
      "error": "Bad Request"
    }
    ```

---

### 2.3 Resend Verification OTP
- **Endpoint**: `POST /auth/resend-verification-otp`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com"
  }
  ```
- **Responses**:
  - `200 OK`:
    ```json
    {
      "message": "If the email is registered, a new OTP has been sent."
    }
    ```
  - `409 Conflict` (Account is already verified):
    ```json
    {
      "statusCode": 409,
      "message": "Email is already verified.",
      "error": "Conflict"
    }
    ```

---

### 2.4 Login
- **Endpoint**: `POST /auth/login`
- **Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "StrongPassword123"
  }
  ```
- **Responses**:
  - `200 OK`:
    ```json
    {
      "accessToken": "eyJhbGciOiJIUzI1Ni...",
      "user": {
        "id": "u1234567-e89b-12d3-a456-426614174000",
        "email": "john.doe@example.com",
        "firstName": "John",
        "lastName": "Doe",
        "isOwner": true,
        "defaultOrganizationId": null
      }
    }
    ```
  - `401 Unauthorized`:
    ```json
    {
      "statusCode": 401,
      "message": "Please verify your email before logging in",
      "error": "Unauthorized"
    }
    ```

---

## 3. Recommended Frontend Next.js Implementation Pattern

```typescript
// Example Next.js Client Implementation for Verification & Immediate Redirect

export async function handleVerifyOtp(email: string, code: string, password: string) {
  const res = await fetch('http://localhost:4000/auth/verify-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Verification failed');
  }

  // Store access token & user in auth context or cookies
  localStorage.setItem('accessToken', data.accessToken);
  
  // Immediately redirect user to organization creation or dashboard
  window.location.href = data.user.defaultOrganizationId ? '/dashboard' : '/create-organization';
  return data;
}
```
