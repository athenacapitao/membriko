import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeTruthy()
  })

  it('applies neutral variant by default', () => {
    const { container } = render(<Badge>Tag</Badge>)
    const span = container.firstChild as HTMLElement
    expect(span.className).toContain('bg-surface-alt')
    expect(span.className).toContain('text-text-muted')
  })

  it('applies primary variant classes', () => {
    const { container } = render(<Badge variant="primary">Primary</Badge>)
    const span = container.firstChild as HTMLElement
    expect(span.className).toContain('text-primary')
  })

  it('applies accent variant classes', () => {
    const { container } = render(<Badge variant="accent">Accent</Badge>)
    const span = container.firstChild as HTMLElement
    expect(span.className).toContain('text-amber-700')
  })

  it('applies success variant classes', () => {
    const { container } = render(<Badge variant="success">Done</Badge>)
    const span = container.firstChild as HTMLElement
    expect(span.className).toContain('text-success')
  })

  it('is rounded-full', () => {
    const { container } = render(<Badge>Tag</Badge>)
    const span = container.firstChild as HTMLElement
    expect(span.className).toContain('rounded-full')
  })
})
