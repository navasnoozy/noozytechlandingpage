import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/*
 * Everything is open to every crawler, including AI search and training
 * crawlers (docs/engineering/seo.md: blocking training crawlers is the
 * owner's call).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
