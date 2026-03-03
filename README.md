# Barefoot Break

**Your First Wave Starts Here.**

A premium tourism and surf shop website for Barefoot Break in San Pancho (San Francisco), Nayarit, Mexico.

---

## 🌊 About This Project

Barefoot Break is a full-stack Next.js website offering:
- 🏄 Surf lessons and board rentals
- 🌊 Ocean tours (whale watching, snorkeling, fishing)
- 🚵 Land adventures (mountain biking, jungle hiking)
- 💵 Cash-only reservations via email/WhatsApp

Built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
barefoot-break/
├── CLAUDE.md                    # Project maintenance guide
├── README.md                    # This file
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
│
├── app/                         # Next.js App Router pages
│   ├── layout.tsx              # Root layout with Navbar & Footer
│   ├── page.tsx                # Homepage
│   ├── tours/                  # All tours & adventures
│   ├── surf-shop/              # Surf lessons & rentals
│   ├── san-pancho/             # Local guide page
│   └── contact/                # Booking form
│
├── components/                  # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── TourCard.tsx
│   ├── BookingModal.tsx
│   ├── HeroSection.tsx
│   ├── SeasonalBanner.tsx
│   └── SurfReportBanner.tsx
│
├── data/
│   └── tours.json              # Single source of truth for all tours
│
├── styles/
│   └── globals.css             # Global styles & brand colors
│
└── public/
    └── assets/
        ├── logos/              # Brand logos (circle & square)
        └── images/             # Tour photos, hero images
```

---

## 🎨 Brand Identity

### Colors
- **Amber:** `#C4550A`
- **Gold:** `#D4A017`
- **Dark Brown:** `#1A0A00`
- **Sand:** `#FFF3D6`
- **Teal:** `#1A8A8A`

### Typography
- **Headers:** Playfair Display (serif)
- **Body:** Lato (sans-serif)
- **Accents:** Cinzel (serif)

### Logos
- **Circle Logo:** Used in navigation (preferred)
- **Square Logo:** Used in hero sections

---

## ✅ TODOs for Owner

Before going live, complete these tasks:

### 1. **Add Real Content**
- [ ] Replace placeholder logos in `/public/assets/logos/`
  - `logo-circle.png` (500x500px, transparent PNG)
  - `logo-square.png` (800x800px, transparent PNG)
- [ ] Add photos to `/public/assets/images/`
  - Hero images (1920x1080px)
  - Tour activity photos (800x600px)
  - San Pancho lifestyle shots
- [ ] Update instructor names and photos in `/app/surf-shop/page.tsx`

### 2. **Configure Services**
- [ ] Create Formspree account at [formspree.io](https://formspree.io)
- [ ] Get Formspree form ID
- [ ] Replace `YOUR_FORM_ID` in:
  - `/app/contact/page.tsx`
  - `/components/BookingModal.tsx`

### 3. **Add Contact Information**
- [ ] Update WhatsApp number (currently `+52 XXXXXXXXXX`)
  - Search for `wa.me/52XXXXXXXXXX` across the project
  - Update in: Navbar, Footer, WhatsAppButton, Contact page
- [ ] Update email address (currently `info@barefootbreak.com`)
- [ ] Add shop address to Google Maps embed in `/app/contact/page.tsx`

### 4. **Set Pricing**
- [ ] Update all prices in `/data/tours.json` (currently "TBD")
- [ ] Update board rental prices in `/app/surf-shop/page.tsx`

### 5. **Deploy to Vercel**
- [ ] Push code to GitHub repository
- [ ] Connect GitHub repo to Vercel
- [ ] Add custom domain (e.g., `barefootbreaksanpancho.com`)
- [ ] Configure environment variables if needed

---

## 📄 Key Files to Edit

### Update Prices
Edit `/data/tours.json` and change `"price": "TBD"` to actual prices in MXN.

### Change WhatsApp Number
Search for `52XXXXXXXXXX` and replace in:
- `components/WhatsAppButton.tsx`
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `components/SurfReportBanner.tsx`

### Add Formspree Form ID
Search for `YOUR_FORM_ID` and replace in:
- `app/contact/page.tsx` (line 18)
- `components/BookingModal.tsx` (line 21)

### Add New Tour
Edit `/data/tours.json` and add a new object to the appropriate array (`surf`, `sea`, or `land`).

---

## 🌐 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Hero, featured tours, how it works |
| All Tours | `/tours` | Filterable tour catalog with categories |
| Surf Shop | `/surf-shop` | Lessons, rentals, pricing table |
| San Pancho | `/san-pancho` | Local guide about the town |
| Contact | `/contact` | Booking form + map |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Forms:** Formspree (email-based)
- **Deployment:** Vercel (recommended)

---

## 📱 Features

✅ Fully responsive (mobile-first design)
✅ SEO optimized with metadata
✅ Fast loading with Next.js Image optimization
✅ Seasonal banners (whale season detection)
✅ WhatsApp floating button
✅ Booking modal with pre-filled tour selection
✅ Filterable tours by category
✅ No online payments (cash only upon arrival)

---

## 🤝 Support

For questions about maintaining or updating this site, refer to **CLAUDE.md** in the root directory.

### Common Tasks

**Add a new photo:**
```bash
# 1. Drop image into /public/assets/images/
# 2. Reference it in your component:
<Image src="/assets/images/your-photo.jpg" alt="Description" width={800} height={600} />
```

**Update a tour price:**
```bash
# Open data/tours.json
# Find the tour by ID
# Change "price": "TBD" to "price": "1200"
# Save and deploy
```

**Change contact email:**
```bash
# Search for "info@barefootbreak.com" across the project
# Replace with your email
# Update in Footer and Contact page
```

---

## 📞 Contact Barefoot Break

**Location:** Avenida Tercer Mundo, San Pancho, Nayarit, Mexico
**Hours:** Mon – Sun, 8:00 AM – 6:00 PM
**WhatsApp:** +52 322 140 9733
**Email:** info@barefootbreak.com

---

## 📝 License

© 2024 Barefoot Break. All rights reserved.

---

**Built with ❤️ for the San Pancho surf community.**

*Your First Wave Starts Here.*
