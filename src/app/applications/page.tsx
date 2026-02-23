import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Aplicações EPDM - Membriko',
  description: 'Todas as aplicações de membranas EPDM em Portugal',
}

const applications = [
  { slug: 'telhados-planos', title: 'Telhados Planos', desc: 'Impermeabilização duradoura para telhados planos comerciais e residenciais', icon: '🏢' },
  { slug: 'telhados-inclinados', title: 'Telhados Inclinados', desc: 'Solução flexível para telhados inclinados com excelente resistência UV', icon: '🏠' },
  { slug: 'telhados-verdes', title: 'Telhados Verdes', desc: 'Membrana root-resistant para telhados ajardinados', icon: '🌿' },
  { slug: 'terracos', title: 'Terraços e Varandas', desc: 'Proteção contra infiltrações em espaços de convivência', icon: '☀️' },
  { slug: 'piscinas', title: 'Piscinas', desc: 'Membrana liners para piscinas residenciais e públicas', icon: '🏊' },
  { slug: 'lagos-reservatorios', title: 'Lagos e Reservatórios', desc: 'Impermeabilização para lagos ornamentais e reservatórios', icon: '💧' },
  { slug: 'fachadas', title: 'Fachadas', desc: 'Proteção de fachadas contra intemperismo e humidade', icon: '🏢' },
  { slug: 'fundacoes', title: 'Fundações', desc: 'Impermeabilização de fundações e estruturas enterradas', icon: '🏗️' },
  { slug: 'edificios-industriais', title: 'Edifícios Industriais', desc: 'Soluções para coberturas industriais', icon: '🏭' },
  { slug: 'edificios-comerciais', title: 'Edifícios Comerciais', desc: 'Impermeabilização para centros comerciais', icon: '🏬' },
  { slug: 'habitacoes-residenciais', title: 'Habitações Residenciais', desc: 'Soluções para casas e moradias', icon: '🏡' },
]

export default function ApplicationsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Nossas Aplicações</h1>
          <p className="text-xl text-blue-100">Descubra todas as aplicações das membranas EPDM</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
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
    </div>
  )
}
