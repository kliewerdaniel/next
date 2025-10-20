# Next.js Boilerplate

[![CI/CD Pipeline](https://github.com/kliewerdaniel/next/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/nextjs-boilerplate/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/your-org/nextjs-boilerplate/graph/badge.svg)](https://codecov.io/gh/your-org/nextjs-boilerplate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Production-ready Next.js boilerplate with App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

![Next.js Boilerplate Preview](../../1020009.png)

## ✨ Features

- ✅ **Next.js 15.5.6** with App Router & Server Components
- ✅ **TypeScript** with strict type checking & typed routes
- ✅ **Tailwind CSS v4** utility-first framework
- ✅ **shadcn/ui** accessible components (Open Code philosophy)
- ✅ **Jest + React Testing Library** comprehensive testing
- ✅ **ESLint + Prettier + Husky** code quality automation
- ✅ **NextAuth** authentication infrastructure
- ✅ **Security hardened** with headers & middleware
- ✅ **SEO optimized** with metadata & sitemap
- ✅ **CI/CD pipeline** with GitHub Actions
- ✅ **Vercel deployment** ready
- ✅ **Performance optimized** with ISR, caching, image optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0 or later
- npm or yarn or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/kliewerdaniel/next.git
cd next

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Setup

Edit `.env.local` with your configuration:

```bash
# Application
NEXT_PUBLIC_APP_NAME=Next.js Boilerplate
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Authentication (NextAuth.js)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-very-long-random-secret-key

# API Keys
API_SECRET_KEY=your-api-secret-key

# Optional: Database, OAuth providers, etc.
```

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/       # Route groups
│   │   ├── api/               # API routes
│   │   ├── blog/              # Dynamic blog routes
│   │   ├── dashboard/         # Parallel routes
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # SEO sitemap
│   │   ├── robots.ts          # SEO robots.txt
│   └── _components/           # Shared components
│   │   ├── navigation.tsx     # Site navigation
│   │   ├── secure-data-demo.tsx # Security examples
│   │   └── image-optimization-demo.tsx # Performance demos
│   ├── _lib/                  # Utilities
│   │   ├── constants.ts       # App constants
│   │   └── utils.ts           # UI utilities
│   ├── _types/                # TypeScript definitions
│   │   └── global.ts          # Global types
│   ├── _utils/                # Helper functions
│   │   └── formatters.ts      # Data formatters
│   └── _hooks/                # Custom React hooks
│       └── useLocalStorage.ts # Storage hooks
├── public/                    # Static assets
├── docs/                      # Documentation
├── .github/                   # GitHub Actions
├── .env.example               # Environment template
├── next.config.ts            # Next.js configuration
├── middleware.ts              # Route middleware
├── jest.config.js            # Testing configuration
└── tailwind.config.ts        # Tailwind configuration
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Check TypeScript types

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage

# CI/CD
npm run build        # Production build
```

## 🎯 Key Architecture Patterns

### App Router
- **File-system routing**: File names = URLs
- **Nested layouts**: UI composition
- **Parallel routes**: Multiple components simultaneously
- **Dynamic routes**: `[slug]` parameter handling

### Data Fetching
- **Server Components**: Direct database calls
- **ISR (Incremental Static Regeneration)**: Dynamic static content
- **Caching strategies**: Cache tags, revalidation

### Security
- **Middleware protection**: Route-level authentication
- **Security headers**: CSP, X-Frame-Options, etc.
- **Environment variables**: Safe credential management

### Testing
- **Unit tests**: Component & utility functions
- **Integration tests**: API route testing
- **Coverage tracking**: 80%+ code coverage targets

## 🚀 Deployment

### Vercel (Recommended)

1. **Import Repository**
   ```bash
   # GitHub repository → Vercel import
   # Automatic Next.js detection
   ```

2. **Configure Environment Variables**
   ```bash
   # Settings → Environment Variables
   # Use .env.example as reference
   ```

3. **Deploy**
   ```bash
   # Automatic deployment on push
   # Production domain: https://your-app.vercel.app
   ```

### Alternative Platforms

- **Netlify**: Similar setup with good static site support
- **Railway**: Full Docker/Backend support if needed
- **AWS**: EC2/S3 with CloudFront for global CDN

See [`docs/deployment.md`](docs/deployment.md) for detailed instructions.

## 🔧 Configuration

### Authentication (Optional)
```typescript
// Configure NextAuth in src/lib/auth.ts
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add more providers...
  ],
}
```

### Database (Optional)
```typescript
// Connect to database in API routes
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```

### Custom UI Components
```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]

# Available components: button, card, input, etc.
```

## 📚 Examples

### Creating a New Route
```typescript
// src/app/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      {/* Server-side data fetching */}
    </div>
  )
}
```

### Adding API Endpoint
```typescript
// src/app/api/products/route.ts
export async function GET() {
  return Response.json({ products: [] })
}
```

### Testing Components
```typescript
// src/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Hello</Button>)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch
3. Commit with conventional commits
4. Test and lint your code
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: [GitHub Issues](https://github.com/your-org/nextjs-boilerplate/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-org/nextjs-boilerplate/discussions)
- **Documentation**: See [docs/](docs/) folder

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Vercel](https://vercel.com/) - Deployment platform

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
