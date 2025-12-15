import { motion } from "framer-motion";
import { Coffee, Terminal, Braces, Database } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          startTyping();
        }, speed);
      } else {
        setIsComplete(true);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};

const About = () => {
  const [isInView, setIsInView] = useState(false);

  const codeLines = [
    { text: 'const developer = {', delay: 0 },
    { text: `  name: "${personalInfo.name}",`, delay: 800 },
    { text: `  role: "${personalInfo.title}",`, delay: 1600 },
    { text: `  location: "${personalInfo.location}",`, delay: 2400 },
    { text: '  passions: ["code", "design", "coffee"]', delay: 3200 },
    { text: '};', delay: 4000 },
  ];

  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Crafting Digital Experiences
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Animated Code Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              onViewportEnter={() => setIsInView(true)}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                
                {/* Terminal window */}
                <div className="relative glass rounded-2xl overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-card/50 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 font-mono">about.tsx</span>
                  </div>
                  
                  {/* Code content with typing effect */}
                  <div className="p-6 font-mono text-sm space-y-1 min-h-[220px]">
                    {isInView && codeLines.map((line, index) => (
                      <TypewriterLine 
                        key={index} 
                        text={line.text} 
                        delay={line.delay}
                        isLast={index === codeLines.length - 1}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass rounded-2xl p-3"
                >
                  <Terminal className="w-6 h-6 text-primary" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 glass rounded-2xl p-3"
                >
                  <Braces className="w-6 h-6 text-accent" />
                </motion.div>
                
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-6 glass rounded-2xl p-3"
                >
                  <Database className="w-5 h-5 text-primary" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate fullstack developer with a keen eye for design. 
                  I love building products that are not only functional but also 
                  beautiful and user-friendly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With experience in both frontend and backend development, I bring 
                  ideas to life through clean code and thoughtful design. I'm constantly 
                  learning and exploring new technologies to stay at the forefront of 
                  web development.
                </p>
              </div>

              {/* Fun facts */}
              <div className="flex items-center gap-4 p-4 glass rounded-2xl">
                <Coffee className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-medium">Fueled by curiosity</p>
                  <p className="text-sm text-muted-foreground">
                    and endless cups of coffee
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 glass rounded-2xl hover-lift"
                  >
                    <p className="font-display text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TypewriterLine = ({ text, delay, isLast }: { text: string; delay: number; isLast: boolean }) => {
  const { displayedText, isComplete } = useTypewriter(text, 30, delay);
  
  // Syntax highlighting
  const highlightSyntax = (code: string) => {
    return code
      .replace(/(const|let|var)/g, '<span class="text-primary">$1</span>')
      .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
      .replace(/(\[|\]|\{|\}|;|,|:)/g, '<span class="text-muted-foreground">$1</span>')
      .replace(/(developer|name|role|location|passions)/g, '<span class="text-accent">$1</span>');
  };

  return (
    <div className="h-6 flex items-center">
      <span 
        dangerouslySetInnerHTML={{ __html: highlightSyntax(displayedText) }} 
      />
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-0.5"
        />
      )}
      {isComplete && isLast && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-primary ml-0.5"
        />
      )}
    </div>
  );
};

export default About;
