"use client"

import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { MessageCircle, Bot, Globe, Zap, ArrowRight, Quote, Star, ExternalLink } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"
import Script from "next/script"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const whatsappLink = "https://api.whatsapp.com/send/?phone=525623194635"

  const portfolio = [
    { name: "Estética y Podología Sharm", url: "https://www.esteticasharm.com/", favicon: "https://www.google.com/s2/favicons?domain=www.esteticasharm.com&sz=64", desc: "Página web + bot de citas automatizado" },
    { name: "Golden Heritage", url: "https://goldenheritage.com.mx/", favicon: "https://www.google.com/s2/favicons?domain=goldenheritage.com.mx&sz=128", desc: "Tienda online con integración de pagos y envíos" },
    { name: "Plattform", url: "https://plattform.mx/", favicon: "https://www.google.com/s2/favicons?domain=plattform.mx&sz=64", desc: "Plataforma SaaS de e-learning para instructores universitarios" },
    { name: "Bazares MX", url: "https://bazaresmx.com.mx/", favicon: "/bazaresmx-logo.png", desc: "Directorio digital de bazares y mercados en México" },
  ]

  const testimonials = [
    { quote: "Gracias a Flowi Solutions, mi estética ahora tiene página web y respondo automáticamente a los mensajes para agendar citas.", author: "Estética y Podología Sharm" },
    { quote: "Flowi no solo diseñó un sitio increíble, sino que hizo que todo el proceso de integración de pagos y envíos fuera sencillo.", author: "Golden Heritage" },
  ]

  return (
    <>
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.12.93/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />

      {/* 3D Spline Viewer */}
      <div
        className="fixed right-0 top-0 w-full h-screen pointer-events-none z-0"
        style={{ opacity: 1 }}
      >
        <div className="track">
          <spline-viewer
            url="https://prod.spline.design/GBazGw0fDMTPybdT/scene.splinecode"
            loading-anim-type="none"
            hide-logo="true"
            className="w-full h-full"
            style={{ position: "sticky", top: "0px", height: "100vh" }}
          />
        </div>
      </div>

      {/* Mobile gradient background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 block lg:hidden"
        style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(79,142,247,0.15) 0%, transparent 60%)" }}
      />

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
      <section ref={heroRef} className="relative z-20 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-12 pt-24 pb-16 lg:pb-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8 lg:mb-12 animate-fade-in">
              <div className="relative w-12 h-6 lg:w-14 lg:h-7 bg-gradient-to-r from-[#4f8ef7] to-[#7c6ff7] rounded-full">
                <div className="absolute right-1 top-1 w-4 h-4 lg:w-5 lg:h-5 bg-white rounded-full" />
              </div>
              <span className="text-sm text-zinc-400">Disponibles para nuevos proyectos</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 lg:mb-6 leading-[0.9] animate-fade-in-up text-balance">
              <span className="text-gradient">FLOWI</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-zinc-300 mb-6 lg:mb-8 animate-fade-in-up animation-delay-200 font-light">
              Automatización &middot; Páginas web &middot; Bots
            </p>

            <p className="text-base sm:text-lg text-zinc-500 mb-8 lg:mb-12 animate-fade-in-up animation-delay-400 max-w-xl leading-relaxed">
              Páginas claras, bots de atención y automatizaciones simples que te ahorran tiempo desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
              <Button size="lg" asChild className="group bg-[#4f8ef7] hover:bg-[#3d7be6] text-white px-6 sm:px-8 py-5 sm:py-6 text-base rounded-full transition-all duration-500 hover:scale-[1.02]">
                <Link href="/servicios">
                  Ver Servicios
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="group border-zinc-700 hover:border-[#4f8ef7] text-white hover:text-[#4f8ef7] px-6 sm:px-8 py-5 sm:py-6 text-base rounded-full transition-all duration-500 bg-transparent">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="relative z-20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-zinc-950/80 backdrop-blur-sm rounded-2xl lg:rounded-3xl border border-zinc-800 p-6 sm:p-8 lg:p-12">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6">Nuestros Servicios</h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-8 lg:mb-12 max-w-2xl">Soluciones digitales completas para automatizar, conectar y escalar tu negocio.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {[
                { icon: Zap, color: "#4f8ef7", title: "Automatización", desc: "Conectamos tus herramientas y eliminamos tareas repetitivas." },
                { icon: Globe, color: "#7c6ff7", title: "Páginas Web", desc: "Sitios modernos, rápidos y optimizados para convertir." },
                { icon: Bot, color: "#4f8ef7", title: "Bots Inteligentes", desc: "Chatbots que atienden a tus clientes 24/7.", span: true },
              ].map((s, i) => (
                <div key={i} className={`relative rounded-2xl border border-zinc-800 p-3${s.span ? " sm:col-span-2 lg:col-span-1" : ""}`}>
                  <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative bg-zinc-900/50 rounded-xl p-6 lg:p-8 h-full">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6" style={{ backgroundColor: `${s.color}15` }}>
                      <s.icon className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: s.color }} />
                    </div>
                    <h3 className="font-heading text-xl lg:text-2xl font-extrabold mb-3 lg:mb-4">{s.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline" className="border-zinc-700 hover:border-[#4f8ef7] text-white hover:text-[#4f8ef7] rounded-full transition-all duration-300 bg-transparent">
                <Link href="/servicios">Ver todos los servicios <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portafolio" className="relative z-20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 lg:mb-12">Proyectos que hemos construido</h2>
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {portfolio.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" className="group relative rounded-2xl border border-zinc-800 p-3 block hover:border-[#4f8ef7]/40 transition-colors duration-300">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6 lg:p-8 h-full flex items-start gap-4">
                  <img src={p.favicon} alt={p.name} className={`rounded-lg flex-shrink-0 bg-zinc-800 ${p.customImg ? "" : "w-12 h-12"}`} style={p.customImg ? { width: 80, height: 80, objectFit: "cover", borderRadius: 8 } : undefined} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-heading text-lg lg:text-xl font-extrabold truncate">{p.name}</h3>
                      <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-[#4f8ef7] transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 lg:mb-12 text-center">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="relative rounded-2xl border border-zinc-800 p-3">
                <GlowingEffect blur={0} borderWidth={2} spread={80} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6 lg:p-8">
                  <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-[#4f8ef7]/30 mb-4" />
                  <p className="text-zinc-300 mb-6 leading-relaxed text-sm lg:text-base">{t.quote}</p>
                  <div className="flex items-center justify-between">
                    <p className="font-heading font-extrabold text-white">{t.author}</p>
                    <div className="flex gap-0.5">{[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-20 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f8ef7]/20 via-[#7c6ff7]/10 to-transparent" />
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-[#4f8ef7]/30" />
            <div className="relative p-8 sm:p-12 lg:p-16 text-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mx-auto mb-6 lg:mb-8">
                <MessageCircle className="w-8 h-8 lg:w-10 lg:h-10 text-[#25D366]" />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 lg:mb-6">Hablemos de tu proyecto</h2>
              <p className="text-base sm:text-lg text-zinc-400 mb-8 lg:mb-10 max-w-2xl mx-auto">No necesitas tener todo claro. Cuéntanos qué haces y qué quieres mejorar.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="group bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full transition-all duration-500 hover:scale-[1.02]">
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" asChild className="group bg-[#4f8ef7] hover:bg-[#3d7be6] text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg rounded-full transition-all duration-500 hover:scale-[1.02]">
                  <Link href="/contacto">
                    Formulario de contacto
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
