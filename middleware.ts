import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || ''
  const url = request.nextUrl.clone()

  if (host.startsWith('legacylens.')) {
    // Root of subdomain → /legacy page
    if (url.pathname === '/') {
      url.pathname = '/legacylens'
      return NextResponse.rewrite(url)
    }

    // /chat → /legacylens/chat, /waitlist → /legacylens/waitlist, etc.
    // But don't double-prefix if already /legacylens/...
    if (!url.pathname.startsWith('/legacylens')) {
      url.pathname = `/legacylens${url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [ '/((?!_next/static|_next/image|favicon.ico|images|fonts|logo|icons).*)'],
}