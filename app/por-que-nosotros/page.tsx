import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CheckCircle, ArrowRight, MessageCircle, Users, Rocket, HeartHandshake, MessageSquare } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "¿Por qué nosotros? | Flowi Solutions",
  description: "Enfocados en negocios reales, sin tecnicismos, con acompañamiento continuo. Conoce qué hace diferente a Flowi Solutions.",
}

const differentiators = [
  {
    icon: Users,
    title: "Enfocado en negocios reales",
    desc: "Trabajamos con estéticas, restaurantes, consultorios, escuelas y freelancers. No te hablamos como a un corporativo.",
    detail: "Entendemos que cada peso cuenta. Por eso diseñamos soluciones que se adaptan a tu presupuesto y crecen contigo. No vendemos paquetes genéricos: escuchamos tu problema y proponemos lo que realmente necesitas.",
  },
  {
    icon: MessageSquare,
    title: "Sin tecnicismos",
    desc: "Te explicamos todo con ejemplos, pantallas compartidas y pasos simples.",
    detail: "Nada de jerga técnica ni documentos interminables. Te mostramos cómo funciona todo en videollamada, grabamos tutoriales para ti y estamos a un mensaje de distancia para resolver dudas.",
  },
  {
    icon: Rocket,
    title: "Arranca rápido",
    desc: "Comenzamos por lo esencial para que tengas resultados desde el inicio.",
    detail: "En lugar de planear por meses, lanzamos una versión funcional en días. Así empiezas a ver resultados desde la primera semana y vamos mejorando sobre la marcha.",
  },
  {
    icon: HeartHandshake,
    title: "Acompañamiento",
    desc: "Probamos contigo, ajustamos y dejamos todo funcionando hasta que te sientas cómodo.",
    detail: "No desaparecemos después de entregar. Te acompañamos las primeras semanas, hacemos ajustes en tiempo real y nos aseguramos de que todo funcione perfecto antes de soltar.",
  },
]

const stats = [
  { value: "24h", label: "Tiempo de respuesta" },
  { value: "100%", label: "Clientes satisfechos" },
  { value: "4.9★", label: "Calificación promedio" },
]

export default function PorQueNosotrosPage() {
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
            <p className="text-[#4f8ef7] font-heading font-extrabold text-sm uppercase tracking-widest mb-4">Nosotros</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance">
              ¿Qué hace <span className="text-gradient">diferente</span> a Flowi?
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              No somos una agencia más. Somos un equipo mexicano que entiende tu negocio, habla tu idioma y se enfoca en darte resultados reales.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 text-center">
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-gradient mb-1">{stat.value}</p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative z-20 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12 space-y-6">
          {differentiators.map((item, i) => (
            <div key={i} className="relative rounded-2xl border border-zinc-800 p-3">
              <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative bg-zinc-900/50 rounded-xl p-6 sm:p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#4f8ef7]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-[#4f8ef7]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl lg:text-2xl font-extrabold mb-2">{item.title}</h3>
                    <p className="text-zinc-300 text-base lg:text-lg mb-3">{item.desc}</p>
                    <p className="text-zinc-500 text-sm lg:text-base leading-relaxed">{item.detail}</p>
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
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">¿Listo para trabajar juntos?</h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">Cuéntanos sobre tu negocio y te decimos cómo podemos ayudarte.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-6 text-base rounded-full transition-all duration-300">
              <a href="https://api.whatsapp.com/send/?phone=525623194635" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
            </Button>
            <Button size="lg" asChild className="bg-[#4f8ef7] hover:bg-[#3d7be6] text-white px-8 py-6 text-base rounded-full transition-all duration-300">
              <Link href="/contacto">Contactar <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
