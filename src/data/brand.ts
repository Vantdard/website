import type { BrandPrinciple } from "../types/brand";

export const brandPrinciples = [
  {
    title: "Engineering-first",
    description:
      "Testing, validation, code quality and maintainability are treated as part of the foundation.",
  },
  {
    title: "Fewer decisions",
    description:
      "Essential tooling is configured so developers can focus on the application-specific choices that matter.",
  },
  {
    title: "Built for long-term projects",
    description:
      "The foundation prioritizes readable structure and maintainable tooling over unnecessary architectural lock-in.",
  },
] as const satisfies readonly BrandPrinciple[];
