interface PageProps {
  params: { slug: string }
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = params

  // In a real app, this would fetch data from a database
  // For demo purposes, we'll simulate post data
  const posts = [
    {
      id: '1',
      slug: 'first-post',
      title: 'Getting Started with Next.js Boilerplate',
      content: 'This is the first blog post showing how the routing works...',
      author: 'Boilerplate Author',
      excerpt: 'A comprehensive guide to understanding this Next.js boilerplate.',
      createdAt: new Date('2024-01-15'),
    },
    {
      id: '2',
      slug: 'second-post',
      title: 'Advanced Routing Patterns',
      content: 'Exploring advanced App Router features...',
      author: 'Boilerplate Author',
      excerpt: 'Dive deep into Next.js App Router capabilities.',
      createdAt: new Date('2024-01-22'),
    },
  ]

  const post = posts.find(p => p.slug === slug)

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
              <span>{post.createdAt.toLocaleDateString()}</span>
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
