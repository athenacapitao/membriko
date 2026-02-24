import { X, Check } from 'lucide-react'
import { Section, Container } from '@/components/ui'

interface ProblemSolutionColumn {
  title: string
  description: string
  points: string[]
}

interface ProblemSolutionProps {
  problem: ProblemSolutionColumn
  solution: ProblemSolutionColumn
}

export function ProblemSolution({ problem, solution }: ProblemSolutionProps): React.JSX.Element {
  return (
    <Section bg="dark">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem column */}
          <div className="bg-red-950/30 border border-red-500/20 rounded-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-red-400 mb-3">{problem.title}</h2>
            <p className="text-text-muted leading-relaxed mb-6">{problem.description}</p>

            <ul className="space-y-3">
              {problem.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                    <X size={14} className="text-red-400" aria-hidden="true" />
                  </span>
                  <span className="text-text text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution column */}
          <div className="bg-green-950/30 border border-green-500/20 rounded-xl p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-green-400 mb-3">{solution.title}</h2>
            <p className="text-text-muted leading-relaxed mb-6">{solution.description}</p>

            <ul className="space-y-3">
              {solution.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <Check size={14} className="text-green-400" aria-hidden="true" />
                  </span>
                  <span className="text-text text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
