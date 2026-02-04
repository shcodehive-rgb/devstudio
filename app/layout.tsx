import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })

export const metadata: Metadata = {
  title: "DevStudio - Sites Web Premium pour Entrepreneurs",
  description:
    "Transformez votre business avec un site web premium. Design moderne et performance optimale pour restaurants, magasins et entrepreneurs.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
}

export const viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-white bg-[#0a0a0a]">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
