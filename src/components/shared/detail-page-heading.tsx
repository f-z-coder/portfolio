import { cn } from "@/lib/utils";

interface DetailPageHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const DetailPageHeading = ({ children, className }: DetailPageHeadingProps) => (
  <h1 className={cn("text-3xl font-bold tracking-tight sm:text-4xl", className)}>{children}</h1>
);
