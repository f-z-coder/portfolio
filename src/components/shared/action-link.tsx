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

export function ActionLink({
  href,
  label,
  external = false,
  variant = "primary",
  className,
}: ActionLinkProps) {
  const base =
    "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-primary/90"
      : "border-border text-muted-foreground hover:text-foreground hover:bg-accent border";

  const Icon = external ? ArrowUpRight : ArrowRight;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, styles, className)}
      >
        {label}
        <Icon className="h-3 w-3" />
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, styles, className)}>
      {label}
      <Icon className="h-3 w-3" />
    </Link>
  );
}
