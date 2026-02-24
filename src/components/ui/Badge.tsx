import { type ReactNode } from 'react'

type BadgeVariant = 'primary' | 'accent' | 'success' | 'neutral'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary/20 text-primary-light',
  accent: 'bg-accent/20 text-accent-light',
  success: 'bg-success/20 text-success',
  neutral: 'bg-white/10 text-text-muted',
}

export function Badge({ children, variant = 'neutral' }: BadgeProps): React.JSX.Element {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {children}
    </span>
  )
}
