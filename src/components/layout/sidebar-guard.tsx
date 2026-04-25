"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export function SidebarGuard() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  return isHome ? (
    <Sidebar />
  ) : (
    <div className="hidden lg:block lg:shrink-0">
      <Sidebar />
    </div>
  );
}
