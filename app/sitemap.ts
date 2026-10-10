import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/*
 * Every indexable page, with an honest last-modified date: when a page's
 * content changes, change its date here (docs/checklists/definition-of-done.md).
 * Google ignores priority and change frequency, so they're left out.
 */
const pages: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-10-10" },
  { path: "/about", lastModified: "2026-10-10" },
  { path: "/contact", lastModified: "2026-10-10" },
  { path: "/fire-safety-erp", lastModified: "2026-10-10" },
  { path: "/privacy", lastModified: "2026-10-10" },
  { path: "/terms", lastModified: "2026-10-10" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified }) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
