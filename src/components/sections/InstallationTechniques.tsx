import { Check, X } from 'lucide-react'
import { Section, Container, Card, CardHeader, CardBody } from '@/components/ui'

interface Technique {
  title: string
  description: string
  pros: string[]
  cons: string[]
}

interface InstallationTechniquesProps {
  title: string
  techniques: Technique[]
}

export function InstallationTechniques({
  title,
  techniques,
}: InstallationTechniquesProps): React.JSX.Element {
  return (
    <Section bg="surface">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">{title}</h2>
        </div>

        {/* Techniques grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {techniques.map((technique, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="font-semibold text-navy text-lg">{technique.title}</h3>
                <p className="text-text-muted text-sm mt-1 leading-relaxed">
                  {technique.description}
                </p>
              </CardHeader>

              <CardBody>
                {/* Pros list */}
                {technique.pros.length > 0 && (
                  <div className="mb-5">
                    <p className="text-xs font-semibold text-success uppercase tracking-wider mb-3">
                      Vantagens
                    </p>
                    <ul className="space-y-2">
                      {technique.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start gap-2">
                          <Check
                            size={16}
                            className="flex-shrink-0 text-success mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-text text-sm leading-relaxed">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Cons list */}
                {technique.cons.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-3">
                      Desvantagens
                    </p>
                    <ul className="space-y-2">
                      {technique.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start gap-2">
                          <X
                            size={16}
                            className="flex-shrink-0 text-red-500 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-text text-sm leading-relaxed">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
