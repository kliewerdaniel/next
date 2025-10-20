# Security Guidelines

## Purpose

This document defines the security practices, policies, and architecture considerations for the Next.js boilerplate project, ensuring the protection of sensitive data, authentication integrity, and overall application security.

## Project Context

| Field | Description |
|-------|-------------|
| Project Name | Next.js Boilerplate |
| Domain / Industry | Web application development |
| Stakeholders | Security engineers, developers, compliance officers |
| Personas / Users | Security specialists, application developers |
| Technologies / Frameworks | Next.js, Node.js, Auth providers |
| Business Objectives | Secure application development and deployment |
| Functional Requirements | Authentication, authorization, data protection |
| Non-functional Requirements | Secure by default, compliance-ready |
| Constraints | Server-side security practices, environment segregation |
| Deployment Environments | Secure production environments with secrets management |
| Metrics / KPIs | Zero security incidents, OWASP compliance score |
| Security / Risk Assumptions | Server-side prevents client-side exposure, middleware protects routes |

This document outlines the mandatory security practices and architecture considerations for securing this Next.js application, focusing on handling sensitive data, environment configuration, and authorization controls.

---

### 1. Handling Sensitive Information

It is mandatory to implement secure practices for handling **API keys, tokens, and sensitive data**. These credentials must never be exposed directly in client-side code, and their storage and access should adhere strictly to the guidelines for environment variables and server-side operations outlined below.

### 2. Environment Variable Management

All sensitive configuration data, such as API keys and database URLs, must be managed using Next.js Environment Variables.

#### Mandates for Environment Variables:

1.  **Clear Definition and Management:** Environment variables (e.g., API keys, database URLs) must be clearly defined and managed.
2.  **Staging Differentiation:** Variables must be segmented based on the application stage (development, staging, production).
3.  **Use of `.env` Files:** Next.js utilizes specific top-level files to define environment variables for different stages:
    *   `.env`: General environment variables.
    *   `.env.local`: Local environment variables.
    *   `.env.production`: Production environment variables.
    *   `.env.development`: Development environment variables.
4.  **Type Safety (Recommended):** If TypeScript is enabled, Next.js can generate types for loaded environment variables during development for improved IntelliSense. Note that types are generated based on variables loaded at development runtime, excluding variables from `.env.production*` files unless the development server is run with `NODE_ENV=production`.

### 3. Leveraging React Server Components (RSC) for Data Security

The Next.js App Router utilizes React Server Components (RSC). This architecture provides a crucial security benefit for data fetching:

*   **Safe Server-Side Execution:** Next.js recommends fetching all data on the server via RSCs or Route Handlers.
*   **Preventing Credential Leakage:** Because **React Server Components (RSC) execute directly on the server**, sensitive operations—such as **direct database calls**—can be safely performed. This prevents **credentials or secrets from leaking to the client**, thereby removing the necessity of using an intermediary API Route (Route Handler) to hide secrets when performing data fetching.
*   **Direct Data Fetching:** RSCs enable developers to use `async/await` and `fetch` directly within the component for data retrieval on the server.

### 4. Authentication and Authorization

The application must integrate robust **Authentication and Authorization** mechanisms to protect specific routes and resources.

#### Requirements:

1.  **Protected Routes:** Features like dashboard pages must be protected by authentication.
2.  **Middleware Integration:** **Middleware** (`middleware.ts`) is a required component for authorization logic. Middleware can inspect incoming requests and implement logic (such as checking for session tokens) before a request is completed.
3.  **Authentication Framework:** Features like **NextAuth.js** are common components used in conjunction with Middleware to enforce protected routes.
4.  **Redirection:** If a user is unauthenticated or unauthorized for a page, they must be programmatically redirected (e.g., using `router.push('/login')`).

### Security Risks Related to Architecture Decisions

Security practices are closely linked to [Architecture](architecture.md#security-considerations) decisions, such as server-side data fetching to prevent leaks.

### SEO Security Note

SEO practices in [Implementation](implementation.md#seo-metadata) should consider security, ensuring no sensitive data is exposed in metadata.

### Standards Alignment

TODO: Define how this document should follow standards for formatting, naming, architecture, security, testing, and documentation. Reference any existing standards.md if applicable.

### Prompt Templates for CLine Coding (To be used later)
- Configure Next.js environment variables for different stages
- Implement authentication middleware using NextAuth.js
- Create protected routes with authorization checks
- Set up secure server-side data fetching in React Server Components
- Build JWT token handling and session management
- Implement CSRF protection for forms
- Generate secure API routes with input validation
- Set up HTTPS and secure headers configuration
