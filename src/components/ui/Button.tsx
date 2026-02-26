import Link from 'next/link'
import { type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  disabled?: boolean
}

interface ButtonAsButtonProps extends BaseButtonProps {
  href?: undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
}

interface ButtonAsLinkProps extends BaseButtonProps {
  href: string
  onClick?: undefined
  type?: undefined
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-black font-semibold hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  secondary:
    'bg-white/10 text-white font-semibold hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  outline:
    'border border-white/20 text-white font-semibold hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
  ghost:
    'bg-transparent text-white font-semibold hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-sm rounded-md min-h-[44px]',
  md: 'px-5 py-3 text-base rounded-lg min-h-[44px]',
  lg: 'px-6 py-3.5 text-base sm:px-8 sm:py-4 sm:text-lg rounded-lg min-h-[48px]',
}

const baseClasses =
  'inline-flex items-center justify-center transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none'

export function Button(props: ButtonProps): React.JSX.Element {
  const { children, variant = 'primary', size = 'md', className = '', disabled } = props

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  )
}
