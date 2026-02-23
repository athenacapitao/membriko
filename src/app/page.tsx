import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Membriko - EPDM de Portugal',
  description: '50+ anos de durabilidade. Especialistas em membranas EPDM para o mercado português.',
}

const applications = [
  { slug: 'telhados-planos', title: 'Telhados Planos', desc: 'Impermeabilização duradoura para telhados planos', icon: '🏢' },
  { slug: 'telhados-inclinados', title: 'Telhados Inclinados', desc: 'Solução flexível com resistência UV', icon: '🏠' },
  { slug: 'telhados-verdes', title: 'Telhados Verdes', desc: 'Membrana root-resistant para telhados ajardinados', icon: '🌿' },
  { slug: 'terracos', title: 'Terraços e Varandas', desc: 'Proteção contra infiltrações', icon: '☀️' },
  { slug: 'piscinas', title: 'Piscinas', desc: 'Membrana liners para piscinas', icon: '🏊' },
  { slug: 'lagos-reservatorios', title: 'Lagos e Reservatórios', desc: 'Impermeabilização para lagos', icon: '💧' },
]

const benefits = [
  { title: '50+ Anos de Durabilidade', desc: 'Vida útil comprovada superior a 50 anos', icon: '⏱️' },
  { title: 'Resistência UV Total', desc: 'Sem degradação solar — ideal para Portugal', icon: '☀️' },
  { title: '100% Reciclável', desc: 'Construção sustentável e amiga do ambiente', icon: '♻️' },
  { title: 'Manutenção Mínima', desc: 'Instale e esqueca — sem manutenção', icon: '🔧' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              A Melhor Solução EPDM de Portugal
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              50+ anos de durabilidade, resistência total, 100% reciclável. 
              Os especialistas em membranas EPDM para o mercado português.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/quote" className="px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
                Pedir Orçamento
              </Link>
              <Link href="/applications" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20">
                Ver Aplicações
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">50+</div><div className="text-sm text-blue-200">Anos</div></div>
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">100%</div><div className="text-sm text-blue-200">Reciclável</div></div>
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">500+</div><div className="text-sm text-blue-200">Projetos</div></div>
            <div className="bg-white/5 rounded-lg p-4"><div className="text-3xl font-bold text-yellow-500">PT</div><div className="text-sm text-blue-200">Especialistas</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Nossas Aplicações</h2>
          <p className="text-lg text-center mb-12 text-gray-600">Cobrimos todos os tipos de aplicações EPDM</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app) => (
              <Link key={app.slug} href={`/applications/${app.slug}`} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Por Que Escolher EPDM?</h2>
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
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para Impermeabilizar?</h2>
          <p className="text-xl mb-8 text-blue-100">Fale com os especialistas. Resposta em 24h.</p>
          <Link href="/quote" className="inline-block px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
            Pedir Orçamento Grátis
          </Link>
        </div>
      </section>
    </div>
  )
}
