'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false)
  
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
            <h1 className="text-3xl font-bold mb-4">Obrigado!</h1>
            <p className="text-xl text-gray-600">O seu pedido foi enviado.</p>
            <p className="text-gray-500 mt-2">Responderemos em 24h.</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-center">Pedir Orçamento</h1>
          <p className="text-xl text-gray-600 text-center mb-8">Fale connosco para um orçamento personalizado</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Tipo de Projeto</label>
              <select required className="w-full px-4 py-3 border rounded-lg">
                <option value="">Selecione...</option>
                <option value="telhados-planos">Telhados Planos</option>
                <option value="telhados-inclinados">Telhados Inclinados</option>
                <option value="telhados-verdes">Telhados Verdes</option>
                <option value="terracos">Terraços e Varandas</option>
                <option value="piscinas">Piscinas</option>
                <option value="lagos">Lagos e Reservatórios</option>
              </select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Área (m²)</label>
                <input type="number" required className="w-full px-4 py-3 border rounded-lg" placeholder="ex: 100" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Prazo</label>
                <select required className="w-full px-4 py-3 border rounded-lg">
                  <option value="">Selecione...</option>
                  <option value="asap">Quanto antes</option>
                  <option value="1-3">1-3 meses</option>
                  <option value="3-6">3-6 meses</option>
                  <option value="6+">6+ meses</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Localização</label>
              <input type="text" required className="w-full px-4 py-3 border rounded-lg" placeholder="Local do projeto" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Descrição</label>
              <textarea className="w-full px-4 py-3 border rounded-lg" rows={4} placeholder="Detalhes adicionais..."></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input type="text" required className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <input type="tel" required className="w-full px-4 py-3 border rounded-lg" />
            </div>
            
            <button type="submit" className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Enviar Pedido
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
