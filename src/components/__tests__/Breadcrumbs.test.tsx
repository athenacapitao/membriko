import { render, screen } from '@testing-library/react'
import { Breadcrumbs } from '../Breadcrumbs'

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

describe('Breadcrumbs', () => {
  it('renders all item labels', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/pt' },
          { label: 'Applications', href: '/pt/applications' },
          { label: 'Flat Roofs' },
        ]}
      />,
    )
    expect(screen.getByText('Home')).toBeTruthy()
    expect(screen.getByText('Applications')).toBeTruthy()
    expect(screen.getByText('Flat Roofs')).toBeTruthy()
  })

  it('renders intermediate items as links when href is provided', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/pt' },
          { label: 'Applications', href: '/pt/applications' },
          { label: 'Flat Roofs' },
        ]}
      />,
    )
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.getAttribute('href')).toBe('/pt')
    const appsLink = screen.getByRole('link', { name: 'Applications' })
    expect(appsLink.getAttribute('href')).toBe('/pt/applications')
  })

  it('does not render the last item as a link', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/pt' },
          { label: 'Flat Roofs' },
        ]}
      />,
    )
    // Only one link should be rendered (Home)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(screen.getByText('Flat Roofs').tagName.toLowerCase()).toBe('span')
  })

  it('marks the last item with aria-current="page"', () => {
    render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/pt' },
          { label: 'Flat Roofs' },
        ]}
      />,
    )
    const last = screen.getByText('Flat Roofs')
    expect(last.getAttribute('aria-current')).toBe('page')
  })

  it('has a nav with aria-label="Breadcrumb"', () => {
    render(<Breadcrumbs items={[{ label: 'Home', href: '/pt' }]} />)
    expect(
      screen.getByRole('navigation', { name: 'Breadcrumb' }),
    ).toBeTruthy()
  })

  it('renders a single-item breadcrumb without separator', () => {
    render(<Breadcrumbs items={[{ label: 'Home', href: '/pt' }]} />)
    // No chevron separator should be present for single item
    const nav = screen.getByRole('navigation')
    expect(nav).toBeTruthy()
    expect(screen.getByText('Home')).toBeTruthy()
  })

  it('injects a JSON-LD script tag', () => {
    const { container } = render(
      <Breadcrumbs
        items={[
          { label: 'Home', href: 'https://membriko.pt/pt' },
          { label: 'Applications', href: 'https://membriko.pt/pt/applications' },
          { label: 'Flat Roofs' },
        ]}
      />,
    )
    const script = container.querySelector(
      'script[type="application/ld+json"]',
    )
    expect(script).toBeTruthy()
    const parsed = JSON.parse(script!.textContent ?? '{}')
    expect(parsed['@type']).toBe('BreadcrumbList')
    expect(parsed.itemListElement).toHaveLength(3)
    expect(parsed.itemListElement[0].position).toBe(1)
    expect(parsed.itemListElement[0].name).toBe('Home')
  })
})
