import { render, screen } from '@testing-library/react'
import { Navigation } from '../navigation'

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}))

describe('Navigation', () => {
  it('renders navigation links', () => {
    render(<Navigation />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
  })

  it('has correct links', () => {
    render(<Navigation />)

    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about')
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '/blog')
    expect(screen.getByText('Dashboard')).toHaveAttribute('type', 'button')
  })

  it('has proper accessibility attributes', () => {
    render(<Navigation />)

    expect(screen.getByText('Home')).toHaveAttribute('href')
    expect(screen.getByText('About')).toHaveAttribute('href')
    expect(screen.getByText('Blog')).toHaveAttribute('href')
  })
})
