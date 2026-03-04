'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform',
        }}
      >
        <Image
          src="/assets/images/hero.jpg"
          alt="Surfing in San Pancho"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Dramatic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brown-brand/60 via-brown-brand/50 to-brown-brand/80"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
        {/* Logo - Square */}
        <div
          className="flex justify-center mb-8 animate-fade-in"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <div className="relative w-56 h-56 drop-shadow-2xl transition-transform hover:scale-105 duration-500">
            <Image
              src="/assets/logos/logo-square.svg"
              alt="Barefoot Break Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Tagline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight drop-shadow-2xl animate-fade-in"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          Your First Wave
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-brand via-amber-brand to-gold-brand animate-pulse">
            Starts Here
          </span>
        </h1>

        <p
          className="text-xl md:text-2xl lg:text-3xl text-sand-brand/95 max-w-3xl mx-auto font-light drop-shadow-lg animate-fade-in"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          Surf lessons, board rentals, and unforgettable ocean adventures
          <br />
          <span className="text-gold-brand font-semibold">
            San Pancho, Riviera Nayarit
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 animate-fade-in"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <Link
            href="/tours"
            className="group relative bg-gradient-to-r from-amber-brand to-gold-brand text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-brand/50 hover:scale-110 overflow-hidden"
          >
            <span className="relative z-10">Explore Adventures</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-brand to-amber-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="/contact"
            className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 hover:border-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 backdrop-blur-md hover:scale-110 shadow-xl"
          >
            Book a Lesson
          </Link>
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white/80 animate-fade-in"
          style={{ animationDelay: '1s', opacity: 0 }}
        >
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gold-brand"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">10+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gold-brand"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Certified Instructors</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-6 h-6 text-gold-brand"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">1000+ Happy Surfers</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <span className="text-sm font-cinzel uppercase tracking-wider">
              Scroll
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Animated Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`
            @keyframes heroWave1 {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(-25px); }
            }
            @keyframes heroWave2 {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(25px); }
            }
            @keyframes heroWave3 {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(-15px); }
            }
            .heroWave1 { animation: heroWave1 7s ease-in-out infinite; }
            .heroWave2 { animation: heroWave2 5s ease-in-out infinite; }
            .heroWave3 { animation: heroWave3 9s ease-in-out infinite; }
          `}</style>

          <path
            className="heroWave1"
            d="M0,40 Q150,20 300,40 T600,40 T900,40 T1200,40 L1200,120 L0,120 Z"
            fill="#1A8A8A"
            opacity="0.3"
          />
          <path
            className="heroWave2"
            d="M0,60 Q150,50 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z"
            fill="#1A8A8A"
            opacity="0.5"
          />
          <path
            className="heroWave3"
            d="M0,80 Q150,70 300,80 T600,80 T900,80 T1200,80 L1200,120 L0,120 Z"
            fill="#1A8A8A"
            opacity="0.7"
          />
        </svg>
      </div>
    </section>
  );
}
