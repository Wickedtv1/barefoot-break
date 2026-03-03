# CLAUDE.md — Barefoot Break Project Bible

## What This Site Is
Tourism & surf shop website for Barefoot Break, San Pancho, Nayarit, Mexico.
Surf lessons, board rentals, ocean tours. Cash only. No online payments.

## Tech Stack
- Next.js 14 App Router + Tailwind CSS
- Formspree for reservation emails
- Vercel for hosting
- TypeScript for type safety
- Lucide React for icons

## Brand Colors (DO NOT CHANGE without owner approval)
- Amber: #C4550A
- Gold: #D4A017
- Dark Brown: #1A0A00
- Sand: #FFF3D6
- Teal accent: #1A8A8A

## Typography
- Headers: Playfair Display (serif, elegant)
- Body: Lato (clean and readable)
- Accent/Label: Cinzel (premium boutique feel)

## How to Add a New Tour
1. Open `data/tours.json`
2. Add a new object to the appropriate array (surf, sea, or land)
3. Follow the existing object structure exactly
4. Include all required fields: id, category, subcategory, name, description, duration, includes, meetingPoint, price, currency, cashOnly, seasonal, icon
5. Run `npm run dev` to preview
6. Deploy: `git add . && git commit -m "Add new tour" && git push`

## How to Update Prices
- Open `data/tours.json`
- Find the tour by its `id` field
- Change the `price` value (currently all set to "TBD")
- Commit and push — Vercel auto-deploys

## How to Change the Cash-Only Message
- Search for "Cash Only" or "💵" in `/app/contact/page.tsx`
- Edit the text in that section
- The message appears in the contact/booking form

## How to Update WhatsApp Number
- Search for `wa.me/52` or `TODO: WhatsApp` across the whole project
- Replace the number in all found locations:
  - `components/WhatsAppButton.tsx`
  - `components/Footer.tsx`
  - `app/contact/page.tsx`

## How to Add a New Photo
- Drop the image into `/public/assets/images/`
- Reference it in the component with: `<Image src="/assets/images/filename.jpg" alt="Description" width={800} height={600} />`
- Use descriptive filenames (e.g., `surf-lesson-sunset.jpg`)

## Formspree Setup
- Owner must create account at formspree.io
- Create a new form, copy the form ID
- Replace `YOUR_FORM_ID` in `/app/contact/page.tsx`
- Search for `TODO: Formspree` to find the exact location

## Deployment
- Connected to Vercel via GitHub
- Every `git push` to main auto-deploys the live site
- Preview URL available for every branch
- Build command: `npm run build`
- Output directory: `.next`

## Key Pages Structure
- `/` - Homepage with hero, featured tours, and how it works
- `/tours` - All adventures with filtering (Sea, Surf, Land)
- `/surf-shop` - Surf lessons, rentals, pricing table
- `/san-pancho` - Local guide about the town
- `/contact` - Reservation form and contact info

## Components Overview
- `Navbar.tsx` - Sticky navigation with mega-dropdown for adventures
- `Footer.tsx` - Site footer with links and contact info
- `WhatsAppButton.tsx` - Floating WhatsApp button (bottom-right)
- `TourCard.tsx` - Reusable tour display card
- `BookingModal.tsx` - Popup booking form
- `HeroSection.tsx` - Homepage hero section
- `SurfReportBanner.tsx` - Today's conditions banner

## Data Structure
All tour and service data lives in `data/tours.json`:
- `surf[]` - Surf lessons and board rentals
- `sea[]` - Ocean tours (whale watching, snorkeling, fishing)
- `land[]` - Land adventures (biking, hiking)

## TODO: Owner Must Fill In
- [ ] Formspree Form ID in `/app/contact/page.tsx`
- [ ] WhatsApp phone number (currently placeholder)
- [ ] All tour prices in `tours.json` (currently "TBD")
- [ ] Instructor names and photos in `/app/surf-shop/page.tsx`
- [ ] Real San Pancho photography (replace placeholder images)
- [ ] Google Maps embed code for exact shop address in `/app/contact/page.tsx`
- [ ] Custom domain (e.g., barefootbreaksanpancho.com)
- [ ] Instagram handle for social media links

## Running the Project Locally
```bash
npm run dev       # Start development server on http://localhost:3000
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Contact Information
- WhatsApp: +52 322 140 9733 (wa.me/523221409733)
- Email: info@barefootbreak.com
- Shop address: Avenida Tercer Mundo, San Pancho, Nayarit, Mexico
- Hours: Monday – Sunday, 8:00 AM – 6:00 PM

## Design Philosophy
- Warm, tropical, boutique surf culture
- Not corporate. Not cheap.
- Think high-end beach shack meets Riviera Nayarit luxury
- Mobile-first responsive design
- Fast loading times with Next.js Image optimization

## Seasonal Features
- Whale watching tours are seasonal (December - March)
- Seasonal alert banner appears automatically during whale season
- Check `seasonal` and `seasonalNote` fields in tours.json
