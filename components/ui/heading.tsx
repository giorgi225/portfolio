"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const headingVariants = cva("text-balance duration-300 transition-all", {
  variants: {
    level: {
      h1: "font-secondary text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.9] tracking-tight",
      h2: "font-serif text-4xl lg:text-5xl font-light leading-tight",
      h3: "font-serif text-2xl lg:text-3xl font-light",
    }!,
  },
  defaultVariants: {
    level: "h1",
  },
});

function Heading({
  className,
  level = "h1",
  asChild = false,
  ...props
}: React.ComponentProps<HeadingLevel> &
  VariantProps<typeof headingVariants> & {
    asChild?: boolean;
    level: HeadingLevel;
  }) {
  const Comp = asChild ? Slot.Root : (level as HeadingLevel);

  return (
    <AnimatePresence mode="wait">
      <Comp
        data-slot="heading"
        data-level={level}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    </AnimatePresence>
  );
}

const MotionHeading = motion.create(Heading);

export { Heading, headingVariants, MotionHeading };
