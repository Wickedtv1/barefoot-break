import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PhotoCarousel from '@/components/PhotoCarousel';
import TourCard from '@/components/TourCard';
import toursData from '@/data/tours.json';
import { MessageCircle, Mail, Check } from 'lucide-react';

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

// Map tour IDs to their photo folders
const tourPhotoFolders: { [key: string]: string } = {
  'whale-watching': 'whale-watching',
  'marietas-snorkeling': 'marietas',
  'sport-fishing': 'fishing',
  'turtle-release': 'turtle-release',
  'surf-lessons-beginner': 'surf',
  'surf-lessons-intermediate': 'surf',
  'board-rental': 'surf',
  'mountain-bike-tour': 'mountain-bike',
  'sierra-madre-hike': 'jungle-hike',
};

// Rich experience descriptions for each tour
const tourExperiences: { [key: string]: string[] } = {
  'whale-watching': [
    "There's a moment just before dawn breaks over the Pacific when the water turns molten silver. That's when you'll board the panga with Captain Miguel, a third-generation San Pancho fisherman who speaks both Spanish and the language of the sea.",
    "As you motor out past the break, the coastal mountains of the Sierra Madre fade into silhouettes. The boat cuts through glassy swells, and then — there — a plume of mist erupts 50 meters ahead. Your heart stops. A humpback whale, 40 tons of grace and power, breaches the surface. She exhales, her breath visible in the cool morning air.",
    "Miguel cuts the engine. You float in respectful silence. The whale circles, curious, her calf shadowing her every move. This is their nursery, their sanctuary. For three months every winter, they travel 3,000 miles from Alaska to give birth in the warm, protected waters of Banderas Bay. You're not just watching wildlife — you're witnessing one of nature's greatest migrations.",
    "These are the moments that redefine what 'vacation' means. No Wi-Fi. No schedule. Just you, the vast Pacific, and creatures older than human memory. When you return to shore, the sun will be climbing, and you'll carry this quiet awe with you for years."
  ],
  'marietas-snorkeling': [
    "The Marietas Islands rise from the Pacific like ancient volcanic teeth, raw and untouched. As your boat approaches, you'll see why Jacques Cousteau called this place 'The Mexican Galápagos.' Thousands of blue-footed boobies nest in the cliffs. Frigatebirds wheel overhead. The water shifts from deep cobalt to Caribbean turquoise as you enter the UNESCO Biosphere Reserve.",
    "Your guide hands you snorkel gear and a life jacket. You slip into the water, and the world goes silent. Below you, an entire ecosystem unfolds — parrotfish nibbling coral, spotted eagle rays gliding like underwater kites, and if you're lucky, a hawksbill turtle cruising past, unbothered by your presence.",
    "The main event is Playa del Amor — the Hidden Beach. To reach it, you swim through a 10-meter tunnel carved into the volcanic rock. Your arms pull you forward through cool, clear water. Then suddenly, you emerge inside a collapsed crater open to the sky. White sand. Vertical walls of stone. A secret beach that feels like the earth's best-kept secret.",
    "After snorkeling, you'll anchor in a calm cove for a traditional Mexican lunch prepared by the crew. Fresh ceviche, grilled fish, rice and beans. You'll eat barefoot on the boat deck, salt-crusted and sun-drunk, swapping stories with strangers who already feel like friends."
  ],
  'sport-fishing': [
    "At 5:30 AM, the beach is empty except for the fishermen preparing their pangas. You meet Captain Raúl, who's been fishing these waters since he was eight. His hands are weathered, his smile is easy, and his cooler is stocked with ice and optimism.",
    "The panga launches through the morning surf, and within 20 minutes you're in deep water where the continental shelf drops off. Raúl knows the spots — GPS coordinates passed down through generations, marked by underwater rock formations and current patterns invisible to outsiders.",
    "You cast your line. The Pacific stretches in every direction, unbroken blue meeting unbroken sky. Then: the reel screams. The rod bends double. You're hooked into a Mahi-Mahi — 'Dorado' in Spanish, named for its electric gold-and-green scales. The fight lasts 15 minutes. Your arms burn. The fish leaps, twisting in midair, desperate and beautiful.",
    "Whether you catch dinner or just stories, you'll return to shore with a deep respect for the ocean and the men who make their living from it. Raúl will fillet your catch on the beach if you want to take it to a local restaurant for cooking — fresh fish doesn't get any fresher than this."
  ],
  'turtle-release': [
    "As the sun begins its descent toward the Pacific, you walk down to the San Pancho turtle sanctuary — a small, humble operation run by local volunteers who've dedicated their lives to protecting Olive Ridley sea turtles.",
    "You'll learn how female turtles return to this very beach to lay their eggs, the same beach where they hatched decades ago. But poaching, pollution, and development have devastated their populations. The sanctuary collects eggs from vulnerable nests and incubates them in protected corrals. Your visit directly funds this work.",
    "Then comes the moment you'll never forget. You're handed a tiny turtle, no bigger than your palm, its flippers paddling the air. You kneel in the wet sand as the sun touches the horizon, painting the sky tangerine and violet. On the guide's count, you set the turtle down. It pauses, orients itself toward the waves, and begins its ancient, instinctual crawl toward the ocean.",
    "Watching that tiny creature disappear into the surf — knowing the odds are against it, but hoping it will return one day to lay its own eggs — is a humbling reminder of nature's resilience. This isn't just tourism. It's conservation. It's hope. It's saying yes to a world where future generations can do the same."
  ],
  'surf-lessons-beginner': [
    "You've seen surfers do it. Paddle out, wait, pop up, ride the wave all the way to shore like it's the easiest thing in the world. Now it's your turn to find out it's equal parts physics, timing, and controlled chaos — and that's what makes it addictive.",
    "Your instructor meets you at the shop with a foam longboard, a rash guard, and an infectious enthusiasm. You start on the sand, practicing the pop-up. Push. Jump. Land sideways. Stance wide. Arms out. It feels awkward, but your instructor assures you: 'Everyone looks like a baby giraffe at first.'",
    "Then you're in the water. The Pacific is warmer than you expected. Your instructor reads the sets, watches the horizon, and chooses your wave. 'Paddle! Paddle! Paddle!' You dig your arms in. You feel the wave catch the board. 'Pop up NOW!' And somehow — miraculously — you do. You're standing. You're gliding. You're surfing.",
    "The wave carries you 10, maybe 15 meters before you tumble sideways into the whitewater, laughing. You surface, your instructor is cheering, and you paddle back out with a new understanding: this is what people move to beach towns for. This is what 'stoke' means."
  ],
  'surf-lessons-intermediate': [
    "You can already pop up. You've ridden plenty of whitewater. Now it's time to level up and learn to surf green waves — the unbroken face where real surfing happens.",
    "Your instructor paddles out with you to the lineup. San Pancho's break is fast and punchy, a steeper drop than mellow Sayulita. This is where you learn to read the ocean — to spot the swell building on the horizon, to position yourself in the right spot, to commit to the drop.",
    "You watch the sets roll in. Your instructor coaches you on timing: 'Too early and you'll miss it. Too late and you'll pearl.' You turn your board, paddle hard, feel the lift, and drop in. The nose dips, the tail lifts, and you're flying down the face of a real wave. You lean into a bottom turn, carving up toward the shoulder, and suddenly surfing clicks. It's not just standing on a board — it's dancing with the ocean.",
    "After the session, your instructor reviews the GoPro footage frame by frame, pointing out what worked and what didn't. You see yourself surfing from the outside for the first time, and it's wild — you actually look like a surfer."
  ],
  'board-rental': [
    "Some days you don't need a lesson. You just need a board, wax, and open ocean. Whether you're a seasoned surfer passing through or a regular looking to log another session, our rental quiver has you covered.",
    "We stock everything from 9-foot foam longboards (perfect for beginners) to high-performance shortboards for advanced riders. All boards are well-maintained, freshly waxed, and matched to the day's conditions. Not sure what to rent? Just ask — we check the break every morning.",
    "Pick up your board in the morning, return it by sunset. Half-day and full-day rates available. Locals get a discount. If you're staying for the week, ask about our multi-day packages — the more you surf, the better the deal."
  ],
  'mountain-bike-tour': [
    "San Pancho isn't just surf and sand. Behind the town, the Sierra Madre mountains rise green and wild, laced with single-track trails that almost nobody knows about — except your guide, Carlos.",
    "You meet at the shop, get fitted for a Specialized mountain bike and helmet, and pedal up the cobblestone streets into the jungle. Within 15 minutes, you're deep in it — giant Parota trees draped with vines, howler monkeys bellowing in the canopy, the air thick with humidity and life.",
    "The trail climbs, switchbacks, drops, climbs again. Carlos points out medicinal plants and fresh jaguar tracks. Then you break out onto a ridge, and there it is: the Pacific, glittering blue, stretching to infinity. You stop. You breathe. You remember why you came to Mexico in the first place.",
    "The descent is fast and flowy, all momentum and adrenaline. You dodge roots, bank through corners, and coast back into town grinning like an idiot, covered in dust and sweat and completely alive."
  ],
  'sierra-madre-hike': [
    "This is the Mexico tourists miss. No tequila shots, no all-inclusive buffets — just raw tropical jungle and a guide who knows every tree by name.",
    "You start on a dirt road that fades into a narrow trail. The temperature drops 10 degrees as soon as you enter the forest canopy. Everything is green — 50 shades of it. Bromeliads cling to tree trunks. Butterflies the size of your hand drift past. Your guide stops to show you a tarantula, calm and motionless on a branch.",
    "You hike for two hours, crossing streams, scrambling over roots, climbing into the heart of the Sierra Madre. Your guide explains how indigenous Huichol people have lived in these mountains for millennia, how the forest provides medicine, food, and spiritual connection.",
    "The payoff: a hidden freshwater pool fed by a waterfall. The water is shockingly cold and perfectly clear. You strip down and jump in, gasping and laughing. This is the reward — not some Instagram-perfect infinity pool, but a secret swimming hole in the jungle, earned by sweat and curiosity."
  ]
};

