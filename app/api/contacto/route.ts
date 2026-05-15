import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nombre, negocio, email, mensaje } = await req.json();
  
  try {
    await resend.emails.send({
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
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
