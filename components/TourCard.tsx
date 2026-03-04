import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface Tour {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  description: string;
  duration: string;
  includes: string[];
  meetingPoint: string;
  price: string;
  currency: string;
  cashOnly: boolean;
  seasonal: boolean;
  seasonalNote?: string;
  icon: string;
  difficulty?: string;
}

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  // Map tour IDs to their photo paths
  const getTourImage = (tourId: string): string => {
    const imageMap: { [key: string]: string } = {
      'whale-watching': '/assets/images/tours/whale-watching/photo-1.jpg',
      'marietas-snorkeling': '/assets/images/tours/marietas/photo-1.jpg',
      'sport-fishing': '/assets/images/tours/fishing/photo-1.jpg',
      'surf-lessons-beginner': '/assets/images/tours/surf/photo-1.jpg',
      'surf-lessons-intermediate': '/assets/images/tours/surf/photo-1.jpg',
      'board-rental': '/assets/images/tours/surf/photo-1.jpg',
      'turtle-release': '/assets/images/tours/turtle-release/photo-1.jpg',
      'mountain-bike-tour': '/assets/images/tours/mountain-bike/photo-1.jpg',
      'sierra-madre-hike': '/assets/images/tours/jungle-hike/photo-1.jpg',
    };
    return imageMap[tourId] || '/assets/images/hero.jpg';
  };

  return (
    <div id={tour.id} className="group relative h-full min-h-[420px] rounded-2xl overflow-hidden shadow-warm hover:shadow-2xl transition-all duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getTourImage(tour.id)}
          alt={tour.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Dark Overlay - stronger at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown-brand via-brown-brand/70 to-brown-brand/30 group-hover:from-brown-brand group-hover:via-brown-brand/80 transition-all duration-500"></div>

      {/* Seasonal Badge */}
      {tour.seasonal && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-amber-brand/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Seasonal
          </span>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <span>{tour.icon}</span>
          <span className="font-cinzel uppercase tracking-wider">{tour.subcategory}</span>
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        {/* Title */}
        <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-gold-brand transition-colors">
          {tour.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-sand-brand/90 mb-4 line-clamp-2">
          {tour.description}
        </p>

        {/* Duration & Difficulty */}
        <div className="flex items-center gap-4 mb-3 text-sm">
          <div className="flex items-center gap-1.5 text-sand-brand/80">
            <Clock className="w-4 h-4 text-gold-brand" />
            <span>{tour.duration}</span>
          </div>
          {tour.difficulty && (
            <span className="bg-teal-brand/80 text-white text-xs px-2 py-0.5 rounded">
              {tour.difficulty}
            </span>
          )}
        </div>

        {/* Seasonal Note */}
        {tour.seasonal && tour.seasonalNote && (
          <div className="mb-3 text-xs text-gold-brand bg-gold-brand/20 px-3 py-2 rounded-lg backdrop-blur-sm">
            {tour.seasonalNote}
          </div>
        )}

        {/* Price & CTA Row */}
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <div>
            {tour.price === 'TBD' ? (
              <span className="text-sm text-gold-brand italic">
                Contact for pricing
              </span>
            ) : (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold">{tour.price}</span>
                <span className="text-sm text-sand-brand/70">{tour.currency}</span>
              </div>
            )}
            {tour.cashOnly && (
              <div className="text-xs text-gold-brand mt-0.5">💵 Cash only</div>
            )}
          </div>

          <Link
            href={`/tours/${tour.id}`}
            className="flex items-center gap-1 bg-amber-brand hover:bg-gold-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Reserve
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
