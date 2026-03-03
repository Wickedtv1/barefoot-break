import Link from 'next/link';
import TourCard from '@/components/TourCard';
import toursData from '@/data/tours.json';
import { CheckCircle, Award, Heart } from 'lucide-react';

export default function SurfShopPage() {
  // Get surf lessons and rentals from tours data
  const surfTours = toursData.surf;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-teal-brand via-amber-brand to-brown-brand">
        <div className="absolute inset-0 bg-[url('/assets/images/surf-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl mb-6">🏄</div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            The Surf Shop
          </h1>
          <p className="text-xl md:text-2xl text-sand-brand/90 max-w-3xl mx-auto">
            Learn to surf with certified instructors or rent boards for your
            solo session on San Pancho's legendary break.
          </p>
        </div>
      </section>

      {/* Surf Lessons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title" id="beginner-lessons">
              Learn to Surf
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand">
              Surf Lessons
            </h2>
            <p className="text-lg text-brown-brand/70 max-w-2xl mx-auto mt-4">
              From first-timers to intermediate surfers looking to level up.
              All equipment included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {surfTours
              .filter((t) => t.subcategory === 'Lessons')
              .map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
          </div>
        </div>
      </section>

      {/* Board Rentals Pricing Table */}
      <section className="py-20 bg-sand-brand/30" id="board-rentals">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">Equipment</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand">
              Board Rentals
            </h2>
            <p className="text-lg text-brown-brand/70 max-w-2xl mx-auto mt-4">
              Choose from our curated quiver. All boards include leash and wax.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-warm overflow-hidden border-t-4 border-amber-brand">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-sand-brand">
                  <tr>
                    <th className="px-6 py-4 text-left font-display text-lg text-brown-brand">
                      Board Type
                    </th>
                    <th className="px-6 py-4 text-center font-display text-lg text-brown-brand">
                      Half Day
                    </th>
                    <th className="px-6 py-4 text-center font-display text-lg text-brown-brand">
                      Full Day
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brown-brand/10">
                  {[
                    {
                      type: 'Longboard',
                      icon: '🏄',
                      description: 'Perfect for beginners and mellow waves',
                    },
                    {
                      type: 'Shortboard',
                      icon: '🌊',
                      description: 'For intermediate to advanced surfers',
                    },
                    {
                      type: 'SUP (Stand-Up Paddle)',
                      icon: '🛹',
                      description: 'Great for calm days and exploring',
                    },
                    {
                      type: 'Softboard (Beginner)',
                      icon: '🏄‍♀️',
                      description: 'Safe and easy for first-timers',
                    },
                  ].map((board, index) => (
                    <tr key={index} className="hover:bg-sand-brand/20 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-3xl">{board.icon}</span>
                          <div>
                            <p className="font-semibold text-brown-brand">
                              {board.type}
                            </p>
                            <p className="text-sm text-brown-brand/60">
                              {board.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xl font-bold text-brown-brand">
                          TBD
                        </span>
                        <p className="text-xs text-brown-brand/60">MXN</p>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-xl font-bold text-brown-brand">
                          TBD
                        </span>
                        <p className="text-xs text-brown-brand/60">MXN</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Note */}
            <div className="bg-amber-brand/10 px-6 py-4 border-t border-amber-brand/20">
              <p className="text-sm text-brown-brand">
                <span className="font-semibold">💵 Cash only.</span> All boards
                come with leash and wax. Return before 5 PM for half-day
                rentals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Instructors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-title">Our Team</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand">
              Meet the Instructors
            </h2>
            <p className="text-lg text-brown-brand/70 max-w-2xl mx-auto mt-4">
              Certified, patient, and passionate about sharing the stoke.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* TODO: Owner to add actual instructor photos and names */}
            {[
              {
                name: 'Instructor Name',
                specialty: 'Lead Instructor',
                experience: '10+ years',
                icon: '🏄',
              },
              {
                name: 'Instructor Name',
                specialty: 'Beginner Specialist',
                experience: '5+ years',
                icon: '🌊',
              },
              {
                name: 'Instructor Name',
                specialty: 'Advanced Coach',
                experience: '8+ years',
                icon: '🏆',
              },
            ].map((instructor, index) => (
              <div
                key={index}
                className="card p-6 text-center group hover:scale-105 transition-transform"
              >
                {/* Photo Placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-brand/20 to-teal-brand/20 flex items-center justify-center text-6xl">
                  {instructor.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-brown-brand mb-2">
                  {instructor.name}
                </h3>

                <p className="text-amber-brand font-semibold mb-2">
                  {instructor.specialty}
                </p>

                <div className="flex items-center justify-center space-x-2 text-brown-brand/60 text-sm">
                  <Award className="w-4 h-4" />
                  <span>{instructor.experience} experience</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear & Accessories */}
      <section className="py-20 bg-sand-brand/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-warm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-brown-brand mb-4">
                Gear & Accessories
              </h2>
              <p className="text-brown-brand/70">
                Everything you need for your session
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🧴</div>
                <h4 className="font-semibold text-brown-brand mb-2">
                  Surf Wax
                </h4>
                <p className="text-sm text-brown-brand/60">
                  Fresh wax for all water temps
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🔗</div>
                <h4 className="font-semibold text-brown-brand mb-2">
                  Leashes & Fins
                </h4>
                <p className="text-sm text-brown-brand/60">
                  Replacement gear available
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">👕</div>
                <h4 className="font-semibold text-brown-brand mb-2">
                  Rash Guards
                </h4>
                <p className="text-sm text-brown-brand/60">
                  Sun protection for all sizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-brand to-gold-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Catch Your First Wave?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book a lesson or reserve your board today. No deposit required.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brown-brand hover:bg-sand-brand px-8 py-4 rounded-full text-lg font-semibold transition-all btn-hover shadow-xl"
          >
            Reserve Your Lesson Now
          </Link>
        </div>
      </section>
    </div>
  );
}
