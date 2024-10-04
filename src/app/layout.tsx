import { Lora } from "next/font/google";
import type { Metadata } from "next";
import { SchemaMarkup } from "@/components/schema-markup";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faiz Shaikh - Full-Stack Web Developer",
  description:
    "Portfolio of Faiz Shaikh, a Full-Stack Web Developer specializing in Next.js, React.js, and TypeScript. Explore my projects, skills, and experience.",
  keywords: [
    "Faiz Shaikh",
    "Web Developer",
    "Full-Stack Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Faiz Shaikh" }],
  creator: "Faiz Shaikh",
  publisher: "Faiz Shaikh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.faiz-shaikh.in",
    siteName: "Faiz Shaikh Portfolio",
    title: "Faiz Shaikh - Full-Stack Web Developer",
    description:
      "Portfolio of Faiz Shaikh, a Full-Stack Web Developer specializing in Next.js, React.js, and TypeScript. Explore my projects, skills, and experience.",
    images: [
      {
        url: "/faiz-shaikh.jpg",
        width: 1200,
        height: 630,
        alt: "Faiz Shaikh - Full-Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Shaikh - Full-Stack Web Developer",
    description:
      "Portfolio of Faiz Shaikh, a Full-Stack Web Developer specializing in Next.js, React.js, and TypeScript.",
    creator: "@fz_coder",
    images: ["/faiz-shaikh.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.faiz-shaikh.in",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <SchemaMarkup />
        <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
          <div className="flex min-h-screen flex-col p-4">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
