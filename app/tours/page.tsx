'use client';

import { useState } from 'react';
import TourCard from '@/components/TourCard';
import toursData from '@/data/tours.json';
import { Waves, Mountain, Palmtree } from 'lucide-react';

type Category = 'all' | 'sea' | 'surf' | 'land';

export default function ToursPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  // Combine all tours
  const allTours = [...toursData.surf, ...toursData.sea, ...toursData.land];

  // Filter tours based on active category
  const filteredTours =
    activeFilter === 'all'
      ? allTours
      : allTours.filter((tour) => tour.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-amber-brand via-brown-brand to-teal-brand">
        <div className="absolute inset-0 bg-[url('/assets/images/tours-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
            All Adventures
          </p>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Adventures in San Pancho
          </h1>
          <p className="text-xl md:text-2xl text-sand-brand/90 max-w-3xl mx-auto">
            From ocean expeditions to jungle treks and surf lessons — choose
            your adventure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-40 bg-white border-b border-brown-brand/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 py-6 overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-amber-brand text-white shadow-warm'
                  : 'bg-sand-brand/50 text-brown-brand hover:bg-sand-brand'
              }`}
            >
              All Adventures
            </button>

            <button
              onClick={() => setActiveFilter('sea')}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === 'sea'
                  ? 'bg-teal-brand text-white shadow-warm'
                  : 'bg-sand-brand/50 text-brown-brand hover:bg-sand-brand'
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>Sea Tours</span>
            </button>

            <button
              onClick={() => setActiveFilter('surf')}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === 'surf'
                  ? 'bg-amber-brand text-white shadow-warm'
                  : 'bg-sand-brand/50 text-brown-brand hover:bg-sand-brand'
              }`}
            >
              <span className="text-lg">🏄</span>
              <span>Surf</span>
            </button>

            <button
              onClick={() => setActiveFilter('land')}
              className={`px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === 'land'
                  ? 'bg-brown-brand text-white shadow-warm'
                  : 'bg-sand-brand/50 text-brown-brand hover:bg-sand-brand'
              }`}
            >
              <Mountain className="w-4 h-4" />
              <span>Land Adventures</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTours.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <p className="text-brown-brand/60">
                  Showing {filteredTours.length}{' '}
                  {filteredTours.length === 1 ? 'adventure' : 'adventures'}
                  {activeFilter !== 'all' && ` in ${activeFilter}`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour: any) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-2xl text-brown-brand/60">
                No adventures found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Cash Only Banner */}
      <section className="py-12 bg-sand-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-warm border-t-4 border-amber-brand">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">💵</div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-brown-brand mb-3">
                  Cash Only Upon Arrival
                </h3>
                <p className="text-brown-brand/70 mb-4">
                  No deposit required. Pay in Mexican Pesos or USD when you
                  arrive. We'll confirm your booking by WhatsApp or email within
                  a few hours.
                </p>
                <p className="text-sm text-brown-brand/60">
                  Please give us 24 hours notice for cancellations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
