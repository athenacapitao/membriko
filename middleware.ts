import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname

  // If root path, redirect to /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }

  // For all other requests, continue
  return NextResponse.next()
}

export const config = {
  matcher: '/'
}
