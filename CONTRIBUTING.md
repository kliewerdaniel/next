# Contributing Guidelines

Thank you for considering contributing to this Next.js boilerplate! We welcome contributions from the community that help make this project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style & Standards](#code-style--standards)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)

## 🤝 Code of Conduct

This project follows a code of conduct to ensure a welcoming environment for all contributors. By participating, you agree to:

- Be respectful and inclusive
- Focus on constructive feedback
- Help newcomers learn and grow
- Resolve conflicts through discussion

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm, yarn, or pnpm
- Git

### Local Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

6. **Verify setup**:
   ```bash
   npm run build        # Should build successfully
   npm run type-check   # Should pass without errors
   npm run lint         # Should pass without errors
   npm test             # Tests should pass
   ```

## 🔄 Development Workflow

### Branching Strategy

This project uses [GitHub Flow](https://guides.github.com/introductions/flow/):

- **`main`**: Production-ready code (protected)
- **Feature branches**: `feature/name-of-feature`
- **Bug fix branches**: `fix/issue-description`
- **Documentation**: `docs/update-description`

### Commit Conventions

Follow [Conventional Commits](https://conventionalcommits.org/):

```bash
# Examples:
feat: add user authentication system
fix: resolve mobile navigation overflow bug
docs: update deployment instructions
style: format components with consistent spacing
refactor: restructure API route handlers
test: add coverage for blog post creation
chore: update dependency versions
```

### Making Changes

1. **Create a branch** for your work:
   ```bash
   git checkout -b feature/amazing-new-feature
   ```

2. **Make your changes**, following the [code standards](#code-style--standards)

3. **Test your changes**:
   ```bash
   npm run type-check
   npm run lint
   npm run test
   npm run build
   ```

4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: implement amazing new feature"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/amazing-new-feature
   ```

6. **Create a Pull Request** via GitHub

## 📝 Code Style & Standards

### TypeScript
- Use strict TypeScript settings
- Type all function parameters and return values
- Use interfaces over type aliases for object shapes
- Prefer `unknown` over `any` for unknown data
- Use `const` assertions where possible

### React Components
- Use functional components with hooks
- Prefer Server Components over Client Components
- Add `'use client'` directive only when needed
- Use meaningful component and hook names
- Keep components small and focused

### Naming Conventions
- **Components**: PascalCase (`Navigation`, `BlogPost`)
- **Hooks**: camelCase starting with `use` (`useLocalStorage`)
- **Utilities**: camelCase (`cn`, `formatDate`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_ENDPOINTS`)
- **Types**: PascalCase (`BlogPost`, `ApiResponse`)

### File Organization
```
src/
├── app/                    # Next.js routes
├── _components/           # Shared components
├── _lib/                  # Application logic
├── _types/                # TypeScript definitions
├── _utils/                # Utility functions
└── _hooks/                # Custom hooks
```

### Import Order
```typescript
// 1. React imports
import React from 'react'

// 2. External libraries
import { Button } from '@/components/ui/button'

// 3. Internal modules
import { SITE_CONFIG } from '@/lib/constants'

// 4. Type imports (use `import type`)
import type { User } from '@/types/global'
```

## 🔍 Pull Request Process

### Before Submitting

1. **Update tests** for new features
2. **Update documentation** if needed
3. **Ensure all checks pass**:
   - TypeScript compilation
   - ESLint validation
   - Test suite execution
   - Build process completion

### PR Description Template

```markdown
## Description
Brief description of the changes made.

## Type of Change
- [ ] Bug fix (non-breaking change)
- [ ] New feature (non-breaking change)
- [ ] Breaking change (fix or feature)
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] Manual testing performed
- [ ] Tests pass locally

## Screenshots/Examples
Add screenshots or examples of the changes in action.

## Related Issues
Closes #123, relates to #456

## Additional Notes
Any additional context or information.
```

### Review Process

Once submitted, your PR will:
1. **Trigger CI/CD** checks
2. **Be reviewed** by maintainers
3. ** potentially request changes**
4. **Get merged** when approved

## 🧪 Testing

### Types of Tests

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API route and data flow testing
- **E2E Tests**: Full user journey testing (future)

### Testing Guidelines

1. **Write tests** for new features and bug fixes
2. **Achieve 80% coverage** minimum
3. **Use descriptive test names** that explain intent
4. **Mock external dependencies** appropriately
5. **Test error conditions** and edge cases

### Running Tests

```bash
# Run all tests
npm test

# Run in watch mode
npm run test:watch

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- utils.test.ts
```

### Test File Organization

Tests should be co-located with their source files:
```
component/
├── Component.tsx
├── Component.test.tsx       # Unit tests
└── __tests__/
    └── Component.test.tsx   # Alternative location
```

### Example Test

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Hello World</Button>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## 📖 Documentation

### Documentation Guidelines

- Write clear, concise comments
- Document complex business logic
- Include JSDoc for public APIs
- Keep README.md current and accurate
- Document breaking changes

### Documentation Updates

When making changes that affect users:

1. **Update README.md** if needed
2. **Update inline documentation**
3. **Add migration guides** for breaking changes
4. **Update code comments** for complex logic

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Environment details** (Node version, OS, browser)
3. **Steps to reproduce**
4. **Expected vs actual behavior**
5. **Screenshots/logs** when applicable
6. **Code snippets** that reproduce the issue

### Feature Requests

For new features, please include:

1. **Clear description** of the proposed feature
2. **Use case** - when and why would this be useful
3. **Implementation ideas** (optional)
4. **Alternative solutions** considered

### Issue Template

```markdown
## Bug Report

**Environment:**
- Node Version: v18.18.0
- Browser: Chrome 120
- OS: macOS 12.0

**Steps to Reproduce:**
1. Go to '/blog'
2. Click on 'Create New Post'
3. See error

**Expected Behavior:**
Form should submit successfully

**Actual Behavior:**
Form submission fails with error message

**Screenshots:**
[Attach screenshots if applicable]

**Additional Context:**
Add any other context about the problem here.
```

## 🙌 Recognition

Contributors will be:
- Listed in the repository
- Mentioned in release notes
- Recognized for their impact on the project

We appreciate every contribution, whether it's:
- Code improvements
- Bug reports
- Feature suggestions
- Documentation updates
- Community support

Thank you for contributing to this Next.js boilerplate! 🎉

---

**Happy coding! 🚀**
