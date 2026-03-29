"use client";
import { ProjectModalProps } from "@/components/modals/projectModal";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { Project } from "@/config/projects.config";
import { useModal } from "@/hooks/useModal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const projectModal = useModal<ProjectModalProps>("project");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <button
        className="mx-auto group block py-8 lg:py-12 border-t border-border hover:bg-secondary/50 transition-all duration-500 cursor-pointer"
        onClick={() => projectModal.onOpen({ data: project })}
      >
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 max-w-7xl px-6 lg:px-8 mx-auto">
          {/* Number */}
          <div className="lg:col-span-1 text-start">
            <span className="text-sm text-muted-foreground font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Title & Category */}
          <div className="lg:col-span-4">
            <Heading
              level="h3"
              className="flex items-center text-start mb-2 group-hover:text-accent"
            >
              {project.title}
              <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Heading>
            <Paragraph
              size={`sm`}
              color="muted"
              className="text-start uppercase tracking-[0.15em]"
            >
              {project.category}
            </Paragraph>
          </div>

          {/* Description */}
          <div className="lg:col-span-4">
            <Paragraph
              size={`base`}
              color="muted"
              className="text-start leading-relaxed"
            >
              {project.description}
            </Paragraph>
          </div>

          {/* Year & Arrow */}
          <div className="lg:col-span-3 flex items-start justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </button>
    </motion.article>
  );
}
