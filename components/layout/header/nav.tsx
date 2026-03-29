import React from "react";
import { MotionLink } from "@/components/core/link";
import { cn } from "@/lib/utils";

export function Nav({ ...props }: React.ComponentProps<"nav">) {
  return <nav {...props}>{props.children}</nav>;
}

export function NavLink({
  className,
  ...props
}: React.ComponentProps<typeof MotionLink>) {
  return (
    <MotionLink
      {...props}
      className={cn(
        "text-sm uppercase tracking-wider text-muted-foreground",
        "hover:text-foreground transition-colors duration-300",
        className,
      )}
    >
      {props.children}
    </MotionLink>
  );
}
