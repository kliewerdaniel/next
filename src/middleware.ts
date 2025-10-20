import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/admin', '/profile']

// API routes that may need authentication
const protectedApiRoutes = ['/api/admin', '/api/user']

export default withAuth(
  function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Log requests in development (token logging happens in authorized callback)
    if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_ENABLE_DEBUG === 'true') {
      console.log(`[Middleware] ${request.method} ${pathname}`)
    }

    // Additional security headers (these could also be moved to next.config.ts)
    const response = NextResponse.next()

    // Security headers
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    // CSP (Content Security Policy)
    response.headers.set(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self'",
        "connect-src 'self' https://api.example.com",
        "frame-src 'none'",
      ].join('; ')
    )

    // Rate limiting headers (example)
    response.headers.set('X-RateLimit-Limit', '100')
    response.headers.set('X-RateLimit-Remaining', '99')
    response.headers.set('X-RateLimit-Reset', (Date.now() + 60000).toString())

    return response
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to public routes
        if (!protectedRoutes.some(route => pathname.startsWith(route)) &&
            !protectedApiRoutes.some(route => pathname.startsWith(route))) {
          return true
        }

        // Require authentication for protected routes
        return !!token
      },
    },
    pages: {
      signIn: '/auth/signin',
      error: '/auth/error',
    },
  }
)

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes - handled separately for more complex logic)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
