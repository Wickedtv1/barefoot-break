import Link from 'next/link';
import { MapPin, Calendar, Sunset, Users, Palette, Waves, Baby } from 'lucide-react';

export default function SanPanchoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-brown-brand via-teal-brand to-amber-brand">
        <div className="absolute inset-0 bg-[url('/assets/images/sanpancho-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl mb-6">🌴</div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Welcome to San Pancho
          </h1>
          <p className="text-xl md:text-2xl text-sand-brand/90 max-w-3xl mx-auto">
            The cultural capital of Riviera Nayarit. Quieter than Sayulita.
            Richer in soul.
          </p>
        </div>
      </section>

      {/* About the Town */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-title">The Town</p>
              <h2 className="text-4xl font-display font-bold text-brown-brand mb-6">
                San Pancho (San Francisco, Nayarit)
              </h2>
              <div className="space-y-4 text-brown-brand/80 leading-relaxed">
                <p>
                  San Pancho — officially San Francisco, Nayarit — is the
                  cultural capital of the Riviera Nayarit. While neighboring
                  Sayulita draws the party crowd, San Pancho attracts a
                  different kind of traveler: those seeking authenticity,
                  community, and world-class waves without the chaos.
                </p>
                <p>
                  This is a town where organic cafés serve breakfast bowls at
                  sunrise, where local kids perform in the circus every week,
                  and where the main street is lined with murals painted by
                  international artists. It's boutique, it's conscious, and
                  it's real.
                </p>
                <p>
                  The waves here are faster and steeper than Sayulita's — a
                  more challenging break that rewards progression. The community
                  is tight-knit, creative, and welcoming. And every single
                  evening, without fail, the beach fills with people watching
                  the sun melt into the Pacific.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-amber-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-brown-brand mb-2">
                      Where Is It?
                    </h4>
                    <p className="text-sm text-brown-brand/70">
                      30 minutes north of Puerto Vallarta airport. 5 minutes
                      north of Sayulita. On the Pacific coast of Nayarit,
                      Mexico.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-teal-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-brown-brand mb-2">
                      Population
                    </h4>
                    <p className="text-sm text-brown-brand/70">
                      ~2,500 full-time residents. A blend of Mexican families,
                      expats, artists, and surfers. Everyone knows everyone.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <Palette className="w-6 h-6 text-gold-brand flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-brown-brand mb-2">
                      The Vibe
                    </h4>
                    <p className="text-sm text-brown-brand/70">
                      Conscious, creative, and community-driven. Think farmers
                      markets, art galleries, yoga studios, and dirt roads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-20 bg-sand-brand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">Local Favorites</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand">
              What Makes San Pancho Special
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* The Weekly Market */}
            <div className="bg-white rounded-xl p-8 shadow-warm hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6 text-amber-brand" />
                <h3 className="text-xl font-display font-bold text-brown-brand">
                  The Weekly Market
                </h3>
              </div>
              <p className="text-brown-brand/70 mb-4">
                Every Tuesday, Plaza del Sol transforms into a vibrant farmers
                market. Fresh produce, handmade crafts, tamales, and live music.
              </p>
              <p className="text-sm text-amber-brand font-semibold">
                📅 Tuesdays, 10 AM – 2 PM
              </p>
            </div>

            {/* The Sunset Ritual */}
            <div className="bg-white rounded-xl p-8 shadow-warm hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <Sunset className="w-6 h-6 text-gold-brand" />
                <h3 className="text-xl font-display font-bold text-brown-brand">
                  The Sunset Ritual
                </h3>
              </div>
              <p className="text-brown-brand/70 mb-4">
                Walk to the end of Avenida Tercer Mundo. Bring a beer, a
                blanket, or just yourself. Watch the sun disappear into the
                Pacific. Repeat every evening.
              </p>
              <p className="text-sm text-gold-brand font-semibold">
                🌅 Daily, around 6:30 PM
              </p>
            </div>

            {/* The Waves */}
            <div className="bg-white rounded-xl p-8 shadow-warm hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <Waves className="w-6 h-6 text-teal-brand" />
                <h3 className="text-xl font-display font-bold text-brown-brand">
                  The Waves
                </h3>
              </div>
              <p className="text-brown-brand/70 mb-4">
                Faster and steeper than Sayulita. A beach break with a
                quicker drop-off. Great for intermediate surfers looking to
                progress beyond the whitewash.
              </p>
              <p className="text-sm text-teal-brand font-semibold">
                🏄 Best: May – November
              </p>
            </div>

            {/* Community Center */}
            <div className="bg-white rounded-xl p-8 shadow-warm hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-6 h-6 text-amber-brand" />
                <h3 className="text-xl font-display font-bold text-brown-brand">
                  The Community
                </h3>
              </div>
              <p className="text-brown-brand/70 mb-4">
                <strong>Entreamigos</strong> — a community center offering art
                classes, English lessons, and social programs.{' '}
                <strong>Circo de los Niños</strong> — local kids perform circus
                acts every Monday evening. Free to watch, donations welcome.
              </p>
            </div>

            {/* The Streets */}
            <div className="bg-white rounded-xl p-8 shadow-warm hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <Palette className="w-6 h-6 text-gold-brand" />
                <h3 className="text-xl font-display font-bold text-brown-brand">
                  The Streets
                </h3>
              </div>
              <p className="text-brown-brand/70 mb-4">
                <strong>Avenida Tercer Mundo</strong> is the main drag. Lined
                with murals, boutique shops, organic cafés, and art galleries.
                Dirt roads, palm trees, and zero traffic lights.
              </p>
            </div>

            {/* Turtle Releases */}
            <div className="bg-white rounded-xl p-8 shadow-warm hover:scale-105 transition-transform">
              <div className="flex items-center space-x-3 mb-4">
                <Baby className="w-6 h-6 text-teal-brand" />
                <h3 className="text-xl font-display font-bold text-brown-brand">
                  Turtle Releases
                </h3>
              </div>
              <p className="text-brown-brand/70 mb-4">
                During nesting season (July – December), you can help release
                baby sea turtles into the ocean at dusk. Check with local
                conservation groups for release dates.
              </p>
              <p className="text-sm text-teal-brand font-semibold">
                🐢 Seasonal: July – December
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Polo Club (Unexpected Feature) */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-12 text-center">
            <div className="text-6xl mb-6">🏇</div>
            <h2 className="text-4xl font-display font-bold text-brown-brand mb-6">
              Yes, There's a Polo Club
            </h2>
            <p className="text-lg text-brown-brand/70 max-w-3xl mx-auto leading-relaxed">
              Just outside town, <strong>La Patrona Polo Club</strong> hosts
              tournaments throughout the season. Watch high-goal polo matches
              with ocean views, sip mezcal, and wonder how this magical,
              unexpected place even exists. Matches are usually on Sundays.
              Admission is free. Bring a hat.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-20 bg-gradient-to-br from-teal-brand to-brown-brand text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-6">
              Getting to San Pancho
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Easy to reach, hard to leave.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-display font-bold mb-4">By Air</h3>
              <p className="text-white/90 mb-4">
                Fly into <strong>Puerto Vallarta (PVR)</strong> airport.
                It's a 30-minute drive north on Highway 200. Rent a car, take
                a shared shuttle, or arrange private transport.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-display font-bold mb-4">By Car</h3>
              <p className="text-white/90 mb-4">
                From Puerto Vallarta, take Highway 200 north toward Punta Mita.
                San Pancho is clearly marked on the right. From Sayulita, it's
                a 5-minute drive north.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sand-brand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-brown-brand mb-6">
            Ready to Experience It?
          </h2>
          <p className="text-xl text-brown-brand/70 mb-8">
            Book a surf lesson, tour, or rental and discover why San Pancho is
            the best-kept secret on the Riviera Nayarit.
          </p>
          <Link
            href="/tours"
            className="inline-block bg-amber-brand hover:bg-gold-brand text-white px-8 py-4 rounded-full text-lg font-semibold transition-all btn-hover shadow-warm"
          >
            Explore Adventures
          </Link>
        </div>
      </section>
    </div>
  );
}
