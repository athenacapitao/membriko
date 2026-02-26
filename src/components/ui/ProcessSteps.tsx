interface ProcessStep {
  step: number
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export function ProcessSteps({ steps }: ProcessStepsProps): React.JSX.Element {
  return (
    <ol className="relative space-y-0">
      {steps.map((item, index) => {
        const isLast = index === steps.length - 1

        return (
          <li key={item.step} className="flex gap-4 sm:gap-6">
            {/* Left column: circle and connecting line */}
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center font-bold text-sm z-10">
                {item.step}
              </div>
              {!isLast && (
                <div className="w-0.5 flex-1 bg-white/10 mt-1 mb-1" aria-hidden="true" />
              )}
            </div>

            {/* Right column: content */}
            <div className={`pb-${isLast ? '0' : '8'} pt-1 flex-1`}>
              <h3 className="font-semibold text-text text-lg mb-1">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
