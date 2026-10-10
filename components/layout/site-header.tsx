import Link from "next/link";

import { Wordmark } from "@/components/brand/wordmark";
import { CloseMenuOnNavigate } from "@/components/layout/close-menu-on-navigate";
import { Container } from "@/components/ui/container";
import { SiteLink } from "@/components/ui/site-link";
import { mainNav } from "@/lib/navigation";
import { site } from "@/lib/site";

const MENU_ID = "site-menu";

export function SiteHeader() {
  return (
    <header className="group sticky top-0 z-40 border-b border-line bg-surface supports-[backdrop-filter:blur(0)]:bg-surface/80 supports-[backdrop-filter:blur(0)]:backdrop-blur-nav supports-[backdrop-filter:blur(0)]:backdrop-saturate-180 reduced-transparency:bg-surface reduced-transparency:backdrop-blur-none">
      <Container size="nav" className="flex h-13 items-center justify-between">
        <Link href="/" aria-label={site.name} className="-ms-1 rounded-sm p-1">
          <Wordmark className="h-5 w-auto" />
        </Link>

        <nav aria-label="Main" className="flex items-center">
          <ul className="hidden gap-8 nav:flex">
            {mainNav.map((item) => (
              <li key={item.href}>
                <SiteLink
                  href={item.href}
                  className="text-small text-ink/80 transition-colors duration-(--duration-hover) ease-out hover:text-ink"
                >
                  {item.label}
                </SiteLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            popoverTarget={MENU_ID}
            className="-me-3 inline-flex size-11 items-center justify-center rounded-sm nav:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              viewBox="0 0 18 18"
              className="size-4.5 group-has-[.site-menu:popover-open]:hidden"
              aria-hidden="true"
            >
              <path
                d="M2 6.5h14M2 11.5h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <svg
              viewBox="0 0 18 18"
              className="hidden size-4.5 group-has-[.site-menu:popover-open]:block"
              aria-hidden="true"
            >
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div
            id={MENU_ID}
            popover="auto"
            className="site-menu fixed inset-x-0 top-13 bottom-0 m-0 h-auto w-auto overflow-y-auto bg-surface text-ink nav:hidden"
          >
            <Container size="nav" className="pt-4 pb-12">
              <ul>
                {mainNav.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <SiteLink
                      href={item.href}
                      className="block py-4 text-title"
                    >
                      {item.label}
                    </SiteLink>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </nav>
      </Container>
      <CloseMenuOnNavigate menuId={MENU_ID} />
    </header>
  );
}
