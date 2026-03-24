# Quick Start Guide

## 1️⃣ Installation (First Time Only)

Open PowerShell in the portfolio directory and run:
```powershell
npm install
```

This will install all dependencies (React, Tailwind, Framer Motion, etc.)

## 2️⃣ Start Development Server

Run this command to see your portfolio live:
```powershell
npm run dev
```

Your browser will automatically open at `http://localhost:3000`

## 3️⃣ Customize Your Portfolio

### Update Your Information (IMPORTANT!)
Edit `src/utils/data.js`:
- Change `[Your Name]` to your actual name
- Update skills list
- Add your real projects
- Update education details
- Change email/phone in contact section

### Update Hero Section
Edit `src/components/Hero.jsx`:
- Line 41: Change `[Your Name]`
- Update tagline if needed

### Update Links
Throughout the project, replace:
- `https://github.com` → Your GitHub profile
- `https://linkedin.com` → Your LinkedIn profile
- `your.email@example.com` → Your actual email

## 4️⃣ Project Configuration

### Colors & Theme
Edit `tailwind.config.js`:
- Modify color values in the `colors` object
- Adjust animations in `keyframes`
- Change shadow effects

### Content
- Skills: `src/utils/data.js` → `skills` object
- Projects: `src/utils/data.js` → `projects` array
- Education: `src/utils/data.js` → `education` object

## 5️⃣ Build for Deployment

Create production build:
```powershell
npm run build
```

This creates a `dist` folder ready to deploy.

## 📁 File Structure Quick Reference

```
src/
├── components/        ← All UI sections
├── utils/
│   └── data.js       ← Your content (EDIT THIS!)
├── App.jsx           ← Main component
├── index.jsx         ← Entry point
└── index.css         ← Global styles
```

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Or connect GitHub repo

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Run `npm run build`
3. Push `dist` to `gh-pages` branch

## ✅ Checklist Before Sharing

- [ ] Updated name in Hero section
- [ ] Added real projects to Projects section
- [ ] Updated education details
- [ ] Changed contact email
- [ ] Updated GitHub & LinkedIn links
- [ ] Reviewed all content for typos
- [ ] Tested on mobile devices
- [ ] Verified all links work

## 🎨 Customization Examples

### Change Primary Color
In `tailwind.config.js`:
```javascript
'neon-blue': '#00ff88',  // Change from #00d4ff
```

### Add New Skill
In `src/utils/data.js`:
```javascript
skills: {
  Frontend: ['React.js', 'Angular', 'Your New Skill'],
  // ...
}
```

### Add New Project
In `src/utils/data.js`:
```javascript
projects: [
  // ... existing projects
  {
    id: 7,
    title: 'Your Project Name',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/your-repo',
    demo: 'https://demo-link.com',
    image: '🎯'
  }
]
```

## 🐛 Troubleshooting

**Port 3000 already in use?**
```powershell
npx kill-port 3000
npm run dev
```

**Node modules not working?**
```powershell
rm node_modules
npm install
```

**Changes not showing?**
1. Save file (Ctrl+S)
2. Check browser console for errors
3. Hard refresh browser (Ctrl+Shift+R)

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Review component files for code comments
- Inspect browser console for error messages

---

Enjoy your professional portfolio! 🎉
