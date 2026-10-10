import type { Metadata } from "next";

import { site } from "@/lib/site";

/**
 * Metadata for one page: unique title and description, its own canonical
 * address, and complete social cards. Next.js merges metadata shallowly, so a
 * page's openGraph replaces the layout's whole object; this always returns
 * complete objects (docs/engineering/seo.md).
 *
 * Leave out `title` on the home page: it uses the root layout's default.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: `/${string}`;
}): Metadata {
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      description,
    },
    twitter: {
      card: "summary_large_image",
      description,
    },
  };
}
