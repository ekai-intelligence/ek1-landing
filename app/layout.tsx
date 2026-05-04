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
    'Deploy secure, sovereign AI applications within your infrastructure. Empower your teams to use AI for sensitive workflows without compromising on security or compliance.',
  openGraph: {
    title: 'Private AI for Financial Services deployed in your cloud',
    description:
      'Deploy secure, sovereign AI applications within your infrastructure. Empower your teams to use AI for sensitive workflows without compromising on security or compliance.',
    url: 'https://yourekai.com',
    siteName: 'ekai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Private AI for Financial Services deployed in your cloud',
    description:
      'Deploy secure, sovereign AI applications within your infrastructure. Empower your teams to use AI for sensitive workflows without compromising on security or compliance.',
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
