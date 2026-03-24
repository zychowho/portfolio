// Portfolio data and constants
export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const skills = {
  Frontend: ['React.js', 'Angular', 'HTML/CSS', 'JavaScript'],
  Mobile: ['Flutter', 'Dart', 'React Native'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'JWT Authentication'],
  Languages: ['C++', 'JavaScript', 'Dart', 'Python', 'Java'],
  Tools: ['Git', 'Firebase', 'MySQL', 'MongoDB', 'VS Code', 'GitHub'],
}

export const projects = [
  {
    id: 1,
    title: 'VegoBolt: Waste Cooking Oil to Energy (Thesis)',
    description: 'As Project Manager, led team collaboration and managed ESP32-to-database connections and frontend integration. An IoT system converting waste cooking oil into renewable energy with real-time monitoring and data analytics.',
    technologies: ['IoT', 'ESP32', 'Flutter', 'C++', 'Node.js', 'React.js', 'MongoDB'],
    github: 'https://github.com/Masdyyy/Vegobolt-App',
    demo: null,
    image: '⚡'
  },
  {
    id: 2,
    title: 'Psalm 23 Cafe - Front-End',
    description: 'Professional front-end web application for Psalm 23 Cafe. Built with modern UI/UX principles featuring responsive design and intuitive navigation.',
    technologies: ['Angular', 'TypeScript', 'HTML/CSS', 'Responsive Design'],
    github: 'https://github.com/Torehpies/Psalm-23-Cafe-Web-App-UI',
    demo: null,
    image: '☕'
  },
  {
    id: 3,
    title: 'Translation Mobile App',
    description: 'Cross-platform mobile application for real-time translation with support for multiple languages. Features voice-to-text and text-to-speech capabilities.',
    technologies: ['Flutter', 'Dart', 'Translation API', 'Firebase'],
    github: 'https://github.com/zychowho/Translation_App',
    demo: null,
    image: '🌐'
  },
  {
    id: 4,
    title: 'Weekly Task Manager',
    description: 'Productive weekly task management application with scheduling, reminders, and progress tracking. Stay organized with intuitive task categorization.',
    technologies: ['Flutter', 'Dart', 'Local Storage', 'Firebase'],
    github: 'https://github.com/zychowho/WeeklyTaskManager',
    demo: null,
    image: '✅'
  },
  {
    id: 5,
    title: 'ESP32 Wroom Connection',
    description: 'Advanced ESP32 microcontroller project for IoT connectivity and wireless communication. Features real-time data transmission and device control capabilities.',
    technologies: ['C++', 'ESP32', 'Embedded Systems', 'IoT'],
    github: 'https://github.com/zychowho/esp32',
    demo: null,
    image: '🔌'
  },
]

export const education = {
  timeline: [
    {
      level: 'Elementary',
      school: 'Kalayaan Elementary School',
      year: '2016',
      icon: '📚'
    },
    {
      level: 'High School',
      school: 'Kalayaan National High School',
      year: '2020',
      icon: '🎓'
    },
    {
      level: 'Senior High School',
      school: 'St. Francis Technical School',
      year: '2022',
      icon: '🏆'
    },
    {
      level: 'College',
      school: 'University Of Caloocan City',
      year: '2026',
      icon: '🎯'
    }
  ]
}

export const socialLinks = [
  { icon: 'GitHub', url: 'https://github.com', label: 'GitHub' },
  { icon: 'LinkedIn', url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'Mail', url: 'mailto:your.email@example.com', label: 'Email' },
]
