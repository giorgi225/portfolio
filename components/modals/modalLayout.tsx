"use client";
import { ReactNode } from "react";

import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  MotionDialogClose,
} from "@/components/ui/dialog";

import { ModalControls } from "@/hooks/useModal";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  header?: ReactNode;
  children: ReactNode;
  withBorders?: boolean;
  classNames?: {
    heading?: string;
    body?: string;
    closeBtn?: string;
    content?: string;
  };
} & Partial<ModalControls>;

const ModalLayout = ({
  isOpen,
  onOpen,
  onClose,
  header,
  withBorders = true,
  classNames = {
    heading: "",
    body: "",
    closeBtn: "",
    content: "",
  },
  children,
}: Props) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (open && onOpen) {
          onOpen();
        } else if (onClose) {
          onClose();
        }
      }}
    >
      <DialogTrigger asChild>{""}</DialogTrigger>

      <AnimatePresence mode="wait">
        <DialogContent asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className={cn("bg-card/90 flex-1", classNames.content)}
          >
            <DialogTitle className="sr-only">{""}</DialogTitle>

            {withBorders && (
              <>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-foreground/40 to-transparent origin-left"
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-0 right-0 bottom-0 w-px bg-linear-to-b from-transparent via-foreground/40 to-transparent origin-top"
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-foreground/40 to-transparent origin-right"
                />
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute top-0 left-0 bottom-0 w-px bg-linear-to-b from-transparent via-foreground/40 to-transparent origin-bottom"
                />
              </>
            )}

            <div
              className={cn(
                "relative p-8 lg:p-12 border-b border-border",
                classNames.heading,
              )}
            >
              <MotionDialogClose
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className={cn(
                  "absolute top-6 right-6 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors",
                  classNames.closeBtn,
                )}
              >
                <X className="h-5 w-5" />
              </MotionDialogClose>

              {header}
            </div>
            <div
              className={cn(
                "p-8 lg:p-12 flex-1 overflow-y-auto custom-scrollbar",
                classNames.body,
              )}
            >
              {children}
            </div>
          </motion.div>
        </DialogContent>
      </AnimatePresence>
    </Dialog>
  );
};

export default ModalLayout;
