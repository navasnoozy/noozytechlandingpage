import type { ReactNode } from "react";

import { SiteLink } from "@/components/ui/site-link";

/** The primary action: a filled pill, one per view (docs/design/principles.md). */
export function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <SiteLink
      href={href}
      className="inline-flex min-h-11 items-center rounded-pill bg-action px-5.5 py-3 text-on-action transition-[background-color,scale] duration-(--duration-hover) ease-out hover:bg-action/85 active:scale-97"
    >
      {children}
    </SiteLink>
  );
}
