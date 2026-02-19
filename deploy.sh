#!/bin/bash

# GitHub Pages Deployment Script
# Khushi Mishra PR Portfolio

set -e  # Exit on error

echo "🚀 GitHub Pages Deployment Assistant"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}✓ Git initialized${NC}"
fi

# Get repository details
echo ""
echo -e "${BLUE}Enter your GitHub repository details:${NC}"
read -p "GitHub Username: " username
read -p "Repository Name: " reponame

# Confirm
echo ""
echo -e "${YELLOW}Repository URL:${NC} https://github.com/$username/$reponame"
read -p "Is this correct? (y/n): " confirm

if [ "$confirm" != "y" ]; then
    echo -e "${RED}Deployment cancelled.${NC}"
    exit 1
fi

# Add remote if not exists
if ! git remote | grep -q 'origin'; then
    echo ""
    echo -e "${YELLOW}Adding remote origin...${NC}"
    git remote add origin "https://github.com/$username/$reponame.git"
    echo -e "${GREEN}✓ Remote added${NC}"
fi

# Add all files
echo ""
echo -e "${YELLOW}Adding files to git...${NC}"
git add .
echo -e "${GREEN}✓ Files added${NC}"

# Commit
echo ""
read -p "Commit message (default: 'Deploy PR Portfolio'): " commit_msg
commit_msg=${commit_msg:-"Deploy PR Portfolio"}

git commit -m "$commit_msg"
echo -e "${GREEN}✓ Changes committed${NC}"

# Set main branch
echo ""
echo -e "${YELLOW}Setting main branch...${NC}"
git branch -M main
echo -e "${GREEN}✓ Main branch set${NC}"

# Push
echo ""
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
    echo ""
    echo -e "${BLUE}Next Steps:${NC}"
    echo "1. Go to: https://github.com/$username/$reponame/settings/pages"
    echo "2. Under 'Build and deployment':"
    echo "   - Source: Select 'GitHub Actions'"
    echo "3. Wait 2-3 minutes for deployment"
    echo "4. Your site will be live at:"
    echo -e "   ${GREEN}https://$username.github.io/$reponame/${NC}"
    echo ""
    echo -e "${YELLOW}Alternative (Manual deployment from /docs):${NC}"
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: main"
    echo "   - Folder: /docs"
    echo ""
    echo "✨ Your portfolio is ready to go live!"
else
    echo ""
    echo -e "${RED}❌ Push failed. Please check your credentials and try again.${NC}"
    echo ""
    echo "Common fixes:"
    echo "1. Ensure you have push access to the repository"
    echo "2. Check your GitHub authentication"
    echo "3. Try: git push -u origin main --force (if repository already has commits)"
    exit 1
fi
