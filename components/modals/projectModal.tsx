"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Calendar,
  Layers,
  Code2,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Github01Icon } from "hugeicons-react";
import { ModalControls, useModal } from "@/hooks/useModal";
import ModalLayout from "./modalLayout";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Project } from "@/config/projects.config";
import Image from "next/image";
import { GalleryModalProps } from "./galleryModal";
import { Link } from "iconsax-reactjs";

export type ProjectModalProps = {
  data: Project;
};

type Props = ModalControls<ProjectModalProps>;

export default function ProjectModal({
  props: { data: project },
  isOpen,
  onClose,
}: Props) {
  const galleryModal = useModal<GalleryModalProps>("gallery");

  const handleOpenGallery = (index: number) => {
    galleryModal.onOpen({
      title: project.title,
      images: project.images,
      index,
    });
  };

  return (
    <>
      <ModalLayout
        isOpen={isOpen}
        onClose={onClose}
        header={
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-accent text-lg">
                {String(project.id).padStart(2, "0")}
              </span>
              <span className="h-px flex-1 bg-border max-w-16" />
              <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <DialogTitle asChild>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-serif text-4xl lg:text-5xl font-light mb-4 text-balance"
              >
                {project.title}
              </motion.h2>
            </DialogTitle>

            <div className="flex-1 flex items-center justify-between gap-6 flex-wrap">
              <DialogDescription asChild className="flex-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap items-center gap-6 text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4" />
                    <span className="text-sm">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4" />
                    <span className="text-sm">
                      {project.tags.length} Technologies
                    </span>
                  </div>
                </motion.div>
              </DialogDescription>

              <Button asChild size={`sm`} className="flex-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live
                  <Link variant="Bold" className="size-4" />
                </a>
              </Button>
            </div>
          </>
        }
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images Gallery */}
          <div className="space-y-6">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </motion.div>

            {/* Challenge */}
            {project.challenge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </motion.div>
            )}

            {/* Solution */}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </motion.div>
            )}
          </div>

          <div className="space-y-8">
            {/* Main Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-4"
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Gallery
              </h3>
              {/* Thumbnail Grid */}
              {project.images && project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-3">
                  {project.images.slice(0, 3).map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => handleOpenGallery(idx)}
                    >
                      <Image
                        src={`/imgs${image}`}
                        alt={`${project.title} - ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {idx === 2 && project.images.length > 3 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            +{project.images.length - 3}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || project.tags).map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.05,
                    }}
                    className="px-3 py-1.5 text-xs uppercase tracking-wider bg-secondary/50 rounded-full border border-border hover:border-accent/50 hover:bg-secondary transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
                  Key Results
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + index * 0.05,
                      }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                      <span className="leading-relaxed">{result}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </ModalLayout>
    </>
  );
}
