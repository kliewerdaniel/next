interface PageProps {
  params: { slug: string }
}

type BlogPost = {
  id: string
  slug: string
  title: string
  content: string
  author: string
  excerpt: string
  createdAt: string
  published: boolean
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blog?slug=${slug}`, {
      // Cache for static generation
      next: { revalidate: 300 }, // 5 minutes
    })

    if (!response.ok) {
      if (response.status === 404) return null
      throw new Error('Failed to fetch blog post')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params

  const post = await getBlogPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              {post.excerpt}
            </p>
            <p>{post.content}</p>
          </div>
        </article>
      </div>
    </div>
  )
}

// Generate static paths for static generation (SSG)
export async function generateStaticParams() {
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
  ]
}
