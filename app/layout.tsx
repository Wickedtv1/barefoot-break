import type { Metadata } from 'next';
import { Playfair_Display, Lato, Cinzel } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '@/styles/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Barefoot Break | Surf Shop & Adventures | San Pancho, Mexico',
  description:
    "San Pancho's premier surf shop offering lessons, board rentals, and ocean tours. Your first wave starts here.",
  keywords: [
    'San Pancho',
    'San Francisco Nayarit',
    'surf lessons',
    'surf shop',
    'Riviera Nayarit',
    'whale watching',
    'Marietas Islands',
    'Mexico surf',
    'board rentals',
    'ocean tours',
    'adventure tours',
  ],
  authors: [{ name: 'Barefoot Break' }],
  openGraph: {
    title: 'Barefoot Break | Surf Shop & Adventures | San Pancho, Mexico',
    description:
      "San Pancho's premier surf shop offering lessons, board rentals, and ocean tours.",
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lato.variable} ${cinzel.variable}`}
    >
      <body className="font-body">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
