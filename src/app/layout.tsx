import Script from "next/script";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { jsonLd } from "@/lib/schema-markup";
import { Sidebar } from "@/components/layout/sidebar";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export { metadata } from "@/lib/metadata";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-screen-2xl lg:flex">
            <Sidebar />
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
        <Script
          id="jsonLdschema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
