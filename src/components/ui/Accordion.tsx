'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
}

export function Accordion({ items }: AccordionProps): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function handleToggle(index: number): void {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="divide-y divide-border border border-border rounded-xl overflow-hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index} className="bg-white">
            <button
              type="button"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-surface transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
            >
              <span className="font-semibold text-navy pr-4">{item.question}</span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
              />
            </button>
            {/* Height transition via grid rows trick for smooth animation without JS measurement */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pt-1 text-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
