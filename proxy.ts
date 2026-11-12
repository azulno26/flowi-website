import { NextResponse, type NextRequest } from "next/server"

// /gracias solo se muestra a quien acaba de enviar el formulario de contacto.
// La API /api/contacto pone la cookie `flowi_lead` (dura 5 min) cuando el correo
// se envía bien. Sin esa cookie redirigimos a /contacto ANTES de servir la página,
// así no se dispara el page_view de /gracias ni la conversión de Google Ads.
export function proxy(request: NextRequest) {
  if (!request.cookies.has("flowi_lead")) {
    return NextResponse.redirect(new URL("/contacto", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: "/gracias",
}
