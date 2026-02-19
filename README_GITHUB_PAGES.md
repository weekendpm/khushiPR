# 🚀 GitHub Pages Deployment Guide

Complete guide for deploying Khushi Mishra's PR Portfolio to GitHub Pages with automated CI/CD.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Method 1: GitHub Actions (Recommended)](#method-1-github-actions-recommended)
3. [Method 2: Manual Deployment](#method-2-manual-deployment)
4. [Troubleshooting](#troubleshooting)
5. [Custom Domain Setup](#custom-domain-setup)

---

## Prerequisites

- GitHub account
- Git installed locally
- Repository created on GitHub

---

## Method 1: GitHub Actions (Recommended) ✨

**Automated deployment - just push to main branch!**

### Step 1: Push Code to GitHub

```bash
cd /app

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Khushi Mishra PR Portfolio"

# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
5. Click **Save**

### Step 3: Workflow Runs Automatically

Once you push to the main branch:

1. GitHub Actions workflow triggers automatically
2. Workflow builds the React app (`/frontend/build`)
3. Deploys static files to GitHub Pages
4. Your site is live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Step 4: Monitor Deployment

1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Wait for both "build" and "deploy" jobs to complete (usually 2-3 minutes)
4. Green checkmark = successful deployment ✅

### Viewing Your Site

After successful deployment:
- **URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
- Wait 1-2 minutes for DNS propagation
- Your portfolio is live! 🎉

---

## Method 2: Manual Deployment (Alternative)

If you prefer to deploy from the `/docs` folder instead of GitHub Actions.

### Step 1: Push Code to GitHub

```bash
cd /app
git init
git add .
git commit -m "Add portfolio with docs build"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main**
   - **Folder**: Select **/docs**
3. Click **Save**

### Step 3: Wait for Deployment

- GitHub will build and deploy automatically
- Check the **Actions** tab for progress
- Your site will be live in 1-2 minutes

---

## 📁 Project Structure

```
/app/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── frontend/
│   ├── src/                    # React source code
│   ├── public/                 # Public assets
│   ├── package.json            # Dependencies
│   └── build/                  # Production build (generated)
├── docs/                       # Static build for manual deployment
│   ├── index.html
│   ├── 404.html               # Client-side routing fallback
│   └── static/                # JS, CSS, images
└── README_GITHUB_PAGES.md     # This file
```

---

## 🔄 Making Updates

### With GitHub Actions (Automated)

1. Make changes in `/app/frontend/src/`
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push origin main
   ```
3. GitHub Actions automatically rebuilds and redeploys
4. Changes live in 2-3 minutes

### With Manual Deployment

1. Make changes in `/app/frontend/src/`
2. Rebuild:
   ```bash
   cd /app/frontend
   yarn build
   rm -rf ../docs/*
   cp -r build/* ../docs/
   cp build/index.html ../docs/404.html
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: [describe changes]"
   git push origin main
   ```
4. Changes live in 1-2 minutes

---

## 🐛 Troubleshooting

### Issue: 404 Page Not Found

**Problem**: Navigating directly to a route (e.g., `/about`) shows 404

**Solution**: Already implemented!
- We have a `404.html` file that redirects to React Router
- Ensure `404.html` exists in your deployment

### Issue: Blank White Page

**Problem**: Site loads but shows blank page

**Solutions**:
1. Check browser console for errors
2. Ensure `homepage: "."` is in `package.json`
3. Clear browser cache and hard refresh (Ctrl+Shift+R)
4. Check GitHub Actions logs for build errors

### Issue: CSS Not Loading

**Problem**: Site loads but no styling

**Solutions**:
1. Verify `homepage` field in `package.json` is set to `"."`
2. Rebuild with correct homepage:
   ```bash
   cd /app/frontend
   yarn build
   ```
3. Check that CSS files are in `/docs/static/css/`

### Issue: GitHub Actions Workflow Failing

**Problem**: Workflow shows red X

**Solutions**:
1. Check **Actions** tab for error details
2. Common fixes:
   - Ensure all dependencies are in `package.json`
   - Check Node.js version compatibility
   - Verify workflow file syntax
3. Re-run failed workflow:
   - Go to Actions → Click failed run → Re-run all jobs

### Issue: Changes Not Reflecting

**Problem**: Pushed changes but site looks the same

**Solutions**:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check GitHub Actions completed successfully
3. Wait 5 minutes for GitHub Pages CDN to update
4. Try incognito/private browsing mode

---

## 🌐 Custom Domain Setup

### Step 1: Add CNAME File

```bash
echo "yourdomain.com" > /app/docs/CNAME
git add .
git commit -m "Add custom domain"
git push origin main
```

Or for GitHub Actions, add to workflow after build:
```yaml
- name: Add CNAME
  run: echo "yourdomain.com" > ./frontend/build/CNAME
```

### Step 2: Configure DNS

Add these DNS records at your domain provider:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**For apex domain (optional):**
```
Type: A
Name: @
Value: 185.199.108.153
```
```
Type: A
Name: @
Value: 185.199.109.153
```
```
Type: A
Name: @
Value: 185.199.110.153
```
```
Type: A
Name: @
Value: 185.199.111.153
```

### Step 3: Enable HTTPS

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain
3. Wait for DNS check to complete
4. Check **Enforce HTTPS**
5. Wait up to 24 hours for SSL certificate

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Homepage loads at GitHub Pages URL
- [ ] All pages accessible (About, Case Studies, etc.)
- [ ] Navigation works between pages
- [ ] WhatsApp button opens WhatsApp
- [ ] Images load correctly
- [ ] Mobile responsive design works
- [ ] No console errors in browser dev tools
- [ ] Back button works after direct URL navigation

---

## 📊 Build Information

**Current Build:**
- Build output: `/app/frontend/build` or `/app/docs`
- Bundle size: ~122 KB (gzipped)
- Build time: ~15-25 seconds
- Node.js: v18+ recommended

**Files Generated:**
- `index.html` - Main HTML file
- `404.html` - Client-side routing fallback
- `static/js/` - JavaScript bundles
- `static/css/` - Stylesheets
- `asset-manifest.json` - Asset manifest

---

## 🔐 GitHub Actions Workflow Details

The workflow (`.github/workflows/deploy.yml`) does:

1. **Checkout code** from repository
2. **Setup Node.js** v18 with yarn cache
3. **Install dependencies** with `yarn install`
4. **Build production** with `yarn build`
5. **Upload artifact** from `frontend/build`
6. **Deploy to Pages** using GitHub's official action

**Permissions required:**
- `contents: read` - Read repository code
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - Authenticate deployment

---

## 💡 Pro Tips

1. **Preview Before Deploy**: Test locally with `yarn start` before pushing
2. **Use Branches**: Create feature branches, test, then merge to main
3. **Monitor Actions**: Check Actions tab after each push
4. **Use Environments**: Set up staging and production environments
5. **Performance**: GitHub Pages CDN is fast, but use external CDN for images if needed

---

## 📞 Support

**For Portfolio Owner:**
- Email: Khushianand007@gmail.com
- Phone: +91 7976343276

**For Technical Issues:**
- Check [GitHub Pages Documentation](https://docs.github.com/pages)
- Check [GitHub Actions Documentation](https://docs.github.com/actions)

---

## 📝 Quick Reference

### GitHub Actions URL Structure
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions
```

### GitHub Pages Settings URL
```
https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages
```

### Your Site URL (after deployment)
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

---

**Your portfolio is deployment-ready! 🚀**

Choose **Method 1 (GitHub Actions)** for automated deployments or **Method 2 (Manual)** for more control.

*Last updated: 2026*
