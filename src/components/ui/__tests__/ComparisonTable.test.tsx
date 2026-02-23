import { render, screen } from '@testing-library/react'
import { ComparisonTable } from '../ComparisonTable'

const rows = [
  {
    feature: 'Durability',
    epdm: '50+ years',
    alternatives: [
      { name: 'PVC', value: '20 years' },
      { name: 'Bitumen', value: '15 years' },
    ],
  },
  {
    feature: 'UV Resistance',
    epdm: 'Excellent',
    alternatives: [
      { name: 'PVC', value: 'Good' },
      { name: 'Bitumen', value: 'Poor' },
    ],
  },
]

describe('ComparisonTable', () => {
  it('renders a table element', () => {
    render(<ComparisonTable rows={rows} />)
    expect(screen.getByRole('table')).toBeTruthy()
  })

  it('renders column headers from first row alternatives', () => {
    render(<ComparisonTable rows={rows} />)
    expect(screen.getByText('PVC')).toBeTruthy()
    expect(screen.getByText('Bitumen')).toBeTruthy()
    expect(screen.getByText('EPDM')).toBeTruthy()
  })

  it('renders feature names in rows', () => {
    render(<ComparisonTable rows={rows} />)
    expect(screen.getByText('Durability')).toBeTruthy()
    expect(screen.getByText('UV Resistance')).toBeTruthy()
  })

  it('renders EPDM values', () => {
    render(<ComparisonTable rows={rows} />)
    expect(screen.getByText('50+ years')).toBeTruthy()
    expect(screen.getByText('Excellent')).toBeTruthy()
  })

  it('renders alternative values', () => {
    render(<ComparisonTable rows={rows} />)
    expect(screen.getByText('20 years')).toBeTruthy()
    expect(screen.getByText('15 years')).toBeTruthy()
    expect(screen.getByText('Good')).toBeTruthy()
    expect(screen.getByText('Poor')).toBeTruthy()
  })

  it('renders empty table with no rows without crashing', () => {
    render(<ComparisonTable rows={[]} />)
    expect(screen.getByRole('table')).toBeTruthy()
  })
})
