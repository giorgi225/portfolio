import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

const paragraphVariants = cva("text-foreground leading-relaxed", {
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-xl lg:text-2xl",
      "3xl": "text-2xl lg:text-3xl",
      "4xl": "text-3xl lg:text-4xl",
      "5xl": "text-4xl lg:text-5xl",
    },
    color: {
      primary: "text-primary",
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "base",
    color: "default",
  },
});

function Paragraph({
  className,
  size,
  color,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof paragraphVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "p";

  return (
    <Comp
      data-slot="paragraph"
      className={cn(paragraphVariants({ size, color }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Paragraph, paragraphVariants };
