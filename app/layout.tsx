import type React from "react"
import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const syne = Syne({ 
  subsets: ["latin"], 
  variable: "--font-syne",
  weight: ["800"]
})

const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"]
})

export const metadata: Metadata = {
  title: 'Flowi Solutions | Páginas web, bots y automatización para negocios en México',
  description: 'Creamos páginas web profesionales, bots de atención y automatizaciones para pequeños negocios en México. Soluciones digitales desde $1,800 MXN.',
  icons: {
    icon: "/favicon.webp",
  },
  alternates: { canonical: 'https://www.flowisolutions.com' },
  openGraph: {
    title: 'Flowi Solutions | Automatización para negocios en México',
    description: 'Páginas web, bots y automatizaciones para pequeños negocios. Resultados desde el primer día.',
    url: 'https://www.flowisolutions.com',
    siteName: 'Flowi Solutions',
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-black">
      <body className={`${syne.variable} ${dmSans.variable} font-sans antialiased`}>
        <LenisProvider>
          <Navbar />
          <main className="relative min-h-screen bg-black text-white overflow-hidden">
            {children}
          </main>
          <Footer />
        </LenisProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Flowi Solutions",
              "description": "Agencia digital especializada en páginas web, bots y automatización para pequeños negocios en México.",
              "url": "https://www.flowisolutions.com",
              "email": "contacto@flowisolutions.com",
              "telephone": "+525623194635",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX",
                "addressLocality": "Ciudad de México"
              },
              "sameAs": [
                "https://www.instagram.com/flowi_solutions/",
                "https://www.facebook.com/profile.php?id=61583292193689"
              ],
              "priceRange": "$$",
              "knowsLanguage": "es"
            })
          }}
        />
      </body>
    </html>
  )
}
