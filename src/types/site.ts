export type SiteLanguage = "es" | "en";
export type OpenGraphType = "website" | "music.song" | "product";
export type RobotsDirective =
  | "index, follow"
  | "noindex, follow"
  | "noindex, nofollow";

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  origin: string;
  description: string;
  language: SiteLanguage;
  contactEmail: string | null;
  socialLinks: readonly SocialLink[];
  defaultOgImage?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: OpenGraphType;
  robots?: RobotsDirective;
}
