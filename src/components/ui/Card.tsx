import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps): React.JSX.Element {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-border hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }: CardProps): React.JSX.Element {
  return (
    <div className={`px-6 pt-6 pb-4 border-b border-border ${className}`}>
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
