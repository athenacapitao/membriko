import { render, screen } from '@testing-library/react'
import { RelatedApps } from '../RelatedApps'

const defaultProps = {
  title: 'Outras Aplicações',
  apps: [
    { title: 'Telhados Verdes', description: 'Membrana root-resistant.', href: '/telhados-verdes', icon: 'Leaf' },
    { title: 'Piscinas', description: 'Liner flexível.', href: '/piscinas', icon: 'Waves' },
    { title: 'Terraços', description: 'Solução anti-infiltração.', href: '/terracos', icon: 'Home' },
  ],
}

describe('RelatedApps', () => {
  it('renders the section title as h2', () => {
    render(<RelatedApps {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Outras Aplicações')
  })

  it('renders all app titles', () => {
    render(<RelatedApps {...defaultProps} />)
    expect(screen.getByText('Telhados Verdes')).toBeTruthy()
    expect(screen.getByText('Piscinas')).toBeTruthy()
    expect(screen.getByText('Terraços')).toBeTruthy()
  })

  it('renders all app descriptions', () => {
    render(<RelatedApps {...defaultProps} />)
    expect(screen.getByText('Membrana root-resistant.')).toBeTruthy()
    expect(screen.getByText('Liner flexível.')).toBeTruthy()
    expect(screen.getByText('Solução anti-infiltração.')).toBeTruthy()
  })

  it('renders each app card as a link with correct href', () => {
    render(<RelatedApps {...defaultProps} />)
    const links = screen.getAllByRole('link')
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs).toContain('/telhados-verdes')
    expect(hrefs).toContain('/piscinas')
    expect(hrefs).toContain('/terracos')
  })

  it('renders without crashing when apps array is empty', () => {
    render(<RelatedApps title="Related" apps={[]} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })
})
