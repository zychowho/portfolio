# Deployment Guide

Deploy your portfolio to the web in minutes!

## 🚀 Free Hosting Options

### Option 1: Vercel (Easiest - Recommended)

**Pros:** Automatic deployments, free SSL, best performance

1. **Create GitHub Repository**
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub**
   - Create repo at github.com/new
   - Add as remote and push

3. **Connect to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repo
   - Click "Deploy"
   - ✓ Live in 1 minute!

**Custom Domain:**
- Vercel Dashboard → Settings → Domains
- Add your domain and follow DNS setup

---

### Option 2: Netlify

**Pros:** Simple drag-and-drop, good performance

1. **Create Production Build**
   ```powershell
   npm run build
   ```

2. **Method A: Drag and Drop**
   - Go to netlify.com
   - Drag the `dist` folder onto the page
   - ✓ Deployed!

3. **Method B: Git Connection**
   - Connect GitHub repo at netlify.com
   - Auto-deploys on every push

**Custom Domain:**
- Site Settings → Domain Management
- Add custom domain

---

### Option 3: GitHub Pages (Most Affordable)

**Pros:** Completely free, integrated with GitHub

1. **Update Vite Config**
   ```javascript
   // vite.config.js
   export default defineConfig({
     base: '/your-repo-name/', // If your-repo-name isn't your username
     // ... rest of config
   })
   ```

2. **Update package.json**
   ```json
   "scripts": {
     "deploy": "git push origin --delete gh-pages && npm run build && git add dist -f && git commit -m 'Deploy' && git subtree push --prefix dist origin gh-pages"
   }
   ```

3. **Deploy**
   ```powershell
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to GitHub repo Settings
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - ✓ Live at: username.github.io/repo-name

---

### Option 4: Railway.app

**Pros:** Simple Node deployment, good for experiments

1. Create account at railway.app
2. Connect GitHub repo
3. Configure as Node.js project
4. Deploy (auto-deploys on push)

---

## 📋 Pre-Deployment Checklist

Before deploying, verify everything works:

- [ ] Latest changes committed to git
- [ ] All links updated (GitHub, LinkedIn, email)
- [ ] No console errors (`npm run dev` → open DevTools)
- [ ] Mobile responsive looks good
- [ ] All project links work
- [ ] Contact form works (note: basic form for demo)
- [ ] No placeholder text remaining
- [ ] All images/emojis render correctly
- [ ] Page load is fast

## 🌐 Custom Domain Setup

### For Vercel/Netlify

1. **Buy Domain**
   - Namecheap.com
   - GoDaddy.com
   - Google Domains

2. **Point to Vercel/Netlify**
   - Provider: Add DNS records
   - Use values from your hosting dashboard
   - Wait 24-48 hours for propagation

3. **Enable HTTPS**
   - Automatic for both services

### Example: Namecheap DNS Setup
```
A Record: 76.76.19.163 (Vercel)
CNAME: cname.vercel-dns.com
```

## 🔧 Environment Setup for Deployment

### Create `.env` for Production

```
VITE_SITE_TITLE=Your Name | Portfolio
VITE_CONTACT_EMAIL=your@email.com
```

### Update Contact Form

For a working contact form (optional), consider:
- Formspree (free tier included)
- Netlify Forms
- EmailJS

## 📈 Performance Optimization

Before deployment:

```powershell
npm run build
```

Check the output:
```
✓ 234 modules transformed
dist/index.html         2.5 kb
dist/assets/index.xxxxx.js    145.2 kb
dist/assets/index.xxxxx.css   34.5 kb
```

**Tips to reduce bundle size:**
- Remove unused components
- Keep dependencies minimal
- Lazy load heavy sections

## 🔍 Post-Deployment Testing

After deploying:

1. **Check Performance**
   - Chrome DevTools → Lighthouse
   - Aim for 90+ on all metrics

2. **Test Links**
   - All navigation links work
   - GitHub links redirect
   - Contact form works

3. **Mobile Testing**
   - Open on phone/tablet
   - Verify responsive design
   - Test touch interactions

4. **SEO Check**
   - Right-click → View Page Source
   - Verify meta tags are present
   - Check `title` and `meta description`

## 🚨 Troubleshooting Deployments

### Build Fails

```powershell
npm run build
```

Check for:
- Import errors
- Syntax mistakes
- Missing dependencies

### Site 404 on GitHub Pages

Verify in `vite.config.js`:
```javascript
base: '/portfolio-repo-name/',
```

### Slow Performance

- Use Build Analysis
- Remove large dependencies
- Compress images
- Enable caching

### DNS Not Working

- Wait 48 hours for propagation
- Check hosting dashboard for correct DNS records
- Use MXToolbox.com to verify DNS

## 📊 Deployment Comparison

| Service | Cost | Speed | Ease | Custom Domain |
|---------|------|-------|------|--------------|
| Vercel | Free | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Yes |
| Netlify | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Yes |
| GitHub Pages | Free | ⭐⭐⭐⭐ | ⭐⭐⭐ | Yes |
| Railway | Free | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Yes |

## 🔐 Security Checklist

- [ ] No API keys in code
- [ ] HTTPS enabled
- [ ] No sensitive data in git history
- [ ] `.gitignore` includes `.env` files
- [ ] Form validation working
- [ ] CORS properly configured

## 🔄 Continuous Deployment Setup

All three major hosts support automatic deployment:

1. Push to GitHub
2. GitHub → Webhook → Hosting Service
3. Auto-rebuild and deploy
4. ✓ Live within 1-2 minutes

**No manual deploys needed after setup!**

## 📚 Resources

- Vercel Docs: vercel.com/docs
- Netlify Docs: docs.netlify.com
- GitHub Pages: pages.github.com
- Vite Deployment: vitejs.dev/guide/static-deploy

## ✅ After Your First Deployment

1. Share your portfolio URL
2. Add to job applications
3. Update LinkedIn profile with link
4. Continue building projects to add
5. Keep content fresh and updated

---

Your portfolio is now live on the web! Congratulations! 🎉
