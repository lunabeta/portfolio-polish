import { motion } from "framer-motion";
import { Code2, Coffee, Terminal, Braces, Database } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const About = () => {
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
                  
                  {/* Code content */}
                  <div className="p-6 font-mono text-sm space-y-3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary">const</span>{" "}
                      <span className="text-accent">developer</span>{" "}
                      <span className="text-muted-foreground">=</span>{" "}
                      <span className="text-muted-foreground">{"{"}</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="pl-4"
                    >
                      <span className="text-foreground">name</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-green-400">"{personalInfo.name}"</span>
                      <span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="pl-4"
                    >
                      <span className="text-foreground">role</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-green-400">"{personalInfo.title}"</span>
                      <span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="pl-4"
                    >
                      <span className="text-foreground">location</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-green-400">"{personalInfo.location}"</span>
                      <span className="text-muted-foreground">,</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      viewport={{ once: true }}
                      className="pl-4"
                    >
                      <span className="text-foreground">passions</span>
                      <span className="text-muted-foreground">:</span>{" "}
                      <span className="text-muted-foreground">[</span>
                      <span className="text-green-400">"code"</span>
                      <span className="text-muted-foreground">,</span>{" "}
                      <span className="text-green-400">"design"</span>
                      <span className="text-muted-foreground">,</span>{" "}
                      <span className="text-green-400">"coffee"</span>
                      <span className="text-muted-foreground">]</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-muted-foreground">{"}"}</span>
                      <span className="text-muted-foreground">;</span>
                    </motion.div>
                    
                    {/* Blinking cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-primary ml-1"
                    />
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

export default About;
