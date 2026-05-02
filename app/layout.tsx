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
  title: 'ekai — Private AI Stack for regulated teams',
  description:
    'A complete private AI stack that runs inside your own cloud. Deploy in 48 hours. Your team gets AI that works. Your CISO gets control.',
  openGraph: {
    title: 'ekai — Private AI Stack for regulated teams',
    description:
      'A complete private AI stack that runs inside your own cloud. Deploy in 48 hours. No data leaves your walls.',
    url: 'https://yourekai.com',
    siteName: 'ekai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ekai — Private AI Stack for regulated teams',
    description:
      'A complete private AI stack that runs inside your own cloud. Deploy in 48 hours. No data leaves your walls.',
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
