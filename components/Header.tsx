'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Domů', href: '/' },
    { name: 'Služby', href: '/sluzby' },
    { name: 'Ceník', href: '/cenik' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'O mně', href: '/o-mne' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Recenze', href: '/recenze' },
    { name: 'Kontakt', href: '/kontakt' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-extrabold text-2xl text-[#0D1B3E]">
              webnamiru<span className="text-[#3B82F6]">.site</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-[#1F2937] hover:text-[#3B82F6] font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* CTA Button - Používáme <a> pro spolehlivý scroll */}
            <a 
              href="#kontakt" 
              className="bg-[#3B82F6] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-colors shadow-sm"
            >
              Nezávazná konzultace
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#0D1B3E] p-2"
            >
              <span className="sr-only">Otevřít menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-[#1F2937] hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#kontakt"
              className="block w-full text-center mt-4 bg-[#3B82F6] text-white px-3 py-3 rounded-lg font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Chci konzultaci
            </a>
          </div>
        </div>
      )}
    </header>
  );
}