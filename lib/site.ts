/**
 * Site-wide facts. Their source is docs/product/company.md and
 * docs/product/caps-money-manager.md: change those first, then this file.
 * Components import from here and never repeat these values as literals.
 */
export const site = {
  name: "NoOzyTech",
  // The older spelling, for structured data only (docs/decisions/0005).
  alternateName: "NoozyTech",
  url: "https://noozytech.com",
  // The home page's title, H1 and description agree on one idea (docs/engineering/seo.md).
  tagline: "Simple, honest software for life and work",
  description:
    "NoOzyTech makes software that feels simple and stays honest. Caps Money Manager tracks your wallets, cards, loans and budgets on Android, with no ads.",
  foundingYear: 2026,
  // Plain-text status lines only: no emblems, logos or numbers
  // (docs/content/registrations.md).
  legalForm: "Sole proprietorship",
  msme: "MSME registered under Udyam Registration (Ministry of Micro, Small and Medium Enterprises)",
  country: "IN",
  founder: {
    name: "Navas CK",
    linkedin: "https://www.linkedin.com/in/navasnoozy/",
  },
  email: {
    company: "contact@noozytech.com",
    caps: "caps@noozytech.com",
  },
  profiles: {
    instagram: "https://www.instagram.com/noozytech/",
    googlePlayDeveloper:
      "https://play.google.com/store/apps/developer?id=noozytech",
  },
  caps: {
    name: "Caps Money Manager",
    url: "https://caps.noozytech.com",
    googlePlay: "https://play.google.com/store/apps/details?id=com.noozy.caps",
  },
} as const;
