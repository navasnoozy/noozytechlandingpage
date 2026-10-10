import type { ReactNode } from "react";

import { SiteLink } from "@/components/ui/site-link";
import { site } from "@/lib/site";

/*
 * Privacy notice and terms. Written to docs/content/legal.md. They're drafts
 * until the owner approves them before launch (docs/checklists/launch.md);
 * set the effective date to the approval date then.
 */

export type LegalSection = { heading: string; body: ReactNode[] };
export type LegalDocument = {
  title: string;
  description: string;
  lede: string;
  effectiveDate: string;
  sections: LegalSection[];
};

const email = (
  <SiteLink href={`mailto:${site.email.company}`} className="underline">
    {site.email.company}
  </SiteLink>
);

export const privacy: LegalDocument = {
  title: "Privacy notice",
  description:
    "How noozytech.com handles your information: no cookies, analytics or tracking. It covers hosting logs and emails you send us. Caps has its own policy.",
  lede: "How noozytech.com handles your information. It’s short, because the site collects very little.",
  effectiveDate: "October 10, 2026",
  sections: [
    {
      heading: "Who we are",
      body: [
        <>
          This website is run by {site.name}, a software company in India. You
          can reach us at {email}.
        </>,
      ],
    },
    {
      heading: "What this notice covers",
      body: [
        <>
          This notice covers noozytech.com only. {site.caps.name} has its own
          privacy policy at{" "}
          <SiteLink href={`${site.caps.url}/privacy`} className="underline">
            caps.noozytech.com/privacy
          </SiteLink>
          .
        </>,
      ],
    },
    {
      heading: "What we collect, and why",
      body: [
        "Visits: our hosting provider, Vercel, processes technical information such as your IP address, browser and the pages you request. This is needed to deliver the site and protect it from abuse, which is our legitimate interest. We don’t use it to identify you.",
        "Emails: if you email us, we receive your email address, your name if you include it, and your message. We use them only to reply to you and deal with what you asked.",
        "This site doesn’t use cookies, analytics, advertising or tracking of any kind.",
      ],
    },
    {
      heading: "Who receives it",
      body: [
        <ul key="providers">
          <li>Vercel Inc. hosts the site, on servers around the world.</li>
          <li>Cloudflare, Inc. runs our domain name system.</li>
          <li>Zoho Corporation provides our email, stored in India.</li>
        </ul>,
        "We don’t sell your information or share it with anyone else, unless the law requires it.",
      ],
    },
    {
      heading: "Transfers outside India",
      body: [
        "Some of these providers process information outside India and the European Union. They do so under their own data protection terms, which include safeguards such as the European Union’s standard contractual clauses.",
      ],
    },
    {
      heading: "How long we keep it",
      body: [
        "Vercel keeps hosting logs for a short period under its own settings, and we keep no copies.",
        "We keep emails as long as we need them to deal with your message, and delete them within two years of our last exchange.",
      ],
    },
    {
      heading: "Your rights",
      body: [
        <>
          You can ask to see, correct or delete your information, or object to
          how we use it. Email {email} and we’ll respond within 30 days.
        </>,
        "You can also complain to a data protection authority: in India, the Data Protection Board of India; in the European Union, the authority where you live.",
      ],
    },
    {
      heading: "Do Not Track",
      body: [
        "This site doesn’t track visitors, so every visit is treated the same way, whether or not your browser sends a Do Not Track signal.",
      ],
    },
    {
      heading: "Children",
      body: [
        "This site isn’t aimed at children under 18, and we don’t knowingly collect their information.",
      ],
    },
    {
      heading: "Changes to this notice",
      body: [
        "If we change this notice, we’ll update this page and the effective date at the top.",
      ],
    },
  ],
};

export const terms: LegalDocument = {
  title: "Terms of use",
  description:
    "The terms for using noozytech.com, the website of NoOzyTech: acceptable use, intellectual property, links, warranties, liability and governing law.",
  lede: "The rules for using noozytech.com.",
  effectiveDate: "October 10, 2026",
  sections: [
    {
      heading: "Who we are",
      body: [
        <>
          noozytech.com is run by {site.name}, a software company in India. You
          can reach us at {email}.
        </>,
      ],
    },
    {
      heading: "Using this site",
      body: [
        "You may use this site for personal and business purposes. Don’t misuse it: don’t try to break or overload it, gain unauthorized access to it, or use it for anything unlawful.",
      ],
    },
    {
      heading: "Our products",
      body: [
        `This site describes ${site.caps.name} and the Fire & Safety ERP. Caps has its own terms of use inside the app. The Fire & Safety ERP is in development: what we describe are plans, not promises, and they may change.`,
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        `The ${site.name} and Caps names and logos, and this site’s content and design, belong to ${site.name}. Don’t copy or reuse them without written permission, except to link to us or quote us fairly.`,
        "Google Play and the Google Play logo are trademarks of Google LLC.",
      ],
    },
    {
      heading: "Links to other sites",
      body: [
        "We link to other sites, such as Google Play. We aren’t responsible for their content or practices.",
      ],
    },
    {
      heading: "No warranties",
      body: [
        "We work to keep this site accurate and available, but we provide it as it is, without warranties of any kind, as far as the law allows.",
      ],
    },
    {
      heading: "Liability",
      body: [
        `As far as the law allows, ${site.name} isn’t liable for any indirect or consequential loss from using this site. Nothing in these terms limits liability that the law doesn’t allow us to limit.`,
      ],
    },
    {
      heading: "Governing law",
      body: ["These terms are governed by the laws of India."],
    },
    {
      heading: "Changes to these terms",
      body: [
        "We may update these terms. The effective date at the top shows when they last changed.",
      ],
    },
  ],
};
