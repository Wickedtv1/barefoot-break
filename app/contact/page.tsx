import { Suspense } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ContactPage() {
  // {/* TODO: Owner to add Formspree form ID */}
  const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-brand via-gold-brand to-brown-brand">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Book Your Adventure
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fill out the form below and we'll confirm your reservation within a
            few hours. No deposit required.
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Map & Contact Info */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <div className="bg-sand-brand rounded-2xl overflow-hidden shadow-warm border-t-4 border-amber-brand">
                <div className="aspect-video bg-gradient-to-br from-teal-brand/20 to-amber-brand/20 flex items-center justify-center">
                  {/* {/* TODO: Owner to add actual Google Maps embed code */}
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 text-amber-brand mx-auto mb-4" />
                    <p className="text-brown-brand font-semibold mb-2">
                      Barefoot Break Surf Shop
                    </p>
                    <p className="text-brown-brand/70 text-sm">
                      Avenida Tercer Mundo
                      <br />
                      San Pancho, Nayarit, Mexico
                    </p>
                    <p className="text-xs text-brown-brand/50 mt-4">
                      Map embed coming soon
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/523221409733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl p-6 transition-all btn-hover shadow-warm"
                >
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold mb-1">
                        WhatsApp Us
                      </h3>
                      <p className="text-white/90 text-sm">
                        Fastest way to reach us!
                      </p>
                      <p className="text-white font-mono text-sm mt-2">
                        +52 322 140 9733
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <div className="bg-sand-brand rounded-xl p-6 border border-amber-brand/20">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-amber-brand flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-brown-brand mb-1">
                        Phone
                      </h3>
                      <p className="text-brown-brand/70 text-sm">
                        +52 322 140 9733
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-sand-brand rounded-xl p-6 border border-amber-brand/20">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-amber-brand flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-brown-brand mb-1">
                        Email
                      </h3>
                      <p className="text-brown-brand/70 text-sm">
                        info@barefootbreak.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-sand-brand rounded-xl p-6 border border-amber-brand/20">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-amber-brand flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-brown-brand mb-1">
                        Hours
                      </h3>
                      <p className="text-brown-brand/70 text-sm">
                        Monday – Sunday
                        <br />
                        8:00 AM – 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-sand-brand rounded-xl p-6 border border-amber-brand/20">
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-amber-brand flex-shrink-0" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-brown-brand mb-1">
                        Address
                      </h3>
                      <p className="text-brown-brand/70 text-sm">
                        Avenida Tercer Mundo
                        <br />
                        San Pancho (San Francisco)
                        <br />
                        Nayarit, Mexico
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Reservation Form */}
            <div>
              <Suspense
                fallback={
                  <div className="bg-sand-brand rounded-2xl p-8 shadow-warm border-t-4 border-amber-brand">
                    <div className="animate-pulse space-y-4">
                      <div className="h-8 bg-brown-brand/10 rounded w-3/4"></div>
                      <div className="h-4 bg-brown-brand/10 rounded w-full"></div>
                      <div className="h-12 bg-brown-brand/10 rounded w-full"></div>
                    </div>
                  </div>
                }
              >
                <ContactForm formspreeEndpoint={formspreeEndpoint} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
