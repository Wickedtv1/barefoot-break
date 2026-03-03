'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourName?: string;
  tourId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  tourName,
  tourId,
}: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // TODO: Owner to add Formspree form ID
  const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown-brand/90 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-sand-brand rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brown-brand/60 hover:text-brown-brand transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl font-display font-bold text-brown-brand mb-2">
            Request Your Reservation
          </h2>
          <p className="text-brown-brand/70 mb-6">
            Fill out the form below and we'll confirm your booking within a few
            hours.
          </p>

          {/* Form */}
          <form action={formspreeEndpoint} method="POST" className="space-y-4">
            {/* Pre-filled Tour */}
            {tourName && (
              <div>
                <label className="block text-sm font-semibold text-brown-brand mb-2">
                  Tour / Service
                </label>
                <input
                  type="text"
                  name="tour"
                  value={tourName}
                  readOnly
                  className="w-full px-4 py-3 rounded-lg border border-brown-brand/20 bg-white/50 text-brown-brand font-medium"
                />
                <input type="hidden" name="tour_id" value={tourId} />
              </div>
            )}

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

          {/* Cash Only Notice */}
          <div className="mt-6 p-4 bg-amber-brand/10 border border-amber-brand/30 rounded-lg">
            <p className="text-sm text-brown-brand">
              <span className="font-bold text-amber-brand">
                💵 Cash Only Upon Arrival
              </span>
              <br />
              No deposit required. Pay in Mexican Pesos or USD when you arrive.
              We'll confirm your booking by WhatsApp or email within a few
              hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
