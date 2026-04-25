import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
    <h1 className="text-6xl font-bold tracking-tighter">404</h1>
    <p className="text-muted-foreground mt-4 text-xl">Page not found</p>
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
