# Quick Deploy Guide - Barefoot Break

## 🚀 Deploy in 3 Minutes (No GitHub Required)

### Option 1: Direct Vercel Deploy (Fastest)

```bash
cd /home/schacker/barefoot-break

# Login to Vercel (opens browser)
npx vercel login

# Deploy to production
npx vercel --prod
```

**That's it!** Vercel will give you a live URL immediately.

---

### Option 2: Deploy via Vercel Dashboard with GitHub

#### Step 1: Authenticate GitHub CLI
```bash
cd /home/schacker/barefoot-break
gh auth login
```

Choose:
- GitHub.com
- HTTPS
- Yes (authenticate Git)
- Login with a web browser
- Copy the code and paste it at: https://github.com/login/device

#### Step 2: Create & Push to GitHub
```bash
# Create the repository
gh repo create barefoot-break --public --source=. --description="Barefoot Break Surf Shop - San Pancho, Mexico"

# Push the code
git push -u origin master
```

#### Step 3: Deploy on Vercel
Go to: https://vercel.com/new
- Click "Import Git Repository"
- Select "barefoot-break"
- Click "Deploy"

---

## 🌐 Get Your Live URL

After deploying with either method:

```bash
# List your deployments
npx vercel ls

# Get the production URL
npx vercel inspect --prod
```

Or visit: https://vercel.com/dashboard

---

## ✅ Test Your Live Site

Once deployed, visit these pages:

- `https://your-site.vercel.app/` - Homepage
- `https://your-site.vercel.app/tours` - All tours
- `https://your-site.vercel.app/surf-shop` - Surf lessons
- `https://your-site.vercel.app/san-pancho` - Local guide
- `https://your-site.vercel.app/contact` - Booking form

Test:
- WhatsApp button (bottom-right) opens +52 322 140 9733
- Navigation works on mobile
- Tour filtering on /tours page
- "Book Now" buttons open modal

---

## 📋 After Deployment TODOs

1. **Setup Formspree** (5 min):
   - Go to https://formspree.io
   - Create account and new form
   - Copy Form ID
   - Update in `app/contact/page.tsx` line 7
   - Update in `components/BookingModal.tsx`
   - Redeploy: `npx vercel --prod`

2. **Add Prices** (10 min):
   - Edit `data/tours.json`
   - Change `"price": "TBD"` to actual MXN prices
   - Commit and push (auto-deploys)

3. **Upload Photos** (optional):
   - Add to `/public/assets/images/`
   - Update image references in components
   - Commit and push

---

## 🆘 Troubleshooting

**"vercel login" times out:**
```bash
# Try with --token
npx vercel --token YOUR_VERCEL_TOKEN --prod
```
Get token at: https://vercel.com/account/tokens

**Build fails on Vercel:**
- Check build logs in Vercel dashboard
- Ensure Node version is 18+ (set in Vercel settings)

**GitHub authentication fails:**
```bash
# Use SSH instead
gh auth login --git-protocol ssh
```

---

## 📞 Quick Reference

**Project Path**: `/home/schacker/barefoot-break/`

**Key Commands**:
- `npm run dev` - Test locally
- `npm run build` - Build for production
- `npx vercel` - Deploy to preview
- `npx vercel --prod` - Deploy to production
- `gh repo create` - Create GitHub repo

**Next Step**: Run `npx vercel login` then `npx vercel --prod`
