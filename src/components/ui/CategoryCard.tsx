import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Icon } from './Icon'
import { Badge } from './Badge'

interface CategoryCardProps {
  icon: string
  title: string
  description: string
  count: number
  href: string
}

export function CategoryCard({
  icon,
  title,
  description,
  count,
  href,
}: CategoryCardProps): React.JSX.Element {
  return (
    <Link
      href={href}
      className="group flex flex-col bg-bg-elevated rounded-xl border border-white/10 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 p-6"
    >
      {/* Icon and badge row */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors duration-200">
          <Icon name={icon} size={24} className="text-primary" />
        </div>
        <Badge variant="neutral">{count} aplicações</Badge>
      </div>

      {/* Content */}
      <h3 className="font-semibold text-text text-lg mb-2 group-hover:text-accent transition-colors duration-200">
        {title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed flex-1">{description}</p>

      {/* Footer link indicator */}
      <div className="flex items-center gap-1 mt-4 text-accent text-sm font-medium">
        <span>Ver mais</span>
        <ChevronRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>
    </Link>
  )
}
