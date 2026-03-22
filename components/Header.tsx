'use client'

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pathname, setPathname] = useState("");

  // Detekce scrollování pro zmenšení a stín hlavičky
  useEffect(() => {
    setPathname(window.location.pathname);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Služby', href: '/sluzby' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Ceník', href: '/cenik' },
    { name: 'O mně', href: '/o-mne' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-gray-200/50 shadow-sm py-2' 
          : 'bg-white/0 border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo s hover efektem */}
          <div className="flex-shrink-0 z-50">
            <a 
              href="/" 
              className="font-extrabold text-2xl tracking-tight text-[#0D1B3E] hover:opacity-80 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              webnamiru<span className="text-[#3B82F6]">.site</span>
            </a>
          </div>

          {/* Desktop Navigace */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a 
                  key={item.name} 
                  href={item.href}
                  className={`relative group px-1 py-2 text-[15px] font-medium transition-colors ${
                    isActive ? 'text-[#3B82F6]' : 'text-slate-600 hover:text-[#0D1B3E]'
                  }`}
                >
                  {item.name}
                  {/* Animovaná linka pod textem */}
                  <span 
                    className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-[#3B82F6] transition-all duration-300 ease-out ${
                      isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                    }`}
                  ></span>
                </a>
              );
            })}
            
            {/* Desktop CTA Tlačítko */}
            <a 
              href="/kontakt" 
              className="ml-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Nezávazná konzultace
            </a>
          </nav>

          {/* Mobile Menu Button s animovanými ikonami */}
          <div className="md:hidden z-50 flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#0D1B3E] p-2 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Přepnout menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                  <Menu className="w-6 h-6" />
                </span>
                <span className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                  <X className="w-6 h-6" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hladký slide-down efekt) */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl transition-all duration-400 ease-[0.22,1,0.36,1] overflow-hidden ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-50 text-[#3B82F6]' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-[#0D1B3E] hover:translate-x-1'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            );
          })}
          
          <div className="pt-4 mt-2 border-t border-slate-100">
            <a
              href="/kontakt"
              className="flex justify-center w-full bg-[#0D1B3E] hover:bg-[#1a2b5e] text-white px-4 py-4 rounded-xl font-bold transition-all duration-300 shadow-md active:scale-[0.98]"
              onClick={() => setIsMenuOpen(false)}
            >
              Chci nezávaznou konzultaci
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}