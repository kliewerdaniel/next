import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

type BlogPost = {
  id: string
  slug: string
  title: string
  excerpt: string
  createdAt: string
  published: boolean
}

async function getBlogPosts(): Promise<{ posts: BlogPost[]; total: number }> {
  try {
    // ISR: Incremental Static Regeneration configuration
    // Page is statically generated but revalidates every 60 seconds
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog`, {
      next: {
        revalidate: 60, // ISR: Revalidate every 60 seconds
        tags: ['blog-posts'], // Cache tag for targeted cache invalidation
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    // Fallback to empty data - graceful failure for ISR
    return { posts: [], total: 0 }
  }
}

// ISR: This page uses Incremental Static Regeneration
export const revalidate = 60 // Revalidate page every 60 seconds

export default async function BlogPage() {
  const { posts, total } = await getBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest articles and insights about modern web development.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Showing {total} published posts • Page regenerates every 60 seconds (ISR)
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:underline"
                      prefetch={false} // Don't prefetch individual posts
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="link" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>

        {/* ISR Information */}
        <div className="mt-12 p-6 bg-muted/30 rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-2">Incremental Static Regeneration (ISR)</h3>
          <p className="text-sm text-muted-foreground">
            This page is statically generated at build time but automatically regenerates
            every 60 seconds when new requests come in. This provides the speed of static
            content with the freshness of dynamic content.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Current as of: {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  )
}
