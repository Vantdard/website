import type { BrandPrinciple } from "../types/brand";

export const brandPrinciples = [
  {
    title: "Quality",
    description:
      "Every Vantdard product must reach a standard that justifies carrying the brand.",
  },
  {
    title: "Clarity",
    description:
      "Products are presented honestly and designed to be understood without unnecessary complexity.",
  },
  {
    title: "Reliability",
    description:
      "The delivered experience is expected to remain consistent with what the product promises.",
  },
  {
    title: "Built to evolve",
    description:
      "Products are created with maintenance, improvement and responsible growth in mind.",
  },
] as const satisfies readonly BrandPrinciple[];