import { ActionLink } from "@/components/shared/action-link";
import { cn } from "@/lib/utils";

interface ProjectLinksProps {
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export const ProjectLinks = ({ liveUrl, githubUrl, className }: ProjectLinksProps) => {
  if (!liveUrl && !githubUrl) return null;

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {liveUrl && <ActionLink href={liveUrl} label="View Live" external />}
      {githubUrl && <ActionLink href={githubUrl} label="GitHub" external variant="outline" />}
    </div>
  );
};
