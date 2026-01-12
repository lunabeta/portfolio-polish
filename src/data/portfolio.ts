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
    title: "AI Snippet Generator",
    description: "An AI-powered code snippet generator that helps developers quickly create reusable code snippets with intelligent suggestions and syntax highlighting.",
    image: "ai-snippet-generator",
    tags: ["TypeScript", "React", "AI", "Code Generation"],
    githubUrl: "https://github.com/lunabeta/AI-Snippet-Generator",
    featured: true,
  },
  {
    id: 2,
    title: "Code Reviewer",
    description: "An intelligent code review tool that analyzes code quality, identifies potential bugs, and provides actionable suggestions for improvement.",
    image: "code-reviewer",
    tags: ["JavaScript", "AI", "Code Analysis", "Developer Tools"],
    githubUrl: "https://github.com/lunabeta/code_reviewer",
    featured: true,
  },
  {
    id: 3,
    title: "RealTime Chat App",
    description: "A modern real-time chat application with instant messaging, online presence indicators, and seamless user experience.",
    image: "realtime-chat",
    tags: ["TypeScript", "React", "WebSocket", "Real-time"],
    githubUrl: "https://github.com/lunabeta/RealTimeChatApp",
    featured: true,
  },
  {
    id: 4,
    title: "EthioCraft Collective",
    description: "A marketplace platform celebrating Ethiopian craftsmanship, connecting artisans with customers seeking authentic handmade products.",
    image: "ethiocraft-collective",
    tags: ["PHP", "Laravel", "E-commerce", "Marketplace"],
    githubUrl: "https://github.com/lunabeta/EthioCraft_Collective",
    featured: true,
  },
  {
    id: 5,
    title: "Data Recovery Web",
    description: "A professional data recovery service website showcasing recovery solutions for hard drives, SSDs, and other storage devices with modern futuristic design.",
    image: "data-recovery",
    tags: ["JavaScript", "Web Design", "Service Platform"],
    githubUrl: "https://github.com/lunabeta/Data.recovery.web",
    featured: true,
  },
  {
    id: 6,
    title: "EthioHomeHub Admin Dashboard",
    description: "A comprehensive admin dashboard for managing real estate listings, user analytics, and property transactions.",
    image: "admin-dashboard",
    tags: ["JavaScript", "React", "Dashboard", "Analytics"],
    githubUrl: "https://github.com/lunabeta/admin-dashboard-for-EthioHomeHub",
    featured: false,
  },
  {
    id: 7,
    title: "Manager API",
    description: "A robust REST API management system for handling backend operations, user management, and data processing.",
    image: "manager-api",
    tags: ["API", "Backend", "REST", "Node.js"],
    githubUrl: "https://github.com/lunabeta/Manager-API",
    featured: false,
  },
  {
    id: 8,
    title: "Cryptography Tools",
    description: "A collection of cryptographic utilities for encryption, decryption, and secure data handling with modern algorithms.",
    image: "cryptography",
    tags: ["JavaScript", "Security", "Encryption", "Crypto"],
    githubUrl: "https://github.com/lunabeta/cryptography",
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
