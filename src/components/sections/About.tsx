import { motion } from "framer-motion";
import { Code2, Coffee, MapPin, Sparkles } from "lucide-react";
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
            {/* Left side - Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative background */}
                <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                
                {/* Main card */}
                <div className="relative glass rounded-3xl p-8 h-full flex flex-col justify-center items-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                      <span className="font-display text-5xl font-bold text-gradient">
                        BW
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{personalInfo.title}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass rounded-2xl p-3"
                >
                  <Code2 className="w-6 h-6 text-primary" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 glass rounded-2xl p-3"
                >
                  <Sparkles className="w-6 h-6 text-accent" />
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
