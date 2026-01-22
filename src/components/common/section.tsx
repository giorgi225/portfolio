import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function Section({ children, className, ...props }: Props) {
  return <section className={cn("w-full", className)} {...props}>{children}</section>;
}
