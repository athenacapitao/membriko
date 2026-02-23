import { render, screen, fireEvent } from '@testing-library/react'
import { MobileNav } from '../MobileNav'

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

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  X: () => <svg data-testid="icon-x" />,
  ChevronDown: () => <svg data-testid="icon-chevron-down" />,
  ChevronUp: () => <svg data-testid="icon-chevron-up" />,
}))

// Mock LanguageSwitcher — it has its own unit tests
vi.mock('../LanguageSwitcher', () => ({
  LanguageSwitcher: ({ locale }: { locale: string }) => (
    <div data-testid="language-switcher" data-locale={locale} />
  ),
}))

const defaultProps = {
  locale: 'pt' as const,
  isOpen: true,
  onClose: vi.fn(),
  currentPath: '/pt',
}

describe('MobileNav', () => {
  beforeEach(() => {
    defaultProps.onClose = vi.fn()
  })

  it('is visible when isOpen is true', () => {
    render(<MobileNav {...defaultProps} isOpen={true} />)
    const dialog = screen.getByRole('dialog')
    expect(dialog.className).not.toContain('translate-x-full')
  })

  it('is hidden when isOpen is false', () => {
    render(<MobileNav {...defaultProps} isOpen={false} />)
    const dialog = screen.getByRole('dialog')
    expect(dialog.className).toContain('translate-x-full')
  })

  it('renders the Membriko logo link', () => {
    render(<MobileNav {...defaultProps} />)
    expect(screen.getByText('Membriko')).toBeTruthy()
  })

  it('calls onClose when the close button is clicked', () => {
    render(<MobileNav {...defaultProps} />)
    const closeButton = screen.getByRole('button', { name: /fechar menu/i })
    fireEvent.click(closeButton)
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the backdrop is clicked', () => {
    render(<MobileNav {...defaultProps} />)
    const backdrop = document.querySelector('[aria-hidden="true"]') as Element
    fireEvent.click(backdrop)
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1)
  })

  it('renders all main nav links in PT', () => {
    render(<MobileNav {...defaultProps} locale="pt" />)
    expect(screen.getByText('Porquê EPDM')).toBeTruthy()
    expect(screen.getByText('Sobre')).toBeTruthy()
    expect(screen.getByText('FAQ')).toBeTruthy()
    expect(screen.getByText('Contacto')).toBeTruthy()
  })

  it('renders all main nav links in EN', () => {
    render(<MobileNav {...defaultProps} locale="en" currentPath="/en" />)
    expect(screen.getByText('Why EPDM')).toBeTruthy()
    expect(screen.getByText('About')).toBeTruthy()
    expect(screen.getByText('FAQ')).toBeTruthy()
    expect(screen.getByText('Contact')).toBeTruthy()
  })

  it('expands applications section when the toggle is clicked', () => {
    render(<MobileNav {...defaultProps} />)
    const toggle = screen.getByRole('button', { name: /aplicações/i })
    // Before expansion, category links should not be visible
    expect(screen.queryByText('Coberturas')).toBeNull()
    fireEvent.click(toggle)
    expect(screen.getByText('Coberturas')).toBeTruthy()
  })

  it('shows all 8 categories when applications section is expanded', () => {
    render(<MobileNav {...defaultProps} />)
    const toggle = screen.getByRole('button', { name: /aplicações/i })
    fireEvent.click(toggle)
    expect(screen.getByText('Coberturas')).toBeTruthy()
    expect(screen.getByText('Água')).toBeTruthy()
    expect(screen.getByText('Construção Civil')).toBeTruthy()
    expect(screen.getByText('Envelope do Edifício')).toBeTruthy()
    expect(screen.getByText('Edifícios')).toBeTruthy()
    expect(screen.getByText('Agricultura')).toBeTruthy()
    expect(screen.getByText('Ambiental')).toBeTruthy()
    expect(screen.getByText('Desporto e Recreação')).toBeTruthy()
  })

  it('renders the CTA button', () => {
    render(<MobileNav {...defaultProps} />)
    expect(screen.getByText('Pedir Orçamento')).toBeTruthy()
  })

  it('renders the LanguageSwitcher', () => {
    render(<MobileNav {...defaultProps} />)
    expect(screen.getByTestId('language-switcher')).toBeTruthy()
  })
})
