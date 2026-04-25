import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { jsonLd } from "@/lib/schema-markup";
import { SidebarGuard } from "@/components/layout/sidebar-guard";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export { metadata } from "@/lib/metadata";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-screen-2xl lg:flex">
            <SidebarGuard />
            <div className="flex min-h-screen min-w-0 flex-1 flex-col">
              <div className="flex-1">{children}</div>
              <footer className="mx-auto w-full max-w-4xl px-6 pb-6 text-right lg:px-10">
                <p className="text-muted-foreground text-xs">
                  &copy; {new Date().getFullYear()} Faiz Shaikh. All rights reserved.
                </p>
              </footer>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
