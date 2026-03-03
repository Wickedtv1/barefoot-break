'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAdventuresOpen, setIsAdventuresOpen] = useState(false);

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brown-brand/95 backdrop-blur-md shadow-lg'
            : 'glass'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 relative">
                {/* TODO: Add logo-circle.png to public/assets/logos/ */}
                <div className="w-12 h-12 rounded-full bg-amber-brand flex items-center justify-center text-white font-display text-xl">
                  BB
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-display text-xl group-hover:text-gold-brand transition-colors">
                  Barefoot Break
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-white hover:text-gold-brand transition-colors font-medium"
              >
                Home
              </Link>

              {/* Adventures Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsAdventuresOpen(true)}
                onMouseLeave={() => setIsAdventuresOpen(false)}
              >
                <button className="text-white hover:text-gold-brand transition-colors font-medium flex items-center space-x-1">
                  <span>Adventures</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Mega Dropdown */}
                {isAdventuresOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-brown-brand/98 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-amber-brand/20">
                    <div className="grid grid-cols-3 gap-6">
                      {/* Sea Tours */}
                      <div>
                        <h3 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
                          🌊 Sea Tours
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/tours#whale-watching"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🐋 Whale Watching
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours#marietas-snorkeling"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🤿 Marietas Islands
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours#sport-fishing"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🎣 Sport Fishing
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Land Adventures */}
                      <div>
                        <h3 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
                          🚵 Land Adventures
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/tours#mountain-bike-tour"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🚵 Mountain Bike Tour
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/tours#sierra-madre-hike"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🥾 Jungle Hike
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Surf */}
                      <div>
                        <h3 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
                          🏄 Surf
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              href="/surf-shop#beginner-lessons"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🏄 Beginner Lessons
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/surf-shop#intermediate-clinic"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🌊 Intermediate Clinic
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/surf-shop#board-rentals"
                              className="text-sand-brand hover:text-white transition-colors text-sm block"
                            >
                              🛹 Board Rentals
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/surf-shop"
                className="text-white hover:text-gold-brand transition-colors font-medium"
              >
                Surf Shop
              </Link>

              <Link
                href="/san-pancho"
                className="text-white hover:text-gold-brand transition-colors font-medium"
              >
                San Pancho
              </Link>

              <Link
                href="/contact"
                className="bg-amber-brand hover:bg-gold-brand text-white px-6 py-2 rounded-full font-medium transition-all btn-hover"
              >
                Contact & Book
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-gold-brand transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-brown-brand/98 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="text-white hover:text-gold-brand transition-colors text-2xl font-display"
              >
                Home
              </Link>

              <div className="text-center space-y-4">
                <h3 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider">
                  Adventures
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/tours"
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-gold-brand transition-colors text-lg"
                  >
                    All Tours
                  </Link>
                  <Link
                    href="/tours#sea"
                    onClick={closeMobileMenu}
                    className="block text-sand-brand hover:text-white transition-colors"
                  >
                    🌊 Sea Tours
                  </Link>
                  <Link
                    href="/tours#land"
                    onClick={closeMobileMenu}
                    className="block text-sand-brand hover:text-white transition-colors"
                  >
                    🚵 Land Adventures
                  </Link>
                </div>
              </div>

              <Link
                href="/surf-shop"
                onClick={closeMobileMenu}
                className="text-white hover:text-gold-brand transition-colors text-2xl font-display"
              >
                Surf Shop
              </Link>

              <Link
                href="/san-pancho"
                onClick={closeMobileMenu}
                className="text-white hover:text-gold-brand transition-colors text-2xl font-display"
              >
                San Pancho
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="bg-amber-brand hover:bg-gold-brand text-white px-8 py-3 rounded-full font-medium text-lg transition-all btn-hover"
              >
                Contact & Book
              </Link>

              <div className="pt-8 text-sand-brand text-sm text-center">
                <p>Your First Wave Starts Here.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
