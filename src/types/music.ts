import type { ImageMetadata } from "astro";

export type ReleaseStatus = "unannounced" | "announced" | "released";
export type ReleaseType = "single" | "ep" | "album";
export type ReleaseComposition = "title-stage" | "split-stage" | "immersive";
export type MusicPlatform =
  | "spotify"
  | "apple-music"
  | "youtube-music"
  | "youtube"
  | "soundcloud"
  | "other";
export type MotionIntensity = "still" | "restrained" | "expressive";
export type EffectModuleId = "grain" | "distortion" | "chromatic-shift";

export interface ArtistIdentity {
  name: string;
  philosophy: string;
  description: string;
}

export interface PlatformLink {
  platform: MusicPlatform;
  label: string;
  href: string;
}

export interface ReleaseArtwork {
  src: ImageMetadata;
  alt: string;
}

export interface AudiovisualResource {
  kind: "audio" | "video";
  label: string;
  href: string;
}

export interface VisualThemeTokens {
  background: string;
  foreground: string;
  accent: string;
  muted: string;
  displayFont: string;
  bodyFont: string;
}

export interface MotionProfile {
  intensity: MotionIntensity;
  durationScale: number;
  respectsReducedMotion: true;
}

export interface EffectModuleConfig {
  id: EffectModuleId;
  enabled: boolean;
  intensity: number;
}

export interface ReleaseUniverse {
  id: string;
  composition: ReleaseComposition;
  theme: VisualThemeTokens;
  motion: MotionProfile;
  effects: readonly EffectModuleConfig[];
}

export interface Release {
  slug: string;
  title: string;
  type: ReleaseType | null;
  status: ReleaseStatus;
  releaseDate: string | null;
  description: string | null;
  artwork: ReleaseArtwork | null;
  platformLinks: readonly PlatformLink[];
  audiovisual: readonly AudiovisualResource[];
  universe: ReleaseUniverse | null;
}

export type LyricIntensity = "quiet" | "standard" | "strong";

export interface LyricCue {
  id: string;
  text: string;
  startTime: number | null;
  endTime: number | null;
  intensity?: LyricIntensity;
  timingSource: "automatic" | "manual" | null;
  verification: "unmarked" | "unverified" | "verified";
}

export interface AmbientCue {
  id: string;
  startTime: number;
  endTime: number | null;
  effect: "rain" | "warmth" | "reflection" | "depth" | "color";
  intensity: number;
}
