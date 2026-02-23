'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()

  // For now, just show a simple switcher
  // In a full implementation, this would toggle between /pt and /en
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-400">PT</span>
    </div>
  )
}
