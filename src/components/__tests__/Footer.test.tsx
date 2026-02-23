import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

// Mock next/link to render a plain <a> tag for testing
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
  }: {
    href: string
    children: React.ReactNode
  }) => <a href={href}>{children}</a>,
}))

// Mock lucide-react icons to avoid SVG rendering complexity
vi.mock('lucide-react', () => ({
  Mail: () => <svg data-testid="icon-mail" />,
  Phone: () => <svg data-testid="icon-phone" />,
  MapPin: () => <svg data-testid="icon-mappin" />,
}))

describe('Footer', () => {
  it('renders the Membriko logo link', () => {
    render(<Footer locale="pt" />)
    const logoLinks = screen.getAllByRole('link', { name: /membriko/i })
    expect(logoLinks.length).toBeGreaterThan(0)
  })

  it('shows contact email with mailto link', () => {
    render(<Footer locale="pt" />)
    const emailLink = screen.getByRole('link', { name: /info@membriko\.pt/i })
    expect(emailLink.getAttribute('href')).toBe('mailto:info@membriko.pt')
  })

  it('shows phone link', () => {
    render(<Footer locale="pt" />)
    const phoneLink = screen.getByRole('link', { name: /\+351/i })
    expect(phoneLink.getAttribute('href')).toMatch(/^tel:/)
  })

  it('shows location text', () => {
    render(<Footer locale="pt" />)
    expect(screen.getByText('Portugal')).toBeTruthy()
  })

  it('renders contact icons', () => {
    render(<Footer locale="pt" />)
    expect(screen.getByTestId('icon-mail')).toBeTruthy()
    expect(screen.getByTestId('icon-phone')).toBeTruthy()
    expect(screen.getByTestId('icon-mappin')).toBeTruthy()
  })

  it('renders PT labels in Portuguese locale', () => {
    render(<Footer locale="pt" />)
    expect(screen.getByText('Categorias')).toBeTruthy()
    expect(screen.getByText('Contacto')).toBeTruthy()
  })

  it('renders EN labels in English locale', () => {
    render(<Footer locale="en" />)
    expect(screen.getByText('Categories')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
  })

  it('renders all 8 category links', () => {
    render(<Footer locale="pt" />)
    // The 8 categories from categories.ts
    expect(screen.getByText('Coberturas')).toBeTruthy()
    expect(screen.getByText('Água')).toBeTruthy()
    expect(screen.getByText('Construção Civil')).toBeTruthy()
    expect(screen.getByText('Envelope do Edifício')).toBeTruthy()
    expect(screen.getByText('Edifícios')).toBeTruthy()
    expect(screen.getByText('Agricultura')).toBeTruthy()
    expect(screen.getByText('Ambiental')).toBeTruthy()
    expect(screen.getByText('Desporto e Recreação')).toBeTruthy()
  })

  it('renders PT and EN language links in the bottom bar', () => {
    render(<Footer locale="pt" />)
    expect(screen.getByRole('link', { name: 'Português' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'English' })).toBeTruthy()
  })

  it('renders copyright with current year', () => {
    render(<Footer locale="pt" />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeTruthy()
  })
})
