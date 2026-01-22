"use client";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Container({ children, className, ...props }: Props) {
  return (
    <div className={cn("w-full px-[10vw]", className)} {...props}>
      {children}
    </div>
  );
}
