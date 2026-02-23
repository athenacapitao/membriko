import { redirect } from 'next/navigation'

// This handles the root "/" path - redirect to Portuguese
export default function Root() {
  redirect('/pt')
}

// Make this dynamic so the redirect works
export const dynamic = 'force-dynamic'
