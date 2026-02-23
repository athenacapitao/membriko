import { type ReactNode } from 'react'

type BadgeVariant = 'primary' | 'accent' | 'success' | 'neutral'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/15 text-amber-700',
  success: 'bg-success/10 text-success',
  neutral: 'bg-surface-alt text-text-muted',
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
