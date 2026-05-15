"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, ArrowRight, Loader2 } from "lucide-react"
import { useState } from "react"
import Script from "next/script"

const whatsappLink = "https://api.whatsapp.com/send/?phone=525623194635"
const instagramLink = "https://www.instagram.com/flowi_solutions/"
const facebookLink = "https://www.facebook.com/profile.php?id=61583292193689"

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", negocio: "", email: "", mensaje: "" })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (data.ok) {
        setStatus("success")
        setForm({ nombre: "", negocio: "", email: "", mensaje: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

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
            <p className="text-[#4f8ef7] font-heading font-extrabold text-sm uppercase tracking-widest mb-4">Contacto</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance">
              Hablemos de tu <span className="text-gradient">proyecto</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              No necesitas tener todo claro. Cuéntanos qué haces y qué quieres mejorar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative z-20 pb-16 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4f8ef7]/20 via-[#7c6ff7]/10 to-transparent" />
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" />
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl border border-[#4f8ef7]/30" />

            <div className="relative p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left: Info */}
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-extrabold mb-6">Escríbenos por donde prefieras</h2>

                  <div className="space-y-4 mb-8">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#25D366]/40 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="font-heading font-extrabold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                        <p className="text-zinc-500 text-sm">Respuesta en menos de 24 horas</p>
                      </div>
                    </a>

                    <a href="mailto:contacto@flowisolutions.com" className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-[#4f8ef7]/40 transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-[#4f8ef7]/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[#4f8ef7]" />
                      </div>
                      <div>
                        <p className="font-heading font-extrabold text-white group-hover:text-[#4f8ef7] transition-colors">contacto@flowisolutions.com</p>
                        <p className="text-zinc-500 text-sm">Email directo</p>
                      </div>
                    </a>
                  </div>

                  {/* Social */}
                  <p className="text-zinc-500 text-sm mb-3">Síguenos en redes</p>
                  <div className="flex items-center gap-4">
                    <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Instagram">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" aria-label="Facebook">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>

                {/* Right: Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="nombre" className="block text-sm text-zinc-400 mb-1.5">Nombre</label>
                    <input id="nombre" type="text" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4f8ef7] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="negocio" className="block text-sm text-zinc-400 mb-1.5">Tipo de negocio</label>
                    <input id="negocio" type="text" placeholder="Ej: Estética, restaurante, consultorio..." value={form.negocio} onChange={handleChange} required className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4f8ef7] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-zinc-400 mb-1.5">Email</label>
                    <input id="email" type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4f8ef7] transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm text-zinc-400 mb-1.5">¿Qué quieres mejorar?</label>
                    <textarea id="mensaje" placeholder="Cuéntanos brevemente qué necesitas..." rows={4} value={form.mensaje} onChange={handleChange} required className="w-full bg-zinc-900/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-[#4f8ef7] transition-colors resize-none" />
                  </div>

                  <Button type="submit" size="lg" disabled={loading} className="w-full bg-[#4f8ef7] hover:bg-[#3d7be6] text-white py-6 text-base rounded-xl transition-all duration-300 disabled:opacity-60">
                    {loading ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...</>
                    ) : (
                      <>Enviar mensaje <ArrowRight className="ml-2 h-5 w-5" /></>
                    )}
                  </Button>

                  {status === "success" && (
                    <p className="text-green-400 text-sm text-center mt-2">¡Mensaje enviado! Te contactamos pronto.</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-400 text-sm text-center mt-2">Hubo un error, intenta de nuevo.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

