'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/routing'
import { ChangeEvent, useTransition } from 'react'

export function LanguageSwitcher() {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <select
      defaultValue={locale}
      disabled={isPending}
      onChange={onSelectChange}
      className="px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
    >
      <option value="pt">PT</option>
      <option value="en">EN</option>
    </select>
  )
}
