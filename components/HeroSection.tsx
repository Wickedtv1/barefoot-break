import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      {/* TODO: Replace with actual San Pancho sunset/surf image */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-brand via-brown-brand to-teal-brand">
        <div className="absolute inset-0 bg-[url('/assets/images/hero.jpg')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8 fade-in">
          {/* TODO: Replace with logo-square.png */}
          <div className="w-48 h-48 rounded-2xl bg-amber-brand/20 backdrop-blur-sm border-4 border-sand-brand/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-display text-white mb-2">BB</div>
              <div className="text-sm text-sand-brand font-cinzel tracking-wider">
                BAREFOOT BREAK
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight fade-in">
          Your First Wave
          <br />
          <span className="text-gold-brand">Starts Here.</span>
        </h1>

        <p className="text-xl md:text-2xl text-sand-brand/90 max-w-2xl mx-auto fade-in">
          Surf lessons, board rentals, and unforgettable ocean adventures in
          San Pancho, Riviera Nayarit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8 fade-in">
          <Link
            href="/tours"
            className="bg-amber-brand hover:bg-gold-brand text-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-hover shadow-warm"
          >
            Explore Adventures
          </Link>
          <Link
            href="/contact"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-hover backdrop-blur-sm"
          >
            Book a Lesson
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
            <div className="w-1 h-3 bg-white/50 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
