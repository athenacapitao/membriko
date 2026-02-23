interface ComparisonRow {
  feature: string
  epdm: string
  alternatives: { name: string; value: string }[]
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
}

export function ComparisonTable({ rows }: ComparisonTableProps): React.JSX.Element {
  // Derive column headers from first row's alternatives
  const alternativeNames =
    rows.length > 0 ? rows[0].alternatives.map((alt) => alt.name) : []

  return (
    <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
      <table className="w-full min-w-[600px] text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left font-semibold text-text bg-surface-alt">
              Característica
            </th>
            {/* EPDM column header — highlighted */}
            <th className="px-4 py-3 text-center font-semibold text-navy bg-accent/20">
              EPDM
            </th>
            {alternativeNames.map((name) => (
              <th
                key={name}
                className="px-4 py-3 text-center font-semibold text-text bg-surface-alt"
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
              className={`border-b border-border last:border-b-0 ${
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-surface'
              }`}
            >
              <td className="px-4 py-3 font-medium text-text">{row.feature}</td>
              {/* EPDM value — highlighted column */}
              <td className="px-4 py-3 text-center text-navy font-semibold bg-accent/10">
                {row.epdm}
              </td>
              {row.alternatives.map((alt) => (
                <td key={alt.name} className="px-4 py-3 text-center text-text-muted">
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
