import type { APIRoute } from "astro";
import { maintenance } from "../data/maintenance";
import { site } from "../data/site";

export const GET: APIRoute = () => {
  const rules = maintenance.enabled
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`;

  return new Response(rules, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
