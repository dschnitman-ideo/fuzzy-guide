import './globals.css'
import type { Metadata, Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'David Schnitman - Portfolio',
  description: 'Portfolio website showcasing my work and experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased">
        <div className="min-h-full">
          {children}
        </div>
      </body>
    </html>
  )
}
