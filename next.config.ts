import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true, // MANDATORY per docs/ai_guidelines.md Section 2.1
  reactStrictMode: true,

  // Security headers
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        // Additional security for API routes
        source: '/api/(.*)',
        headers: [
          {
            key: 'X-RateLimit-Limit',
            value: '100', // Requests per minute
          },
          {
            key: 'X-RateLimit-Reset',
            value: (Date.now() + 60000).toString(),
          },
        ],
      },
    ]
  },

  // Security: Disable X-Powered-By header
  poweredByHeader: false,
};

export default nextConfig;
