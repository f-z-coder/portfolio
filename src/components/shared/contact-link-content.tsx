import { ArrowUpRight } from "lucide-react";
import type { IconComponent } from "@/data/types";

interface ContactLinkContentProps {
  icon: IconComponent;
  value: string;
}

export const ContactLinkContent = ({ icon: Icon, value }: ContactLinkContentProps) => (
  <>
    <Icon className="h-3.5 w-3.5 shrink-0" />
    <span className="flex-1 truncate">{value}</span>
    <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 transition-opacity group-hover:opacity-60" />
  </>
);
