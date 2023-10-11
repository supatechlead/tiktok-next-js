import './globals.css'
import type { Metadata } from 'next'
import AuthOverlay from './components/AuthOverlay'


export const metadata: Metadata = {
  title: 'Tiktok clone',
  description: 'Tiktok clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthOverlay />
        {children}
      </body>
    </html>
  )
}
