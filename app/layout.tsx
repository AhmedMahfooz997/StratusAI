import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'StratusAI — AI Solutions That Deliver Results',
  description:
    'StratusAI builds custom AI automation systems and intelligent workflows that streamline operations, reduce costs, and drive measurable growth.',
  keywords: [
    'AI agency',
    'AI automation',
    'workflow automation',
    'custom AI solutions',
    'AI consulting',
    'n8n automation',
    'business automation',
  ],
  openGraph: {
    title: 'StratusAI — AI Solutions That Deliver Results',
    description:
      'Custom AI automation systems for businesses serious about staying ahead.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="bg-bg text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
