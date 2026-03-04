'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/assets/images/gallery/surfing.jpg', alt: 'Surfing in San Pancho' },
  { src: '/assets/images/gallery/ocean.jpg', alt: 'Pacific Ocean views' },
  { src: '/assets/images/gallery/tropical-beach.jpg', alt: 'Tropical beach paradise' },
  { src: '/assets/images/gallery/surf-lesson.jpg', alt: 'Surf lessons for beginners' },
  { src: '/assets/images/gallery/surfing-2.jpg', alt: 'Advanced surfing' },
  { src: '/assets/images/gallery/beach-2.jpg', alt: 'San Pancho beach' },
  { src: '/assets/images/gallery/palm-trees.jpg', alt: 'Palm trees' },
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Images */}
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentIndex
              ? 'translate-x-0'
              : index < currentIndex
              ? '-translate-x-full'
              : 'translate-x-full'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              e.currentTarget.src = '/assets/images/hero.jpg';
            }}
          />
        </div>
      ))}

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown-brand/70 via-transparent to-transparent pointer-events-none"></div>

      {/* Caption */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-4">
        <p className="text-white text-2xl md:text-4xl font-display font-bold drop-shadow-2xl">
          {galleryImages[currentIndex].alt}
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
