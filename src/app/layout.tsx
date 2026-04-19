import Script from "next/script";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { jsonLd } from "@/lib/schema-markup";
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
          <div className="mx-auto max-w-screen-2xl">{children}</div>
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
