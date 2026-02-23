import { redirect } from 'next/navigation'

export default function RootPage() {
  redirect('/pt')
}

export const dynamic = 'force-dynamic'
