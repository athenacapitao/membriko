import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { isValidLocale, locales } from '@/lib/i18n'
import type { Locale } from '@/lib/i18n'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { LocalBusinessSchema } from '@/components/seo/JsonLd'
import '@/app/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: {
    default: 'Membriko - Especialistas EPDM de Portugal',
    template: '%s | Membriko',
  },
  description: 'Especialistas em membranas EPDM em Portugal. Impermeabilização de coberturas, piscinas, lagos, fundações e mais. 50+ anos de durabilidade.',
  metadataBase: new URL('https://membriko.pt'),
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Header locale={locale as Locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale as Locale} />
        <LocalBusinessSchema />
      </body>
    </html>
  )
}
