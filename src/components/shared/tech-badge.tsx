import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export const TechBadge = ({ name, variant = "secondary", className }: TechBadgeProps) => (
  <Badge variant={variant} className={cn("text-xs font-medium", className)}>
    {name}
  </Badge>
);
