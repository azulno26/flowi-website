import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Zap, Globe, Bot, ArrowRight, CheckCircle, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Servicios | Páginas web, bots y automatización — Flowi Solutions',
  description: 'Diseño web profesional, chatbots para WhatsApp y automatización de procesos para negocios locales en México.',
  alternates: { canonical: 'https://www.flowisolutions.com/servicios' },
}

const services = [
  {
    icon: Zap,
    color: "#4f8ef7",
    title: "Automatización",
    href: "/servicios/automatizacion",
    desc: "Optimiza tus procesos con flujos automatizados. Conectamos tus herramientas y eliminamos tareas repetitivas para que te enfoques en lo importante.",
    features: [
      "Flujos automatizados con n8n y Make",
      "Integración con CRM, email y WhatsApp",
      "Automatización de facturas y recordatorios",
      "Reportes automáticos de ventas",
      "Conexión entre herramientas existentes",
    ],
  },
  {
    icon: Globe,
    color: "#7c6ff7",
    title: "Páginas Web",
    href: "/servicios/paginas-web",
    desc: "Sitios modernos, rápidos y optimizados para convertir visitantes en clientes. Diseño responsivo y enfocado en resultados.",
    features: [
      "Diseño responsivo y moderno",
      "Optimización SEO desde el inicio",
      "Velocidad de carga optimizada",
      "Formularios de contacto integrados",
      "Panel de administración sencillo",
    ],
  },
  {
    icon: Bot,
    color: "#4f8ef7",
    title: "Bots Inteligentes",
    href: "/servicios/consultoria",
    desc: "Chatbots y asistentes virtuales que atienden a tus clientes 24/7. Integración con WhatsApp, Messenger y tu sitio web.",
    features: [
      "Bot de WhatsApp Business",
      "Respuestas automáticas 24/7",
      "Agendado de citas automático",
      "Integración con Messenger y web",
      "Escalamiento a agente humano",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
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

      {/* Hero */}
      <section className="relative z-20 pt-32 pb-16 lg:pt-40 lg:pb-24" style={{ background: "radial-gradient(ellipse at top, rgba(79,142,247,0.06) 0%, transparent 60%)" }}>
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-[#4f8ef7] font-heading font-extrabold text-sm uppercase tracking-widest mb-4">Servicios</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance">
              Soluciones que <span className="text-gradient">impulsan</span> tu negocio
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Desde automatizaciones simples hasta plataformas completas. Cada servicio se adapta a lo que tu negocio realmente necesita.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="relative z-20 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12 space-y-8">
          {services.map((service, i) => (
            <div key={i} className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative bg-zinc-900/50 rounded-xl p-6 sm:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  <div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${service.color}15` }}>
                      <service.icon className="w-7 h-7" style={{ color: service.color }} />
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-3">{service.title}</h2>

                    <p className="text-zinc-400 leading-relaxed text-base lg:text-lg">{service.desc}</p>
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-lg mb-4 text-zinc-300">¿Qué incluye?</h3>
                    <ul className="space-y-3">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#4f8ef7] flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-300 text-sm lg:text-base">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="inline-flex items-center gap-2 mt-6 text-[#4f8ef7] hover:text-white font-heading font-extrabold text-sm transition-colors duration-300">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">¿Listo para empezar?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Platícanos tu idea y te armamos una propuesta a tu medida.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 text-base rounded-full transition-all duration-300">
              <a href="https://api.whatsapp.com/send/?phone=525623194635" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
            <Button size="lg" asChild className="bg-[#4f8ef7] hover:bg-[#3d7be6] text-white px-8 py-6 text-base rounded-full transition-all duration-300">
              <Link href="/contacto">Formulario de contacto <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
