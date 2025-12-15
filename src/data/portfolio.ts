// Portfolio data - Betelhem Worku
export const personalInfo = {
  name: "Betelhem Worku",
  nickname: "Luna",
  title: "Fullstack Developer",
  subtitle: "UI/UX Designer & Creative Developer",
  email: "betelhemworku@gmail.com",
  location: "Ethiopia",
  bio: "I craft seamless digital experiences that blend beautiful design with robust functionality. Passionate about building products that make a difference.",
  resumeUrl: "#",
  socialLinks: {
    github: "https://github.com/lunabeta",
    linkedin: "https://linkedin.com/in/betelhem-worku",
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
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "ASP.NET Core", "PostgreSQL", "REST APIs", "GraphQL"],
  },
  {
    category: "Design",
    icon: "Palette",
    skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Design Systems"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
  },
];

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution facilitating international purchases with domestic delivery. Built with ASP.NET Core, featuring secure auth and responsive design.",
    image: "/placeholder.svg",
    tags: ["C#", ".NET", "EF Core", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Auth System",
    description: "Secure authentication system using Auth0 with OAuth, JWT, MFA, and role-based access control for enterprise applications.",
    image: "/placeholder.svg",
    tags: ["Auth0", "React", "Node.js", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern portfolio showcasing creative work with smooth animations, glassmorphism effects, and responsive design.",
    image: "/placeholder.svg",
    tags: ["React", "Tailwind", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const experiences = [
  {
    id: 1,
    role: "Fullstack Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Building scalable web applications with React and .NET. Leading frontend architecture decisions and mentoring junior developers.",
    technologies: ["React", "TypeScript", ".NET", "PostgreSQL"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2022 - 2023",
    description: "Developed responsive web applications and collaborated closely with design teams to implement pixel-perfect interfaces.",
    technologies: ["React", "Vue.js", "Tailwind CSS", "GSAP"],
  },
  {
    id: 3,
    role: "UI/UX Designer",
    company: "Startup",
    period: "2021 - 2022",
    description: "Created user-centered designs, wireframes, and prototypes. Conducted user research and usability testing.",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
];
