import { Phone } from "lucide-react";
import { GmailIcon, LinkedInIcon, XIcon, GitHubIcon } from "@/components/icons/brand-icons";
import type { ContactItem } from "./types";
import { siteConfig } from "./site";

export const contactInfo: ContactItem[] = [
  {
    icon: GmailIcon,
    label: "Email",
    value: "faizshaikh72740@gmail.com",
    href: "mailto:faizshaikh72740@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9112677274",
    href: "tel:+919112677274",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "f-z-coder",
    href: siteConfig.social.github,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "f-z-coder",
    href: siteConfig.social.linkedin,
  },
  {
    icon: XIcon,
    label: "X",
    value: siteConfig.social.twitterHandle,
    href: siteConfig.social.twitter,
  },
];
