// Portfolio data - Betelhem Worku
export const personalInfo = {
  name: "Betelhem Worku",
  nickname: "Luna",
  title: "Fullstack Developer",
  subtitle: "UI/UX Designer & Creative Developer",
  email: "lunaworku@gmail.com",
  phone: "+251911487718",
  location: "Ethiopia",
  bio: "I'm a Computer Science graduate from Debre Berhan University with practical experience in full-stack development, data recovery, and digital content creation. I've built web platforms using React, Laravel, and MySQL, managed social media for tech brands, and created graphics and videos that drive engagement. With a strong mix of technical skill, creativity, and customer focus, I enjoy turning ideas into real, user-friendly solutions.",
  resumeUrl: "#",
  socialLinks: {
    github: "https://github.com/lunabeta",
    linkedin: "https://www.linkedin.com/in/lunabeta",
    twitter: "https://twitter.com/lunabeta",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Frontend",
    icon: "Layout",
    skills: ["React.js", "Three.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Laravel", "Node.js", "PHP", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Design",
    icon: "Palette",
    skills: ["Adobe Photoshop", "Illustrator", "InDesign", "Adobe XD", "After Effects", "Capcut"],
  },
  {
    category: "Tools & Auth",
    icon: "Wrench",
    skills: ["Git", "JWT", "Google OAuth", "Redux Toolkit", "Postman", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Online Delala",
    description: "A property marketplace web app using ReactJs for the front-end and Laravel for the back-end, with MySQL for database management. Features secure login with JWT, Firebase, and Google OAuth.",
    image: "/placeholder.svg",
    tags: ["React.js", "Laravel", "MySQL", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Auth System",
    description: "Secure authentication system using JWT, Firebase, and Google OAuth for enterprise applications with role-based access control.",
    image: "/placeholder.svg",
    tags: ["JWT", "Firebase", "Google OAuth", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio showcasing creative work with smooth animations, glassmorphism effects, and responsive design using Three.js.",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind", "Three.js", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    role: "Multiple Roles: Data Recovery, Social Media, Graphics, Web Dev",
    company: "Prolab Techworks Solutions",
    period: "May 2025 – Sep 2025",
    description: "Data Recovery Specialist working on PC-3000; Social Media Manager creating content and boosting engagement; Graphics Designer creating business cards, brochures, and visual content; Fullstack Web Developer building web solutions.",
    technologies: ["PC-3000", "Adobe Suite", "React.js", "Social Media"],
  },
  {
    id: 2,
    role: "Full-Stack Software Developer (Intern)",
    company: "AddisWay Technology Solutions",
    period: "July 2023 – Oct 2024",
    description: "Created 'Online Delala,' a property marketplace web app using ReactJs and Laravel. Implemented secure login with JWT, Firebase, and Google OAuth. Designed APIs for property listings and managed state with Redux Toolkit.",
    technologies: ["React.js", "Laravel", "Firebase", "MySQL", "Redux Toolkit", "JWT", "Google OAuth"],
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc in Computer Science",
    institution: "Debre Berhan University",
    coursework: ["Object Oriented Programming", "Database", "Data Structure and Algorithm", "Software Engineering", "Machine Learning"],
  },
  {
    id: 2,
    degree: "Graphics Designing",
    institution: "Boston College",
    coursework: ["Photoshop", "Illustrator", "InDesign", "Adobe XD", "After Effects"],
  },
  {
    id: 3,
    degree: "Dropshipping",
    institution: "AfroDropshipping",
    coursework: ["Product Research", "Digital Marketing", "Social Media Management"],
  },
];
