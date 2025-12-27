'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/staff', label: 'Staff' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/rules', label: 'Rules' },
    { href: '/college-plan', label: 'College Plan' },
    { href: '/room-plan', label: 'Room Plan' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
      <nav className="container mx-auto px-5 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <Image
            src="/image/logo.png"
            alt="Kolej K10 Logo"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-red-600 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-700 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-[72px] right-0 h-[calc(100vh-72px)] w-64 bg-white shadow-2xl transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                pathname === link.href
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-red-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}
