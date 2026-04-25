import { cn } from "@/lib/utils";

interface DetailSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const DetailSection = ({ title, children, className }: DetailSectionProps) => (
  <section className={cn("mb-8", className)}>
    <h2 className="mb-4 text-xl font-semibold">{title}</h2>
    {children}
  </section>
);
