import type { Metadata, Viewport } from "next";
import { contacts } from "@/data/contact";
import { siteConfig } from "@/data/site";

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  colorScheme: "dark",
};

export const ogImageAlt = `${siteConfig.name} - ${siteConfig.jobTitle}`;

export const ogImage = {
  url: siteConfig.ogImagePath,
  width: 1200,
  height: 1200,
  alt: ogImageAlt,
} as const;

export const seoKeywords = [
  "Faiz Shaikh",
  "Full-Stack Developer",
  "Software Engineer",
  "Web Developer",
  "React",
  "Next.js",
  "TypeScript",
  "Go",
  "Python",
  "Astro",
  "Last9",
  "Observability",
  "Portfolio",
];

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: contacts.x.value,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },
  robots: {
    googleBot: {
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
};
