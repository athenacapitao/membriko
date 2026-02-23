import { render, screen } from '@testing-library/react'
import { CTASection } from '../CTASection'

const defaultProps = {
  title: 'Pronto para começar?',
  subtitle: 'Contacte-nos para um orçamento personalizado.',
  ctaText: 'Pedir Orçamento',
  ctaHref: '/orcamento',
}

describe('CTASection', () => {
  it('renders the title as h2', () => {
    render(<CTASection {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Pronto para começar?')
  })

  it('renders the subtitle', () => {
    render(<CTASection {...defaultProps} />)
    expect(screen.getByText('Contacte-nos para um orçamento personalizado.')).toBeTruthy()
  })

  it('renders the primary CTA link with correct href', () => {
    render(<CTASection {...defaultProps} />)
    const link = screen.getByRole('link', { name: 'Pedir Orçamento' })
    expect(link.getAttribute('href')).toBe('/orcamento')
  })

  it('does not render secondary link when secondaryText/Href are omitted', () => {
    render(<CTASection {...defaultProps} />)
    expect(screen.getAllByRole('link').length).toBe(1)
  })

  it('renders secondary link when both secondaryText and secondaryHref are provided', () => {
    render(
      <CTASection
        {...defaultProps}
        secondaryText="Saber mais"
        secondaryHref="/sobre"
      />,
    )
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(2)
    expect(screen.getByRole('link', { name: 'Saber mais' }).getAttribute('href')).toBe('/sobre')
  })

  it('applies navy background by default', () => {
    const { container } = render(<CTASection {...defaultProps} />)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-navy')
  })

  it('applies primary background when variant is primary', () => {
    const { container } = render(<CTASection {...defaultProps} variant="primary" />)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-primary')
  })
})
