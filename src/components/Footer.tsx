'use client'

import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Membriko</h3>
            <p className="text-gray-400">
              Especialistas em membranas EPDM em Portugal.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><Link href="/pt/applications" className="text-gray-400 hover:text-white">{t('applications')}</Link></li>
              <li><Link href="/pt/about" className="text-gray-400 hover:text-white">{t('about')}</Link></li>
              <li><Link href="/pt/blog" className="text-gray-400 hover:text-white">{t('blog')}</Link></li>
              <li><Link href="/pt/contact" className="text-gray-400 hover:text-white">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Aplicações</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Coberturas Planas</li>
              <li>Piscinas</li>
              <li>Lagos e Reservatórios</li>
              <li>Fachadas</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Portugal</li>
              <li>info@membriko.pt</li>
              <li>+351 XXX XXX XXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Membriko. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
