import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DetailPageHeading } from "@/components/shared/detail-page-heading";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Explore Faiz Shaikh's portfolio, projects, and experience.",
};

const NotFound = () => (
  <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
    <p className="text-6xl font-bold tracking-tighter">404</p>
    <DetailPageHeading className="mt-4">Page not found</DetailPageHeading>
    <p className="text-muted-foreground mt-2">
      The page you&apos;re looking for doesn&apos;t exist or has been moved.
    </p>
    <Button className="mt-8" asChild>
      <Link href="/">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
    </Button>
  </div>
);

export default NotFound;
