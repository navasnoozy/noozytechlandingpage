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
  headline: "Simple, honest software for life and work.",
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
