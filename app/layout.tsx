import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Irwin Casino — официальный сайт и рабочее зеркало',
  description: 'Информационный гид Irwin Casino: официальный сайт, зеркало, мобильная игра и ответственное отношение к онлайн-развлечениям.',
  generator: 'v0.app',
  keywords: [
    'Irwin Casino',
    'Irwin Casino официальный сайт',
    'Irwin Casino зеркало',
    'Ирвин казино онлайн',
  ],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Irwin Casino — игра начинается с правильного выбора',
    description: 'Понятный гид по Irwin Casino для мобильных игроков.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head />
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
