import { render, screen } from '@testing-library/react'
import { ProblemSolution } from '../ProblemSolution'

const defaultProps = {
  problem: {
    title: 'O Problema',
    description: 'Infiltrações causam danos estruturais graves.',
    points: ['Humidade nas paredes', 'Bolores e fungos', 'Danos no tecto'],
  },
  solution: {
    title: 'A Solução',
    description: 'Membranas EPDM selam completamente a cobertura.',
    points: ['Impermeabilização total', 'Durabilidade 50+ anos', 'Sem manutenção'],
  },
}

describe('ProblemSolution', () => {
  it('renders problem title', () => {
    render(<ProblemSolution {...defaultProps} />)
    expect(screen.getByText('O Problema')).toBeTruthy()
  })

  it('renders solution title', () => {
    render(<ProblemSolution {...defaultProps} />)
    expect(screen.getByText('A Solução')).toBeTruthy()
  })

  it('renders problem description', () => {
    render(<ProblemSolution {...defaultProps} />)
    expect(screen.getByText('Infiltrações causam danos estruturais graves.')).toBeTruthy()
  })

  it('renders solution description', () => {
    render(<ProblemSolution {...defaultProps} />)
    expect(screen.getByText('Membranas EPDM selam completamente a cobertura.')).toBeTruthy()
  })

  it('renders all problem points', () => {
    render(<ProblemSolution {...defaultProps} />)
    expect(screen.getByText('Humidade nas paredes')).toBeTruthy()
    expect(screen.getByText('Bolores e fungos')).toBeTruthy()
    expect(screen.getByText('Danos no tecto')).toBeTruthy()
  })

  it('renders all solution points', () => {
    render(<ProblemSolution {...defaultProps} />)
    expect(screen.getByText('Impermeabilização total')).toBeTruthy()
    expect(screen.getByText('Durabilidade 50+ anos')).toBeTruthy()
    expect(screen.getByText('Sem manutenção')).toBeTruthy()
  })

  it('problem column has red accent styling', () => {
    const { container } = render(<ProblemSolution {...defaultProps} />)
    const problemColumn = container.querySelector('.bg-red-50')
    expect(problemColumn).toBeTruthy()
  })

  it('solution column has green accent styling', () => {
    const { container } = render(<ProblemSolution {...defaultProps} />)
    const solutionColumn = container.querySelector('.bg-green-50')
    expect(solutionColumn).toBeTruthy()
  })
})
