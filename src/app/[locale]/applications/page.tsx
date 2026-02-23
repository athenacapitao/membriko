import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function ApplicationsPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Home' })

  const applications = [
    { slug: 'telhados-planos', title: locale === 'pt' ? 'Telhados Planos' : 'Flat Roofs', desc: locale === 'pt' ? 'Impermeabilização duradoura para telhados planos' : 'Long-lasting waterproofing for flat roofs', icon: '🏢' },
    { slug: 'telhados-inclinados', title: locale === 'pt' ? 'Telhados Inclinados' : 'Pitched Roofs', desc: locale === 'pt' ? 'Solução flexível com resistência UV' : 'Flexible solution with UV resistance', icon: '🏠' },
    { slug: 'telhados-verdes', title: locale === 'pt' ? 'Telhados Verdes' : 'Green Roofs', desc: locale === 'pt' ? 'Membrana root-resistant' : 'Root-resistant membrane', icon: '🌿' },
    { slug: 'terracos', title: locale === 'pt' ? 'Terraços e Varandas' : 'Terraces & Balconies', desc: locale === 'pt' ? 'Proteção contra infiltrações' : 'Leak protection', icon: '☀️' },
    { slug: 'piscinas', title: locale === 'pt' ? 'Piscinas' : 'Swimming Pools', desc: locale === 'pt' ? 'Membrana liners para piscinas' : 'Membrane liners for pools', icon: '🏊' },
    { slug: 'lagos-reservatorios', title: locale === 'pt' ? 'Lagos e Reservatórios' : 'Lakes & Reservoirs', desc: locale === 'pt' ? 'Impermeabilização para lagos' : 'Waterproofing for lakes', icon: '💧' },
    { slug: 'fachadas', title: locale === 'pt' ? 'Fachadas' : 'Facades', desc: locale === 'pt' ? 'Proteção de fachadas' : 'Facade protection', icon: '🏢' },
    { slug: 'fundacoes', title: locale === 'pt' ? 'Fundações' : 'Foundations', desc: locale === 'pt' ? 'Impermeabilização de fundações' : 'Foundation waterproofing', icon: '🏗️' },
    { slug: 'edificios-industriais', title: locale === 'pt' ? 'Edifícios Industriais' : 'Industrial Buildings', desc: locale === 'pt' ? 'Soluções industriais' : 'Industrial solutions', icon: '🏭' },
    { slug: 'edificios-comerciais', title: locale === 'pt' ? 'Edifícios Comerciais' : 'Commercial Buildings', desc: locale === 'pt' ? 'Impermeabilização comercial' : 'Commercial waterproofing', icon: '🏬' },
    { slug: 'habitacoes-residenciais', title: locale === 'pt' ? 'Habitações Residenciais' : 'Residential Houses', desc: locale === 'pt' ? 'Soluções residenciais' : 'Residential solutions', icon: '🏡' },
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{locale === 'pt' ? 'Nossas Aplicações' : 'Our Applications'}</h1>
          <p className="text-xl text-blue-100">{locale === 'pt' ? 'Descubra todas as aplicações das membranas EPDM' : 'Discover all EPDM membrane applications'}</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Link key={app.slug} href={`/${locale}/applications/${app.slug}`} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{app.title}</h3>
                <p className="text-gray-600">{app.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
