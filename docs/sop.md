# Standard Operating Procedures

## Purpose

This document establishes the standard operating procedures, development workflows, and code management standards for the Next.js boilerplate project, ensuring consistent practices across all project phases.

## Project Context

| Field | Description |
|-------|-------------|
| Project Name | Next.js Boilerplate |
| Domain / Industry | Web application development |
| Stakeholders | DevOps engineers, team leads, developers |
| Personas / Users | Development teams, CI/CD administrators |
| Technologies / Frameworks | Git, GitHub, Vercel, Next.js |
| Business Objectives | Streamlined development and deployment processes |
| Functional Requirements | Version control, automated testing, deployment pipelines |
| Non-functional Requirements | Consistent code quality, reliable deployments |
| Constraints | Use GitHub for hosting, Vercel for deployment |
| Deployment Environments | Automated CI/CD with staging and production |
| Metrics / KPIs | Deployment frequency, mean time to recovery |
| Security / Risk Assumptions | Automated checks prevent code issues |

# Standard Operating Procedures and Code Management Standards

This document outlines the required operational workflow and code management standards for this project, ensuring consistency, maintainability, and quality across all development phases.

---

### 1. Version Control and Branching Strategy

All source code must be managed using **Git**.

1.1. **Platform:** The official project repository is hosted on GitHub.
1.2. **Branching Strategy:** The project must establish and adhere to a clear branching strategy. Developers must choose and follow either the **Gitflow** or **GitHub Flow** model for managing code versions and collaboration.

### 2. Code Quality Enforcement

To ensure adherence to consistent coding standards and enhance code quality, automated tooling must be configured and enforced.

2.1. **Linters and Formatters:**
*   **ESLint** must be configured for code linting.
*   **Prettier** must be configured for consistent code formatting.

2.2. **Pre-commit Hooks:**
*   **Husky and Lint-Staged** must be implemented to establish pre-commit hooks.
*   These hooks will automatically run configured linters and formatters (ESLint, Prettier) on staged files before a commit is finalized. This process prevents inconsistent or poorly formatted code from entering the repository.

2.3. **Type Safety:**
*   **TypeScript** must be integrated for improved code quality, type safety, and a better developer experience.

### 3. Development Structure

The project structure must adhere to Next.js conventions, prioritizing organization and code discoverability.

3.1. **Next.js App Router Structure:**
*   The project utilizes the Next.js App Router.
*   Routes are determined by directory names, and a route is made publicly accessible when a `page.js` (or `.ts`/`.tsx`) or `route.js` file is added to a route segment.

3.2. **Source Directory (`src/`):**
*   It is highly recommended that the optional **`src/` directory** be used to house the application code (including the `app/` directory).
*   Utilizing the `src/` directory helps separate application code from project configuration files (which typically reside in the root directory).

3.3. **Modularity and Co-location:**
*   Components and utility functions must be designed to be modular and reusable to promote code reusability.
*   Practice **co-location** by grouping related files and components together, especially within route segments in the `app` directory, where non-routable files are safe from public access.

### 4. Deployment

A robust CI/CD pipeline must be configured to automate the process of building, testing, and deploying the application.

4.1. **CI/CD Pipeline Services:**
*   A Continuous Integration/Continuous Deployment (CI/CD) pipeline must be configured using services such as **GitHub Actions** or **Vercel**.
*   This pipeline will ensure automated builds, tests, and deployment.

4.2. **Deployment Platform:**
*   The application should be deployed on Vercel.

### 5. Documentation Maintenance

Comprehensive documentation is required for project maintenance and onboarding new developers.

5.1. **README.md:**
*   A comprehensive `README.md` must be maintained.
*   It must include clear instructions for project setup, development, testing, and deployment.

5.2. **Contributing Guidelines:**
*   Clear **Contributing Guidelines** must be established to streamline the process for new developers joining the project.

5.3. **Architecture Documentation:**
*   Key architectural decisions and system design must be consistently documented.

### 6. Next.js Utility Usage: Navigation Standards

All navigation within the application must follow Next.js best practices for performance and clarity.

6.1. **Internal Navigation:**
*   For navigation **between internal routes or pages** within the Next.js application, developers must use the **Next.js `Link` component** (imported from `next/link`).
*   The `Link` component is the best option for navigating routes, as it enables client-side navigation with built-in optimizations like prefetching.

6.2. **External Navigation:**
*   The native **anchor tag (`<a/>`)** must be reserved exclusively for linking and navigating to a page that is **external** to the application, or for invoking specific non-navigation functions.

6.3. **Programmatic Navigation:**
*   If programmatic route changes are necessary (e.g., triggering navigation upon a button click), the **`useRouter` hook** (from `next/navigation` in the App Router) should be utilized.
*   The `useRouter` hook allows access to methods like `router.push()` to navigate programmatically. Note that `window.location` is better suited for external URLs rather than `router.push`.

### Implementation and Deployment Flows

SOPs are directly implemented in [Implementation](implementation.md#account-setup) guidelines and deployment practices in [Requirements](requirements.md#deployment-environments).

### Standards Alignment

TODO: Define how this document should follow standards for formatting, naming, architecture, security, testing, and documentation. Reference any existing standards.md if applicable.

### Prompt Templates for CLine Coding (To be used later)
- Set up GitHub repository with branching strategy (Gitflow or GitHub Flow)
- Configure GitHub Actions for CI/CD pipeline automation
- Implement Husky and Lint-Staged for pre-commit hooks
- Set up ESLint and Prettier configuration files
- Configure Vercel deployment settings and environment variables
- Create comprehensive README.md documentation
- Establish Contributing Guidelines document
- Set up automated testing and code quality checks in pipeline
