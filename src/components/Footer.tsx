'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Membriko</h3>
            <p className="text-gray-400">Especialistas em membranas EPDM em Portugal.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Aplicações</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/applications/telhados-planos" className="hover:text-white">Telhados Planos</Link></li>
              <li><Link href="/applications/telhados-inclinados" className="hover:text-white">Telhados Inclinados</Link></li>
              <li><Link href="/applications/piscinas" className="hover:text-white">Piscinas</Link></li>
              <li><Link href="/applications/terracos" className="hover:text-white">Terraços</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">Sobre Nós</Link></li>
              <li><Link href="/quote" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 info@membriko.pt</li>
              <li>📞 +351 123 456 789</li>
              <li>📍 Portugal</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2026 Membriko. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
