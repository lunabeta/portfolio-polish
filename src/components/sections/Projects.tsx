import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

// Import project images
import aiSnippetGeneratorImg from "@/assets/projects/ai-snippet-generator.png";
import codeReviewerImg from "@/assets/projects/code-reviewer.png";
import realtimeChatImg from "@/assets/projects/realtime-chat.png";
import ethiocraftCollectiveImg from "@/assets/projects/ethiocraft-collective.png";
import dataRecoveryImg from "@/assets/projects/data-recovery.png";
import adminDashboardImg from "@/assets/projects/admin-dashboard.png";
import managerApiImg from "@/assets/projects/manager-api.png";
import cryptographyImg from "@/assets/projects/cryptography.png";

// Image mapping
const projectImages: Record<string, string> = {
  "ai-snippet-generator": aiSnippetGeneratorImg,
  "code-reviewer": codeReviewerImg,
  "realtime-chat": realtimeChatImg,
  "ethiocraft-collective": ethiocraftCollectiveImg,
  "data-recovery": dataRecoveryImg,
  "admin-dashboard": adminDashboardImg,
  "manager-api": managerApiImg,
  "cryptography": cryptographyImg,
};

// Extract unique technologies from all projects
const getAllTechnologies = () => {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => techSet.add(tag));
  });
  return ["All", ...Array.from(techSet).sort()];
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const technologies = useMemo(() => getAllTechnologies(), []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) =>
      project.tags.some((tag) => tag.toLowerCase() === activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Selected Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              A collection of {projects.length} projects showcasing my expertise in full-stack development, AI integration, and modern web technologies.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tech
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="glass rounded-2xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-500 hover-lift">
                    {/* Project image */}
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={projectImages[project.image]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full glass hover:bg-primary/20 transition-colors"
                          aria-label="View source code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 flex-1 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 rounded-full text-xs cursor-pointer transition-colors ${
                              activeFilter === tag
                                ? "bg-primary/20 text-primary"
                                : "bg-secondary/50 text-muted-foreground hover:bg-primary/10"
                            }`}
                            onClick={() => setActiveFilter(tag)}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-xs text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all group/link"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              No projects found with "{activeFilter}" technology.
            </motion.p>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/lunabeta" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
