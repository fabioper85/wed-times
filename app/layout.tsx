import type { Metadata } from 'next'
import { Lavishly_Yours, Lexend_Deca } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lavishly = Lavishly_Yours({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lavishly',
});

const lexend = Lexend_Deca({ 
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'Fabio & Angie Wedding',
  description: 'Join us in celebrating our special day',
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
    <html lang="en">
      <body className={`${lavishly.variable} ${lexend.variable} font-lexend antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
