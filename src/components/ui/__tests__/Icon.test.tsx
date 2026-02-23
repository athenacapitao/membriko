import { render } from '@testing-library/react'
import { Icon, validIconNames } from '../Icon'

describe('Icon', () => {
  it('renders an SVG for a known icon name', () => {
    const { container } = render(<Icon name="Home" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
  })

  it('returns null for an unknown icon name', () => {
    const { container } = render(<Icon name="NotAnIcon" />)
    expect(container.firstChild).toBeNull()
  })

  it('passes size to the icon', () => {
    const { container } = render(<Icon name="Mail" size={32} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeTruthy()
    // Lucide sets width/height attributes
    expect(svg?.getAttribute('width')).toBe('32')
    expect(svg?.getAttribute('height')).toBe('32')
  })

  it('passes className to the icon', () => {
    const { container } = render(<Icon name="Phone" className="text-primary" />)
    const svg = container.querySelector('svg')
    // SVGAnimatedString — use getAttribute rather than .className
    expect(svg?.getAttribute('class')).toContain('text-primary')
  })

  it('sets aria-hidden on the icon', () => {
    const { container } = render(<Icon name="Check" />)
    const svg = container.querySelector('svg')
    expect(svg?.getAttribute('aria-hidden')).toBe('true')
  })

  it('exports validIconNames as non-empty array', () => {
    expect(validIconNames.length).toBeGreaterThan(0)
    expect(validIconNames).toContain('Home')
    expect(validIconNames).toContain('ChevronDown')
  })

  it('renders all icons in the iconMap without crashing', () => {
    for (const name of validIconNames) {
      const { container } = render(<Icon name={name} />)
      expect(container.querySelector('svg')).toBeTruthy()
    }
  })
})
