# 📸 Photo Management Guide for Barefoot Break

## Overview

Your website is built to automatically detect and display photos from specific folders. You can add, replace, or remove photos **without touching any code**. Just drop files in the right folders and push to GitHub.

---

## 🗂️ Folder Structure

All photos are stored in `/public/assets/images/`:

```
public/assets/images/
├── hero.jpg                    # Main homepage hero background
├── gallery/                    # Homepage masonry gallery
│   ├── surfing.jpg
│   ├── ocean.jpg
│   ├── tropical-beach.jpg
│   └── ... (add as many as you want)
├── tours/
│   ├── whale-watching/         # Whale watching tour photos
│   │   ├── photo-1.jpg
│   │   ├── photo-2.jpg
│   │   ├── photo-3.jpg
│   │   └── photo-4.jpg
│   ├── marietas/               # Marietas Islands snorkeling
│   │   ├── photo-1.jpg
│   │   ├── photo-2.jpg
│   │   ├── photo-3.jpg
│   │   └── photo-4.jpg
│   ├── fishing/                # Sport fishing
│   ├── surf/                   # Surf lessons
│   ├── turtle-release/         # Turtle release
│   ├── mountain-bike/          # Mountain biking
│   └── jungle-hike/            # Jungle hiking
└── logos/
    ├── logo-circle.svg         # Navbar logo
    └── logo-square.svg         # Hero center logo
```

---

## 🔄 How to Replace Photos

### Step 1: Navigate to the photo folder

Open your terminal and navigate to the Barefoot Break project:

```bash
cd ~/barefoot-break
```

### Step 2: Replace the photo

**Option A: Drag and drop (Finder/Explorer)**

1. Navigate to the folder in Finder (Mac) or File Explorer (Windows)
2. Find the photo you want to replace
3. Drag your new photo into the folder
4. Make sure the filename is **exactly the same** as the old one
   - Example: Replace `whale-watching/photo-1.jpg` with your new photo, also named `photo-1.jpg`

**Option B: Command line**

```bash
# Copy your new photo to replace an existing one
cp ~/Downloads/my-new-whale-photo.jpg public/assets/images/tours/whale-watching/photo-1.jpg
```

### Step 3: Push to GitHub

After replacing photos, run these commands:

```bash
git add public/assets/images/
git commit -m "Update tour photos"
git push
```

**That's it!** Vercel will automatically rebuild your site with the new photos in 2-3 minutes.

---

## ➕ How to Add New Photos

### Adding to Gallery

The homepage gallery automatically displays **every image** in the `gallery/` folder. Just drop new images and push:

```bash
# Copy new gallery photo
cp ~/Downloads/sunset-surf.jpg public/assets/images/gallery/sunset-surf.jpg

# Push to GitHub
git add public/assets/images/gallery/
git commit -m "Add new gallery photo"
git push
```

### Adding More Tour Photos

Each tour displays 4 photos by default, but you can add more:

1. Name your photos sequentially: `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`, etc.
2. The tour carousel will automatically detect and display them
3. No code changes needed!

**Example:**

```bash
# Add a 5th photo to whale watching tour
cp ~/Downloads/new-whale.jpg public/assets/images/tours/whale-watching/photo-5.jpg

# Push to GitHub
git add public/assets/images/tours/whale-watching/
git commit -m "Add 5th photo to whale watching tour"
git push
```

---

## 🖼️ Photo Requirements

### File Format
- **Supported:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **Recommended:** `.jpg` (best balance of quality and file size)

### File Size
- **Hero image:** Max 2MB (currently 1.2MB)
- **Gallery images:** Max 500KB each (aim for 150-300KB)
- **Tour photos:** Max 500KB each (aim for 150-300KB)

### Image Dimensions
- **Hero:** 1920x1080px or larger (landscape)
- **Gallery:** 1200x800px or larger (any orientation)
- **Tour photos:** 1200x800px or larger (landscape preferred)

### File Naming
- Use lowercase letters, numbers, and hyphens only
- No spaces or special characters
- Examples: `photo-1.jpg`, `surfing-sunset.jpg`, `whale-breach.jpg`

