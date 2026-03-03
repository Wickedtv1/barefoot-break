import Link from 'next/link';
import { Clock, MapPin, CheckCircle } from 'lucide-react';

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
  return (
    <div id={tour.id} className="card p-6 h-full flex flex-col">
      {/* Icon & Category */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{tour.icon}</div>
        {tour.seasonal && (
          <span className="bg-amber-brand/20 border border-amber-brand/40 text-amber-brand text-xs font-semibold px-3 py-1 rounded-full">
            Seasonal
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-display font-bold text-brown-brand mb-2">
        {tour.name}
      </h3>

      {/* Category & Subcategory */}
      <div className="flex items-center space-x-2 mb-3">
        <span className="text-xs font-cinzel uppercase tracking-wider text-amber-brand">
          {tour.subcategory}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-brown-brand/80 mb-4 line-clamp-3">
        {tour.description}
      </p>

      {/* Duration & Difficulty */}
      <div className="flex items-center space-x-4 mb-4 text-sm">
        <div className="flex items-center space-x-1 text-brown-brand/70">
          <Clock className="w-4 h-4" />
          <span>{tour.duration}</span>
        </div>
        {tour.difficulty && (
          <span className="text-xs bg-teal-brand/10 text-teal-brand px-2 py-1 rounded">
            {tour.difficulty}
          </span>
        )}
      </div>

      {/* Includes (top 3) */}
      <div className="mb-4 flex-grow">
        <p className="text-xs font-semibold text-brown-brand mb-2 uppercase tracking-wide">
          Includes:
        </p>
        <ul className="space-y-1">
          {tour.includes.slice(0, 3).map((item, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <CheckCircle className="w-3 h-3 text-teal-brand mt-1 flex-shrink-0" />
              <span className="text-brown-brand/70">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Meeting Point */}
      <div className="flex items-start space-x-2 text-xs text-brown-brand/60 mb-4">
        <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
        <span>{tour.meetingPoint}</span>
      </div>

      {/* Seasonal Note */}
      {tour.seasonal && tour.seasonalNote && (
        <div className="mb-4 text-xs text-amber-brand bg-amber-brand/10 px-3 py-2 rounded-lg">
          {tour.seasonalNote}
        </div>
      )}

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-brown-brand/10">
        <div>
          <span className="text-2xl font-bold text-brown-brand">
            {tour.price}
          </span>
          {tour.price !== 'TBD' && (
            <span className="text-sm text-brown-brand/60 ml-1">
              {tour.currency}
            </span>
          )}
          {tour.cashOnly && (
            <div className="text-xs text-amber-brand mt-1">💵 Cash only</div>
          )}
        </div>
        <Link
          href={`/contact?tour=${tour.id}`}
          className="bg-amber-brand hover:bg-gold-brand text-white px-5 py-2 rounded-full text-sm font-semibold transition-all btn-hover"
        >
          Reserve Now
        </Link>
      </div>
    </div>
  );
}
