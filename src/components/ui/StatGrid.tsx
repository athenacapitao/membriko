interface Stat {
  value: string
  label: string
}

interface StatGridProps {
  stats: Stat[]
}

export function StatGrid({ stats }: StatGridProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center p-6 bg-white rounded-xl border border-border shadow-sm"
        >
          <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-text-muted font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