---

## 🎨 How to Replace Logos

If you have your own branded logo files:

### Replace the Navbar Logo (Circle)

```bash
# Replace circle logo (shows in navbar)
cp ~/Downloads/your-circle-logo.png public/assets/logos/logo-circle.svg

# Update the component to use .png instead of .svg
# (Ask your developer or open a GitHub issue)
```

### Replace the Hero Logo (Square)

```bash
# Replace square logo (shows in hero section)
cp ~/Downloads/your-square-logo.png public/assets/logos/logo-square.svg

# Update the component to use .png instead of .svg
# (Ask your developer or open a GitHub issue)
```

**Note:** The current logos are SVG placeholders. When you have real logo files (PNG or JPG), you'll need to update the components to reference the correct file extensions.

---

## 🚨 Common Issues & Solutions

### Issue: "My new photo isn't showing up"

**Solution:**
1. Check the file name is exactly correct (including `.jpg` extension)
2. Make sure you pushed to GitHub (`git push`)
3. Wait 2-3 minutes for Vercel to rebuild
4. Hard refresh the page: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

### Issue: "Photos are loading slowly"

**Solution:**
- Your photo file sizes are too large
- Compress them using [TinyPNG.com](https://tinypng.com) or [Squoosh.app](https://squoosh.app)
- Aim for 150-300KB per photo

### Issue: "I accidentally deleted a photo"

**Solution:**
- Restore from GitHub history:

```bash
git checkout HEAD~1 -- public/assets/images/tours/whale-watching/photo-1.jpg
git add public/assets/images/
git commit -m "Restore deleted photo"
git push
```

### Issue: "I want to remove a photo from the gallery"

**Solution:**
```bash
rm public/assets/images/gallery/unwanted-photo.jpg
git add public/assets/images/gallery/
git commit -m "Remove photo from gallery"
git push
```

---

## 📝 Git Cheat Sheet

Here are the essential commands you'll use:

```bash
# 1. Navigate to project
cd ~/barefoot-break

# 2. Check what changed
git status

# 3. Add your changes
git add public/assets/images/

# 4. Commit with a message
git commit -m "Your message here"

# 5. Push to GitHub (triggers Vercel deployment)
git push

# 6. Pull latest changes from GitHub
git pull
```

---

## ✅ Photo Update Checklist

Use this checklist every time you update photos:

- [ ] Photos are high quality (not blurry or pixelated)
- [ ] Files are under 500KB each (use compression if needed)
- [ ] File names follow the pattern: `photo-1.jpg`, `photo-2.jpg`, etc.
- [ ] No spaces or special characters in file names
- [ ] Photos are in the correct folder (whale-watching, marietas, etc.)
- [ ] Ran `git add`, `git commit`, and `git push`
- [ ] Waited 2-3 minutes for Vercel to rebuild
- [ ] Checked the live site at https://barefoot-break.vercel.app/

---

## 🎯 Quick Examples

### Example 1: Replace hero background

```bash
cd ~/barefoot-break
cp ~/Downloads/new-hero.jpg public/assets/images/hero.jpg
git add public/assets/images/hero.jpg
git commit -m "Update hero background photo"
git push
```

### Example 2: Add new gallery photos

```bash
cd ~/barefoot-break
cp ~/Downloads/beach-sunset.jpg public/assets/images/gallery/
cp ~/Downloads/surf-action.jpg public/assets/images/gallery/
git add public/assets/images/gallery/
git commit -m "Add 2 new gallery photos"
git push
```

### Example 3: Update all whale watching photos

```bash
cd ~/barefoot-break
cp ~/Downloads/whale-photos/* public/assets/images/tours/whale-watching/
git add public/assets/images/tours/whale-watching/
git commit -m "Update all whale watching tour photos"
git push
```

---

## 📞 Need Help?

If you run into issues or have questions:

1. **Check this guide** - Most questions are answered here
2. **Open a GitHub issue** - https://github.com/Wickedtv1/barefoot-break/issues
3. **Contact your developer** - Reference this guide when asking questions

---

**Last updated:** March 2026
**Your photos. Your brand. No code required.**
