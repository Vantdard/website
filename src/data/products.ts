import starterkitCover from "../assets/products/starterkit/cover.png";
import type { Product } from "../types/content";

export const products = [
  {
    kind: "software",
    categoryId: "software",
    slug: "express-typescript-starterkit",
    name: "Production-Ready Express + TypeScript StarterKit",
    shortName: "Express + TypeScript StarterKit",
    cardLabel: "Software · Backend StarterKit",
    cardActionLabel: "View the StarterKit",
    shortDescription: "A focused backend foundation built with Express and TypeScript, with validation, automated testing, code-quality tooling and documentation already in place.",
    description: "A focused Express and TypeScript backend foundation with validation, automated testing, code-quality tooling, continuous integration and documentation.",
    audience: "Developers who want a tested, documented backend foundation while retaining control over application-specific architecture.",
    price: { amount: 19.99, currency: "USD", paymentModel: "one-time" },
    status: "available",
    featured: true,
    technologies: ["Express", "TypeScript", "Zod", "Vitest", "Supertest"],
    features: [
      { name: "Express", category: "runtime" }, { name: "TypeScript", category: "runtime" },
      { name: "Zod", category: "validation" }, { name: "Vitest", category: "testing" },
      { name: "Supertest", category: "testing" }, { name: "ESLint", category: "quality" },
      { name: "Prettier", category: "quality" }, { name: "GitHub Actions", category: "automation" },
      { name: "VS Code configuration", category: "developer-experience" },
      { name: "Documentation", category: "documentation" },
      { name: "Individual commercial license", category: "license" },
    ],
    evidence: [{ label: "Automated tests", value: "33" }, { label: "Test coverage", value: "97.7%" }],
    includes: ["Express", "TypeScript", "Zod", "Vitest", "Supertest", "ESLint", "Prettier", "GitHub Actions", "VS Code configuration", "Documentation", "33 automated tests", "97.7% test coverage", "Individual commercial license"],
    excludes: ["Authentication", "Database", "ORM", "Payments", "Frontend", "Complete SaaS functionality"],
    purchaseOptions: [
      { marketplace: "payhip", label: "Buy on Payhip", url: "https://payhip.com/b/v1azJ", active: true },
      { marketplace: "gumroad", label: "Buy on Gumroad", url: "https://vantdard.gumroad.com/l/express-typescript-starterkit", active: true },
    ],
    availabilityMessage: "The StarterKit is available through Payhip and Gumroad.",
    support: "Support is handled through the marketplace where the product was purchased.",
    updates: "Product updates, when available, are delivered through the marketplace where the purchase was made.",
    refunds: "Purchases are subject to the refund terms of the selected marketplace.",
    licenseSummary: "Includes an individual commercial license.",
    image: { src: starterkitCover, alt: "Cover of the Production-Ready Express + TypeScript StarterKit", width: starterkitCover.width, height: starterkitCover.height },
    seo: { title: "Production-Ready Express + TypeScript StarterKit | Vantdard", description: "A tested Express and TypeScript backend foundation with Zod, Vitest, Supertest, 33 automated tests and 97.7% test coverage.", canonicalPath: "/products/express-typescript-starterkit", ogType: "product" },
  },
] as const satisfies readonly Product[];

export const featuredProduct = products.find((product) => product.featured);
export function getProductBySlug(slug: string): Product | undefined { return products.find((product) => product.slug === slug); }
export function getProductsByCategory(categoryId: Product["categoryId"]): readonly Product[] { return products.filter((product) => product.categoryId === categoryId); }
