import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personalInfo, navLinks } from "@/data/portfolio";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo and copyright */}
            <div className="text-center md:text-left">
              <a
                href="#home"
                className="font-display text-xl font-bold hover:text-primary transition-colors inline-block mb-2"
              >
                {personalInfo.nickname}
                <span className="text-primary">.</span>
              </a>
              <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start gap-1">
                Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> by {personalInfo.name}
              </p>
            </div>

            {/* Quick links */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass hover:bg-primary/10 hover:border-primary/50 transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
