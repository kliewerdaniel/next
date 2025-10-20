/**
 * Application constants
 */

export const SITE_CONFIG = {
  name: 'Next.js Boilerplate',
  description: 'Production-ready Next.js boilerplate',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const

export const API_ENDPOINTS = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  posts: '/posts',
  users: '/users',
  auth: '/auth',
} as const

export const CACHE_TTL = {
  short: 60,      // 1 minute
  medium: 3600,   // 1 hour
  long: 86400,    // 1 day
} as const
