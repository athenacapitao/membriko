import { render, screen } from '@testing-library/react'
import { FAQSection } from '../FAQSection'

const defaultProps = {
  title: 'Perguntas Frequentes',
  faqs: [
    { question: 'O que é EPDM?', answer: 'EPDM é uma membrana de borracha sintética.' },
    { question: 'Quanto dura?', answer: 'Dura 50+ anos com manutenção mínima.' },
  ],
}

describe('FAQSection', () => {
  it('renders the section title as h2', () => {
    render(<FAQSection {...defaultProps} />)
    const h2 = screen.getByRole('heading', { level: 2 })
    expect(h2.textContent).toBe('Perguntas Frequentes')
  })

  it('does not render subtitle when omitted', () => {
    render(<FAQSection {...defaultProps} />)
    expect(screen.queryByText(/subtitle/i)).toBeNull()
  })

  it('renders the optional subtitle when provided', () => {
    render(<FAQSection {...defaultProps} subtitle="Tudo o que precisa de saber" />)
    expect(screen.getByText('Tudo o que precisa de saber')).toBeTruthy()
  })

  it('renders all FAQ questions via the Accordion', () => {
    render(<FAQSection {...defaultProps} />)
    expect(screen.getByText('O que é EPDM?')).toBeTruthy()
    expect(screen.getByText('Quanto dura?')).toBeTruthy()
  })

  it('injects FAQ JSON-LD script into the DOM', () => {
    const { container } = render(<FAQSection {...defaultProps} />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeTruthy()

    const parsed = JSON.parse(script!.textContent ?? '{}')
    expect(parsed['@type']).toBe('FAQPage')
    expect(parsed.mainEntity).toHaveLength(2)
    expect(parsed.mainEntity[0].name).toBe('O que é EPDM?')
  })

  it('renders without crashing when faqs array is empty', () => {
    render(<FAQSection title="FAQ" faqs={[]} />)
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy()
  })
})