export async function generateStaticParams() {
  const allTours = [
    ...toursData.surf,
    ...toursData.sea,
    ...toursData.land,
  ];

  return allTours.map((tour) => ({
    slug: tour.id,
  }));
}

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Find the tour
  const allTours: Tour[] = [
    ...toursData.surf as Tour[],
    ...toursData.sea as Tour[],
    ...toursData.land as Tour[],
  ];
  const tour = allTours.find((t) => t.id === slug) as Tour | undefined;

  if (!tour) {
    notFound();
  }

  // Get photos for this tour
  const photoFolder = tourPhotoFolders[tour.id] || 'surf';
  const photos = [1, 2, 3, 4].map(
    (n) => `/assets/images/tours/${photoFolder}/photo-${n}.jpg`
  );

  // Get related tours (same category, different tour)
  const relatedTours = allTours
    .filter((t) => t.category === tour.category && t.id !== tour.id)
    .slice(0, 3);

  const whatsappNumber = '523221409733';
  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to book the ${tour.name} tour. When is it available?`
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Dramatic Photo */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden">
        <Image
          src={photos[0]}
          alt={tour.name}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-brand via-brown-brand/60 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-5xl">{tour.icon}</span>
            {tour.seasonal && (
              <span className="bg-gold-brand text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                Seasonal
              </span>
            )}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 drop-shadow-2xl">
            {tour.name}
          </h1>
          <p className="text-xl md:text-2xl text-sand-brand/95 max-w-3xl drop-shadow-lg">
            {tour.description}
          </p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-12 bg-sand-brand/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoCarousel photos={photos} alt={tour.name} />
        </div>
      </section>

      {/* What You Will Experience - Rich Travel Writing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-title text-center">THE EXPERIENCE</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand text-center mb-12">
            What You Will Experience
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 text-brown-brand/80 leading-relaxed">
            {tourExperiences[tour.id]?.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            )) || (
              <p className="text-lg leading-relaxed">{tour.description}</p>
            )}
          </div>
        </div>
      </section>

      {/* Highlights Grid - 3 Icon Cards */}
      <section className="py-20 bg-sand-brand/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-brand text-center mb-12">
            Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-display font-bold text-brown-brand mb-2">
                Duration
              </h3>
              <p className="text-brown-brand/70">{tour.duration}</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-display font-bold text-brown-brand mb-2">
                Meeting Point
              </h3>
              <p className="text-brown-brand/70">{tour.meetingPoint}</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-display font-bold text-brown-brand mb-2">
                Group Size
              </h3>
              <p className="text-brown-brand/70">Small groups, personal attention</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-brand mb-8">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tour.includes.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-6 h-6 text-teal-brand flex-shrink-0" />
                <span className="text-lg text-brown-brand">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Box */}
      <section className="py-20 bg-gradient-to-br from-teal-brand to-brown-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Practical Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <span>💵</span>
                <span>Payment</span>
              </h3>
              <p className="text-sand-brand/90">Cash only (MXN or USD). Pay on arrival at the meeting point.</p>
            </div>
            {tour.seasonal && tour.seasonalNote && (
              <div>
                <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                  <span>📅</span>
                  <span>Season</span>
                </h3>
                <p className="text-sand-brand/90">{tour.seasonalNote}</p>
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <span>🌤️</span>
                <span>Weather</span>
              </h3>
              <p className="text-sand-brand/90">Tours run rain or shine. Cancellations only for dangerous conditions.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 flex items-center space-x-2">
                <span>👕</span>
                <span>What to Bring</span>
              </h3>
              <p className="text-sand-brand/90">Sunscreen, water bottle, camera, and an adventurous spirit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brown-brand mb-6">
            Ready for This Adventure?
          </h2>
          <p className="text-xl text-brown-brand/70 mb-8 italic">
            Contact us for pricing
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-amber-brand to-gold-brand text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-brand/50 hover:scale-110 flex items-center space-x-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Book via WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="group bg-white hover:bg-sand-brand text-brown-brand border-2 border-brown-brand px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-3"
            >
              <Mail className="w-6 h-6" />
              <span>Send Email Inquiry</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tours - "You Might Also Love" */}
      {relatedTours.length > 0 && (
        <section className="py-20 bg-sand-brand/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brown-brand text-center mb-12">
              You Might Also Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedTours.map((relatedTour) => (
                <TourCard key={relatedTour.id} tour={relatedTour} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
