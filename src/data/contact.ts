import { Phone } from "lucide-react";
import { GmailIcon, LinkedInIcon, XIcon, GitHubIcon } from "@/components/icons/brand-icons";
import type { ContactItem, ContactType } from "./types";

export const contacts: Record<ContactType, ContactItem> = {
  email: {
    icon: GmailIcon,
    label: "Email",
    value: "faizshaikh72740@gmail.com",
    href: "mailto:faizshaikh72740@gmail.com",
  },
  phone: {
    icon: Phone,
    label: "Phone",
    value: "+91 9112677274",
    href: "tel:+919112677274",
  },
  github: {
    icon: GitHubIcon,
    label: "GitHub",
    value: "f-z-coder",
    href: "https://github.com/f-z-coder",
  },
  linkedin: {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "f-z-coder",
    href: "https://www.linkedin.com/in/f-z-coder/",
  },
  x: {
    icon: XIcon,
    label: "X",
    value: "@fz_coder",
    href: "https://x.com/fz_coder",
  },
};

export const contactInfo: ContactItem[] = Object.values(contacts);
