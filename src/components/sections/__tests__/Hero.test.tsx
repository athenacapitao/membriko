import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

const defaultProps = {
  headline: 'Membrane EPDM para Telhados',
  subtitle: 'A solução definitiva em impermeabilização',
  stats: [
    { value: '50+', label: 'Anos de durabilidade' },
    { value: '100%', label: 'Reciclável' },
  ],
  ctaText: 'Pedir Orçamento',
  ctaHref: '/orcamento',
}

describe('Hero', () => {
  it('renders the headline as h1', () => {
    render(<Hero {...defaultProps} />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toBe('Membrane EPDM para Telhados')
  })

  it('renders the subtitle', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.getByText('A solução definitiva em impermeabilização')).toBeTruthy()
  })

  it('renders the CTA button linking to ctaHref', () => {
    render(<Hero {...defaultProps} />)
    const link = screen.getByRole('link', { name: 'Pedir Orçamento' })
    expect(link.getAttribute('href')).toBe('/orcamento')
  })

  it('renders stats values and labels', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.getByText('50+')).toBeTruthy()
    expect(screen.getByText('Anos de durabilidade')).toBeTruthy()
    expect(screen.getByText('100%')).toBeTruthy()
    expect(screen.getByText('Reciclável')).toBeTruthy()
  })

  it('does not render breadcrumb nav when breadcrumbs prop is omitted', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).toBeNull()
  })

  it('renders breadcrumbs when provided', () => {
    const breadcrumbs = [
      { label: 'Início', href: '/' },
      { label: 'Aplicações', href: '/aplicacoes' },
      { label: 'Telhados Planos' },
    ]
    render(<Hero {...defaultProps} breadcrumbs={breadcrumbs} />)
    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' })
    expect(nav).toBeTruthy()
    expect(screen.getByText('Início')).toBeTruthy()
    expect(screen.getByText('Aplicações')).toBeTruthy()
    expect(screen.getByText('Telhados Planos')).toBeTruthy()
  })

  it('renders breadcrumb items with href as links', () => {
    const breadcrumbs = [
      { label: 'Início', href: '/' },
      { label: 'Atual' },
    ]
    render(<Hero {...defaultProps} breadcrumbs={breadcrumbs} />)
    const homeLink = screen.getByRole('link', { name: 'Início' })
    expect(homeLink.getAttribute('href')).toBe('/')
  })

  it('renders with empty stats array without crashing', () => {
    render(<Hero {...defaultProps} stats={[]} />)
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
  })
})
