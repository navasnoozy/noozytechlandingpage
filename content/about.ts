import { site } from "@/lib/site";

/*
 * About page copy. The mission is Navas's text from docs/product/company.md,
 * lightly edited for grammar; the personal belief stays private (see the
 * publishing note there).
 */

export const about = {
  title: "About NoOzyTech",
  description: `${site.name} is a software company founded in India in ${site.foundingYear} by ${site.founder.name}. We make Caps Money Manager and are building an ERP for fire & safety companies.`,
  lede: "Technology is part of everyday life. People deserve software that helps them use it well.",
  mission: {
    headline: "Why we exist",
    paragraphs: [
      "Technology is now part of everyday life, and people deserve technology that helps them use it well. NoOzyTech builds software for people and businesses.",
      "We believe solving a problem isn’t enough. We solve it in the most efficient, elegant and intuitive way, so it feels simple to use. And we stay honest about what our products do.",
    ],
  },
  founder: {
    headline: "The founder",
    name: site.founder.name,
    paragraphs: [
      "Navas is a technology enthusiast who loves exploring new tech, and believes people should understand technology and use it well in their own lives.",
      "Navas began tracking daily expenses after starting work for the first time. The habit stuck, and it became Caps Money Manager.",
    ],
    linkedin: {
      label: `${site.founder.name} on LinkedIn`,
      href: site.founder.linkedin,
    },
  },
  facts: {
    headline: "Company facts",
    rows: [
      { term: "Name", detail: site.name },
      { term: "Founded", detail: String(site.foundingYear) },
      { term: "Based in", detail: "India" },
      { term: "Founder", detail: site.founder.name },
      {
        term: "Products",
        detail: `${site.caps.name} (Android, on Google Play) and Fire & Safety ERP (in development)`,
      },
      {
        term: "Email",
        detail: site.email.company,
        href: `mailto:${site.email.company}`,
      },
      { term: "Website", detail: "noozytech.com", href: site.url },
    ] as { term: string; detail: string; href?: string }[],
  },
};

export const contactPage = {
  title: "Contact NoOzyTech",
  description: `Email ${site.email.company} for the company, partnerships, press and ERP early access, or ${site.email.caps} for help with Caps Money Manager.`,
  lede: "Email is the best way to reach us. Pick the address that fits.",
  channels: [
    {
      title: "The company",
      text: "Partnerships, press, Fire & Safety ERP early access, and anything else.",
      email: site.email.company,
    },
    {
      title: "Caps Money Manager",
      text: "Help with the app, your account or Caps Pro.",
      email: site.email.caps,
      links: [
        { label: "Caps privacy policy", href: `${site.caps.url}/privacy` },
        {
          label: "Delete a Caps account",
          href: `${site.caps.url}/account/delete`,
        },
      ],
    },
  ],
  elsewhere: [
    { label: "Instagram", detail: "@noozytech", href: site.profiles.instagram },
    {
      label: "LinkedIn",
      detail: site.founder.name,
      href: site.founder.linkedin,
    },
  ],
};
