import { motion } from "framer-motion";
import { Layout, Server, Palette, Wrench } from "lucide-react";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Server,
  Palette,
  Wrench,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-6 relative z-10">
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
              Skills & Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Technologies I Work With
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((category, index) => {
              const Icon = iconMap[category.icon] || Layout;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-500 hover-lift">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">
                          {category.category}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                          className="px-4 py-2 rounded-full bg-secondary/50 text-sm text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional tech marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 overflow-hidden"
          >
            <div className="flex animate-[scroll_30s_linear_infinite] gap-8">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 shrink-0">
                  {["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind", "Figma", "Docker", "AWS", "GraphQL", "Next.js"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-2xl font-display font-bold text-muted-foreground/20 whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
