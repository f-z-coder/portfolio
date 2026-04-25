import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/shared/tech-badge";
import { cn } from "@/lib/utils";

interface TechBadgeListProps {
  technologies: string[];
  max?: number;
  className?: string;
  badgeClassName?: string;
}

export const TechBadgeList = ({
  technologies,
  max,
  className,
  badgeClassName,
}: TechBadgeListProps) => {
  const visible = max ? technologies.slice(0, max) : technologies;
  const overflow = max ? technologies.length - max : 0;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((tech) => (
        <TechBadge key={tech} name={tech} className={badgeClassName} />
      ))}
      {overflow > 0 && (
        <Badge variant="outline" className={cn("text-xs", badgeClassName)}>
          +{overflow}
        </Badge>
      )}
    </div>
  );
};
