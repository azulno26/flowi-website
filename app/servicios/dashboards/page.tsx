import { Button } from "@/components/ui/button"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import {
  CheckCircle,
  ArrowRight,
  MessageCircle,
  FileSpreadsheet,
  BarChart3,
  Sparkles,
  Lock,
  Download,
  RefreshCw,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

const URL = "https://www.flowisolutions.com/servicios/dashboards"
const whatsappDashboard =
  "https://api.whatsapp.com/send/?phone=525623194635&text=Hola%2C%20quiero%20convertir%20mi%20Excel%20en%20un%20dashboard"

export const metadata: Metadata = {
  title: "Dashboards y tableros de control desde tu Excel, con IA | Flowi Solutions",
  description:
    "Convertimos tus reportes de Excel en un dashboard con IA: ventas, inventario y clientes en un tablero de control. Automatización de datos para negocios en México.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Convierte tu Excel en un dashboard con IA | Flowi Solutions",
    description:
      "Tablero de control web con tus ventas, inventario y clientes, al que le preguntas en español. Sin tablas dinámicas, sin licencias.",
    url: URL,
    siteName: "Flowi Solutions",
    locale: "es_MX",
    type: "website",
  },
}

const faqs = [
  {
    q: "¿Qué es un dashboard o tablero de control?",
    a: "Es una página con las gráficas e indicadores (KPI) más importantes de tu negocio en un solo lugar: ventas, inventario, clientes, cobranza. En lugar de abrir varios archivos de Excel, ves todo de un vistazo y actualizado.",
  },
  {
    q: "¿Cómo convierto mi Excel en un dashboard?",
    a: "Nos compartes tu archivo (o una copia con datos de ejemplo). Revisamos las columnas, limpiamos la información y armamos tu tablero con las gráficas y KPI que necesitas. No tienes que cambiar tu forma de trabajar: sigues usando tu Excel o tu punto de venta.",
  },
  {
    q: "¿Qué es la automatización de datos?",
    a: "Es que tus reportes se armen solos. Los datos se cargan, se limpian y se actualizan en el tablero sin copiar y pegar ni rehacer tablas dinámicas cada semana.",
  },
  {
    q: "¿Cómo funcionan las preguntas con IA?",
    a: "Escribes en español, por ejemplo \"¿qué producto vendió más en octubre?\", y la IA consulta tus datos reales y te responde con una tabla o una gráfica. No inventa cifras: cada respuesta sale de tu propia información.",
  },
  {
    q: "¿Necesito Power BI o alguna licencia?",
    a: "No. Tu tablero funciona en el navegador, desde la computadora o el celular, sin licencias. Si tu empresa ya trabaja con Power BI, también podemos armar tu reporte ahí.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Tu tablero es privado: solo entra quien tenga usuario y contraseña, no aparece en buscadores y la IA solo puede leer tus datos, nunca modificarlos.",
  },
  {
    q: "¿Cada cuánto se actualiza la información?",
    a: "Con la frecuencia que tu negocio necesite. Puedes subir tu Excel cada semana o cada mes, o podemos conectarlo a Google Sheets o a la exportación de tu punto de venta.",
  },
  {
    q: "¿Cuánto cuesta un dashboard?",
    a: "Depende del tamaño de tus datos y de cuántos reportes necesites. Te hacemos una muestra gratis con tu Excel y, con base en eso, te enviamos una propuesta.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Dashboards y tableros de control con IA a partir de Excel",
      serviceType: "Automatización de datos y business intelligence",
      description:
        "Convertimos reportes de Excel en dashboards web privados con gráficas, KPI y preguntas en español respondidas por IA.",
      url: URL,
      areaServed: { "@type": "Country", name: "México" },
      provider: { "@type": "LocalBusiness", name: "Flowi Solutions", url: "https://www.flowisolutions.com" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

const incluye = [
  { icon: BarChart3, text: "Tablero de control web con tus gráficas y KPI: ventas, inventario, clientes" },
  { icon: Sparkles, text: "Preguntas en español respondidas por IA, con tabla o gráfica" },
  { icon: FileSpreadsheet, text: "Tablas dinámicas listas, con filtros por fecha, sucursal o producto" },
  { icon: Download, text: "Exportación a Excel y PowerPoint con un clic" },
  { icon: RefreshCw, text: "Actualización de datos sin rehacer reportes" },
  { icon: Lock, text: "Acceso privado con usuario y contraseña" },
]

const pasos = [
  { n: "1", title: "Nos mandas tu Excel", desc: "O la exportación de tu punto de venta. Te regresamos una muestra de tu dashboard sin costo." },
  { n: "2", title: "Armamos tu tablero", desc: "Definimos contigo los indicadores clave y lo dejamos listo en una a dos semanas." },
  { n: "3", title: "Preguntas y decides", desc: "Consultas tu información en segundos y la actualizamos con la frecuencia que necesites." },
]

export default function DashboardsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 selection:text-white relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Spline viewer background */}
      <Script
        src="https://unpkg.com/@splinetool/viewer@1.12.93/build/spline-viewer.js"
        type="module"
        strategy="afterInteractive"
      />

      <div className="fixed right-0 top-0 w-full h-screen pointer-events-none z-0 hidden lg:block" style={{ opacity: 1 }}>
        <spline-viewer
          url="https://prod.spline.design/GBazGw0fDMTPybdT/scene.splinecode"
          loading-anim-type="none"
          hide-logo="true"
          style={{ width: "100%", height: "100vh" }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0px",
          right: "0px",
          width: "220px",
          height: "50px",
          background: "linear-gradient(to left, #000000 60%, transparent)",
          zIndex: 9999,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24">
        {/* Hero */}
        <div className="max-w-4xl mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#4f8ef7] animate-pulse"></span>
            <span className="text-sm text-zinc-300 font-medium tracking-wide uppercase">Dashboards con IA</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[0.95] text-balance">
            Convierte tu Excel en un dashboard al que le puedes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f8ef7] to-[#7c6ff7]">preguntar</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
            Automatizamos tus reportes de Excel en un tablero de control con tus ventas, inventario y clientes. Escribes
            tu pregunta en español y la IA te responde en segundos con una tabla o una gráfica.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium px-8 transition-all duration-300">
              <Link href={whatsappDashboard} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quiero mi dashboard
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

        {/* Problem */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">¿Tus reportes de Excel te quitan horas cada semana?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Una tabla dinámica por pregunta", desc: "Cada vez que alguien pide un dato, hay que armar otra tabla y otra gráfica." },
              { title: "Copiar y pegar cada semana", desc: "El reporte de ventas se rehace a mano y siempre llega tarde." },
              { title: "Datos en muchos archivos", desc: "Ventas, inventario y clientes viven en Excel distintos que nadie cruza." },
            ].map((card, i) => (
              <div key={i} className="relative rounded-2xl border border-zinc-800 p-3 h-full">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-800/50 h-full">
                  <h3 className="font-bold text-white text-lg mb-2">{card.title}</h3>
                  <p className="text-zinc-400">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What it includes */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">Qué incluye tu tablero de control</h2>
          <div className="relative rounded-2xl border border-zinc-800 p-3">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative bg-zinc-900/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-zinc-800/50">
              <ul className="grid sm:grid-cols-2 gap-5">
                {incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="w-6 h-6 text-[#4f8ef7] shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-base lg:text-lg">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">Cómo funciona</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pasos.map((p) => (
              <div key={p.n} className="relative rounded-2xl border border-zinc-800 p-3 h-full">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative bg-zinc-900/50 rounded-xl p-6 backdrop-blur-sm border border-zinc-800/50 h-full">
                  <div className="font-heading text-4xl font-extrabold text-[#4f8ef7] mb-3">{p.n}</div>
                  <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                  <p className="text-zinc-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example questions */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">Pregúntale a tus datos como le preguntarías a un analista</h2>
          <p className="text-zinc-400 text-lg mb-8">Algunos ejemplos de lo que puedes escribir en tu dashboard:</p>
          <div className="flex flex-wrap gap-3">
            {[
              "¿Qué producto vendió más este mes?",
              "¿Qué clientes dejaron de comprar en los últimos 60 días?",
              "Ventas por sucursal contra el mes pasado",
              "¿Qué productos están por agotarse?",
              "Evolución de ventas por mes en los últimos dos años",
            ].map((q, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-zinc-900/70 border border-zinc-800 text-zinc-300 text-sm sm:text-base">
                “{q}”
              </span>
            ))}
          </div>
        </div>

        {/* Case */}
        <div className="max-w-4xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">Caso real: 600 mil registros, una pregunta</h2>
          <div className="relative rounded-2xl border border-zinc-800 p-3">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative bg-zinc-900/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-zinc-800/50">
              <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                Construimos un tablero con la base de matrícula de educación superior de ANUIES: más de 600 mil registros
                que antes se analizaban con tablas dinámicas en Excel y reportes en Power BI.
              </p>
              <ul className="space-y-3">
                {[
                  "Gráficas e indicadores clave en una sola página, con filtros",
                  "Las tablas dinámicas de siempre, ahora en web",
                  "Preguntas en español con respuesta en segundos y exportación a PowerPoint",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#4f8ef7] shrink-0 mt-1" />
                    <span className="text-zinc-300">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-zinc-400 mt-6">Lo que antes era una tarde de tablas dinámicas, hoy es una pregunta.</p>
              <p className="text-zinc-400 mt-4">
                ¿Prefieres hacerlo tú en Excel?{" "}
                <Link href="/blog/como-hacer-un-dashboard-en-excel" className="text-[#4f8ef7] hover:text-white font-medium transition-colors">
                  Lee nuestra guía paso a paso →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-8">Preguntas frecuentes sobre dashboards y automatización de datos</h2>
          <div className="divide-y divide-zinc-800 border-y border-zinc-800">
            {faqs.map((faq, i) => (
              <details key={i} className="group">
                <summary className="font-heading font-extrabold text-base lg:text-lg cursor-pointer py-4 text-white list-none flex justify-between items-center gap-4">
                  {faq.q}
                  <span className="transition group-open:rotate-45 text-[#4f8ef7] text-2xl leading-none">+</span>
                </summary>
                <p className="text-zinc-400 text-sm lg:text-base pb-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl relative rounded-2xl border border-zinc-800 p-3 overflow-hidden">
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <div className="relative bg-zinc-900/50 rounded-xl p-8 sm:p-12 backdrop-blur-sm border border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">Mándanos tu Excel y te mostramos tu dashboard</h2>
              <p className="text-zinc-400 text-lg">Te regresamos una muestra sin costo y sin compromiso.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Button asChild size="lg" className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white font-medium px-8 transition-all duration-300">
                <Link href={whatsappDashboard} target="_blank" rel="noopener noreferrer">
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
