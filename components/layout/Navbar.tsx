'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Apps', href: '#apps' },
  { label: 'Who it\'s for', href: '#who' },
  { label: 'Why now', href: '#why-now' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-cream transition-all duration-300 ${
        scrolled ? 'border-b border-border' : ''
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 no-underline">
          <img src="/ekai-icon.svg" alt="ekai" style={{ height: '22px', width: 'auto' }} />
          <span className="font-extrabold text-[18px] tracking-[-0.04em]" style={{ color: '#54A4A0', lineHeight: 1 }}>ekai</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-muted hover:text-ink transition-colors duration-150 no-underline tracking-[-0.01em]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="secondary" size="sm">Book a demo</Button>
          <Button variant="primary" size="sm">Get started</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-ink -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t border-border px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[15px] font-medium text-ink no-underline"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <Button variant="secondary" size="md" className="w-full justify-center">Book a demo</Button>
            <Button variant="primary" size="md" className="w-full justify-center">Get started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
