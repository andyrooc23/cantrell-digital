'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

const demoItems = [
  { href: '/demo/cafe', label: 'Cafe Demo' },
  { href: '/demo/construction', label: 'Construction Demo' },
  { href: '/demo/streetwear', label: 'Streetwear Demo' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemosOpen, setIsDemosOpen] = useState(false);
  const demoMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        demoMenuRef.current &&
        !demoMenuRef.current.contains(event.target as Node)
      ) {
        setIsDemosOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsDemosOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const primaryNavItems = navItems.filter((item) => item.label !== 'Contact');

  return (
    <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Image
            src="/images/CantrellDigital.png"
            alt="Cantrell Digital"
            width={2048}
            height={2048}
            className="h-9 w-auto sm:h-10"
            priority
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {primaryNavItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="relative" ref={demoMenuRef}>
              <button
                type="button"
                className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                onClick={() => setIsDemosOpen((open) => !open)}
                aria-expanded={isDemosOpen}
                aria-haspopup="menu"
              >
                Industry Demos
                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${isDemosOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 011.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDemosOpen && (
                <div className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-gray-800 bg-gray-950/98 p-2 shadow-2xl shadow-black/40">
                  <div className="space-y-1">
                    {demoItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-gray-300 transition-colors hover:bg-gray-900 hover:text-white"
                        onClick={() => setIsDemosOpen(false)}
                      >
                        {item.label}
                        <span className="text-xs text-gray-500">New tab</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Start Your Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="space-y-3 rounded-2xl border border-gray-800 bg-gray-950/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-500">
                  Industry Demos
                </p>
                {demoItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <span className="text-xs text-gray-500">New tab</span>
                  </a>
                ))}
              </div>
              <Link
                href="/start-project"
                className="inline-flex items-center justify-center self-start rounded-xl bg-white px-5 py-3 font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Project
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
