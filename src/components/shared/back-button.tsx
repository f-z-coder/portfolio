import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  href: string;
  label?: string;
}

export function BackButton({ href, label = "Back to Home" }: BackButtonProps) {
  return (
    <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground mb-8">
      <Link href={href}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
}
