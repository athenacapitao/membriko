'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function QuotePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const [submitted, setSubmitted] = useState(false)
  const locale = 'pt' // Will be fixed with useParams
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="text-center">
            <div className="text-6xl mb-4">✅</div>
            <h1 className="text-3xl font-bold mb-4">{locale === 'pt' ? 'Obrigado!' : 'Thank you!'}</h1>
            <p className="text-xl text-gray-600">{locale === 'pt' ? 'O seu pedido foi enviado.' : 'Your request has been sent.'}</p>
            <p className="text-gray-500 mt-2">{locale === 'pt' ? 'Responderemos em 24h.' : 'We\'ll respond within 24h.'}</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-center">{locale === 'pt' ? 'Pedir Orçamento' : 'Get a Quote'}</h1>
          <p className="text-xl text-gray-600 text-center mb-8">{locale === 'pt' ? 'Fale connosco para um orçamento personalizado' : 'Contact us for a personalized quote'}</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Tipo de Projeto' : 'Project Type'}</label>
              <select required className="w-full px-4 py-3 border rounded-lg">
                <option value="">{locale === 'pt' ? 'Selecione...' : 'Select...'}</option>
                <option value="telhados-planos">{locale === 'pt' ? 'Telhados Planos' : 'Flat Roofs'}</option>
                <option value="telhados-inclinados">{locale === 'pt' ? 'Telhados Inclinados' : 'Pitched Roofs'}</option>
                <option value="telhados-verdes">{locale === 'pt' ? 'Telhados Verdes' : 'Green Roofs'}</option>
                <option value="terracos">{locale === 'pt' ? 'Terraços e Varandas' : 'Terraces'}</option>
                <option value="piscinas">{locale === 'pt' ? 'Piscinas' : 'Swimming Pools'}</option>
                <option value="lagos">{locale === 'pt' ? 'Lagos e Reservatórios' : 'Lakes'}</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Área (m²)' : 'Area (m²)'}</label>
                <input type="number" required className="w-full px-4 py-3 border rounded-lg" placeholder="ex: 100" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Prazo' : 'Timeline'}</label>
                <select required className="w-full px-4 py-3 border rounded-lg">
                  <option value="">{locale === 'pt' ? 'Selecione...' : 'Select...'}</option>
                  <option value="asap">{locale === 'pt' ? 'Quanto antes' : 'ASAP'}</option>
                  <option value="1-3">{locale === 'pt' ? '1-3 meses' : '1-3 months'}</option>
                  <option value="3-6">{locale === 'pt' ? '3-6 meses' : '3-6 months'}</option>
                  <option value="6+">6+ {locale === 'pt' ? 'meses' : 'months'}</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Localização' : 'Location'}</label>
              <input type="text" required className="w-full px-4 py-3 border rounded-lg" placeholder={locale === 'pt' ? 'Local do projeto' : 'Project location'} />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Descrição' : 'Description'}</label>
              <textarea className="w-full px-4 py-3 border rounded-lg" rows={4} placeholder={locale === 'pt' ? 'Detalhes adicionais...' : 'Additional details...'}></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Nome' : 'Name'}</label>
                <input type="text" required className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">{locale === 'pt' ? 'Telefone' : 'Phone'}</label>
              <input type="tel" required className="w-full px-4 py-3 border rounded-lg" />
            </div>
            
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              {locale === 'pt' ? 'Enviar Pedido' : 'Submit Request'}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
