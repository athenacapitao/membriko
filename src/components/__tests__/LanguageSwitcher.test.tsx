import { render, screen } from '@testing-library/react'
import { LanguageSwitcher } from '../LanguageSwitcher'

// Mock next/link to render a plain <a> tag for testing
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    'aria-label': ariaLabel,
  }: {
    href: string
    children: React.ReactNode
    'aria-label'?: string
  }) => (
    <a href={href} aria-label={ariaLabel}>
      {children}
    </a>
  ),
}))

describe('LanguageSwitcher', () => {
  it('renders PT and EN labels', () => {
    render(<LanguageSwitcher locale="pt" currentPath="/pt" />)
    expect(screen.getByText('PT')).toBeTruthy()
    expect(screen.getByText('EN')).toBeTruthy()
  })

  it('renders EN as a link when locale is PT', () => {
    render(<LanguageSwitcher locale="pt" currentPath="/pt" />)
    const link = screen.getByRole('link', { name: /switch to english/i })
    expect(link).toBeTruthy()
    expect(link.getAttribute('href')).toBe('/en')
  })

  it('renders PT as non-link when locale is PT', () => {
    render(<LanguageSwitcher locale="pt" currentPath="/pt" />)
    // PT should be a span, not a link
    const pt = screen.getByText('PT')
    expect(pt.tagName.toLowerCase()).toBe('span')
  })

  it('maps /pt/porque-epdm to /en/why-epdm', () => {
    render(
      <LanguageSwitcher locale="pt" currentPath="/pt/porque-epdm" />,
    )
    const link = screen.getByRole('link', { name: /switch to english/i })
    expect(link.getAttribute('href')).toBe('/en/why-epdm')
  })

  it('maps /pt/aplicacoes to /en/applications', () => {
    render(
      <LanguageSwitcher locale="pt" currentPath="/pt/aplicacoes" />,
    )
    const link = screen.getByRole('link', { name: /switch to english/i })
    expect(link.getAttribute('href')).toBe('/en/applications')
  })

  it('maps a category path from PT to EN', () => {
    render(
      <LanguageSwitcher
        locale="pt"
        currentPath="/pt/aplicacoes/coberturas"
      />,
    )
    const link = screen.getByRole('link', { name: /switch to english/i })
    expect(link.getAttribute('href')).toBe('/en/applications/roofing')
  })

  it('maps an application detail path from PT to EN', () => {
    render(
      <LanguageSwitcher
        locale="pt"
        currentPath="/pt/aplicacoes/coberturas/coberturas-planas"
      />,
    )
    const link = screen.getByRole('link', { name: /switch to english/i })
    expect(link.getAttribute('href')).toBe(
      '/en/applications/roofing/flat-roofs',
    )
  })

  it('maps /en root to /pt when locale is EN', () => {
    render(<LanguageSwitcher locale="en" currentPath="/en" />)
    const link = screen.getByRole('link', { name: /switch to portuguese/i })
    expect(link.getAttribute('href')).toBe('/pt')
  })
})
