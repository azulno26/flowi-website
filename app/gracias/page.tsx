import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: '¡Mensaje recibido! | Flowi Solutions',
  description: 'Gracias por escribirnos. Te contactamos en menos de 24 horas.',
  robots: { index: false, follow: false },
}

export default function GraciasPage() {
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

      <section className="relative z-20 min-h-[70vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
        <div className="w-20 h-20 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-8">
          <CheckCircle className="w-10 h-10 text-[#25D366]" />
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-[0.95]">
          ¡Mensaje <span className="text-gradient">recibido</span>!
        </h1>
        <p className="text-lg sm:text-xl text-zinc-400 max-w-xl leading-relaxed mb-8">
          Gracias por escribirnos. Te contactamos en menos de 24 horas.
        </p>
        <Button asChild size="lg" className="bg-[#4f8ef7] hover:bg-[#3d7be6] text-white px-8 py-6 text-base rounded-full transition-all duration-300">
          <Link href="/">
            Volver al inicio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </>
  )
}
