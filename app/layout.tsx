import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import Script from 'next/script'
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
  title: 'ZyvosAI — AI Solutions That Deliver Results',
  description:
    'ZyvosAI builds custom AI automation systems and intelligent workflows that streamline operations, reduce costs, and drive measurable growth.',
  keywords: [
    'AI agency',
    'AI automation',
    'workflow automation',
    'custom AI solutions',
    'AI consulting',
    'n8n automation',
    'business automation',
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'ZyvosAI — AI Solutions That Deliver Results',
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
        <Script id="apollo-tracker" strategy="afterInteractive">{`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69e62528805b2d00113ddf69"})},document.head.appendChild(o)}initApollo();`}</Script>
      </body>
    </html>
  )
}
