import { NextRequest } from 'next/server'

// Mock blog data - in a real app, this would be from a database
const mockPosts = [
  {
    id: '1',
    slug: 'first-post',
    title: 'Getting Started with Next.js Boilerplate',
    content: 'This is the first blog post showing how the routing works...',
    author: 'Boilerplate Author',
    excerpt: 'A comprehensive guide to understanding this Next.js boilerplate.',
    createdAt: new Date('2024-01-15'),
    published: true,
  },
  {
    id: '2',
    slug: 'second-post',
    title: 'Advanced Routing Patterns',
    content: 'Exploring advanced App Router features...',
    author: 'Boilerplate Author',
    excerpt: 'Dive deep into Next.js App Router capabilities.',
    createdAt: new Date('2024-01-22'),
    published: true,
  },
  {
    id: '3',
    slug: 'server-components-deep-dive',
    title: 'Server Components Deep Dive',
    content: 'Understanding React Server Components and when to use them...',
    author: 'Boilerplate Author',
    excerpt: 'Master the server/client component boundary patterns.',
    createdAt: new Date('2024-02-01'),
    published: true,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (slug) {
      const post = mockPosts.find(p => p.slug === slug)
      if (!post) {
        return new Response('Post not found', { status: 404 })
      }
      return new Response(JSON.stringify(post))
    }

    // Return all published posts
    const publishedPosts = mockPosts.filter(post => post.published)
    return new Response(JSON.stringify({
      posts: publishedPosts,
      total: publishedPosts.length
    }))
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.content) {
      return new Response('Missing required fields: title and content', { status: 400 })
    }

    // Create new post (in real app, save to database)
    const newPost = {
      id: Date.now().toString(),
      slug: body.title.toLowerCase().replace(/\s+/g, '-'),
      title: body.title,
      content: body.content,
      author: body.author || 'Anonymous',
      excerpt: body.excerpt || body.content.slice(0, 150) + '...',
      createdAt: new Date(),
      published: body.published || false,
    }

    // Add to mock data (would be database insert in real app)
    mockPosts.push(newPost)

    return new Response(JSON.stringify(newPost), { status: 201 })
  } catch (error) {
    return new Response('Invalid JSON', { status: 400 })
  }
}
