interface Stat {
  value: string
  label: string
}

interface StatGridProps {
  stats: Stat[]
}

export function StatGrid({ stats }: StatGridProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-4 sm:p-6 bg-bg-elevated rounded-xl border border-white/10"
        >
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-text-muted font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
