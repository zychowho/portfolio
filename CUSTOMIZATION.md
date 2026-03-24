# Customization Guide

Complete guide to customize every aspect of your portfolio.

## 📝 Content Customization

### 1. Personal Information (`src/utils/data.js`)

#### Navigation Items
```javascript
export const navItems = [
  { label: 'Home', href: '#home' },
  // Add more sections as needed
]
```

#### Skills
```javascript
export const skills = {
  Frontend: ['React.js', 'Angular', 'Add your skill'],
  // Add or remove categories
  'Your Category': ['Skill1', 'Skill2']
}
```

#### Projects
```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'What does this project do?',
    technologies: ['React', 'Node.js'], // Technologies used
    github: 'https://github.com/your-repo',
    demo: 'https://your-demo.com', // Optional
    image: '🎯' // Emoji representing the project
  }
]
```

**Project Emoji Ideas:**
- 📱 Mobile app
- 🛒 E-commerce
- 💬 Chat app
- 📊 Dashboard
- 🔐 Security
- ⚙️ System
- 🚀 Full-stack
- 🎮 Game
- 🌐 Web app

#### Education
```javascript
export const education = {
  degree: 'Your Degree',
  university: 'University Name',
  duration: 'Expected Graduation: Month Year',
  coursework: ['Course 1', 'Course 2'],
  gpa: '3.8/4.0'
}
```

#### Social Links
```javascript
export const socialLinks = [
  { icon: 'GitHub', url: 'https://github.com', label: 'GitHub' },
  // Add LinkedIn, Twitter, etc.
]
```

## 🎨 Design Customization

### 2. Colors (`tailwind.config.js`)

#### Theme Colors
```javascript
colors: {
  'dark-bg': '#0f0f1e',       // Main background
  'dark-secondary': '#1a1a2e', // Secondary background
  'neon-blue': '#00d4ff',       // Primary accent
  'neon-purple': '#7c3aed',     // Secondary accent
  'neon-pink': '#ff006e',        // Tertiary accent
}
```

**Color Suggestions:**
- Tech vibes: `#00d4ff` (cyan), `#7c3aed` (purple)
- Modern: `#ff006e` (pink), `#06b6d4` (teal)
- Corporate: `#3b82f6` (blue), `#10b981` (green)

#### Shadow Effects
```javascript
boxShadow: {
  'glow-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
  'glow-purple': '0 0 20px rgba(124, 58, 237, 0.3)',
}
```

#### Animations
```javascript
animation: {
  'float': 'float 3s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
}
```

Modify timing (3s, 2s) to adjust animation speed.

### 3. Component Styling

#### Navbar (`src/components/Navbar.jsx`)
- Line 13: Sticky position and z-index
- Line 23: Logo text styling
- Navigation link colors and hover effects

#### Hero Section (`src/components/Hero.jsx`)
- Background gradient colors
- Animated elements' size and blur effects
- Button colors and border styles

#### Cards
- Border radius: `rounded-lg`, `rounded-xl`
- Spacing: Change `p-4`, `p-6`, `p-8`
- Borders: Adjust border opacity in `border-neon-blue/30`

## 🔤 Typography Customization

### Font Size Modifications

In components, common sizes are:
```jsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl">  // Large heading
<h2 className="text-4xl sm:text-5xl">               // Section heading
<h3 className="text-2xl font-bold">                 // Subsection
<p className="text-lg">                             // Body text
```

### Font Weight Options
- `font-light`: 300
- `font-normal`: 400
- `font-semibold`: 600
- `font-bold`: 700

## 🎬 Animation Customization

### Framer Motion Properties

#### Hover Effects
```javascript
whileHover={{ scale: 1.05 }}           // Grow on hover
whileHover={{ y: -10 }}                 // Move up on hover
whileHover={{ rotate: 5 }}             // Slight rotation
whileHover={{ color: '#00d4ff' }}      // Change color
```

#### Container Animations
```javascript
staggerChildren: 0.1    // Delay between children (seconds)
transition: { duration: 0.6 }  // Animation duration
```

### Motion Variants Examples

**Fade & Slide:**
```javascript
hidden: { opacity: 0, y: 20 }
visible: { opacity: 1, y: 0 }
```

**Scale & Glow:**
```javascript
hidden: { opacity: 0, scale: 0.8 }
visible: { opacity: 1, scale: 1 }
```

## 📱 Responsive Design

### Tailwind Breakpoints
- `sm:` - 640px
- `md:` - 768px  
- `lg:` - 1024px
- `xl:` - 1280px

Example:
```jsx
<div className="text-2xl sm:text-3xl lg:text-4xl">
  // Mobile: 2xl, Tablet: 3xl, Desktop: 4xl
</div>
```

## 🔧 Component-Specific Customization

### Navbar
- Change logo text (line 23)
- Adjust menu items in `navItems` constant
- Modify sticky behavior in className

### Hero
- Update main heading (line 43)
- Change CTA button text
- Adjust background animation duration

### Skills Section
- Add/remove skill categories
- Change progress bar animations
- Modify proficiency percentages

### Projects
- Add/remove project filter categories
- Change cards per row (grid columns)
- Adjust image emoji

### Education
- Add more coursework subjects
- Update GPA values
- Modify achievement icons

### Contact
- Change form field labels
- Update contact information
- Add/remove social media links

## 💾 Advanced: Global Styling

### In `src/index.css`

#### Custom Utilities
```css
.glass {
  background: rgba(26, 26, 46, 0.7);
  backdrop-filter: blur(10px);
}

.gradient-text {
  background: linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Add your own utilities here and use with `className="glass"`

## 🌍 SEO Customization

### In `public/index.html`
```html
<meta name="description" content="Your portfolio description">
<meta name="theme-color" content="#0f0f1e">
<title>Your Name | Portfolio</title>
```

## 📊 Performance Optimization

### Image Optimization
- Use emojis instead of large images (done!)
- Compress any images you add
- Use WebP format where possible

### CSS Optimization
- Tailwind automatically purges unused styles
- No manual optimization needed

### Bundle Size
- Framer Motion is tree-shakeable
- Import only needed React Icons

## 🔗 Quick Reference

### Color Classes Available
```
text-neon-blue, text-neon-purple, text-neon-pink
bg-neon-blue, bg-neon-purple, bg-neon-pink
border-neon-blue, border-neon-purple, border-neon-pink
shadow-glow-blue, shadow-glow-purple
```

### Common Patterns
```
// Glass effect
className="glass"

// Gradient text
className="gradient-text"

// Hover scale up
whileHover={{ scale: 1.05 }}

// Smooth transition
transition={{ duration: 0.6 }}

// Staggered children
staggerChildren: 0.1
```

## 🎯 Customization Checklist

- [ ] Updated personal data in `data.js`
- [ ] Changed all placeholder links
- [ ] Customized colors if desired
- [ ] Added real projects
- [ ] Updated education details
- [ ] Adjusted animations (if needed)
- [ ] Changed component text
- [ ] Updated social links
- [ ] Tested responsive design
- [ ] Verified all links work

---

Remember: Keep backups of any files before major changes!
