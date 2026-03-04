#!/bin/bash
set -e

echo "🌊 Barefoot Break - Quick Deploy"
echo "================================"
echo ""

cd /home/schacker/barefoot-break

# Step 1: GitHub Authentication
echo "Step 1: GitHub Authentication"
echo "------------------------------"
echo "This will open a browser for authentication..."
echo ""
gh auth login --git-protocol https --web

# Step 2: Create GitHub Repository
echo ""
echo "Step 2: Creating GitHub Repository 'barefoot-break'"
echo "----------------------------------------------------"
GITHUB_USER=$(gh api user -q .login)
echo "GitHub user: $GITHUB_USER"

# Check if repo exists
if gh repo view barefoot-break &>/dev/null; then
    echo "✓ Repository already exists"
else
    gh repo create barefoot-break \
        --public \
        --source=. \
        --remote=origin \
        --description="Barefoot Break Surf Shop & Adventures - San Pancho, Mexico"
    echo "✓ Repository created"
fi

# Step 3: Push to GitHub
echo ""
echo "Step 3: Pushing code to GitHub"
echo "-------------------------------"
git branch -M main 2>/dev/null || true
git push -u origin main --force
echo "✓ Code pushed to GitHub"
echo "   Repository: https://github.com/$GITHUB_USER/barefoot-break"

# Step 4: Deploy to Vercel
echo ""
echo "Step 4: Deploying to Vercel"
echo "---------------------------"
echo "This will open a browser for Vercel authentication..."
echo ""

# Try to deploy
npx vercel --prod --yes || {
    echo ""
    echo "Note: You may need to authenticate with Vercel first"
    echo "Running: vercel login"
    npx vercel login
    echo ""
    echo "Now deploying to production..."
    npx vercel --prod --yes
}

# Get the production URL
echo ""
echo "=========================================="
echo "✅ DEPLOYMENT COMPLETE!"
echo "=========================================="
echo ""
echo "Your site is live at:"
npx vercel ls 2>/dev/null | grep "barefoot-break" | head -1 || echo "  (Run 'npx vercel ls' to see URL)"
echo ""
echo "GitHub: https://github.com/$GITHUB_USER/barefoot-break"
echo "Vercel Dashboard: https://vercel.com/dashboard"
echo ""
echo "Next steps:"
echo "1. Setup Formspree: https://formspree.io"
echo "2. Add tour prices in data/tours.json"
echo "3. Upload photos to /public/assets/images/"
echo ""
