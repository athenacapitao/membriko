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

  it('applies white background by default', () => {
    const { container } = render(<Section>Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-white')
  })

  it('applies surface background class when bg=surface', () => {
    const { container } = render(<Section bg="surface">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-surface')
  })

  it('applies navy background and white text when bg=navy', () => {
    const { container } = render(<Section bg="navy">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-navy')
    expect(section.className).toContain('text-white')
  })

  it('applies primary background and white text when bg=primary', () => {
    const { container } = render(<Section bg="primary">Content</Section>)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-primary')
    expect(section.className).toContain('text-white')
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
