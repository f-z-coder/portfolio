import { cn } from "@/lib/utils";

export const CardActions = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("border-border/50 flex items-center gap-2 border-t pt-3", className)}>
    {children}
  </div>
);
