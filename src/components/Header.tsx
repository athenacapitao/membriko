'use client'

import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Membriko
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/applications" className="hover:text-blue-600 transition-colors">
            Aplicações
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            Sobre
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/quote" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Orçamento
          </Link>
        </div>
      </div>
    </header>
  )
}
