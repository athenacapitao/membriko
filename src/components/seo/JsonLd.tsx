interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Membriko',
        description: 'Especialistas em membranas EPDM em Portugal. Impermeabilização de coberturas, piscinas, lagos, fundações e mais.',
        url: 'https://membriko.pt',
        email: 'geral@membriko.pt',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'PT',
          addressRegion: 'Portugal',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 38.7223,
          longitude: -9.1393,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Portugal',
        },
        priceRange: '$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      }}
    />
  )
}

export function ServiceSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Membriko',
          url: 'https://membriko.pt',
        },
        areaServed: {
          '@type': 'Country',
          name: 'Portugal',
        },
      }}
    />
  )
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  )
}
