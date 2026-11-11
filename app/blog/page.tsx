import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Guías de dashboards, automatización y páginas web — Flowi Solutions",
  description:
    "Guías prácticas para negocios en México: dashboards en Excel, automatización de datos, reportes y herramientas digitales.",
  alternates: { canonical: "https://www.flowisolutions.com/blog" },
}

const articulos = [
  {
    href: "/blog/como-hacer-un-dashboard-en-excel",
    titulo: "Cómo hacer un dashboard en Excel paso a paso (y cuándo conviene uno con IA)",
    resumen:
      "Tablas dinámicas, gráficos y segmentaciones en 7 pasos, los errores más comunes y cuándo Excel se queda corto.",
    fecha: "11 de noviembre de 2026",
  },
]

export default function BlogPage() {
  return (
    <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-[#4f8ef7] font-heading font-extrabold text-sm uppercase tracking-widest mb-4">Blog</p>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold mb-6 leading-[0.95]">Guías para tu negocio</h1>
        <p className="text-lg text-zinc-400 mb-12">
          Cómo ordenar tus datos, automatizar reportes y sacarle más provecho a tus herramientas digitales.
        </p>

        <div className="space-y-6">
          {articulos.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="block rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 hover:border-[#4f8ef7]/50 transition-colors"
            >
              <p className="text-zinc-500 text-sm mb-2">{a.fecha}</p>
              <h2 className="font-heading text-2xl font-extrabold mb-3">{a.titulo}</h2>
              <p className="text-zinc-400 mb-4">{a.resumen}</p>
              <span className="inline-flex items-center gap-2 text-[#4f8ef7] font-heading font-extrabold text-sm">
                Leer guía <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
