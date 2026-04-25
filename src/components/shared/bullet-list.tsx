import { CheckCircle2 } from "lucide-react";
import type { IconComponent } from "@/data/types";
import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  icon?: IconComponent;
  className?: string;
}

export const BulletList = ({ items, icon: Icon = CheckCircle2, className }: BulletListProps) => (
  <ul className={cn("space-y-3", className)}>
    {items.map((item, idx) => (
      <li key={idx} className="flex gap-3">
        <Icon className="text-primary mt-0.5 h-5 w-5 shrink-0" />
        <span className="text-muted-foreground leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);
