import { render, screen } from '@testing-library/react'
import { ProcessSteps } from '../ProcessSteps'

const steps = [
  { step: 1, title: 'Consultation', description: 'We assess your project needs.' },
  { step: 2, title: 'Installation', description: 'Our team installs the membrane.' },
  { step: 3, title: 'Inspection', description: 'Final quality check.' },
]

describe('ProcessSteps', () => {
  it('renders all step titles', () => {
    render(<ProcessSteps steps={steps} />)
    expect(screen.getByText('Consultation')).toBeTruthy()
    expect(screen.getByText('Installation')).toBeTruthy()
    expect(screen.getByText('Inspection')).toBeTruthy()
  })

  it('renders all step descriptions', () => {
    render(<ProcessSteps steps={steps} />)
    expect(screen.getByText('We assess your project needs.')).toBeTruthy()
    expect(screen.getByText('Our team installs the membrane.')).toBeTruthy()
    expect(screen.getByText('Final quality check.')).toBeTruthy()
  })

  it('renders step numbers', () => {
    render(<ProcessSteps steps={steps} />)
    expect(screen.getByText('1')).toBeTruthy()
    expect(screen.getByText('2')).toBeTruthy()
    expect(screen.getByText('3')).toBeTruthy()
  })

  it('renders as an ordered list', () => {
    render(<ProcessSteps steps={steps} />)
    expect(screen.getByRole('list')).toBeTruthy()
  })

  it('renders the correct number of list items', () => {
    render(<ProcessSteps steps={steps} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('renders empty state gracefully', () => {
    render(<ProcessSteps steps={[]} />)
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
  })
})
