"use client";
import { ExperienceModalProps } from "@/components/modals/experienceModal";
import { ExperienceDetail } from "@/config/experience.config";
import { useModal } from "@/hooks/useModal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceCardProps {
  experience: ExperienceDetail;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const experienceModal = useModal<ExperienceModalProps>("experience");

  const handleOpenModal = () => {
    experienceModal.onOpen({ data: experience });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <button
        onClick={handleOpenModal}
        className="group block w-full text-left py-10 lg:py-14 border-t border-border hover:bg-card/50 transition-all duration-500 cursor-pointer"
      >
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Period */}
          <div className="lg:col-span-2">
            <span className="text-sm font-mono text-muted-foreground">
              {experience.period}
            </span>
          </div>

          {/* Role & Company */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-medium mb-1 group-hover:text-accent transition-colors duration-300">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>{experience.company}</span>
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-5">
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Technologies */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-xs uppercase tracking-wider text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
