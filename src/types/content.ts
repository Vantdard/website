import type { ImageMetadata } from "astro";

export type SiteLanguage = "en";
export type Currency = "USD";
export type PaymentModel = "one-time";
export type Marketplace = "payhip" | "gumroad";
export type ProductStatus = "available" | "coming-soon";
export type FeatureCategory =
  | "runtime"
  | "validation"
  | "testing"
  | "quality"
  | "automation"
  | "developer-experience"
  | "documentation"
  | "license";
export type OpenGraphType = "website" | "product";
export type RobotsDirective = "index, follow" | "noindex, follow";

export interface SiteConfig {
  name: string;
  origin: string;
  description: string;
  language: SiteLanguage;
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

export interface ProductFeature {
  name: string;
  category: FeatureCategory;
  description?: string;
}

export interface ProductEvidence {
  label: string;
  value: string;
}

export interface PurchaseOption {
  marketplace: Marketplace;
  label: string;
  url: string | null;
  active: boolean;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  shortDescription: string;
  description: string;
  price: {
    amount: number;
    currency: Currency;
    paymentModel: PaymentModel;
  };
  status: ProductStatus;
  featured: boolean;
  technologies: readonly string[];
  features: readonly ProductFeature[];
  evidence: readonly ProductEvidence[];
  includes: readonly string[];
  excludes: readonly string[];
  purchaseOptions: readonly PurchaseOption[];
  support: string;
  updates: string;
  refunds: string;
  licenseSummary: string;
  image?: {
    src: ImageMetadata;
    alt: string;
    width: number;
    height: number;
  };
  seo: PageMetadata;
}
