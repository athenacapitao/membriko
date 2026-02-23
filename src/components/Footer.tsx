'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Footer() {
  const pathname = usePathname()
  const locale = pathname?.split('/')[1] || 'pt'

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Membriko</h3>
            <p className="text-gray-400">{locale === 'pt' ? 'Especialistas em membranas EPDM em Portugal.' : 'EPDM membrane specialists in Portugal.'}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{locale === 'pt' ? 'Aplicações' : 'Applications'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={`/${locale}/applications/telhados-planos`} className="hover:text-white">{locale === 'pt' ? 'Telhados Planos' : 'Flat Roofs'}</Link></li>
              <li><Link href={`/${locale}/applications/telhados-inclinados`} className="hover:text-white">{locale === 'pt' ? 'Telhados Inclinados' : 'Pitched Roofs'}</Link></li>
              <li><Link href={`/${locale}/applications/piscinas`} className="hover:text-white">{locale === 'pt' ? 'Piscinas' : 'Swimming Pools'}</Link></li>
              <li><Link href={`/${locale}/applications/terracos`} className="hover:text-white">{locale === 'pt' ? 'Terraços' : 'Terraces'}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{locale === 'pt' ? 'Empresa' : 'Company'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href={`/${locale}/about`} className="hover:text-white">{locale === 'pt' ? 'Sobre Nós' : 'About Us'}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-white">{locale === 'pt' ? 'Contacto' : 'Contact'}</Link></li>
              <li><Link href={`/${locale}/blog`} className="hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{locale === 'pt' ? 'Contacto' : 'Contact'}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@membriko.pt</li>
              <li>📞 +351 123 456 789</li>
              <li>📍 Portugal</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Membriko. {locale === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
