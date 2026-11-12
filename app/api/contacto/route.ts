import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nombre, negocio, email, mensaje } = await req.json();
  
  try {
    const { error } = await resend.emails.send({
      from: 'Flowi Web <contacto@flowisolutions.com>',
      to: 'contacto@flowisolutions.com',
      subject: `Nuevo mensaje de ${nombre} - ${negocio}`,
      html: `
        <h2>Nuevo contacto desde flowisolutions.com</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Negocio:</strong> ${negocio}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `
    });
    if (error) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    // Permite ver /gracias (ver proxy.ts) solo tras un envío exitoso.
    const res = NextResponse.json({ ok: true });
    res.cookies.set('flowi_lead', '1', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 300,
    });
    return res;
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
