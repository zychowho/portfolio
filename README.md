# Modern Professional Portfolio

A professional, modern, and fully responsive portfolio website built with React.js. Perfect for Computer Science students and Software Developers showcasing their skills and projects.

## Features

✨ **Modern Design**
- Dark theme with neon accent colors (deep blue, black, subtle neon)
- Clean, minimal, and professional interface
- Smooth animations using Framer Motion
- Mobile-first and fully responsive design

🎯 **Sections**
1. **Hero Section** - Eye-catching intro with CTA buttons
2. **About Me** - Professional summary with tech stack badges
3. **Skills** - Categorized skills with progress indicators
4. **Projects** - Filterable project cards with GitHub & demo links
5. **Education** - Academic background and relevant coursework
6. **Contact** - Contact form and social links

🚀 **Technologies Used**
- **React.js** - Functional components with hooks
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Professional icon library
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will open in your browser at `http://localhost:3000`

## Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── data.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── .gitignore
```

## Customization

### Update Personal Information
Edit `src/utils/data.js` to update:
- Name and professional information
- Skills and expertise
- Projects portfolio
- Education details
- Contact information
- Social media links

### Modify Colors
Edit `tailwind.config.js` to change:
- Primary colors
- Accent colors
- Custom gradients
- Animation keyframes

### Add More Projects
Extend the `projects` array in `src/utils/data.js`:
```javascript
{
  id: 7,
  title: 'Your Project',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/your-repo',
  demo: 'https://your-demo.com',
  image: '🎯'
}
```

## Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Features Implemented

✅ Sticky navigation with mobile menu
✅ Smooth scroll behavior
✅ Scroll reveal animations
✅ Project filtering system
✅ Responsive design (mobile-first)
✅ Glass morphism effects
✅ Gradient text and borders
✅ Interactive form with validation
✅ Contact information section
✅ Social media links
✅ Professional footer
✅ SEO-friendly meta tags
✅ Optimized performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and lazy loading
- Minimized CSS with Tailwind
- Smooth animations without performance impact
- Fast page load times

## License

This project is open source and available under the MIT License.

## Author

Computer Science Student & Software Developer

---

**Made with ❤️ using React, Tailwind CSS, and Framer Motion**
