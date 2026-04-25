import { cn } from "@/lib/utils";

interface DetailPageDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const DetailPageDescription = ({ children, className }: DetailPageDescriptionProps) => (
  <p className={cn("text-muted-foreground", className)}>{children}</p>
);
