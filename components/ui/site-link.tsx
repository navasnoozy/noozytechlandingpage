import Link from "next/link";
import type { ComponentProps } from "react";

type SiteLinkProps = { href: string } & Omit<ComponentProps<"a">, "href">;

/**
 * Internal paths use the Next.js Link (prefetching, client-side navigation).
 * Everything else (other sites, mailto:) is a plain anchor that opens in the
 * same tab (docs/engineering/conventions.md).
 */
export function SiteLink({ href, ...props }: SiteLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href} {...props} />;
  }
  return <a href={href} {...props} />;
}
