import type { ImageMetadata } from "astro";

export type SiteLanguage = "en";
export type Currency = "USD";
export type PaymentModel = "one-time";
export type Marketplace = "payhip" | "gumroad";
export type ProductStatus = "available" | "coming-soon";
export type ProductCategoryId = "software" | "digital-products";
export type ProductKind = "software" | "digital-asset-collection";
export type LicenseUse = "personal" | "commercial";
export type FeatureCategory =
  | "runtime"
  | "validation"
  | "testing"
  | "quality"
  | "automation"
  | "developer-experience"
  | "documentation"
  | "license"
  | "content"
  | "format";
export type OpenGraphType = "website" | "product";
export type RobotsDirective = "index, follow" | "noindex, follow";

export interface SocialLink { label: string; href: string; }
export interface SiteConfig { name: string; origin: string; description: string; language: SiteLanguage; supportEmail: string; socialLinks: readonly SocialLink[]; defaultOgImage?: string; }
export interface NavigationItem { label: string; href: string; }
export interface ProductCategory { id: ProductCategoryId; slug: string; name: string; shortDescription: string; description: string; order: number; }
export interface ProductFamily { slug: string; name: string; }
export interface PageMetadata { title: string; description: string; canonicalPath: string; ogImage?: string; ogImageAlt?: string; ogType?: OpenGraphType; robots?: RobotsDirective; }
export interface ProductFeature { name: string; category: FeatureCategory; description?: string; }
export interface ProductEvidence { label: string; value: string; }
export interface ProductPrice { amount: number; currency: Currency; paymentModel: PaymentModel; }
export interface LicenseOption { use: LicenseUse; name: string; price: ProductPrice; summary: string; }
export interface PurchaseOption { marketplace: Marketplace; label: string; url: string | null; active: boolean; }
export interface ProductImage { src: ImageMetadata; alt: string; width: number; height: number; }

export type DigitalAssetFormat = "PNG" | "JPG" | "WEBP";
export interface DigitalCatalogImage { src: ImageMetadata; alt: string; caption?: string; }
export interface DigitalCollectionDefaults {
  animals: readonly string[];
  formats: readonly DigitalAssetFormat[];
  illustrationCount: number;
  licenseOptions: readonly LicenseOption[];
  marketplace: Marketplace;
  support: string;
  updates: string;
  refunds: string;
}
export interface DigitalCollection {
  slug: string;
  familySlug: string;
  name: string;
  shortName: string;
  description: string;
  variationsLabel: string;
  variations: readonly string[];
  status: ProductStatus;
  purchaseUrl: string | null;
  cover?: DigitalCatalogImage;
  gallery: readonly DigitalCatalogImage[];
  overrides?: Partial<DigitalCollectionDefaults>;
  seo: PageMetadata;
}
export interface DigitalProductFamily {
  slug: string;
  name: string;
  description: string;
  audience: string;
  collectionCount: number;
  illustrationCount: number;
  subjectCount: number;
  subjectLabel: string;
  cover?: DigitalCatalogImage;
  collectionSlugs: readonly string[];
  seo: PageMetadata;
}
export interface ResolvedDigitalCollection extends DigitalCollection, DigitalCollectionDefaults {}

export interface Product {
  kind: ProductKind;
  categoryId: ProductCategoryId;
  family?: ProductFamily;
  slug: string;
  name: string;
  shortName: string;
  cardLabel: string;
  cardActionLabel: string;
  shortDescription: string;
  description: string;
  audience?: string;
  price: ProductPrice;
  licenseOptions?: readonly LicenseOption[];
  status: ProductStatus;
  featured: boolean;
  technologies: readonly string[];
  features: readonly ProductFeature[];
  evidence: readonly ProductEvidence[];
  includes: readonly string[];
  excludes: readonly string[];
  purchaseOptions: readonly PurchaseOption[];
  availabilityMessage: string;
  support: string;
  updates: string;
  refunds: string;
  licenseSummary: string;
  image?: ProductImage;
  seo: PageMetadata;
}
