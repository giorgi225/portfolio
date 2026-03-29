"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import NextLink from "next/link";

type Props = React.ComponentProps<typeof NextLink>;

export function Link({ className, ...props }: Props) {
  return <NextLink className={cn(className)} {...props} />;
}

export const MotionLink = motion.create(Link);
