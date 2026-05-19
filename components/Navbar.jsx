'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/maklon-sandal/', label: 'Maklon Sandal' },
  { href: '/maklon-sepatu/', label: 'Maklon Sepatu' },
  { href: '/tentang-kami/', label: 'Tentang Kami' },
  { href: '/kontak/', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-[0_2px_20px_rgba(30,58,95,0.12)]' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="https://res.cloudinary.com/duqhnn1gc/image/upload/q_auto/f_auto/v1779166904/Desain_tanpa_judul_tnfxqp.png"
              alt="LBJ Footwear Industries - Luqman Bintang Jaya"
              width={120}
              height={40}
              className="h-9 lg:h-11 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace(/\/$/, '')))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-all duration-200 ${
                    isActive
                      ? 'text-navy-900 bg-navy-50 font-semibold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://wa.me/6281233913988"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 active:bg-gold-700 text-white text-sm font-semibold font-body rounded-lg transition-all duration-200 shadow-[0_2px_8px_rgba(245,166,35,0.35)] hover:shadow-[0_4px_16px_rgba(245,166,35,0.45)]"
            >
              Konsultasi Gratis
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors duration-200"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.replace(/\/$/, '')))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium font-body transition-colors duration-200 ${
                    isActive
                      ? 'text-navy-900 bg-navy-50 font-semibold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <a
              href="https://wa.me/6281233913988"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 bg-gold-500 text-white text-sm font-semibold font-body rounded-lg text-center transition-colors duration-200 hover:bg-gold-600"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
