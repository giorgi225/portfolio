"use client";
import dynamic from "next/dynamic";
import { useModal } from "@/hooks/useModal";
import { ProjectModalProps } from "@/components/modals/projectModal";
import { GalleryModalProps } from "./galleryModal";
import { ExperienceModalProps } from "@/components/modals/experienceModal";

export const modalRegistry = {
  project: dynamic(() => import("@/components/modals/projectModal")),
  gallery: dynamic(() => import("@/components/modals/galleryModal")),
  experience: dynamic(() => import("@/components/modals/experienceModal")),
} as const;

export type ModalKey = keyof typeof modalRegistry;

export default function ModalsRegistry() {
  const projectModal = useModal<ProjectModalProps>("project");
  const galleryModal = useModal<GalleryModalProps>("gallery");
  const experienceModal = useModal<ExperienceModalProps>("experience");

  const modals = {
    project: projectModal,
    gallery: galleryModal,
    experience: experienceModal,
  };

  return Object.entries(modals).map(([key, modal]) => {
    if (!modal.isOpen) return null;

    const ModalComponent = modalRegistry[key as ModalKey];
    if (!ModalComponent) return null;

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <ModalComponent key={key} {...(modal as any)} isOpen={modal.isOpen} />
    );
  });
}
