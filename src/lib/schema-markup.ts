import { contacts } from "@/data/contact";
import { education } from "@/data/education";
import { siteConfig } from "@/data/site";
import { skillCategories } from "@/data/skills";

const knowsAbout = Array.from(new Set(skillCategories.flatMap((c) => c.skills.map((s) => s.name))));

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.jobTitle,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.ogImagePath}`,
  email: contacts.email.value,
  description: siteConfig.description,
  sameAs: [contacts.github.href, contacts.linkedin.href, contacts.x.href],
  knowsAbout,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.institution,
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.currentCompany.name,
    url: siteConfig.currentCompany.url,
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteConfig.url,
  name: `${siteConfig.name} Portfolio`,
  description: siteConfig.description,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

export const buildBreadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
