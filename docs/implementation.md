# Implementation Guidelines

## Purpose

This document provides detailed implementation guidelines, coding standards, and setup procedures for the Next.js boilerplate project, ensuring consistent codebase development, type safety, and performance optimization.

## Project Context

| Field | Description |
|-------|-------------|
| Project Name | Next.js Boilerplate |
| Domain / Industry | Web application development |
| Stakeholders | Developers, AI assistants, QA engineers |
| Personas / Users | Full-stack developers implementing features |
| Technologies / Frameworks | Next.js, React, TypeScript, Tailwind CSS, shadcn/ui |
| Business Objectives | Deliver consistent, performant code implementation |
| Functional Requirements | Type safety, component composability, optimized rendering |
| Non-functional Requirements | Code quality, maintainability, performance |
| Constraints | Strict use of App Router conventions, Open Code components |
| Deployment Environments | Any environment supporting Node.js |
| Metrics / KPIs | Build times, code coverage, performance benchmarks |
| Security / Risk Assumptions | Type safety prevents runtime errors, server-side security practices |

This document outlines the foundational guidelines and standard operating procedures (SOPs) for setting up and maintaining the Next.js application codebase using the App Router. Adhering to these guidelines ensures code consistency, type safety, performance optimization, and maintainability.

---

### 1. Codebase Setup and Consistency

The project will use the **Next.js App Router** for all new development. The App Router is designed to leverage modern React features, such as Server Components, and provides improved structure and performance.

**Project Organization:**

*   **Structure:** We utilize a logical and consistent file/folder structure. The primary application logic resides within the `app/` directory. We may optionally use a `src/` folder to separate application code from project configuration files.
*   **Colocation:** Favor colocation, grouping related components, logic, and tests within their respective route directories where it makes sense. Files placed within a route segment folder that are not special files (`page.js`, `route.js`, etc.) are safe to be colocated without accidentally becoming routable.
*   **Utility Folders:** Use private folders (prefixed with an underscore, e.g., `_utils`, `_components`) for storing utility functions and shared components, although colocation generally ensures non-routability.

---

### 2. Type Safety and Development Tooling

**Mandate the use of TypeScript** for improved code quality, type safety, and better developer experience.

#### 2.1 TypeScript Configuration

Next.js provides built-in TypeScript support. When configuring or verifying the project setup:

1.  **Enforce TypeScript:** All application files must use `.ts` or `.tsx` extensions.
2.  **Include Generated Next.js Types:** To maintain type validation, especially for features like statically typed links, developers **must ensure the generated Next.js types are included** in the `tsconfig.json` file.
    *   Verify that `.next/types/**/*.ts` is present in the `include` array of `tsconfig.json`:

    ```json
    // tsconfig.json excerpt
    {
      "include": [
        "next-env.d.ts",
        ".next/types/**/*.ts", // This is required for generated types
        "**/*.ts",
        "**/*.tsx"
      ],
      "exclude": ["node_modules"]
    }
    ```

#### 2.2 Tooling

Configure essential tooling such as **ESLint for code linting** and **Prettier for consistent code formatting**.

---

### 3. Styling and Component Implementation

#### 3.1 Styling Strategy

The primary styling strategy is the **utility-first philosophy of Tailwind CSS**. Tailwind CSS works by scanning HTML files and components for class names and generating corresponding styles.

Supported styling methods within the application include:

1.  **Tailwind CSS:** Preferred method using utility classes.
2.  **CSS Modules:** Supported for scoped component styles.
3.  **Global CSS:** Used for defining base styles and configuration.

#### 3.2 Component Implementation (`shadcn/ui`)

We will utilize **shadcn/ui** for high-quality, accessible components.

*   **Open Code Philosophy:** Unlike traditional component libraries installed via NPM, shadcn/ui operates on an **Open Code philosophy**. Developers are handed the **actual component code** (distributed via a CLI).
*   **Customization:** This approach provides **full control** to customize and extend components directly, making it unnecessary to wrap components or write workarounds to override styles.
*   **Composition:** All shadcn/ui components are designed to be composable and share a common, predictable interface, promoting system consistency.
*   **Installation:** Components are added using the command-line tool (`npx shadcn@latest add <component>`).

---

### 4. Routing Implementation

