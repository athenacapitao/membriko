import { render, screen } from '@testing-library/react'
import { Container } from '../Container'

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Hello</Container>)
    expect(screen.getByText('Hello')).toBeTruthy()
  })

  it('applies default layout classes', () => {
    const { container } = render(<Container>Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('max-w-7xl')
    expect(div.className).toContain('mx-auto')
    expect(div.className).toContain('px-4')
  })

  it('merges additional className', () => {
    const { container } = render(<Container className="custom-class">Content</Container>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('custom-class')
    expect(div.className).toContain('max-w-7xl')
  })
})
