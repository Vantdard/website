import type { SiteConfig } from "../types/content";

export const site = {
  name: "Vantdard",
  origin: "https://vantdard.com",
  language: "en",
  description:
    "Vantdard develops high-quality products across different domains, guided by clarity, reliability and a commitment to building them well.",
  supportEmail: "hello@vantdard.com",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/vantdard" },
    { label: "X", href: "https://x.com/vantdard" },
    { label: "DEV.to", href: "https://dev.to/vantdard" },
    { label: "Hashnode", href: "https://vantdard.hashnode.dev" },
    { label: "GitHub", href: "https://github.com/Vantdard" },
  ],
} satisfies SiteConfig;