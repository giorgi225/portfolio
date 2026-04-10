import * as motion from "motion/react-client";
import { ArrowUpRight } from "lucide-react";
import ProjectCard from "./projectCard";
import { projects } from "@/config/projects.config";

export default function Works() {
  return (
    <section id="work" className="py-32 lg:py-40 bg-card">
      {/* Header */}
      <div className="max-w-7xl px-6 lg:px-8 mx-auto w-full flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl lg:text-6xl font-light"
          >
            Featured <span className="italic text-accent">Projects</span>
          </motion.h2>
        </div>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
        >
          View All Projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </motion.a>
      </div>

      {/* Projects Grid */}
      <div className="space-y-1">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
