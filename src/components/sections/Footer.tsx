import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import logoAvatar from "@/assets/logo-avatar.png";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <img 
              src={logoAvatar} 
              alt="Betelhem Worku" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
