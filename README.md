# Khushi Mishra - PR Portfolio Website 🎨

**A luxury editorial portfolio showcasing expertise in Public Relations, Government Communications, and Celebrity Brand Building.**

<div align="center">

[![Deploy to GitHub Pages](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO/actions/workflows/deploy.yml)

[View Live Site](https://YOUR_USERNAME.github.io/YOUR_REPO/) • [Quick Start](#-quick-deployment) • [Documentation](#-documentation)

</div>

---

## ✨ Features

- 🎨 **Luxury Editorial Design** - Black, White & Gold color scheme
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Fast Loading** - Optimized production build (~122KB gzipped)
- 🔄 **Client-Side Routing** - Smooth navigation with React Router
- 📞 **WhatsApp Integration** - Direct contact functionality
- 🚀 **Automated Deployment** - GitHub Actions CI/CD pipeline
- ♿ **Accessible** - WCAG compliant with proper focus states
- 🔍 **SEO Optimized** - Meta tags and semantic HTML

---

## 📄 Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, services showcase, impact metrics |
| **About** | Personal story, PR philosophy, rapid-fire Q&A |
| **Case Studies** | 4 detailed case studies with results |
| **Media & Wins** | Media placements across Print, TV, Podcasts, Digital |
| **PR Diaries** | Behind-the-scenes with personality and humor |
| **Contact** | WhatsApp button and contact information |

---

## 🚀 Quick Deployment

### Option 1: Automated (GitHub Actions) - RECOMMENDED

```bash
# 1. Run deployment script
cd /app
bash deploy.sh

# 2. Enable GitHub Actions
# Go to Settings → Pages → Source: GitHub Actions

# 3. Done! Auto-deploys on every push
```

### Option 2: Manual (/docs folder)

```bash
# 1. Run deployment script
cd /app
bash deploy.sh

# 2. Configure Pages
# Go to Settings → Pages
# Source: Deploy from a branch
# Branch: main, Folder: /docs

# 3. Done! Deploy from pre-built files
```

**[See QUICK_START.md for detailed instructions →](./QUICK_START.md)**

---

## 📁 Project Structure

```
/app/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions workflow
│
├── frontend/                        # React application
│   ├── src/
│   │   ├── components/             # Header, Footer, UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ui/                 # Shadcn UI components
│   │   ├── pages/                  # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── CaseStudyDetail.jsx
│   │   │   ├── Media.jsx
│   │   │   ├── PRDiaries.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   └── build/                      # Production build (generated)
│
├── docs/                            # Static build for GitHub Pages
│   ├── index.html
│   ├── 404.html                    # Client-side routing fallback
│   └── static/                     # JS, CSS, assets
│
├── deploy.sh                        # Deployment helper script
├── QUICK_START.md                  # 5-minute deployment guide
├── README_GITHUB_PAGES.md          # Complete GitHub Pages docs
├── DELIVERY_SUMMARY.md             # Full project delivery summary
└── README.md                        # This file
```

---

## 🛠️ Tech Stack

### Frontend
- **React** 19.0.0 - UI framework
- **React Router** 7.5.1 - Client-side routing
- **Tailwind CSS** 3.4.17 - Utility-first styling
- **Shadcn UI** - Premium component library
- **Lucide React** - Icon library

### Build & Deploy
- **Create React App** with CRACO - Build tool
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Static hosting

### Fonts
- **Playfair Display** - Headlines (luxury serif)
- **Montserrat** - Body text (modern sans-serif)

---

## 🎨 Design System

### Colors
```css
Primary Black:   #0a0a0a to #1a1a1a
Accent Gold:     #d4af37, #f4d03f, #b8941f
White:           #ffffff
Gray Scale:      #f8f8f8, #6b7280, #374151
```

### Typography
- **Headlines**: Playfair Display (700-900 weight)
- **Body**: Montserrat (400-600 weight)
- **Line Height**: 1.2 (headlines), 1.7 (body)

---

## 🔄 Development

### Install Dependencies
```bash
cd /app/frontend
npm install --legacy-peer-deps
```

### Run Development Server
```bash
cd /app/frontend
npm start
# Opens http://localhost:3000
```

### Build for Production
```bash
cd /app/frontend
npm run build
# Output: /app/frontend/build/
```

### Update GitHub Pages
```bash
# Rebuild
cd /app/frontend
npm run build

# Update docs folder
rm -rf ../docs/*
cp -r build/* ../docs/
cp build/index.html ../docs/404.html

# Commit and push
cd /app
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Deploy in 5 minutes
- **[README_GITHUB_PAGES.md](./README_GITHUB_PAGES.md)** - Complete deployment guide
- **[DELIVERY_SUMMARY.md](./DELIVERY_SUMMARY.md)** - Project delivery details
- **[deploy.sh](./deploy.sh)** - Automated deployment script

---

## 🌐 Deployment Methods Comparison

| Method | Automation | Build Location | Best For |
|--------|-----------|----------------|----------|
| **GitHub Actions** | ✅ Full | GitHub Runners | Active development |
| **/docs Folder** | ❌ Manual | Local machine | Stable releases |

---

## ✅ Features Checklist

- [x] Luxury editorial design (Black + White + Gold)
- [x] 6 fully functional pages
- [x] Mobile responsive
- [x] Client-side routing with 404 fallback
- [x] WhatsApp integration
- [x] SEO optimization
- [x] Production build optimized
- [x] GitHub Actions workflow
- [x] Deployment documentation
- [x] Accessibility features

---

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
cd /app/frontend
rm -rf node_modules yarn.lock
yarn install
yarn build
```

### Deployment Issues
- Check GitHub Actions logs in **Actions** tab
- Verify `homepage: "."` in `package.json`
- Ensure workflow has correct permissions

### Routing Issues
- Confirm `404.html` exists in deployment
- Clear browser cache (Ctrl+Shift+R)

**[See full troubleshooting guide →](./README_GITHUB_PAGES.md#-troubleshooting)**

---

## 📞 Contact

**Portfolio Owner**
- **Name**: Khushi Mishra
- **Email**: Khushianand007@gmail.com
- **Phone**: +91 7976343276
- **Location**: Safdarjung Enclave, New Delhi

---

## 📝 License

© 2026 Khushi Mishra. All rights reserved.

---

## 🚀 Ready to Deploy?

1. **Quick Deploy**: Run `bash deploy.sh`
2. **Full Guide**: Read [QUICK_START.md](./QUICK_START.md)
3. **Troubleshoot**: Check [README_GITHUB_PAGES.md](./README_GITHUB_PAGES.md)

---

<div align="center">

**Built with precision & passion ✨**

Made for [Khushi Mishra](mailto:Khushianand007@gmail.com) • Public Relations Manager

</div>
