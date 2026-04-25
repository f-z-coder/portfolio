import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionLinkProps {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "outline";
  className?: string;
}

const VARIANT_STYLES = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border-border text-muted-foreground hover:text-foreground hover:bg-accent border",
} as const;

const BASE_STYLES =
  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors";

export const ActionLink = ({
  href,
  label,
  external = false,
  variant = "primary",
  className,
}: ActionLinkProps) => {
  const Icon = external ? ArrowUpRight : ArrowRight;
  const classes = cn(BASE_STYLES, VARIANT_STYLES[variant], className);
  const content = (
    <>
      {label}
      <Icon className="h-3 w-3" />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
};
