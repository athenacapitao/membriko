interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-4xl',
}

export function Logo({
  size = 'md',
  className = '',
}: LogoProps): React.JSX.Element {
  return (
    <span
      className={`${sizeMap[size]} font-extralight tracking-[0.25em] uppercase select-none ${className}`}
      aria-label="Membriko"
    >
      <span className="text-white">membr</span>
      <span className="text-accent font-light">i</span>
      <span className="text-white">ko</span>
    </span>
  )
}
