import { contacts } from "@/data/contact";
import { siteConfig } from "@/data/site";

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  sameAs: [contacts.github.href, contacts.linkedin.href, contacts.x.href],
  image: `${siteConfig.url}${siteConfig.ogImagePath}`,
  description: siteConfig.description,
};
