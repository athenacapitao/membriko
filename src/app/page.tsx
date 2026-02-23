import { redirect } from 'next/navigation'

// This handles the root "/" path - redirect to Portuguese
export default function Root() {
  redirect('/pt')
}
