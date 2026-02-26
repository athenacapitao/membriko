interface ComparisonRow {
  feature: string
  epdm: string
  alternatives: { name: string; value: string }[]
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export function ComparisonTable({ rows }: ComparisonTableProps): React.JSX.Element {
  const alternativeNames =
    rows.length > 0 ? rows[0].alternatives.map((alt) => alt.name) : []

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10 -mx-4 sm:mx-0">
      <table className="w-full min-w-[500px] text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-left font-semibold text-text bg-bg-subtle">
              Característica
            </th>
            <th className="px-3 py-2.5 sm:px-4 sm:py-3 text-center font-semibold text-black bg-accent/80">
              EPDM
            </th>
            {alternativeNames.map((name) => (
              <th
                key={name}
                className="px-3 py-2.5 sm:px-4 sm:py-3 text-center font-semibold text-text bg-bg-subtle"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-b border-white/10 last:border-b-0 ${
                rowIndex % 2 === 0 ? 'bg-bg-elevated' : 'bg-bg-subtle'
              }`}
            >
              <td className="px-3 py-2.5 sm:px-4 sm:py-3 font-medium text-text">{row.feature}</td>
              <td className="px-3 py-2.5 sm:px-4 sm:py-3 text-center text-accent font-semibold bg-accent/10">
                {row.epdm}
              </td>
              {row.alternatives.map((alt) => (
                <td key={alt.name} className="px-3 py-2.5 sm:px-4 sm:py-3 text-center text-text-muted">
                  {alt.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
