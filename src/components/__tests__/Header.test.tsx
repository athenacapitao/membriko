import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '../Header'

// Mock next/link
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    onClick,
  }: {
    href: string
    children: React.ReactNode
    onClick?: () => void
  }) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  ),
}))

// Mock lucide-react icons used in Header
vi.mock('lucide-react', async (importOriginal) => {
  // We only mock the specific icons Header uses; everything else passes through
  const original = await importOriginal<Record<string, unknown>>()
  return {
    ...original,
    Menu: () => <svg data-testid="icon-menu" />,
    X: () => <svg data-testid="icon-x" />,
    ChevronDown: () => <svg data-testid="icon-chevron-down" />,
  }
})

// Mock LanguageSwitcher
vi.mock('../LanguageSwitcher', () => ({
  LanguageSwitcher: ({ locale }: { locale: string }) => (
    <div data-testid="language-switcher" data-locale={locale} />
  ),
}))

// Mock MobileNav — it has its own tests
vi.mock('../MobileNav', () => ({
  MobileNav: ({
    isOpen,
    locale,
  }: {
    isOpen: boolean
    locale: string
  }) => (
    <div
      data-testid="mobile-nav"
      data-open={String(isOpen)}
      data-locale={locale}
    />
  ),
}))

describe('Header', () => {
  it('renders the Membriko logo', () => {
    render(<Header locale="pt" />)
    expect(screen.getByText('Membriko')).toBeTruthy()
  })

  it('logo links to the locale root', () => {
    render(<Header locale="pt" />)
    const logo = screen.getByRole('link', { name: 'Membriko' })
    expect(logo.getAttribute('href')).toBe('/pt')
  })

  it('renders desktop nav links for PT locale', () => {
    render(<Header locale="pt" />)
    expect(screen.getByText('Porquê EPDM')).toBeTruthy()
    expect(screen.getByText('Sobre')).toBeTruthy()
    expect(screen.getByText('FAQ')).toBeTruthy()
    expect(screen.getByText('Contacto')).toBeTruthy()
  })

  it('renders desktop nav links for EN locale', () => {
    render(<Header locale="en" />)
    expect(screen.getByText('Why EPDM')).toBeTruthy()
    expect(screen.getByText('About')).toBeTruthy()
    expect(screen.getByText('FAQ')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
  })

  it('renders the CTA button in PT', () => {
    render(<Header locale="pt" />)
    expect(screen.getByText('Pedir Orçamento')).toBeTruthy()
  })

  it('renders the CTA button in EN', () => {
    render(<Header locale="en" />)
    expect(screen.getByText('Get a Quote')).toBeTruthy()
  })

  it('renders the LanguageSwitcher', () => {
    render(<Header locale="pt" />)
    expect(screen.getByTestId('language-switcher')).toBeTruthy()
  })

  it('renders the MobileNav component', () => {
    render(<Header locale="pt" />)
    expect(screen.getByTestId('mobile-nav')).toBeTruthy()
  })

  it('MobileNav starts closed', () => {
    render(<Header locale="pt" />)
    const mobileNav = screen.getByTestId('mobile-nav')
    expect(mobileNav.getAttribute('data-open')).toBe('false')
  })

  it('opens the mobile menu when the hamburger button is clicked', () => {
    render(<Header locale="pt" />)
    const hamburger = screen.getByRole('button', { name: /abrir menu/i })
    fireEvent.click(hamburger)
    const mobileNav = screen.getByTestId('mobile-nav')
    expect(mobileNav.getAttribute('data-open')).toBe('true')
  })

  it('opens the mega menu when Applications is clicked', () => {
    render(<Header locale="pt" />)
    const appsButton = screen.getByRole('button', { name: /aplicações/i })
    fireEvent.click(appsButton)
    // Mega menu should show "ver todas as aplicações"
    expect(
      screen.getByText(/ver todas as aplicações/i),
    ).toBeTruthy()
  })

  it('mega menu lists all 8 categories', () => {
    render(<Header locale="pt" />)
    const appsButton = screen.getByRole('button', { name: /aplicações/i })
    fireEvent.click(appsButton)
    expect(screen.getByText('Coberturas')).toBeTruthy()
    expect(screen.getByText('Água')).toBeTruthy()
    expect(screen.getByText('Construção Civil')).toBeTruthy()
    expect(screen.getByText('Envelope do Edifício')).toBeTruthy()
    expect(screen.getByText('Edifícios')).toBeTruthy()
    expect(screen.getByText('Agricultura')).toBeTruthy()
    expect(screen.getByText('Ambiental')).toBeTruthy()
    expect(screen.getByText('Desporto e Recreação')).toBeTruthy()
  })

  it('closes the mega menu when a category link is clicked', () => {
    render(<Header locale="pt" />)
    const appsButton = screen.getByRole('button', { name: /aplicações/i })
    fireEvent.click(appsButton)
    // Click a category link
    const roofingLink = screen.getByText('Coberturas')
    fireEvent.click(roofingLink)
    expect(screen.queryByText(/ver todas as aplicações/i)).toBeNull()
  })

  it('is marked as sticky header', () => {
    render(<Header locale="pt" />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('sticky')
  })
})
