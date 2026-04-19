import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faiz Shaikh - Full-Stack Developer",
  description:
    "Full-Stack Developer with 2+ years of experience building performant, scalable web applications and APIs using React, Go, TypeScript, Python, and Astro.",
  keywords: [
    "Faiz Shaikh",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Go",
    "Python",
    "Astro",
    "Last9",
    "Observability",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Faiz Shaikh" }],
  creator: "Faiz Shaikh",
  publisher: "Faiz Shaikh",
  metadataBase: new URL("https://www.faiz-shaikh.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.faiz-shaikh.in",
    siteName: "Faiz Shaikh Portfolio",
    title: "Faiz Shaikh - Full-Stack Developer",
    description:
      "Full-Stack Developer with 2+ years of experience building performant, scalable web applications and APIs using React, Go, TypeScript, Python, and Astro.",
    images: [
      {
        url: "/faiz-shaikh.jpg",
        width: 1200,
        height: 630,
        alt: "Faiz Shaikh - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Shaikh - Full-Stack Developer",
    description:
      "Full-Stack Developer building performant web apps with React, Go, TypeScript, Python, and Astro.",
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
