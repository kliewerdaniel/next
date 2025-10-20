import { NextRequest, NextResponse } from 'next/server'

// This demonstrates server-side secure data fetching
// In a real app, this might connect to a database with sensitive credentials

export async function GET(request: NextRequest) {
  try {
    // Check if user is authenticated (extract from middleware)
    // This would be handled by middleware in production

    // Validate API secret (server-side only - never exposed to client)
    const apiSecret = process.env.API_SECRET_KEY
    if (!apiSecret) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Server-side secure data access
    // This data can be safely accessed because:
    // 1. API_SECRET_KEY is never exposed to the client
    // 2. Database credentials are server-side only
    // 3. Sensitive operations happen in Server Components/API routes

    const secureData = {
      message: 'This data was securely fetched server-side',
      timestamp: new Date().toISOString(),
      sensitiveInfo: {
        // Example of data that should NEVER be sent to client
        internalApiToken: 'server-only-token-' + Date.now(),
        databaseConnectionString: 'postgres://user:pass@db:5432/secure',
        // In real apps: database results, internal API calls, etc.
      },
      publicFilteredData: {
        // Only public-safe data sent to client
        userCount: 42,
        serverStatus: 'healthy',
        lastUpdated: new Date().toLocaleTimeString(),
      },
    }

    // Log secure operation (server-side only)
    console.log('[Secure API] Data accessed at', new Date().toISOString())

    return NextResponse.json(secureData)

  } catch (error) {
    console.error('Secure data access error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
