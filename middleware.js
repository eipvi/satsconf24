import { NextResponse } from 'next/server';

export const config = {
  matcher: '/',
};

export function middleware(req) {
  // Verificar se o consentimento de cookies já foi dado
  const cookieConsent = req.cookies.get('Cookie_accepted_global')?.value;

  // Se o consentimento não foi dado, mostrar o pop-up
  if (!cookieConsent) {
    const response = NextResponse.next();
    response.cookies.set('showCookiePopup', 'true', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/'
    });
    return response;
  }

  // Caso contrário, apenas continue com a requisição
  return NextResponse.next();
}
