import { render, screen } from '@testing-library/react'
import { TechSpecs } from '../TechSpecs'

const defaultProps = {
  title: 'Especificações Técnicas',
  specs: [
    { label: 'Espessura', value: '1.0 – 1.5 mm' },
    { label: 'Temperatura de serviço', value: '-40°C a +120°C' },
    { label: 'Durabilidade', value: '50+ anos' },
  ],
}

describe('TechSpecs', () => {
  it('renders the section title as h2', () => {
    render(<TechSpecs {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Especificações Técnicas')
  })

  it('renders all spec labels', () => {
    render(<TechSpecs {...defaultProps} />)
    expect(screen.getByText('Espessura')).toBeTruthy()
    expect(screen.getByText('Temperatura de serviço')).toBeTruthy()
    expect(screen.getByText('Durabilidade')).toBeTruthy()
  })

  it('renders all spec values', () => {
    render(<TechSpecs {...defaultProps} />)
    expect(screen.getByText('1.0 – 1.5 mm')).toBeTruthy()
    expect(screen.getByText('-40°C a +120°C')).toBeTruthy()
    expect(screen.getByText('50+ anos')).toBeTruthy()
  })

  it('renders without crashing when specs array is empty', () => {
    render(<TechSpecs title="Tech Specs" specs={[]} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })
})
