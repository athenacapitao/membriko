import { render, screen } from '@testing-library/react'
import { CategoryCard } from '../CategoryCard'

vi.mock('next/link', () => ({
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>{children}</a>
  ),
}))

describe('CategoryCard', () => {
  const defaultProps = {
    icon: 'Home',
    title: 'Flat Roofs',
    description: 'Durable waterproofing for flat roofs.',
    count: 5,
    href: '/applications/flat-roofs',
  }

  it('renders the title', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(screen.getByText('Flat Roofs')).toBeTruthy()
  })

  it('renders the description', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(screen.getByText('Durable waterproofing for flat roofs.')).toBeTruthy()
  })

  it('renders the app count badge', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(screen.getByText('5 aplicações')).toBeTruthy()
  })

  it('links to the correct href', () => {
    render(<CategoryCard {...defaultProps} />)
    const link = screen.getByRole('link')
    expect(link.getAttribute('href')).toBe('/applications/flat-roofs')
  })

  it('renders an icon SVG', () => {
    const { container } = render(<CategoryCard {...defaultProps} />)
    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('renders "Ver mais" text', () => {
    render(<CategoryCard {...defaultProps} />)
    expect(screen.getByText('Ver mais')).toBeTruthy()
  })

  it('renders without crashing when icon name is unknown', () => {
    render(<CategoryCard {...defaultProps} icon="NonExistentIcon" />)
    expect(screen.getByText('Flat Roofs')).toBeTruthy()
  })
})
