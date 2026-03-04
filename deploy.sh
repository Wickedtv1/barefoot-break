#!/bin/bash

echo "🌊 Barefoot Break Deployment Script"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if gh CLI is available
if ! command -v gh &> /dev/null; then
    echo -e "${YELLOW}Installing GitHub CLI...${NC}"

    # Install gh CLI based on OS
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        # Debian/Ubuntu
        if command -v apt-get &> /dev/null; then
            curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
            echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
            sudo apt update
            sudo apt install gh -y
        # Red Hat/Fedora
        elif command -v dnf &> /dev/null; then
            sudo dnf install 'dnf-command(config-manager)' -y
            sudo dnf config-manager --add-repo https://cli.github.com/packages/rpm/gh-cli.repo
            sudo dnf install gh -y
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        brew install gh
    fi
fi

echo -e "${BLUE}Step 1: GitHub Authentication${NC}"
echo "Logging into GitHub..."
gh auth login

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}GitHub login failed. Please run: gh auth login${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}Step 2: Creating GitHub Repository${NC}"

# Check if repo already exists
if gh repo view barefoot-break &> /dev/null; then
    echo "Repository 'barefoot-break' already exists."
    read -p "Do you want to use the existing repo? (y/n): " use_existing
    if [[ $use_existing != "y" ]]; then
        echo "Please delete the existing repo first or choose a different name."
        exit 1
    fi
else
    echo "Creating public repository 'barefoot-break'..."
    gh repo create barefoot-break --public --source=. --remote=origin --description="Barefoot Break Surf Shop & Adventures - San Pancho, Nayarit, Mexico"

    if [ $? -ne 0 ]; then
        echo -e "${YELLOW}Failed to create repository.${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${BLUE}Step 3: Pushing Code to GitHub${NC}"

# Check if origin exists
if git remote | grep -q '^origin$'; then
    echo "Remote 'origin' already exists, pushing to it..."
else
    echo "Adding remote origin..."
    GITHUB_USER=$(gh api user -q .login)
    git remote add origin "https://github.com/$GITHUB_USER/barefoot-break.git"
fi

echo "Pushing code..."
git push -u origin master --force

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}Push failed. Trying with main branch...${NC}"
    git branch -M main
    git push -u origin main --force
fi

echo ""
echo -e "${BLUE}Step 4: Deploying to Vercel${NC}"

# Install Vercel CLI if not present
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

echo "Logging into Vercel..."
npx vercel login

echo ""
echo "Deploying to production..."
npx vercel --prod --yes

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Deployment Complete!${NC}"
    echo ""
    echo "Your site is live! Get the URL with:"
    echo "  npx vercel ls"
    echo ""
    echo "Or visit your Vercel dashboard: https://vercel.com/dashboard"
    echo ""
else
    echo -e "${YELLOW}Vercel deployment encountered an issue.${NC}"
    echo "You can deploy manually:"
    echo "  1. Go to https://vercel.com/new"
    echo "  2. Import your GitHub repository: barefoot-break"
    echo "  3. Click Deploy"
fi

echo ""
echo -e "${GREEN}Next Steps:${NC}"
echo "1. Setup Formspree at https://formspree.io"
echo "2. Update form IDs in app/contact/page.tsx"
echo "3. Add tour prices in data/tours.json"
echo "4. Upload real photos to /public/assets/images/"
echo ""
echo "See DEPLOY.md for detailed instructions."
