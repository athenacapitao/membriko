'use client'

import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Membriko
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/applications" className="hover:text-blue-600 transition-colors">
            Aplicações
          </Link>
          <Link href="/why-epdm" className="hover:text-blue-600 transition-colors">
            Porquê EPDM
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            Sobre Nós
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/quote" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Pedir Orçamento
          </Link>
        </div>
      </div>
    </header>
  )
}
