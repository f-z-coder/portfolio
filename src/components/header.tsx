"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const navItems = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between p-4">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Faiz Shaikh</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/60 transition-colors hover:text-foreground/80"
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
            <nav className="grid gap-6 text-lg font-medium">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/60 hover:text-foreground/80"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button className="h-max p-2 text-xs" asChild>
              <a href="/Faiz_Resume_Web_Developer_V5.pdf" download="Faiz_Shaikh_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
