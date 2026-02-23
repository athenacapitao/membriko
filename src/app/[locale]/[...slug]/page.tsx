import { notFound } from 'next/navigation'

// Catch-all for unmatched routes under [locale]
export default function CatchAllPage() {
  notFound()
}
