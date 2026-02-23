import { render, screen } from '@testing-library/react'
import { TrustBar } from '../TrustBar'

describe('TrustBar', () => {
  it('renders the known manufacturer names', () => {
    render(<TrustBar />)
    expect(screen.getByText('Carlisle')).toBeTruthy()
    expect(screen.getByText('Firestone')).toBeTruthy()
    expect(screen.getByText('Elevate')).toBeTruthy()
    expect(screen.getByText('Sika')).toBeTruthy()
    expect(screen.getByText('Soprema')).toBeTruthy()
    expect(screen.getByText('IKO')).toBeTruthy()
  })

  it('renders optional title when provided', () => {
    render(<TrustBar title="Fabricantes Certificados" />)
    expect(screen.getByText('Fabricantes Certificados')).toBeTruthy()
  })

  it('does not render title element when title prop is omitted', () => {
    const { container } = render(<TrustBar />)
    const paragraphs = container.querySelectorAll('p')
    expect(paragraphs.length).toBe(0)
  })

  it('has an accessible landmark label', () => {
    render(<TrustBar />)
    const region = screen.getByRole('region', { name: 'Fabricantes parceiros' })
    expect(region).toBeTruthy()
  })
})
