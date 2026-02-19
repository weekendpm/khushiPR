# Khushi Mishra - PR Portfolio Website

A luxury editorial portfolio website for Khushi Mishra, Public Relations Manager specializing in government communications, celebrity PR, and strategic media relations.

## 🎨 Design Features

- **Black + White + Gold** premium color scheme
- **Playfair Display** for headlines + **Montserrat** for body text
- Luxury editorial magazine aesthetic inspired by Vogue
- Fully responsive design
- Smooth animations and micro-interactions
- Premium footer with gradient effects

## 📄 Pages

- **Home** - Hero section with powerful tagline, services, and impact metrics
- **About** - Personal story, philosophy, and rapid-fire Q&A
- **Case Studies** - Detailed case studies (SECI, Celebrity PR, GoMechanic, Events)
- **Media & Wins** - Media placements across Print, TV, Podcasts, and Digital
- **PR Diaries** - Behind-the-scenes content with personality
- **Contact** - WhatsApp integration for direct contact

## 🚀 Deploying to GitHub Pages

### Option 1: Using the /docs folder (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Khushi Mishra PR Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings**
   - Navigate to **Pages** (in the left sidebar)
   - Under **Source**, select **Deploy from a branch**
   - Select branch: **main**
   - Select folder: **/docs**
   - Click **Save**

3. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Wait 1-2 minutes for the initial deployment

### Option 2: Custom Domain (Optional)

If you want to use a custom domain:

1. In your GitHub repository settings → Pages
2. Under "Custom domain", enter your domain (e.g., `khushimishra.com`)
3. Add a CNAME file to the `/docs` folder:
   ```bash
   echo "yourdomain.com" > /app/docs/CNAME
   ```
4. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

## 📁 Project Structure

```
/app/
├── docs/                    # Production build (GitHub Pages ready)
│   ├── index.html          # Main HTML file with routing support
│   ├── 404.html            # Client-side routing fallback
│   ├── static/             # JS, CSS, and assets
│   └── asset-manifest.json
├── frontend/               # React source code
│   ├── src/
│   │   ├── components/    # Header, Footer, UI components
│   │   ├── pages/         # All page components
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
└── README_DEPLOYMENT.md   # This file
```

## 🛠️ Tech Stack

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Shadcn UI** - Premium UI components
- **Lucide React** - Icon library

## 📱 Features

- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized production build
- **Client-Side Routing** - Smooth navigation with React Router
- **WhatsApp Integration** - Direct contact via WhatsApp

## 🎯 Contact Information

- **Email:** Khushianand007@gmail.com
- **Phone:** +91 7976343276
- **Location:** Safdarjung Enclave, New Delhi

## 📝 Notes

- The `/docs` folder contains the production-ready static build
- All content is currently static (no backend required for GitHub Pages)
- The site uses client-side routing with a 404.html fallback for proper navigation
- Images are hosted on external CDN (Pexels and customer assets)

## 🔄 Updating the Site

To update the site after making changes:

1. Make your changes in `/app/frontend/src/`
2. Rebuild the production version:
   ```bash
   cd /app/frontend
   yarn build
   cp -r build/* ../docs/
   ```
3. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

GitHub Pages will automatically redeploy within 1-2 minutes.

## 📄 License

© 2026 Khushi Mishra. All rights reserved.

---

**Built with precision & passion** ✨
