import type { NavigationItem } from "../types/site";

export const primaryNavigation = [
  { label: "Inicio", href: "/" },
  { label: "Música", href: "/music" },
] as const satisfies readonly NavigationItem[];
