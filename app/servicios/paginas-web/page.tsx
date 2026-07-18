import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: 'Diseño de páginas web para negocios locales en México | Flowi Solutions',
  description: 'Creamos páginas web profesionales para estéticas, restaurantes, consultorios y negocios locales en México. Rápidas, claras y que convierten visitas en clientes.',
  alternates: { canonical: 'https://www.flowisolutions.com/servicios/paginas-web' }
}

export default function PaginasWebPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white pb-24 overflow-hidden relative">
      {/* Spline viewer block */}
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

      {/* Hero section */}
      <section className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-16">
        <div className="inline-block rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-zinc-300 mb-6 backdrop-blur-sm">
          Páginas Web
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance max-w-4xl">
          Tu negocio local merece una página web que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f8ef7] to-[#7c6ff7]">trabaje por ti</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
          Miles de pequeños negocios en México pierden clientes todos los días porque no los encuentran en internet. Una página web profesional cambia eso desde el primer día.
        </p>
      </section>

      {/* Checklist section */}
      <section className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8 max-w-3xl text-balance">
          ¿Qué incluye tu página web?
        </h2>
        
        <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6 sm:p-8 max-w-3xl overflow-hidden group">
          <GlowingEffect blur={0} glow={true} disabled={false} spread={40} />
          <ul className="space-y-4 relative z-10">
            {[
              "Diseño profesional adaptado a tu negocio",
              "Desarrollo y publicación completa",
              "Responsive — se ve bien en celular y computadora",
              "SSL seguro (candado verde en el navegador)",
              "Dominio conectado",
              "Formulario de contacto o WhatsApp directo"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#4f8ef7] shrink-0" />
                <span className="text-zinc-300 text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Grid section */}
      <section className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4 max-w-3xl text-balance">
          ¿Qué tipo de página necesita tu negocio?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { emoji: "🌐", title: "Página institucional", desc: "Para despachos, clínicas, escuelas y negocios que necesitan presencia profesional en internet." },
            { emoji: "🛍️", title: "Catálogo de productos", desc: "Muestra lo que vendes de forma clara y atractiva, sin necesidad de tienda en línea." },
            { emoji: "🛒", title: "Tienda en línea", desc: "Vende tus productos 24/7 con carrito de compras, pagos en línea y gestión de pedidos." },
            { emoji: "📅", title: "Página de citas", desc: "Tus clientes agendan directamente desde tu página, sin llamadas ni mensajes de ida y vuelta." },
            { emoji: "📣", title: "Landing page de campaña", desc: "Una página enfocada en convertir, ideal para promociones, lanzamientos o servicios específicos." },
            { emoji: "🍽️", title: "Menú digital para restaurantes", desc: "Tus clientes escanean un QR y ven tu menú actualizado en segundos, sin app." },
            { emoji: "💼", title: "Portafolio profesional", desc: "Para fotógrafos, diseñadores, arquitectos y creativos que necesitan mostrar su trabajo." },
            { emoji: "🏪", title: "Marketplace o directorio local", desc: "Conecta oferta y demanda en tu ciudad o nicho, como un directorio especializado." },
          ].map((card, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col h-full hover:border-zinc-700 transition-colors">
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-heading font-extrabold text-lg mb-2">{card.title}</h3>
              <p className="text-zinc-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tags section */}
      <section className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8 max-w-3xl text-balance">
          ¿Para qué tipo de negocio?
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Estéticas y salones", "Restaurantes y cafeterías", "Consultorios y clínicas", 
            "Despachos y oficinas", "Freelancers y creativos", "Tiendas locales", 
            "Escuelas y academias", "Cualquier negocio local en México"
          ].map((tag, idx) => (
            <span key={idx} className="bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 py-16 max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8 text-balance">
          Preguntas frecuentes sobre páginas para pequeños negocios
        </h2>
        <div className="flex flex-col">
          {[
            { q: "¿Cuánto cuesta una página web para mi negocio local?", a: "Depende de lo que necesites, pero nuestros proyectos arrancan desde $1,800 MXN para páginas sencillas. Te damos un presupuesto exacto después de entender tu negocio, sin compromiso." },
            { q: "¿Cuánto tiempo tarda en estar lista mi página?", a: "La mayoría de las páginas las entregamos entre 5 y 10 días hábiles. Proyectos más complejos como tiendas en línea pueden tomar de 2 a 4 semanas." },
            { q: "¿Necesito saber de tecnología para tener una página web?", a: "Para nada. Nosotros nos encargamos de todo lo técnico. Solo necesitamos la información de tu negocio, tus fotos y tus ideas. Te explicamos todo sin tecnicismos." },
            { q: "¿Puedo actualizar el contenido yo mismo después?", a: "Sí. Dependiendo del tipo de página, te dejamos un panel de administración sencillo o te enseñamos cómo hacer cambios básicos. También ofrecemos planes de mantenimiento." },
            { q: "¿La página se ve bien en celular y computadora?", a: "Absolutamente. Todas nuestras páginas son responsive, lo que significa que se adaptan automáticamente al tamaño de cualquier pantalla — celular, tablet o computadora." }
          ].map((faq, i) => (
            <details key={i} className="group border-b border-zinc-800 last:border-0 [&_summary::-webkit-details-marker]:hidden">
              <summary className="font-heading font-extrabold text-base lg:text-lg cursor-pointer py-4 text-white flex items-center justify-between">
                <span>{faq.q}</span>
                <span className="text-zinc-500 group-open:rotate-180 transition-transform duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
      <section className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 py-24 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 max-w-3xl mx-auto text-balance">
          Escríbenos por WhatsApp y te damos una propuesta sin costo
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Cuéntanos sobre tu negocio y te armamos una propuesta a tu medida.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full transition-all duration-300 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-medium border-0 w-full sm:w-auto">
            <a href="https://api.whatsapp.com/send/?phone=525623194635" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 w-5 h-5" />
              Escríbenos por WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full transition-all duration-300 border-[#4f8ef7] text-[#4f8ef7] hover:bg-[#4f8ef7]/10 bg-transparent w-full sm:w-auto">
            <Link href="/contacto">
              Formulario de contacto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
