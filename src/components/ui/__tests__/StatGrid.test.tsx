import { render, screen } from '@testing-library/react'
import { StatGrid } from '../StatGrid'

const stats = [
  { value: '50+', label: 'Anos de Experiência' },
  { value: '100%', label: 'Reciclável' },
  { value: '500+', label: 'Projetos' },
  { value: 'A+', label: 'Energia' },
]

describe('StatGrid', () => {
  it('renders all stat values', () => {
    render(<StatGrid stats={stats} />)
    expect(screen.getByText('50+')).toBeTruthy()
    expect(screen.getByText('100%')).toBeTruthy()
    expect(screen.getByText('500+')).toBeTruthy()
    expect(screen.getByText('A+')).toBeTruthy()
  })

  it('renders all stat labels', () => {
    render(<StatGrid stats={stats} />)
    expect(screen.getByText('Anos de Experiência')).toBeTruthy()
    expect(screen.getByText('Reciclável')).toBeTruthy()
    expect(screen.getByText('Projetos')).toBeTruthy()
    expect(screen.getByText('Energia')).toBeTruthy()
  })

  it('renders correct number of stat cards', () => {
    const { container } = render(<StatGrid stats={stats} />)
    // Each stat is wrapped in a div inside the grid
    const grid = container.firstChild as HTMLElement
    expect(grid.children).toHaveLength(4)
  })

  it('renders empty grid gracefully', () => {
    const { container } = render(<StatGrid stats={[]} />)
    const grid = container.firstChild as HTMLElement
    expect(grid.children).toHaveLength(0)
  })

  it('uses 2-column layout on mobile and 4-column on desktop', () => {
    const { container } = render(<StatGrid stats={stats} />)
    const grid = container.firstChild as HTMLElement
    expect(grid.className).toContain('grid-cols-2')
    expect(grid.className).toContain('lg:grid-cols-4')
  })
})
