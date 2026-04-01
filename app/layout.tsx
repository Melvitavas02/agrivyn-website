import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Soil and Organic Growing Solutions',
  description: 'AGRIVYN provides high-quality organic soil solutions including Vermicompost, Red Soil, Earthworms, and Sand for potting mix. Based in Mangalore, we serve farmers, plantations, and home gardeners.',
  
  icons: {
    icon: "/2.png",
    apple: "/2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
