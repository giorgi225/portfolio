"use client";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModalControls } from "@/hooks/useModal";
import ModalLayout from "./modalLayout";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { ExperienceDetail } from "@/config/experience.config";
import { Award, Briefcase, Link, Location } from "iconsax-reactjs";

export type ExperienceModalProps = {
  data: ExperienceDetail;
};

type Props = ModalControls<ExperienceModalProps>;

export default function ProjectModal({
  props: { data: experience },
  isOpen,
  onClose,
}: Props) {
  return (
    <>
      <ModalLayout
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          heading: "p-0 lg:p-0 border-none z-10",
          body: "p-0 lg:p-0",
          content:
            "left-[inherit]! top-0! h-full! max-h-full! max-w-full! md:max-w-4xl! right-0! -translate-x-[0%]! -translate-y-[0%]!",
        }}
      >
        {/* Animated accent line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute left-0 top-0 bottom-0 w-1 bg-accent origin-top lg:flex hidden"
        />

        <div className="h-full overflow-y-auto custom-scrollbar">
          <div className="space-y-10 p-12">
            {/* Header */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Briefcase variant="Bulk" className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Work Experience
                </span>
              </motion.div>

              <DialogTitle asChild>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-serif text-4xl lg:text-5xl font-light text-balance"
                >
                  {experience.role}
                </motion.h2>
              </DialogTitle>

              <DialogDescription asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-6 text-muted-foreground"
                >
                  <span className="text-2xl font-medium text-accent">
                    {experience.company}
                  </span>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-mono">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Location variant="Bulk" className="h-4 w-4" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                </motion.div>
              </DialogDescription>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-px bg-border origin-left"
            />

            {/* Company Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                About the Company
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {experience.companyDescription}
              </p>
            </motion.div>

            {/* Role Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Role Overview
              </h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                {experience.description}
              </p>
            </motion.div>

            {/* Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Award variant="Bold" className="h-4 w-4 text-accent" />
                <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  Key Achievements
                </h3>
              </div>
              <div className="grid gap-3">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    className="p-4 bg-secondary/50 border border-border rounded-lg"
                  >
                    <p className="text-foreground/90">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 1.2 + index * 0.05,
                    }}
                    className="px-4 py-2 bg-background border border-border text-sm text-foreground/80 rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="pt-6 sticky bottom-0 bg-card z-10 shadow-xl pb-6"
            >
              <Button
                asChild
                size="default"
                className="group bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
              >
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Company
                  <Link
                    variant="Bold"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </Button>
            </motion.div>

            {/* Bottom spacing */}
            <div className="h-8" />
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
      </ModalLayout>
    </>
  );
}
