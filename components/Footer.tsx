import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-brand text-sand-brand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 relative">
                <Image
                  src="/assets/logos/logo-circle.png"
                  alt="Barefoot Break"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-white font-display text-xl">Barefoot Break</h3>
            <p className="text-sm text-sand-brand/80 italic">
              Your First Wave Starts Here.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center space-x-2 bg-amber-brand/20 border border-amber-brand/40 rounded-lg px-4 py-2">
                <span className="text-2xl">💵</span>
                <span className="text-xs font-semibold text-gold-brand">
                  CASH ONLY
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="hover:text-white transition-colors text-sm"
                >
                  Tours & Adventures
                </Link>
              </li>
              <li>
                <Link
                  href="/surf-shop"
                  className="hover:text-white transition-colors text-sm"
                >
                  Surf Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/san-pancho"
                  className="hover:text-white transition-colors text-sm"
                >
                  About San Pancho
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors text-sm"
                >
                  Contact & Book
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div>
            <h4 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-brand" />
                <div>
                  <p className="text-white font-medium">Hours</p>
                  <p className="text-sand-brand/80">Mon – Sun</p>
                  <p className="text-sand-brand/80">8:00 AM – 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-brand" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-sand-brand/80">
                    Avenida Tercer Mundo
                    <br />
                    San Pancho, Nayarit
                    <br />
                    Mexico
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-brand font-cinzel text-sm uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-brand" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/523221409733"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand-brand/80 hover:text-white transition-colors"
                  >
                    +52 322 140 9733
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-brand" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  {/* TODO: Owner to add email */}
                  <a
                    href="mailto:info@barefootbreak.com"
                    className="text-sand-brand/80 hover:text-white transition-colors"
                  >
                    info@barefootbreak.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sand-brand/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-sand-brand/60">
              © {currentYear} Barefoot Break. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-sand-brand/60">
              <span>San Pancho, Riviera Nayarit, Mexico</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
