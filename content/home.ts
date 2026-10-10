import type { StaticImageData } from "next/image";

import capsBudget from "@/assets/images/caps/caps-budget.png";
import capsCreditCard from "@/assets/images/caps/caps-credit-card.png";
import capsHome from "@/assets/images/caps/caps-home.png";
import capsIncomeReport from "@/assets/images/caps/caps-income-report.png";
import capsLoans from "@/assets/images/caps/caps-loans.png";
import { site } from "@/lib/site";

/*
 * Home page copy. Every fact comes from docs/product/; the Caps headlines are
 * the approved Play Store copy (docs/product/caps-money-manager.md).
 */

export type Screenshot = { src: StaticImageData; alt: string };

export const hero = {
  headline: `${site.tagline}.`,
  lede: "We make software for people and businesses that takes fewer steps, needs no manual, and never sells your data.",
};

export const capsIntro = {
  eyebrow: site.caps.name,
  headline: "A habit worth carrying forward.",
  lede: "Our money manager for Android. Track cash, bank accounts, credit cards and loans together, with no ads.",
  note: "Free on Google Play, with an optional Caps Pro upgrade.",
  screens: {
    home: {
      src: capsHome,
      alt: "Caps home screen showing a total balance across wallets, with this month’s income and expenses",
    },
    creditCard: {
      src: capsCreditCard,
      alt: "Caps credit card screen showing the amount due, the outstanding balance and available credit",
    },
    budget: {
      src: capsBudget,
      alt: "Caps grocery budget showing ₹8,000 spent of ₹12,000, with a safe amount to spend per day",
    },
  } satisfies Record<string, Screenshot>,
};

export const capsFeatures: {
  title: string;
  text: string;
  note?: string;
  screen: Screenshot;
}[] = [
  {
    title: "Your credit cards, all accounted for.",
    text: "Balances, bills, and available credit.",
    note: "Part of Caps Pro.",
    screen: capsIntro.screens.creditCard,
  },
  {
    title: "Set your limits. Keep your freedom.",
    text: "Plan your spending with budgets by category.",
    screen: capsIntro.screens.budget,
  },
  {
    title: "A little tracking. A lot of perspective.",
    text: "Understand your income, source by source.",
    screen: {
      src: capsIncomeReport,
      alt: "Caps income report breaking income down by source: freelance work, salary and investments",
    },
  },
  {
    title: "What you owe. What you’re owed.",
    text: "Loans, repayments, and collections.",
    screen: {
      src: capsLoans,
      alt: "Caps loans screen for one contact, showing ₹2,000 owed to you across a lent and a borrowed amount",
    },
  },
];

/** The ERP is in development: future tense, at most three modules (docs/product/fire-safety-erp.md). */
export const erpPreview = {
  eyebrow: "Fire & Safety ERP · In development",
  headline: "An enterprise solution for fire & safety companies.",
  lede: "We’re building one system for projects, maintenance contracts and compliance, shaped around how fire & safety companies work.",
  modules: [
    {
      title: "Projects",
      text: "From enquiry and estimate to installation, testing and handover.",
    },
    {
      title: "Maintenance and service",
      text: "Planned visits with checklists, breakdown calls, and service reports signed on site.",
    },
    {
      title: "Compliance",
      text: "Equipment records, open defects and certificates for every building.",
    },
  ],
  earlyAccess: {
    label: "Request early access",
    href: `mailto:${site.email.company}?subject=${encodeURIComponent("Fire & Safety ERP early access")}`,
  },
  more: { label: "More about the ERP", href: "/fire-safety-erp" },
};

/** Navas's own words, from "What every NoOzyTech product must be" in docs/product/company.md. */
export const principles = {
  headline: "What every NoOzyTech product must be.",
  items: [
    {
      title: "Efficient",
      text: "It does the job with the fewest steps and the least waiting.",
    },
    {
      title: "Elegant",
      text: "Nothing on the screen that doesn’t need to be there.",
    },
    { title: "Intuitive", text: "People understand it without a manual." },
    {
      title: "Honest",
      text: "No ads, no selling of personal data, no fake features or numbers.",
    },
  ],
};

export const founder = {
  headline: "Started with a habit.",
  paragraphs: [
    `${site.name} was founded in India in ${site.foundingYear} by ${site.founder.name}, who believes people should understand technology and use it well in their own lives.`,
    "Caps began the same way: writing down daily expenses after starting work for the first time. The habit stuck, and it became an app.",
  ],
  link: { label: `About ${site.name}`, href: "/about" },
};

export const contact = {
  headline: "Get in touch.",
  channels: [
    { label: "Company, partnerships and press", email: site.email.company },
    { label: "Caps Money Manager support", email: site.email.caps },
  ],
};

export const capsPrivacy = {
  headline: "No ads. No data selling. No bank logins.",
  points: [
    {
      title: "Stored on your phone",
      text: "Your records live on your phone first, in an encrypted database.",
    },
    {
      title: "Imports stay local",
      text: "Files you import are read on your phone, never uploaded.",
    },
    {
      title: "Yours to delete",
      text: "Delete your account any time, in the app or on the web.",
    },
  ],
  policyLink: "Read the Caps privacy policy",
};
