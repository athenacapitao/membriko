import { render, screen } from '@testing-library/react'
import { InstallationTechniques } from '../InstallationTechniques'

const defaultProps = {
  title: 'Técnicas de Instalação',
  techniques: [
    {
      title: 'Colagem Total',
      description: 'Membrana colada em toda a superfície.',
      pros: ['Melhor adesão', 'Mais resistente ao vento'],
      cons: ['Maior custo', 'Processo mais lento'],
    },
    {
      title: 'Fixação Mecânica',
      description: 'Membrana fixada com parafusos e buchas.',
      pros: ['Instalação rápida'],
      cons: ['Pontos de penetração'],
    },
  ],
}

describe('InstallationTechniques', () => {
  it('renders the section title as h2', () => {
    render(<InstallationTechniques {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Técnicas de Instalação')
  })

  it('renders all technique titles', () => {
    render(<InstallationTechniques {...defaultProps} />)
    expect(screen.getByText('Colagem Total')).toBeTruthy()
    expect(screen.getByText('Fixação Mecânica')).toBeTruthy()
  })

  it('renders technique descriptions', () => {
    render(<InstallationTechniques {...defaultProps} />)
    expect(screen.getByText('Membrana colada em toda a superfície.')).toBeTruthy()
    expect(screen.getByText('Membrana fixada com parafusos e buchas.')).toBeTruthy()
  })

  it('renders pros for each technique', () => {
    render(<InstallationTechniques {...defaultProps} />)
    expect(screen.getByText('Melhor adesão')).toBeTruthy()
    expect(screen.getByText('Mais resistente ao vento')).toBeTruthy()
    expect(screen.getByText('Instalação rápida')).toBeTruthy()
  })

  it('renders cons for each technique', () => {
    render(<InstallationTechniques {...defaultProps} />)
    expect(screen.getByText('Maior custo')).toBeTruthy()
    expect(screen.getByText('Processo mais lento')).toBeTruthy()
    expect(screen.getByText('Pontos de penetração')).toBeTruthy()
  })

  it('renders without crashing when techniques array is empty', () => {
    render(<InstallationTechniques title="Installation" techniques={[]} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })

  it('renders a technique with empty pros/cons without crashing', () => {
    const techniques = [{ title: 'Ballast', description: 'Weighted down.', pros: [], cons: [] }]
    render(<InstallationTechniques title="Install" techniques={techniques} />)
    expect(screen.getByText('Ballast')).toBeTruthy()
  })
})
