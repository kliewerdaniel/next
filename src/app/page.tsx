import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/constants'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="font-bold text-xl">{SITE_CONFIG.name}</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/about" className="text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            Next.js Boilerplate
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Production-ready Next.js boilerplate with App Router, TypeScript,
            Tailwind CSS, and shadcn/ui components.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link href="/blog">View Blog</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>App Router</CardTitle>
                <CardDescription>
                  Server Components as default with file-system based routing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="/api/hello">View API</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Type Safety</CardTitle>
                <CardDescription>
                  Full TypeScript support with strictly typed routes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="/blog/first-post">Sample Post</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modern UI</CardTitle>
                <CardDescription>
                  shadcn/ui components with Tailwind CSS styling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="container py-8">
          <p className="text-center text-muted-foreground">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}
