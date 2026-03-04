import Link from 'next/link';
import Image from 'next/image';
import SeasonalBanner from '@/components/SeasonalBanner';
import HeroSection from '@/components/HeroSection';
import SurfReportBanner from '@/components/SurfReportBanner';
import TourCard from '@/components/TourCard';
import GalleryCarousel from '@/components/GalleryCarousel';
import StatsBar from '@/components/StatsBar';
import { SurferIcon, WhaleIcon, BikeIcon, WavesDivider } from '@/components/AnimatedIcons';
import toursData from '@/data/tours.json';
import { CheckCircle } from 'lucide-react';

export default function HomePage() {
  // Get featured tours
  const featuredTours = [
    toursData.sea.find((t) => t.id === 'whale-watching'),
    toursData.sea.find((t) => t.id === 'marietas-snorkeling'),
    toursData.surf.find((t) => t.id === 'surf-lessons-beginner'),
    toursData.sea.find((t) => t.id === 'sport-fishing'),
  ].filter(Boolean);

  return (
    <>
      {/* Seasonal Alert Banner */}
      <SeasonalBanner />

      {/* Hero Section with Animated Waves */}
      <HeroSection />

      {/* Surf Report Banner */}
      <SurfReportBanner />

      {/* Inspirational Text Section */}
      <section className="py-12 bg-gradient-to-r from-teal-brand/20 to-brown-brand/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-display text-brown-brand italic leading-relaxed">
            "The Pacific is waiting. Your adventure starts here."
          </p>
        </div>
      </section>

      {/* Stats Bar with Animated Counting */}
      <StatsBar />

      {/* What We Do - 3 Feature Cards with Animated Icons */}
      <section className="py-20 bg-gradient-to-b from-sand-brand/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand">
              Three Ways to Experience Paradise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            {/* Surf Lessons & Rentals */}
            <div className="card p-8 text-center group">
              <div className="flex justify-center mb-6">
                <SurferIcon className="w-24 h-24 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brown-brand mb-4">
                Surf Lessons & Rentals
              </h3>
              <p className="text-brown-brand/70">
                Never surfed before? No problem. Our certified instructors will
                have you riding waves in no time. Board rentals available for
                all skill levels.
              </p>
              <Link
                href="/surf-shop"
                className="inline-block mt-6 text-amber-brand hover:text-gold-brand font-semibold transition-colors"
              >
                Visit the Surf Shop →
              </Link>
            </div>

            {/* Ocean Tours */}
            <div className="card p-8 text-center group">
              <div className="flex justify-center mb-6">
                <WhaleIcon className="w-24 h-24 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brown-brand mb-4">
                Ocean Tours
              </h3>
              <p className="text-brown-brand/70">
                Witness humpback whales, snorkel the Marietas Islands, or fish
                for Mahi-Mahi with local captains who know these waters like
                family.
              </p>
              <Link
                href="/tours#sea"
                className="inline-block mt-6 text-amber-brand hover:text-gold-brand font-semibold transition-colors"
              >
                Explore Sea Tours →
              </Link>
            </div>

            {/* Land Adventures */}
            <div className="card p-8 text-center group">
              <div className="flex justify-center mb-6">
                <BikeIcon className="w-24 h-24 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-display font-bold text-brown-brand mb-4">
                Land Adventures
              </h3>
              <p className="text-brown-brand/70">
                Trek through the Sierra Madre jungle, bike hidden trails with
                ocean views, or discover natural pools in the tropical forest.
              </p>
              <Link
                href="/tours#land"
                className="inline-block mt-6 text-amber-brand hover:text-gold-brand font-semibold transition-colors"
              >
                View Land Tours →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WavesDivider />

      {/* Full-Width Auto-Scrolling Photo Carousel */}
      <GalleryCarousel />

      {/* Wave Divider */}
      <WavesDivider className="transform rotate-180" />

      {/* Inspirational Text Section */}
      <section className="py-16 bg-gradient-to-r from-brown-brand via-teal-brand to-brown-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-display text-white italic leading-relaxed drop-shadow-lg">
            "Every wave has a story. Come write yours."
          </p>
        </div>
      </section>

      {/* Featured Tours Grid */}
      <section className="py-20 bg-gradient-to-b from-sand-brand/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">Most Popular</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand mb-4">
              Featured Adventures
            </h2>
            <p className="text-lg text-brown-brand/70 max-w-2xl mx-auto">
              These are our guests' favorite experiences. Book early,
              especially during whale season!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTours.map((tour: any) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-block bg-gradient-to-r from-amber-brand to-gold-brand hover:shadow-2xl hover:shadow-amber-brand/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-hover hover:scale-105"
            >
              See All Adventures
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WavesDivider />

      {/* How It Works - 3 Steps with Dark Background */}
      <section className="py-20 bg-gradient-to-br from-brown-brand to-brown-brand/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-brand to-gold-brand rounded-full flex items-center justify-center text-white text-4xl mx-auto shadow-warm">
                📋
              </div>
              <div className="w-12 h-1 bg-amber-brand/30 mx-auto rounded-full"></div>
              <h3 className="text-2xl font-display font-bold text-white">
                1. Request Your Date
              </h3>
              <p className="text-sand-brand/90">
                Fill out our simple online form or send us a WhatsApp message
                with your preferred tour and date.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-brand to-teal-brand/80 rounded-full flex items-center justify-center text-white text-4xl mx-auto shadow-warm">
                ✅
              </div>
              <div className="w-12 h-1 bg-teal-brand/30 mx-auto rounded-full"></div>
              <h3 className="text-2xl font-display font-bold text-white">
                2. Get Confirmation
              </h3>
              <p className="text-sand-brand/90">
                We'll confirm your booking by WhatsApp or email within a few
                hours. No deposit required.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-brand to-amber-brand rounded-full flex items-center justify-center text-white text-4xl mx-auto shadow-warm">
                💵
              </div>
              <div className="w-12 h-1 bg-gold-brand/30 mx-auto rounded-full"></div>
              <h3 className="text-2xl font-display font-bold text-white">
                3. Show Up & Pay Cash
              </h3>
              <p className="text-sand-brand/90">
                Meet us at the pier or shop, pay in pesos or USD, and go have
                the time of your life!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block bg-white hover:bg-sand-brand text-brown-brand px-8 py-4 rounded-full text-lg font-semibold transition-all btn-hover"
            >
              Book Your Adventure Now
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <WavesDivider className="transform rotate-180" />

      {/* Inspirational Text Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-3xl md:text-4xl font-display text-brown-brand italic leading-relaxed">
            "This is where memories are made."
          </p>
        </div>
      </section>

      {/* About San Pancho Teaser with Photo Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/gallery/tropical-beach.jpg"
            alt="San Pancho Beach"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-brown-brand/90 via-teal-brand/80 to-brown-brand/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
                The Town
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Welcome to San Pancho
              </h2>
              <p className="text-sand-brand/90 mb-6 leading-relaxed">
                San Pancho (officially San Francisco, Nayarit) is the cultural
                capital of the Riviera Nayarit. Quieter and more exclusive than
                neighboring Sayulita, it's known for organic food, community
                art, and world-class waves.
              </p>
              <p className="text-sand-brand/90 mb-8 leading-relaxed">
                Every Tuesday, the town comes alive with a farmers market at
                Plaza del Sol. Every evening, locals and travelers gather on
                the beach to watch the sun melt into the Pacific.
              </p>
              <Link
                href="/san-pancho"
                className="inline-block bg-white text-brown-brand hover:bg-sand-brand px-8 py-3 rounded-full font-semibold transition-all btn-hover"
              >
                Discover San Pancho
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  The Waves
                </h4>
                <p className="text-sand-brand/80 text-sm">
                  Faster, steeper drop-off than Sayulita — great for
                  progression
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  The Community
                </h4>
                <p className="text-sand-brand/80 text-sm">
                  Entreamigos center, circus for kids, weekly markets, art
                  galleries
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="font-display text-xl font-bold text-white mb-2">
                  The Vibe
                </h4>
                <p className="text-sand-brand/80 text-sm">
                  Organic restaurants, murals, boutique shops, and La Patrona
                  Polo Club
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
