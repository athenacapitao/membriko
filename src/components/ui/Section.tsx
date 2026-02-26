import { type ReactNode } from 'react'

type SectionBackground = 'dark' | 'darker' | 'elevated' | 'accent'

interface SectionProps {
  children: ReactNode
  bg?: SectionBackground
  id?: string
  className?: string
}

const backgroundClasses: Record<SectionBackground, string> = {
  dark: 'bg-bg',
  darker: 'bg-bg-subtle',
  elevated: 'bg-bg-elevated',
  accent: 'bg-accent/10',
}

export function Section({
  children,
  bg = 'dark',
  id,
  className = '',
}: SectionProps): React.JSX.Element {
  return (
    <section
      id={id}
      className={`py-10 sm:py-16 lg:py-24 ${backgroundClasses[bg]} ${className}`}
    >
      {children}
    </section>
  )
}
