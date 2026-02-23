import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardBody } from '../Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeTruthy()
  })

  it('has rounded-xl and border classes', () => {
    const { container } = render(<Card>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('rounded-xl')
    expect(div.className).toContain('border')
  })

  it('merges additional className', () => {
    const { container } = render(<Card className="extra">Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('extra')
  })
})

describe('CardHeader', () => {
  it('renders children', () => {
    render(<CardHeader>Header text</CardHeader>)
    expect(screen.getByText('Header text')).toBeTruthy()
  })

  it('has border-b class to separate from body', () => {
    const { container } = render(<CardHeader>Header</CardHeader>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('border-b')
  })
})

describe('CardBody', () => {
  it('renders children', () => {
    render(<CardBody>Body text</CardBody>)
    expect(screen.getByText('Body text')).toBeTruthy()
  })

  it('has padding classes', () => {
    const { container } = render(<CardBody>Body</CardBody>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('px-6')
    expect(div.className).toContain('py-5')
  })
})
