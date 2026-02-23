import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Home' })

  const applications = [
    { slug: 'telhados-planos', title: locale === 'pt' ? 'Telhados Planos' : 'Flat Roofs', desc: locale === 'pt' ? 'Impermeabilização duradoura' : 'Long-lasting waterproofing', icon: '🏢' },
    { slug: 'telhados-inclinados', title: locale === 'pt' ? 'Telhados Inclinados' : 'Pitched Roofs', desc: locale === 'pt' ? 'Solução flexível' : 'Flexible solution', icon: '🏠' },
    { slug: 'telhados-verdes', title: locale === 'pt' ? 'Telhados Verdes' : 'Green Roofs', desc: locale === 'pt' ? 'Membrana root-resistant' : 'Root-resistant membrane', icon: '🌿' },
    { slug: 'terracos', title: locale === 'pt' ? 'Terraços' : 'Terraces', desc: locale === 'pt' ? 'Proteção contra infiltrações' : 'Leak protection', icon: '☀️' },
    { slug: 'piscinas', title: locale === 'pt' ? 'Piscinas' : 'Swimming Pools', desc: locale === 'pt' ? 'Membrana liners' : 'Membrane liners', icon: '🏊' },
    { slug: 'lagos-reservatorios', title: locale === 'pt' ? 'Lagos' : 'Lakes', desc: locale === 'pt' ? 'Impermeabilização' : 'Waterproofing', icon: '💧' },
  ]

  const benefits = [
    { title: locale === 'pt' ? '50+ Anos' : '50+ Years', desc: locale === 'pt' ? 'Durabilidade comprovada' : 'Proven durability', icon: '⏱️' },
    { title: locale === 'pt' ? 'Resistência UV' : 'UV Resistance', desc: locale === 'pt' ? 'Ideal para Portugal' : 'Ideal for Portugal', icon: '☀️' },
    { title: locale === 'pt' ? '100% Reciclável' : '100% Recyclable', desc: locale === 'pt' ? 'Sustentável' : 'Sustainable', icon: '♻️' },
    { title: locale === 'pt' ? 'Sem Manutenção' : 'No Maintenance', desc: locale === 'pt' ? 'Instale e esqueca' : 'Install and forget', icon: '🔧' },
  ]

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">{t('title')}</h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">{t('subtitle')}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={`/${locale}/quote`} className="px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
                {t('cta_quote')}
              </Link>
              <Link href={`/${locale}/applications`} className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20">
                {t('cta_apps')}
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">50+</div><div className="text-sm text-blue-200">{t('trust_years')}</div></div>
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">100%</div><div className="text-sm text-blue-200">{t('trust_recyclable')}</div></div>
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">500+</div><div className="text-sm text-blue-200">{t('trust_projects')}</div></div>
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">PT</div><div className="text-sm text-blue-200">{t('trust_specialists')}</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">{t('apps_title')}</h2>
          <p className="text-lg text-center mb-12 text-gray-600">{t('apps_subtitle')}</p>
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">{t('why_title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t('cta_title')}</h2>
          <p className="text-xl mb-8 text-blue-100">{t('cta_subtitle')}</p>
          <Link href={`/${locale}/quote`} className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            {t('cta_button')}
          </Link>
        </div>
      </section>
    </div>
  )
}
