import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Soil and Organic Growing Solutions',
  description: 'AGRIVYN provides high-quality organic soil solutions including Vermicompost, Red Soil, Earthworms, and Sand for potting mix.Based in Mangalore, we serve farmers, plantations, and home gardeners with products designed to improve soil health and support sustainable growth.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/2.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">

        {/* ✅ NAVBAR */}
        <Navbar />

        {/* ✅ PAGE CONTENT */}
        <main className="pt-[75px]">
          {children}
        </main>

        {/* ✅ FOOTER */}
       

        <Analytics />
 <Footer />
      </body>
    </html>
  )
}