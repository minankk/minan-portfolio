import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Minan Kahai | Built Differently',
  description: 'MSc Computer Science. BSc Psychology. I build things that work and understand why people use them.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans text-text antialiased flex flex-col min-h-screen`}>

        {/* Global State Overlays */}
        <div className="analog-overlay" />
        <div className="film-grain" />

        {children}

        {/* Vercel Analytics Telemetry */}
        <Analytics />
      </body>
    </html>
  )
}
