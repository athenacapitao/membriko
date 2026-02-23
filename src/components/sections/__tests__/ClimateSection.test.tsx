import { render, screen } from '@testing-library/react'
import { ClimateSection } from '../ClimateSection'

const defaultProps = {
  title: 'Portugal e o Clima EPDM',
  points: [
    { zone: 'Zona Atlântica', description: 'Chuva frequente e ventos do Atlântico.' },
    { zone: 'Zona Mediterrânica', description: 'Verões quentes e secos.' },
    { zone: 'Interior Continental', description: 'Amplitudes térmicas extremas.' },
  ],
}

describe('ClimateSection', () => {
  it('renders the section title as h2', () => {
    render(<ClimateSection {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Portugal e o Clima EPDM')
  })

  it('renders all zone names', () => {
    render(<ClimateSection {...defaultProps} />)
    expect(screen.getByText('Zona Atlântica')).toBeTruthy()
    expect(screen.getByText('Zona Mediterrânica')).toBeTruthy()
    expect(screen.getByText('Interior Continental')).toBeTruthy()
  })

  it('renders all zone descriptions', () => {
    render(<ClimateSection {...defaultProps} />)
    expect(screen.getByText('Chuva frequente e ventos do Atlântico.')).toBeTruthy()
    expect(screen.getByText('Verões quentes e secos.')).toBeTruthy()
    expect(screen.getByText('Amplitudes térmicas extremas.')).toBeTruthy()
  })

  it('uses navy background', () => {
    const { container } = render(<ClimateSection {...defaultProps} />)
    const section = container.firstChild as HTMLElement
    expect(section.className).toContain('bg-navy')
  })

  it('renders without crashing when points array is empty', () => {
    render(<ClimateSection title="Climate" points={[]} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })
})
