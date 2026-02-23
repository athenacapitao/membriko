import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // If root path, redirect to /pt
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url))
  }
  
  // Continue for all other requests
  return NextResponse.next()
}

export const config = {
  matcher: '/'
}
