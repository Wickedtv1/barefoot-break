'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function SeasonalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkSeason = () => {
      const currentMonth = new Date().getMonth() + 1; // 1-12
      // Show banner during whale season: December (12), January (1), February (2), March (3)
      const isWhaleSeason =
        currentMonth === 12 || currentMonth === 1 || currentMonth === 2 || currentMonth === 3;
      setIsVisible(isWhaleSeason);
    };

    checkSeason();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-amber-brand text-white py-3 transition-transform duration-300 ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 flex-1">
            <span className="text-2xl">🐋</span>
            <p className="text-sm sm:text-base font-semibold">
              Whale Season is ACTIVE — Sightings guaranteed Dec–Mar.{' '}
              <Link
                href="/tours#whale-watching"
                className="underline hover:text-gold-brand transition-colors"
              >
                Reserve your spot today!
              </Link>
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="ml-4 text-white/80 hover:text-white transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
