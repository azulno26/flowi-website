import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Consultoría digital para negocios locales en México | Flowi Solutions',
  description: 'Te ayudamos a entender qué herramientas digitales necesita tu negocio local y cómo implementarlas sin complicaciones ni tecnicismos.',
  alternates: {
    canonical: 'https://www.flowisolutions.com/servicios/consultoria'
  }
}

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#4f8ef7]/30">
      {/* Spline Viewer Background */}
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

      {/* Content */}
      <main className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 space-y-24">
        
        {/* Hero Section */}
        <section className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-[#4f8ef7]/30 bg-[#4f8ef7]/10 px-3 py-1 text-sm font-medium text-[#4f8ef7] mb-6">
            Consultoría
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance">
            No sabes por dónde empezar tu transformación digital — <span className="bg-gradient-to-r from-[#4f8ef7] to-[#7c6ff7] bg-clip-text text-transparent">nosotros sí</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            Muchos pequeños negocios ya tienen WhatsApp, redes sociales y hasta clientes frecuentes, pero no saben cómo conectar todo para trabajar menos y vender más.
          </p>
        </section>

        {/* ¿Qué hacemos en la consultoría? */}
        <section className="max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">
            ¿Qué hacemos en la consultoría?
          </h2>
          <div className="relative rounded-2xl border border-zinc-800 p-3">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative bg-zinc-900/50 rounded-xl p-8 backdrop-blur-sm">
              <ul className="space-y-6">
                {[
                  "Diagnóstico de tu negocio y procesos actuales",
                  "Identificación de lo que se puede mejorar o automatizar",
                  "Plan de acción claro y sin tecnicismos",
                  "Acompañamiento durante la implementación",
                  "Seguimiento para asegurar resultados"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-[#4f8ef7] shrink-0 mr-4 mt-0.5" />
                    <span className="text-zinc-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ¿Cuándo te conviene una consultoría? */}
        <section className="max-w-4xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">
            ¿Cuándo te conviene una consultoría para tu negocio local?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Tienes procesos manuales que consumen demasiado tiempo",
              "Recibes clientes por WhatsApp pero no tienes un sistema claro",
              "Quieres crecer pero no sabes qué herramienta usar primero",
              "Invertiste en tecnología pero no le sacas provecho",
              "Sientes que tu negocio depende demasiado de ti para funcionar"
            ].map((scenario, i) => (
              <div key={i} className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
                <div className="relative bg-zinc-900/50 rounded-xl p-6 h-full flex items-center backdrop-blur-sm">
                  <p className="text-zinc-300 text-lg font-medium">{scenario}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">
            Preguntas frecuentes de pequeños negocios
          </h2>
          <div className="space-y-2">
            {[
              {
                q: '¿Qué es exactamente una consultoría digital?',
                a: 'Es una sesión donde analizamos cómo funciona tu negocio, identificamos lo que se puede mejorar con herramientas digitales, y te damos un plan de acción claro para implementarlo. Sin jerga técnica ni contratos largos.'
              },
              {
                q: '¿Mi negocio es demasiado pequeño para esto?',
                a: 'Para nada. De hecho, los negocios pequeños son los que más se benefician porque cada mejora tiene un impacto directo. Si tienes clientes y quieres crecer, te podemos ayudar.'
              },
              {
                q: '¿Cuánto tiempo toma el proceso de consultoría?',
                a: 'El diagnóstico inicial toma entre 1 y 2 sesiones de una hora. El plan de acción lo tienes en menos de una semana. La implementación depende de lo que decidamos hacer juntos.'
              },
              {
                q: '¿Qué pasa después de la consultoría, me dejan solo?',
                a: 'No. Te acompañamos durante la implementación y hacemos seguimiento para asegurarnos de que todo funcione. No desaparecemos después de entregar el plan.'
              },
              {
                q: '¿Trabajan con negocios fuera de Ciudad de México?',
                a: 'Sí. Trabajamos con negocios de todo México de forma remota. Las sesiones son por videollamada y la comunicación es por WhatsApp o correo.'
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-zinc-800">
                <summary className="font-heading font-extrabold text-base lg:text-lg cursor-pointer py-4 text-white list-none flex justify-between items-center">
                  {faq.q}
                  <span className="transform transition-transform group-open:rotate-180 text-zinc-500">
                    ▼
                  </span>
                </summary>
                <p className="text-zinc-400 text-sm lg:text-base pb-4 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl text-center py-12 mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-balance mx-auto">
            Cuéntanos cómo funciona tu negocio y te decimos cómo podemos ayudarte
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Sin compromiso, sin tecnicismos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white transition-all duration-300 px-8 text-lg w-full sm:w-auto h-14">
              <a href="https://api.whatsapp.com/send/?phone=525623194635" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-[#4f8ef7] hover:bg-[#4f8ef7]/90 text-white transition-all duration-300 px-8 text-lg w-full sm:w-auto h-14">
              <Link href="/contacto">
                Ir al formulario <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

      </main>
    </div>
  )
}
