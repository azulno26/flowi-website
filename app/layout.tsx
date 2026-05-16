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
  title: "Flowi Solutions | Automatización, Páginas web y Bots",
  description: "Agencia mexicana especializada en automatización web, desarrollo de páginas y bots inteligentes para tu negocio.",
  icons: {
    icon: "/favicon.webp",
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
      </body>
    </html>
  )
}
