import { render, screen } from '@testing-library/react'
import { Section } from '../Section'

describe('Section', () => {
  it('renders children', () => {
    render(<Section>Section content</Section>)
    expect(screen.getByText('Section content')).toBeTruthy()
  })

  it('renders with id attribute when provided', () => {
    const { container } = render(<Section id="hero">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.getAttribute('id')).toBe('hero')
  })

  it('applies dark background by default', () => {
    const { container } = render(<Section>Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-bg')
  })

  it('applies darker background class when bg=darker', () => {
    const { container } = render(<Section bg="darker">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-bg-subtle')
  })

  it('applies elevated background when bg=elevated', () => {
    const { container } = render(<Section bg="elevated">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-bg-elevated')
  })

  it('applies accent background when bg=accent', () => {
    const { container } = render(<Section bg="accent">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-accent')
  })

  it('includes vertical padding classes', () => {
    const { container } = render(<Section>Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('py-16')
    expect(section.className).toContain('lg:py-24')
  })

  it('merges additional className', () => {
    const { container } = render(<Section className="extra">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('extra')
  })
})
