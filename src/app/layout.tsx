import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { personJsonLd, websiteJsonLd } from "@/lib/schema-markup";
import { Sidebar } from "@/components/layout/sidebar";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export { metadata, viewport } from "@/lib/metadata";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    suppressHydrationWarning
    data-scroll-behavior="smooth"
    className={cn("font-sans", geist.variable)}
  >
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
          <Sidebar />
          <div className="flex min-h-screen min-w-0 flex-1 flex-col">
            <main className="flex-1">{children}</main>
            <footer className="mx-auto w-full max-w-4xl px-6 pb-6 text-right lg:px-10">
              <p className="text-muted-foreground text-xs">
                &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
