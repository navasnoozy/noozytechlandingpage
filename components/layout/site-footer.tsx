import { Container } from "@/components/ui/container";
import { SiteLink } from "@/components/ui/site-link";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-surface-alt text-caption text-ink-2">
      <Container size="text" className="py-8">
        {/* Required wherever the Google Play badge appears (docs/content/legal.md). */}
        <p className="border-b border-line pb-4">
          Google Play and the Google Play logo are trademarks of Google LLC.
        </p>

        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 md:grid-cols-3"
        >
          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="font-semibold text-ink">{group.title}</h2>
              <ul className="mt-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    {/* min-h-6 keeps every link a 24 px target (WCAG 2.5.8). */}
                    <SiteLink
                      href={link.href}
                      className="inline-flex min-h-6 items-center hover:text-ink hover:underline"
                    >
                      {link.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line pt-4">
          <p>
            Copyright © {site.foundingYear} {site.name}. All rights reserved.
          </p>
          <p>India</p>
        </div>
      </Container>
    </footer>
  );
}
