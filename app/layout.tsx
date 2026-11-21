import type { Metadata } from 'next'
import { Lavishly_Yours, Lexend_Deca } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lavishly = Lavishly_Yours({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lavishly',
  display: 'swap',
});

const lexend = Lexend_Deca({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Angie & Fabio — ci sposiamo',
  description: 'Tutte le informazioni per festeggiare con Angie e Fabio il 29 maggio 2027 a Cascina Reale Cussanio, Fossano.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${lavishly.variable} ${lexend.variable} font-lexend antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
