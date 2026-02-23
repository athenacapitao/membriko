import { render, screen } from '@testing-library/react'
import { BenefitsGrid } from '../BenefitsGrid'

const defaultProps = {
  title: 'Benefícios do EPDM',
  benefits: [
    { icon: 'Shield', title: 'Durabilidade', description: 'Dura 50+ anos' },
    { icon: 'Sun', title: 'Resistência UV', description: 'Suporta exposição solar intensa' },
    { icon: 'Recycle', title: 'Reciclável', description: '100% reciclável no fim da vida útil' },
  ],
}

describe('BenefitsGrid', () => {
  it('renders the section title', () => {
    render(<BenefitsGrid {...defaultProps} />)
    expect(screen.getByText('Benefícios do EPDM')).toBeTruthy()
  })

  it('does not render subtitle when not provided', () => {
    render(<BenefitsGrid {...defaultProps} />)
    // No subtitle element should be present
    expect(screen.queryByText(/subtitle/)).toBeNull()
  })

  it('renders the optional subtitle when provided', () => {
    render(<BenefitsGrid {...defaultProps} subtitle="A membrana mais versátil do mercado" />)
    expect(screen.getByText('A membrana mais versátil do mercado')).toBeTruthy()
  })

  it('renders all benefit titles', () => {
    render(<BenefitsGrid {...defaultProps} />)
    expect(screen.getByText('Durabilidade')).toBeTruthy()
    expect(screen.getByText('Resistência UV')).toBeTruthy()
    expect(screen.getByText('Reciclável')).toBeTruthy()
  })

  it('renders all benefit descriptions', () => {
    render(<BenefitsGrid {...defaultProps} />)
    expect(screen.getByText('Dura 50+ anos')).toBeTruthy()
    expect(screen.getByText('Suporta exposição solar intensa')).toBeTruthy()
    expect(screen.getByText('100% reciclável no fim da vida útil')).toBeTruthy()
  })

  it('renders correct number of benefit cards', () => {
    const { container } = render(<BenefitsGrid {...defaultProps} />)
    // Each benefit renders inside a Card > CardBody which has a specific icon container
    const iconContainers = container.querySelectorAll('.bg-primary\\/10')
    expect(iconContainers.length).toBe(3)
  })

  it('renders without crashing when benefits array is empty', () => {
    render(<BenefitsGrid title="No benefits" benefits={[]} />)
    expect(screen.getByText('No benefits')).toBeTruthy()
  })
})
