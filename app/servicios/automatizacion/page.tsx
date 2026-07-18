import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Automatización de procesos para pequeños negocios en México | Flowi Solutions',
  description: 'Conectamos tus herramientas y automatizamos tareas repetitivas para que tu negocio local opere más eficientemente sin contratar más personal.',
  alternates: { canonical: 'https://www.flowisolutions.com/servicios/automatizacion' }
}

export default function AutomatizacionPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white relative overflow-hidden">
      {/* Spline viewer background */}
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.12.93/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />

      <div
        className="fixed right-0 top-0 w-full h-screen pointer-events-none z-0 hidden lg:block"
        style={{ opacity: 1 }}
      >
        <spline-viewer
          url="https://prod.spline.design/GBazGw0fDMTPybdT/scene.splinecode"
          loading-anim-type="none"
          hide-logo="true"
          style={{ width: "100%", height: "100vh" }}
        />
      </div>

      <div style={{
        position: "fixed",
        bottom: "0px",
        right: "0px",
        width: "220px",
        height: "50px",
        background: "linear-gradient(to left, #000000 60%, transparent)",
        zIndex: 9999
      }} />

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24">
        {/* Hero */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4f8ef7] animate-pulse"></span>
            <span className="text-sm text-zinc-300 font-medium tracking-wide uppercase">Automatización</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance">
            Las tareas repetitivas de tu pequeño negocio pueden <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f8ef7] to-[#7c6ff7]">hacerse solas</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Responder los mismos mensajes de WhatsApp, confirmar citas, enviar recordatorios, actualizar hojas de cálculo — todo eso puede automatizarse para que tú te enfoques en lo que importa en tu negocio local.
          </p>
        </div>

        {/* What we automate Checklist */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">¿Qué automatizamos para negocios como el tuyo?</h2>
          
          <div className="relative rounded-2xl border border-zinc-800 p-3 w-full sm:w-fit">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative bg-zinc-900/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-zinc-800/50 h-full">
              <ul className="space-y-4">
                {[
                  "Respuestas automáticas por WhatsApp",
                  "Agendado y confirmación de citas",
                  "Recordatorios a clientes",
                  "Reportes automáticos",
                  "Seguimiento de clientes y prospectos",
                  "Integración entre herramientas (formularios, correo, hojas de cálculo)",
                  "Notificaciones de pedidos y pagos"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#4f8ef7] shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Real Examples Grid */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">Ejemplos reales de automatización en negocios locales</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: "💇", title: "Una estética que agenda citas", desc: "automáticamente sin contestar mensajes." },
              { emoji: "🍕", title: "Un restaurante que recibe y confirma", desc: "pedidos sin intervención humana." },
              { emoji: "🏥", title: "Un consultorio que envía recordatorios", desc: "y reduce cancelaciones." },
              { emoji: "🛒", title: "Una tienda que notifica pagos", desc: "y actualiza inventario sola." }
            ].map((card, i) => (
              <div key={i} className="relative rounded-2xl border border-zinc-800 p-3 h-full">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-800/50 h-full">
                  <div className="text-3xl mb-3">{card.emoji}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{card.title}</h3>
                  <p className="text-zinc-400">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">Preguntas frecuentes sobre automatización para pequeños negocios</h2>
          
          <div className="divide-y divide-zinc-800 border-y border-zinc-800">
            {[
              {
                q: '¿Qué es la automatización de procesos para negocios?',
                a: 'Es conectar tus herramientas digitales para que las tareas repetitivas se hagan solas. Por ejemplo, que cuando un cliente te escriba por WhatsApp, reciba una respuesta automática con tu menú de servicios y pueda agendar una cita sin que tú intervengas.'
              },
              {
                q: '¿Tengo que cambiar las herramientas que ya uso?',
                a: 'No. Trabajamos con las herramientas que ya conoces — WhatsApp, Google Sheets, Gmail, tu calendario. Las conectamos entre sí para que funcionen juntas de forma automática.'
              },
              {
                q: '¿La automatización funciona con WhatsApp?',
                a: 'Sí. Podemos configurar respuestas automáticas, enviar confirmaciones de citas, recordatorios y hasta recibir pedidos directamente por WhatsApp Business.'
              },
              {
                q: '¿Qué pasa si algo falla o se detiene?',
                a: 'Configuramos alertas automáticas para detectar problemas. Si algo falla, nos enteramos rápido y lo resolvemos. También te enseñamos a supervisar tus automatizaciones desde un panel sencillo.'
              },
              {
                q: '¿Cuánto tiempo tarda en implementarse una automatización?',
                a: 'Las automatizaciones simples como respuestas automáticas o recordatorios se configuran en 2-3 días. Flujos más complejos que involucran varias herramientas pueden tomar 1-2 semanas.'
              }
            ].map((faq, i) => (
              <details key={i} className="group">
                <summary className="font-heading font-extrabold text-base lg:text-lg cursor-pointer py-4 text-white list-none flex justify-between items-center">
                  {faq.q}
                  <span className="transition group-open:rotate-45 text-[#4f8ef7] text-2xl leading-none">+</span>
                </summary>
                <p className="text-zinc-400 text-sm lg:text-base pb-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl relative rounded-2xl border border-zinc-800 p-3 overflow-hidden">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <div className="relative bg-zinc-900/50 rounded-xl p-8 sm:p-12 backdrop-blur-sm border border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">Dinos qué proceso quieres automatizar en tu negocio local y te mostramos cómo</h2>
              <p className="text-zinc-400 text-lg">Sin compromiso. Te explicamos paso a paso cómo funciona.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium px-8 transition-all duration-300">
                <Link href="https://api.whatsapp.com/send/?phone=525623194635" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-[#4f8ef7] text-[#4f8ef7] hover:bg-[#4f8ef7] hover:text-white font-medium px-8 transition-all duration-300 bg-transparent">
                <Link href="/contacto">
                  Contacto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
