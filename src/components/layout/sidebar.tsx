"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactLinks } from "@/components/shared/contact-links";
import { siteConfig } from "@/data/site";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const sidebarStagger = staggerContainer(0.06, 0.1);

export const Sidebar = () => {
  const isHome = usePathname() === "/";
  return (
    <aside
      className={cn(
        "bg-sidebar border-sidebar-border flex flex-col lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:overflow-y-auto lg:border-r lg:shadow-[4px_0_24px_rgba(0,0,0,0.35)] xl:w-96",
        !isHome && "hidden lg:flex"
      )}
    >
      <motion.div
        variants={sidebarStagger}
        initial="hidden"
        animate="visible"
        className="mx-auto flex h-full w-full max-w-4xl flex-col px-6 py-8 lg:mx-0 lg:max-w-none lg:px-10 lg:py-12"
      >
        <motion.div variants={fadeUp} className="relative mb-5 w-fit">
          <div className="from-primary/30 absolute -inset-3 rounded-3xl bg-linear-to-b to-transparent blur-2xl" />
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl shadow-md lg:h-36 lg:w-36">
            <Image
              src={siteConfig.ogImagePath}
              alt={siteConfig.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">{siteConfig.name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="bg-primary/10 text-primary -ml-2.5 rounded-full px-2.5 py-0.5 text-xs font-medium">
              {siteConfig.jobTitle}
            </span>
            <span className="text-muted-foreground inline-flex items-center gap-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Currently at {siteConfig.currentCompany.name}
            </span>
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="text-muted-foreground mt-4 text-sm leading-relaxed">
          {siteConfig.bio}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-auto space-y-4 pt-8">
          <div className="border-border/50 border-t" />

          <div className="space-y-0.5">
            <ContactLinks itemClassName="rounded-lg py-1.5" />
          </div>

          <Button size="sm" className="-ml-3 w-fit gap-3" asChild>
            <a href={siteConfig.resumePath} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </aside>
  );
};
