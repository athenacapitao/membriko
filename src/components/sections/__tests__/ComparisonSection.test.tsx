import { render, screen } from '@testing-library/react'
import { ComparisonSection } from '../ComparisonSection'

const defaultProps = {
  title: 'EPDM vs Alternativas',
  rows: [
    {
      feature: 'Durabilidade',
      epdm: '50+ anos',
      alternatives: [
        { name: 'Betume', value: '15-20 anos' },
        { name: 'PVC', value: '20-30 anos' },
      ],
    },
    {
      feature: 'Reciclável',
      epdm: 'Sim',
      alternatives: [
        { name: 'Betume', value: 'Não' },
        { name: 'PVC', value: 'Parcialmente' },
      ],
    },
  ],
}

describe('ComparisonSection', () => {
  it('renders the section title as h2', () => {
    render(<ComparisonSection {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('EPDM vs Alternativas')
  })

  it('does not render subtitle when omitted', () => {
    render(<ComparisonSection {...defaultProps} />)
    expect(screen.queryByText(/subtitle/i)).toBeNull()
  })

  it('renders the optional subtitle when provided', () => {
    render(<ComparisonSection {...defaultProps} subtitle="Comparação detalhada" />)
    expect(screen.getByText('Comparação detalhada')).toBeTruthy()
  })

  it('renders the comparison table with row data', () => {
    render(<ComparisonSection {...defaultProps} />)
    expect(screen.getByText('Durabilidade')).toBeTruthy()
    expect(screen.getByText('50+ anos')).toBeTruthy()
    expect(screen.getByText('15-20 anos')).toBeTruthy()
  })

  it('renders a table element from ComparisonTable', () => {
    const { container } = render(<ComparisonSection {...defaultProps} />)
    expect(container.querySelector('table')).toBeTruthy()
  })

  it('renders without crashing when rows array is empty', () => {
    render(<ComparisonSection title="Comparison" rows={[]} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })
})
