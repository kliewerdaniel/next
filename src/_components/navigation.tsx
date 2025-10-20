'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export function Navigation() {
  const router = useRouter()

  const handleDashboardPush = () => {
    router.push('/dashboard')
  }

  return (
    <nav className="flex items-center space-x-6">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/blog" className="hover:underline">
        Blog
      </Link>
      <button onClick={handleDashboardPush} type="button">
        Dashboard
      </button>
    </nav>
  )
}
