import Script from "next/script";
import { Lora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { jsonLd } from "@/lib/schema-markup";
import "./globals.css";

export { metadata } from "@/lib/metadata";

const lora = Lora({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lora.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col p-4">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
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
