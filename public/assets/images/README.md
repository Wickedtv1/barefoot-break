# Image Assets Guide

This directory contains all images for the Barefoot Break website.

## Required Images

### Logo Files (in `/public/assets/logos/`)
- `logo-circle.png` - Circular badge-style logo (preferred for navigation)
- `logo-square.png` - Square logo with sunset scene

### Hero Images
- `hero.jpg` - Homepage hero background (dramatic San Pancho sunset/surf scene)
- `tours-hero.jpg` - Tours page hero background
- `surf-hero.jpg` - Surf Shop page hero background
- `sanpancho-hero.jpg` - San Pancho guide page hero background

### Tour/Activity Photos
- `beginner-surf-lesson.jpg` - Surf lesson in action
- `whale-watching.jpg` - Humpback whale sighting
- `marietas-islands.jpg` - Snorkeling at Marietas
- `sport-fishing.jpg` - Fishing trip
- `mountain-biking.jpg` - Jungle mountain bike tour
- `jungle-hike.jpg` - Sierra Madre hiking

### San Pancho Lifestyle Photos
- `sunset-beach.jpg` - San Pancho sunset ritual
- `weekly-market.jpg` - Tuesday farmers market
- `town-street.jpg` - Avenida Tercer Mundo

## Image Specifications

### Recommended Sizes
- Hero images: 1920x1080px or larger (landscape)
- Tour cards: 800x600px (landscape)
- Instagram grid: 1000x1000px (square)
- Logo circle: 500x500px (transparent PNG)
- Logo square: 800x800px (transparent PNG)

### File Formats
- Use `.jpg` for photos (optimized for web)
- Use `.png` for logos (with transparency)
- Keep file sizes under 500KB when possible

### Next.js Image Optimization
All images should be imported using the Next.js `<Image />` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/assets/images/hero.jpg"
  alt="San Pancho sunset"
  width={1920}
  height={1080}
  priority={true} // for above-the-fold images
/>
```

## Adding New Images

1. Drop the image file into this directory
2. Use descriptive, kebab-case filenames (e.g., `surf-lesson-beginner.jpg`)
3. Reference the image in your component using the path `/assets/images/filename.jpg`
4. Always include an `alt` attribute for accessibility

## Current Status

⚠️ **All image slots are currently placeholders.** The owner will need to add actual photos of:
- San Pancho beach and town
- Surf lessons and rentals
- Ocean tours (whales, snorkeling, fishing)
- Land adventures (biking, hiking)
- Instructors and team
- The surf shop

## Photo Tips

- Shoot during golden hour (sunrise/sunset) for warm, inviting tones
- Include people enjoying activities (action shots)
- Show the natural beauty of San Pancho
- Capture authentic moments (not overly staged)
- Include diverse guests (all ages, skill levels)
- Get permission from people featured in photos
