import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const SectionWrapper = ({ id, children, className }: SectionWrapperProps) => (
  <section id={id} className={cn("pb-16 sm:pb-24", className)}>
    {children}
  </section>
);
