import { site } from "@/lib/site";

/*
 * Structured data (docs/engineering/seo.md). The @id values are shared with
 * caps.noozytech.com, so search engines connect the company and its app.
 * Never change them. Mark up only what's visible on the page, and never copy
 * Google Play ratings into it.
 */

export const ids = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  founder: `${site.url}/#founder`,
  caps: `${site.caps.url}/#app`,
} as const;

/** The home page graph: the company, this website, and Caps. */
export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ids.organization,
        name: site.name,
        alternateName: site.alternateName,
        url: `${site.url}/`,
        logo: `${site.url}/brand/noozytech-icon-512.png`,
        foundingDate: String(site.foundingYear),
        address: { "@type": "PostalAddress", addressCountry: site.country },
        email: site.email.company,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "general inquiries",
            email: site.email.company,
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: site.email.caps,
            productSupported: site.caps.name,
          },
        ],
        founder: {
          "@type": "Person",
          "@id": ids.founder,
          name: site.founder.name,
          sameAs: [site.founder.linkedin],
        },
        sameAs: [site.profiles.instagram, site.profiles.googlePlayDeveloper],
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: `${site.url}/`,
        name: site.name,
        publisher: { "@id": ids.organization },
      },
      {
        "@type": "MobileApplication",
        "@id": ids.caps,
        name: site.caps.name,
        url: `${site.caps.url}/`,
        operatingSystem: "Android",
        applicationCategory: "FinanceApplication",
        publisher: { "@id": ids.organization },
        sameAs: site.caps.googlePlay,
      },
    ],
  };
}
