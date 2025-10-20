import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Next.js API route!',
    timestamp: new Date().toISOString(),
    framework: 'Next.js 15.5.6',
  })
}

export async function POST(request: Request) {
  const body = await request.json()

  return NextResponse.json({
    received: body,
    timestamp: new Date().toISOString(),
    method: 'POST',
  })
}
