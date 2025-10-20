## Purpose

This document serves as the central control mandate for all development work, ensuring consistency, maintainability, and optimal performance of the Next.js boilerplate. All future prompts and development implementations must strictly adhere to these principles.

## Project Context

| Field | Description |
|-------|-------------|
| Project Name | TODO: Next.js Boilerplate |
| Domain / Industry | Web application development |
| Stakeholders | Developers, AI assistants, project maintainers |
| Personas / Users | Full-stack developers using AI for code generation |
| Technologies / Frameworks | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui |
| Business Objectives | Create a reliable, performant Next.js boilerplate with AI-guided development |
| Functional Requirements | TODO: |
| Non-functional Requirements | Type safety, performance, maintainability, developer experience |
| Constraints | Exclusive use of App Router, shadcn/ui open code philosophy, colocation, private folders |
| Deployment Environments | TODO: Production servers, CI/CD pipelines |
| Metrics / KPIs | Build performance, code quality metrics |
| Security / Risk Assumptions | Standard web security practices, server-side data handling |

---

## 1. Core Framework and Routing Mandates

The boilerplate must exclusively utilize the Next.js App Router and leverage modern React features.

### 1.1 App Router Requirement

The project must strictly use the **Next.js App Router**. This is the recommended approach for new projects and offers significant improvements over previous page routers. The App Router leverages the benefits and updates introduced in the latest version of React (React 18 and later), including the use of React canary releases built-in.

### 1.2 Default Component Type: React Server Components (RSC)

**React Server Components (RSC) are mandated as the default component type.** The App directory enforces server-side rendering by default and makes use of RSC.

*   **RSC Benefits:** Each page under a route in the App Router is a ReactJS server component. RSC reduces the amount of client-side code that needs to be loaded, improving application performance.
*   **Data Fetching:** For data fetching, developers should use `fetch` and `async` APIs directly within Server Components. Since RSCs perform requests on the server, sensitive data requests (like database calls) can be performed directly without needing an intermediary API route, as credentials or secrets are not leaked to the client.

## 2. Type Safety and Linking

**TypeScript** must be integrated for robust type safety and improved code quality.

### 2.1 Statically Typed Links

To enhance type safety when navigating between pages and prevent typos and errors when using `next/link`, **Statically Typed Links must be enforced**.

This feature requires enabling `typedRoutes: true` in the Next.js configuration.

**Implementation in `next.config.ts`:**
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    typedRoutes: true, // Mandates statically typed links
}

export default nextConfig
```
When enabled, Next.js validates literal `href` strings and types `next/navigation` methods like `push`, `replace`, and `prefetch` within the App Router.

## 3. Styling and UI Library

### 3.1 Styling with Tailwind CSS

**Tailwind CSS is mandated for all styling needs**. Tailwind CSS uses a utility-first approach, scanning components for class names and generating corresponding styles.

### 3.2 UI Component Strategy: shadcn/ui and Open Code

The UI components must be sourced using **shadcn/ui**.

*   **Open Code Philosophy Mandate:** Component integration **must strictly follow the shadcn/ui Open Code philosophy**. Shadcn/ui is explicitly **not a traditional component library** where pre-compiled packages are imported from NPM.
*   **Integration Method:** Developers must integrate components by obtaining the actual component code, allowing for full transparency and easy customization. This allows developers to directly edit the source code, avoiding the need for wrapping components or writing workarounds to override styles.
*   **Composition:** All components should share a common, composable interface, making them predictable.

## 4. Project Structure and Organization

All future development prompts and implementations must strictly adhere to the documented Project Structure and Organization best practices.

### 4.1 Colocation

**Colocation is mandated** for improved code structure, organization, and developer experience. Related files and components should be grouped together where it makes sense.

*   In the App Router, files can be **safely colocated** inside route segments in the `app` directory without accidentally being routable, as only the content returned by `page.js` or `route.js` is sent to the client.

### 4.2 Private Folders for Utilities

To separate implementation details from the routing logic and organize internal files consistently, the use of **Private Folders is mandated** for utilities, hooks, or shared components.

*   **Naming Convention:** Private folders must be created by prefixing a folder with an underscore: `_folderName`.
*   **Routing Exclusion:** Prefixing a folder with an underscore opts the folder and all its subfolders out of the routing system, signifying it as a private implementation detail.
*   **Use Cases:** These folders are a safe place for non-routable files such as UI utilities (`_components`) or data utilities (`_lib`).

### Standards Alignment

TODO: Define how this document should follow standards for formatting, naming, architecture, security, testing, and documentation. Reference any existing standards.md if applicable.

### Prompt Templates for CLine Coding (To be used later)
- Implement Next.js components strictly using App Router and Server Components
- Set up next.config.ts with typedRoutes: true for type safety
- Generate Tailwind CSS configurations and stylesheets
- Integrate shadcn/ui components by copying source code
- Create utility functions in private folders (e.g., _lib, _utils)
- Build TypeScript interfaces for data models
- Generate unit tests for component functionality
