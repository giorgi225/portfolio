"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogPortal,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export interface ExperienceDetail {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  link: string;
  achievements: string[];
  responsibilities: string[];
  companyDescription: string;
}

interface ExperienceModalProps {
  experience: ExperienceDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({
  experience,
  isOpen,
  onClose,
}: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence mode="wait">
        {isOpen && (
          <DialogPortal forceMount>
            {/* Animated Overlay */}
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md"
              />
            </DialogPrimitive.Overlay>

            {/* Drawer Content */}
            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 300,
                  mass: 0.8,
                }}
                className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-2xl bg-card border-l border-border shadow-2xl overflow-hidden focus:outline-none"
              >
                {/* Animated accent line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute left-0 top-0 bottom-0 w-1 bg-accent origin-top"
                />

                {/* Close Button */}
                <DialogPrimitive.Close asChild>
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="absolute top-6 right-6 z-10 p-3 bg-secondary hover:bg-muted rounded-full transition-colors duration-300 group"
                  >
                    <X className="h-5 w-5 text-foreground group-hover:rotate-90 transition-transform duration-300" />
                    <span className="sr-only">Close</span>
                  </motion.button>
                </DialogPrimitive.Close>

                {/* Content */}
                <div className="h-full overflow-y-auto custom-scrollbar">
                  <div className="p-8 lg:p-12 space-y-10">
                    {/* Header */}
                    <div className="space-y-6 pt-8">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-3"
                      >
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <Briefcase className="h-5 w-5 text-accent" />
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
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">
                              {experience.location}
                            </span>
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
                            transition={{
                              duration: 0.4,
                              delay: 0.8 + index * 0.1,
                            }}
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
                        <Award className="h-4 w-4 text-accent" />
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
                            transition={{
                              duration: 0.4,
                              delay: 1 + index * 0.1,
                            }}
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
                      className="pt-6"
                    >
                      <Button
                        asChild
                        size="lg"
                        className="group bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8"
                      >
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Company
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </motion.div>

                    {/* Bottom spacing */}
                    <div className="h-8" />
                  </div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card to-transparent pointer-events-none" />
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPortal>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
