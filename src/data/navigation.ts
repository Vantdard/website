import type { NavigationItem } from "../types/content";

export const primaryNavigation = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
] as const satisfies readonly NavigationItem[];
