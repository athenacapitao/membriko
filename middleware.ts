import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname

  // If root path, redirect to /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }

  // If path starts with /pt or /en, continue
  if (pathname.startsWith('/pt') || pathname.startsWith('/en')) {
    return NextResponse.next()
  }

  // For any other path, continue
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/(pt|en)/:path*']
}
