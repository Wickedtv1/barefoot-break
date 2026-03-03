'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import toursData from '@/data/tours.json';

interface ContactFormProps {
  formspreeEndpoint: string;
}

export default function ContactForm({ formspreeEndpoint }: ContactFormProps) {
  const searchParams = useSearchParams();
  const tourIdFromUrl = searchParams.get('tour');

  const [selectedTour, setSelectedTour] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Combine all tours for dropdown
  const allTours = [...toursData.surf, ...toursData.sea, ...toursData.land];

  useEffect(() => {
    if (tourIdFromUrl) {
      const tour = allTours.find((t) => t.id === tourIdFromUrl);
      if (tour) {
        setSelectedTour(tour.name);
      }
    }
  }, [tourIdFromUrl]);

  return (
    <div className="bg-sand-brand rounded-2xl p-8 shadow-warm border-t-4 border-amber-brand">
      <h2 className="text-3xl font-display font-bold text-brown-brand mb-2">
        Request Your Reservation
      </h2>
      <p className="text-brown-brand/70 mb-6">
        Fill out the form below and we'll confirm your booking by WhatsApp or
        email within a few hours.
      </p>

      {formSubmitted ? (
        <div className="bg-teal-brand/10 border border-teal-brand/30 rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="text-2xl font-display font-bold text-brown-brand mb-2">
            ¡Perfecto!
          </h3>
          <p className="text-brown-brand/70">
            Your request is on its way. We'll WhatsApp you soon to confirm!
          </p>
        </div>
      ) : (
        <form
          action={formspreeEndpoint}
          method="POST"
          onSubmit={() => setFormSubmitted(true)}
          className="space-y-4"
        >
          {/* Tour Selection */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              Tour or Service <span className="text-amber-brand">*</span>
            </label>
            <select
              name="tour"
              required
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all bg-white"
            >
              <option value="">Select a tour or service</option>
              <optgroup label="🏄 Surf Lessons & Rentals">
                {toursData.surf.map((tour) => (
                  <option key={tour.id} value={tour.name}>
                    {tour.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🌊 Sea Tours">
                {toursData.sea.map((tour) => (
                  <option key={tour.id} value={tour.name}>
                    {tour.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="🚵 Land Adventures">
                {toursData.land.map((tour) => (
                  <option key={tour.id} value={tour.name}>
                    {tour.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              Full Name <span className="text-amber-brand">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              Email <span className="text-amber-brand">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
              placeholder="your@email.com"
            />
          </div>

          {/* WhatsApp / Phone */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              WhatsApp / Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
              placeholder="+52 123 456 7890"
            />
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
            />
          </div>

          {/* Number of Guests */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              Number of Guests
            </label>
            <input
              type="number"
              name="guests"
              min="1"
              defaultValue="1"
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all"
            />
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-semibold text-brown-brand mb-2">
              Special Requests / Notes
            </label>
            <textarea
              name="notes"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 focus:border-amber-brand focus:ring-2 focus:ring-amber-brand/20 outline-none transition-all resize-none"
              placeholder="Any special requirements or questions?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-brand hover:bg-gold-brand text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all btn-hover"
          >
            Request My Reservation
          </button>
        </form>
      )}

      {/* Cash Only Policy */}
      {!formSubmitted && (
        <div className="mt-6 p-6 bg-amber-brand/10 border border-amber-brand/30 rounded-xl">
          <h3 className="font-bold text-amber-brand mb-2 flex items-center space-x-2">
            <span className="text-2xl">💵</span>
            <span>Cash Only Upon Arrival</span>
          </h3>
          <p className="text-sm text-brown-brand/80 leading-relaxed">
            No deposit required. Pay in Mexican Pesos or USD when you arrive.
            Please give us 24 hours notice for cancellations. We'll confirm your
            booking by WhatsApp or email within a few hours.
          </p>
        </div>
      )}
    </div>
  );
}