The Next.js App Router uses a file-system-based routing system where folders define URL segments and special files like `page.js` (or `.tsx`) define the page contents.

#### 4.1 Navigation Between Routes

Developers should use the following methods for navigation:

1.  **`Link` Component:** For declarative navigation and smooth client-side transitions, **use the `Link` component** imported from `next/link`. The `Link` component uses the `href` property to specify the navigation route.
2.  **`useRouter` Hook:** Use the `useRouter` hook (from `next/navigation`) for programmatic navigation, such as navigating after a button click or form submission. Programmatic navigation is typically handled using methods like `router.push(url)` or `router.replace(url)`.

#### 4.2 Client Component Directive

**Crucially, any component utilizing React Hooks**, including `useRouter` from `next/navigation`, **must be explicitly declared as a Client Component**.

*   This declaration is achieved by adding the **`'use client'`** directive at the top of the file, before any import statements.

---

### 5. State Management and Error Handling

The App Router provides dedicated special files for managing loading states, errors, and unhandled routes, utilizing React Suspense and Error Boundaries.

| Special File | Purpose | Requirement/Context |
| :--- | :--- | :--- |
| **`loading.js` / `.tsx`** | Shows a loading indicator or skeleton UI for a route segment. | **Automatically wraps the component in a `<Suspense>` boundary**. This UI triggers when an asynchronous request is detected. |
| **`error.js` / `.tsx`** | Catches unexpected runtime errors within a route segment or its children. | The exported React component **must be a Client Component** and include the **`'use client'` directive** at the top. |
| **`not-found.js` / `.tsx`** | Defines a custom UI for unmatched routes, serving as a custom 404 page. | This special file must export a React component. It can also be invoked programmatically using `notFound()`. |

---

### 6. SEO and Performance Optimization

All pages must prioritize SEO and performance optimizations.

#### 6.1 SEO Metadata

In the Next.js App Router, metadata handling utilizes specific conventions.

*   **Requirement:** For defining SEO metadata, developers must use the **`export const metadata = {}`** object or the **`generateMetadata()`** function.
*   **Content:** Each page must include essential metadata such as `title`, `meta description`, Open Graph tags (e.g., `og:title`, `og:image`), and Twitter Card tags.

#### 6.2 Strategic Rendering and Data Fetching

Mandate the strategic utilization of server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR) based on content dynamism.

In the App Router, data fetching uses the standard `fetch` API and Async React Server Components. Next.js manages caching and rendering based on `fetch` options:

| Rendering Type | Next.js App Router Data Fetching equivalent | `fetch` Options |
| :--- | :--- | :--- |
| **Static Site Generation (SSG)** | Cached until manually invalidated (similar to `getStaticProps`). | `cache: 'force-cache'` (default) |
| **Incremental Static Regeneration (ISR)** | Cached with a specific lifetime (similar to `getStaticProps` with `revalidate`). | `next: { revalidate: N }` |
| **Server-Side Rendering (SSR)** | Refetched on every request (similar to `getServerSideProps`). | `cache: 'no-store'` |

#### 6.3 Optimization Assets

*   **Image Optimization:** Developers must integrate the **Next.js Image component** and optimize image assets for faster loading times.
*   **Font Optimization:** Utilize Next.js **Font Optimization** to improve web performance.

### Dependencies and Architecture Reference

See [Architecture Document](architecture.md#codebase-setup) for organizational guidelines and colocation principles.

### Related Requirements

Implementation practices directly support [Requirements](requirements.md#error-handling) for performance and user experience.

### Standards Alignment

TODO: Define how this document should follow standards for formatting, naming, architecture, security, testing, and documentation. Reference any existing standards.md if applicable.

### Prompt Templates for CLine Coding (To be used later)
- Set up TypeScript configuration with Next.js generated types included
- Configure ESLint and Prettier for code quality and formatting
- Install and set up Tailwind CSS with utility-first classes
- Integrate shadcn/ui components using CLI and customize for project needs
- Implement navigation with Link component and useRouter hook in Client Components
- Create special files (loading.js, error.js, not-found.js) for state management
- Build pages with SEO metadata using export const metadata
- Optimize data fetching with appropriate fetch options for SSG/ISR/SSR
- Implement Next.js Image and Font Optimization components
