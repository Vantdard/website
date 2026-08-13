import type { ProductCategory } from "../types/content";

export const productCategories = [
  {
    id: "software",
    slug: "software",
    name: "Software",
    shortDescription: "Focused software products built for clarity, reliability and long-term use.",
    description: "Software products that establish dependable technical foundations and solve defined engineering problems. Each product is explicit about its scope, tooling and intended use, so developers can evaluate it without unnecessary ambiguity.",
    order: 1,
  },
  {
    id: "digital-products",
    slug: "digital-products",
    name: "Digital Products",
    shortDescription: "Ready-to-use digital products created for practical, creative work.",
    description: "Purpose-built digital resources for creators, designers and small businesses. These products prioritize clear presentation, practical formats and licensing options that make their intended use understandable before purchase.",
    order: 2,
  },
] as const satisfies readonly ProductCategory[];

export function getProductCategoryById(id: ProductCategory["id"]): ProductCategory | undefined {
  return productCategories.find((category) => category.id === id);
}