import { cn } from "@/lib/utils";

interface SkillPillProps {
  name: string;
  isPrimary?: boolean;
  className?: string;
}

export const SkillPill = ({ name, isPrimary = false, className }: SkillPillProps) => (
  <span
    className={cn(
      "cursor-default rounded-md px-2.5 py-1 text-xs transition-colors",
      isPrimary
        ? "bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-medium"
        : "bg-muted text-muted-foreground hover:text-foreground",
      className
    )}
  >
    {name}
  </span>
);
