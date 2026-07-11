import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contacto | Flowi Solutions — Habla con nosotros por WhatsApp',
  description: 'Contáctanos por WhatsApp o correo. Cuéntanos tu proyecto y te proponemos una solución práctica sin compromiso.',
  alternates: { canonical: 'https://www.flowisolutions.com/contacto' },
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children
}
