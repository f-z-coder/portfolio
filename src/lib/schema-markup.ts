import { siteConfig } from "@/data/site";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin, siteConfig.social.twitter],
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
};
