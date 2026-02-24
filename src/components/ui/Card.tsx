import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps): React.JSX.Element {
  return (
    <div
      className={`bg-bg-elevated rounded-xl border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardProps): React.JSX.Element {
  return (
    <div className={`px-6 pt-6 pb-4 border-b border-white/10 ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }: CardProps): React.JSX.Element {
  return (
    <div className={`px-6 py-5 ${className}`}>
      {children}
    </div>
  )
}
