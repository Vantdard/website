import type { Release } from "../types/music";

export const releases = [
  {
    slug: "siempre-vuelves",
    title: "Siempre vuelves",
    type: "single",
    status: "announced",
    releaseDate: "2026-10-16",
    description: null,
    artwork: null,
    platformLinks: [],
    audiovisual: [],
    universe: {
      id: "siempre-vuelves",
      composition: "title-stage",
      theme: {
        background: "#09090b",
        foreground: "#f4f2f5",
        accent: "#8f7cff",
        muted: "#aaa4b0",
        displayFont: "var(--font-display)",
        bodyFont: "var(--font-body)",
      },
      motion: {
        intensity: "restrained",
        durationScale: 1,
        respectsReducedMotion: true,
      },
      effects: [],
    },
  },
  {
    slug: "pa-que",
    title: "Pa' qué?",
    type: null,
    status: "unannounced",
    releaseDate: null,
    description: null,
    artwork: null,
    platformLinks: [],
    audiovisual: [],
    universe: null,
  },
  {
    slug: "ya-no-quiero-enamorarme",
    title: "Ya no quiero enamorarme",
    type: null,
    status: "unannounced",
    releaseDate: null,
    description: null,
    artwork: null,
    platformLinks: [],
    audiovisual: [],
    universe: null,
  },
  {
    slug: "solita",
    title: "Solita",
    type: null,
    status: "unannounced",
    releaseDate: null,
    description: null,
    artwork: null,
    platformLinks: [],
    audiovisual: [],
    universe: null,
  },
] as const satisfies readonly Release[];

export const getReleaseBySlug = (slug: string) =>
  releases.find((release) => release.slug === slug);
