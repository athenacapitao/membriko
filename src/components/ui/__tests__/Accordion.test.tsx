import { render, screen, fireEvent } from '@testing-library/react'
import { Accordion } from '../Accordion'

const items = [
  { question: 'What is EPDM?', answer: 'EPDM is a synthetic rubber membrane.' },
  { question: 'How long does it last?', answer: 'Typically 50+ years.' },
]

describe('Accordion', () => {
  it('renders all questions', () => {
    render(<Accordion items={items} />)
    expect(screen.getByText('What is EPDM?')).toBeTruthy()
    expect(screen.getByText('How long does it last?')).toBeTruthy()
  })

  it('answers are not visible in collapsed state — aria-expanded is false', () => {
    render(<Accordion items={items} />)
    const buttons = screen.getAllByRole('button')
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false')
    expect(buttons[1].getAttribute('aria-expanded')).toBe('false')
  })

  it('expands item when clicked', () => {
    render(<Accordion items={items} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true')
    expect(screen.getByText('EPDM is a synthetic rubber membrane.')).toBeTruthy()
  })

  it('collapses item when clicked again', () => {
    render(<Accordion items={items} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true')
    fireEvent.click(buttons[0])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false')
  })

  it('closes open item when a different item is opened', () => {
    render(<Accordion items={items} />)
    const buttons = screen.getAllByRole('button')
    fireEvent.click(buttons[0])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true')
    fireEvent.click(buttons[1])
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false')
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true')
  })

  it('renders empty state gracefully when no items given', () => {
    const { container } = render(<Accordion items={[]} />)
    expect(container.firstChild).toBeTruthy()
  })
})
