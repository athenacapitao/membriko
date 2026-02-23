import { type ReactNode } from 'react'

type SectionBackground = 'white' | 'surface' | 'navy' | 'primary'

interface SectionProps {
  children: ReactNode
  bg?: SectionBackground
  id?: string
  className?: string
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: 'bg-white',
  surface: 'bg-surface',
  navy: 'bg-navy text-white',
  primary: 'bg-primary text-white',
}

export function Section({
  children,
  bg = 'white',
  id,
  className = '',
}: SectionProps): React.JSX.Element {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${backgroundClasses[bg]} ${className}`}
    >
      {children}
    </section>
  )
}
