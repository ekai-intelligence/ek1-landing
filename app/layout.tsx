import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'ekai — Private AI for Financial Services deployed in your cloud',
  description:
    'Comes prebuilt with sovereign AI apps for your most sensitive workflows in your private cloud on day one. Expand with more apps and workflows, no code required.',
  openGraph: {
    title: 'Private AI for Financial Services deployed in your cloud',
    description:
      'Comes prebuilt with sovereign AI apps for your most sensitive workflows in your private cloud on day one. Expand with more apps and workflows, no code required.',
    url: 'https://ek1.ai',
    siteName: 'ekai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private AI for Financial Services deployed in your cloud',
    description:
      'Comes prebuilt with sovereign AI apps for your most sensitive workflows in your private cloud on day one. Expand with more apps and workflows, no code required.',
  },
  icons: {
    icon: [{ url: '/ekai-icon.svg', type: 'image/svg+xml' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased bg-cream text-ink">{children}</body>
    </html>
  )
}
