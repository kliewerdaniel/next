/**
 * Global type definitions
 */

export interface User {
  id: string
  email: string
  name: string
  createdAt: Date
}

export interface Post {
  id: string
  title: string
  content: string
  authorId: string
  published: boolean
  createdAt: Date
  updatedAt: Date
}

export interface ApiResponse<T> {
  data: T
  message?: string
  error?: string
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface RequestConfig {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: unknown
  cache?: RequestCache
  next?: {
    revalidate?: number
  }
}
