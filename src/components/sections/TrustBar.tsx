import Image from 'next/image'
import { Container } from '@/components/ui'

const MANUFACTURERS = [
  {
    name: 'Carlisle SynTec',
    logo: '/images/logos/carlisle.svg',
    url: 'https://www.carlislesyntec.com/',
    preColored: true,
  },
  {
    name: 'Firestone',
    logo: '/images/logos/firestone.svg',
    url: 'https://www.elevatecommercialbp.com/us-en/roofing/epdm-roofing-systems',
    preColored: false,
  },
  {
    name: 'Elevate',
    logo: '/images/logos/elevate.png',
    url: 'https://www.holcimelevate.com/uk-en/roofing/epdm',
    preColored: false,
  },
  {
    name: 'Sika',
    logo: '/images/logos/sika.svg',
    url: 'https://www.sika.com/',
    preColored: true,
  },
  {
    name: 'Soprema',
    logo: '/images/logos/soprema.svg',
    url: 'https://www.soprema.com/',
    preColored: false,
  },
  {
    name: 'IKO',
    logo: '/images/logos/iko.svg',
    url: 'https://www.iko.com/comm/',
    preColored: false,
  },
] as const

interface TrustBarProps {
  title?: string
}

export function TrustBar({ title }: TrustBarProps): React.JSX.Element {
  return (
    <section className="py-6 sm:py-10 bg-bg-subtle border-y border-white/10" aria-label="Fabricantes parceiros">
      <Container>
        {title && (
          <p className="text-center text-sm font-semibold text-text-muted uppercase tracking-wider mb-8">
            {title}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10">
          {MANUFACTURERS.map((manufacturer) => (
            <a
              key={manufacturer.name}
              href={manufacturer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-24 h-10 sm:w-32 sm:h-12 rounded-lg px-3 sm:px-4 opacity-60 hover:opacity-100 transition-opacity duration-200"
              aria-label={manufacturer.name}
            >
              <Image
                src={manufacturer.logo}
                alt={manufacturer.name}
                width={120}
                height={40}
                className={`h-6 sm:h-8 w-auto object-contain ${manufacturer.preColored ? '' : 'brightness-0 invert'}`}
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
