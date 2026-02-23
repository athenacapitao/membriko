import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Membriko - Especialistas EPDM de Portugal',
  description: 'Especialistas em membranas EPDM em Portugal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
