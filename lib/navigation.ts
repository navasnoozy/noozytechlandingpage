import { site } from "@/lib/site";

export type NavLink = { label: string; href: string };

/**
 * The main navigation: at most four links (docs/design/principles.md).
 * Caps links to its own site, which is the home of Caps online
 * (docs/decisions/0002-company-site-and-caps-site.md).
 */
export const mainNav: NavLink[] = [
  { label: "Caps", href: site.caps.url },
  { label: "Fire & Safety ERP", href: "/fire-safety-erp" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Products",
    links: [
      { label: site.caps.name, href: site.caps.url },
      { label: "Caps on Google Play", href: site.caps.googlePlay },
      { label: "Fire & Safety ERP", href: "/fire-safety-erp" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Instagram", href: site.profiles.instagram },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
