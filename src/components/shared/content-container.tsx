import { cn } from "@/lib/utils";

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentContainer({ children, className }: ContentContainerProps) {
  return (
    <div className={cn("mx-auto max-w-4xl px-6 py-10 lg:px-10 lg:py-16", className)}>
      {children}
    </div>
  );
}
