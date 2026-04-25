"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export const SidebarGuard = () => {
  const isHome = usePathname() === "/";
  return isHome ? (
    <Sidebar />
  ) : (
    <div className="hidden lg:block lg:shrink-0">
      <Sidebar />
    </div>
  );
};
