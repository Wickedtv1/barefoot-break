'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // In production, this would read from the gallery folder
    // For now, we'll use the images we downloaded
    const galleryImages = [
      '/assets/images/gallery/surfing.jpg',
      '/assets/images/gallery/waves.jpg',
      '/assets/images/gallery/beach.jpg',
      '/assets/images/gallery/surf-lesson.jpg',
      '/assets/images/gallery/ocean.jpg',
      '/assets/images/gallery/tropical-beach.jpg',
    ];
    setImages(galleryImages);
  }, []);

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <p className="section-title">GALLERY</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand mb-4">
            Life at Barefoot Break
          </h2>
          <p className="text-brown-brand/70 max-w-2xl mx-auto">
            Catch the vibe of San Pancho surf culture
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          {images.map((src, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-warm cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl fade-in ${
                index % 3 === 0
                  ? 'row-span-2'
                  : index % 5 === 0
                  ? 'col-span-1 sm:col-span-2'
                  : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={src}
                  alt={`Barefoot Break Gallery ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback for missing images
                    e.currentTarget.src = '/assets/images/hero.jpg';
                  }}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown-brand/80 via-brown-brand/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-cinzel uppercase tracking-wider">
                    San Pancho Surf Life
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in">
          <p className="text-brown-brand/70 mb-4">
            Follow us on Instagram for daily surf reports and photos
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-brand to-gold-brand text-white px-8 py-3 rounded-lg font-semibold btn-hover"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <span>@barefootbreak</span>
          </a>
        </div>
      </div>
    </section>
  );
}
