/**
 * Site-wide facts. Their source is docs/product/company.md and
 * docs/product/caps-money-manager.md: change those first, then this file.
 * Components import from here and never repeat these values as literals.
 */
export const site = {
  name: "NoOzyTech",
  url: "https://noozytech.com",
  foundingYear: 2026,
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
