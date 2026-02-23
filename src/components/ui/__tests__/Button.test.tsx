import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

// next/link is a server component — mock it for the test environment
vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))

describe('Button', () => {
  it('renders label text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeTruthy()
  })

  it('renders as a <button> when no href is given', () => {
    render(<Button>Action</Button>)
    const btn = screen.getByRole('button')
    expect(btn.tagName).toBe('BUTTON')
  })

  it('renders as an <a> tag when href is provided', () => {
    render(<Button href="/contact">Contact</Button>)
    const link = screen.getByRole('link', { name: 'Contact' })
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/contact')
  })

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledOnce()
  })

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>)
    const btn = screen.getByRole('button') as HTMLButtonElement
    expect(btn.disabled).toBe(true)
  })

  it('defaults to type="button"', () => {
    render(<Button>Submit</Button>)
    const btn = screen.getByRole('button') as HTMLButtonElement
    expect(btn.type).toBe('button')
  })

  it('accepts type="submit"', () => {
    render(<Button type="submit">Submit</Button>)
    const btn = screen.getByRole('button') as HTMLButtonElement
    expect(btn.type).toBe('submit')
  })

  it('applies primary variant classes by default', () => {
    render(<Button>Primary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-accent')
    expect(btn.className).toContain('text-navy')
  })

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-primary')
    expect(btn.className).toContain('text-white')
  })

  it('applies outline variant classes', () => {
    render(<Button variant="outline">Outline</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('border-primary')
    expect(btn.className).toContain('text-primary')
  })

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost">Ghost</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('bg-transparent')
  })

  it('applies sm size classes', () => {
    render(<Button size="sm">Small</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('text-sm')
  })

  it('applies lg size classes', () => {
    render(<Button size="lg">Large</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('text-lg')
    expect(btn.className).toContain('px-8')
  })

  it('merges additional className', () => {
    render(<Button className="custom">Custom</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toContain('custom')
  })
})
