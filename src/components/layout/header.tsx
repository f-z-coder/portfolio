"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { siteConfig } from "@/data/site";

const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function getHref(item: string) {
    const hash = `#${item.toLowerCase()}`;
    return isHome ? hash : `/${hash}`;
  }

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 fixed top-0 right-0 left-0 z-50 w-full border-b backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hover:text-primary font-bold transition-colors">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="mt-6 grid gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={getHref(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button className="h-max p-2 text-xs" asChild>
            <a href={siteConfig.resumePath} download="Faiz_Shaikh_Resume.pdf">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
