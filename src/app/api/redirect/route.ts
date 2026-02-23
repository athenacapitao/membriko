import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.redirect(new URL('/pt', process.env.NEXT_PUBLIC_BASE_URL || 'https://membriko.vercel.app'))
}
