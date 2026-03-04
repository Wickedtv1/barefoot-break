'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdventuresOpen, setIsAdventuresOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsAdventuresOpen(true);
  };

  const handleMouseLeave = () => {
    // Add delay before closing dropdown
    hoverTimeoutRef.current = setTimeout(() => {
      setIsAdventuresOpen(false);
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'top-0 bg-brown-brand/95 backdrop-blur-md shadow-2xl'
            : 'top-12 glass'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 relative transition-transform hover:rotate-12 hover:scale-110 duration-300">
                <Image
                  src="/assets/logos/logo-circle.png"
                  alt="Barefoot Break"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-display text-xl font-bold group-hover:text-gold-brand transition-colors">
                  Barefoot Break
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-gold-brand transition-colors font-semibold text-sm uppercase tracking-wide"
              >
                Home
              </Link>

              {/* Adventures Dropdown with Hover Delay */}
              <div
                className="relative group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-white hover:text-gold-brand transition-colors font-semibold text-sm uppercase tracking-wide flex items-center space-x-1">
                  <span>Adventures</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isAdventuresOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Mega Dropdown - transparent and usable fix */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[650px] transition-all duration-300 ${
                    isAdventuresOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-4'
                  }`}
                >
                  <div
                    className="bg-[#1A0A00] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 border-2 border-[#C4550A]"
                    onMouseEnter={() => {
                      if (hoverTimeoutRef.current) {
                        clearTimeout(hoverTimeoutRef.current);
                      }
                    }}
                    onMouseLeave={() => {
                      hoverTimeoutRef.current = setTimeout(() => {
                        setIsAdventuresOpen(false);
                      }, 300);
                    }}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {/* Sea Tours */}
                      <div>
                        <h3 className="text-gold-brand font-cinzel text-xs uppercase tracking-wider mb-4 flex items-center space-x-2">
                          <span className="text-2xl">🌊</span>
                          <span>Sea Tours</span>
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/tours#whale-watching"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🐋 Whale Watching
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours#marietas-snorkeling"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🤿 Marietas Islands
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours#sport-fishing"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🎣 Sport Fishing
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Land Adventures */}
                      <div>
                        <h3 className="text-gold-brand font-cinzel text-xs uppercase tracking-wider mb-4 flex items-center space-x-2">
                          <span className="text-2xl">🚵</span>
                          <span>Land</span>
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/tours#mountain-bike-tour"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🚵 Mountain Bike
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours#sierra-madre-hike"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🥾 Jungle Hike
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Surf */}
                      <div>
                        <h3 className="text-gold-brand font-cinzel text-xs uppercase tracking-wider mb-4 flex items-center space-x-2">
                          <span className="text-2xl">🏄</span>
                          <span>Surf</span>
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/surf-shop#beginner-lessons"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🏄 Beginners
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/surf-shop#intermediate-clinic"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🌊 Intermediate
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/surf-shop#board-rentals"
                              className="text-sand-brand hover:text-white hover:translate-x-1 transition-all text-sm block"
                            >
                              🛹 Rentals
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/surf-shop"
                className="text-white hover:text-gold-brand transition-colors font-semibold text-sm uppercase tracking-wide"
              >
                Surf Shop
              </Link>

              <Link
                href="/san-pancho"
                className="text-white hover:text-gold-brand transition-colors font-semibold text-sm uppercase tracking-wide"
              >
                San Pancho
              </Link>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-brand to-gold-brand hover:shadow-xl hover:shadow-amber-brand/50 text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-gold-brand transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Fixed positioning to prevent overlaps */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-brown-brand/98 backdrop-blur-xl pt-20">
            <div className="flex flex-col items-center justify-start min-h-screen p-6 space-y-6 overflow-y-auto">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-white hover:text-gold-brand transition-colors text-2xl font-display font-bold"
              >
                Home
              </Link>

              <div className="text-center space-y-4 w-full max-w-xs">
                <h3 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider border-b border-amber-brand/30 pb-2">
                  Adventures
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/tours"
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-gold-brand transition-colors text-lg font-semibold"
                  >
                    All Tours
                  </Link>
                  <Link
                    href="/tours#sea"
                    onClick={closeMobileMenu}
                    className="block text-sand-brand/90 hover:text-white transition-colors"
                  >
                    🌊 Sea Tours
                  </Link>
                  <Link
                    href="/tours#land"
                    onClick={closeMobileMenu}
                    className="block text-sand-brand/90 hover:text-white transition-colors"
                  >
                    🚵 Land Adventures
                  </Link>
                </div>
              </div>

              <Link
                href="/surf-shop"
                onClick={closeMobileMenu}
                className="text-white hover:text-gold-brand transition-colors text-2xl font-display font-bold"
              >
                Surf Shop
              </Link>

              <Link
                href="/san-pancho"
                onClick={closeMobileMenu}
                className="text-white hover:text-gold-brand transition-colors text-2xl font-display font-bold"
              >
                San Pancho
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="bg-gradient-to-r from-amber-brand to-gold-brand text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl mt-4"
              >
                Book Now
              </Link>

              <div className="pt-6 text-sand-brand/70 text-sm text-center">
                <p className="font-cinzel tracking-wide">
                  Your First Wave Starts Here
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
