# Legal pages

What the privacy notice and the terms must cover. This summarizes research from October 2026. It isn't legal advice, so have the final texts checked before launch.

## Status

Both pages are drafted in `content/legal.tsx` (October 10, 2026) and need the owner's approval before launch. Two lines in the privacy notice are policy decisions, not facts:

- emails are deleted within two years of the last exchange
- requests about personal information get a response within 30 days

When the texts are approved, set their effective date to the approval date.

## Privacy notice (`/privacy`)

The notice covers this website only. The Caps app has its own policy at https://caps.noozytech.com/privacy, and the notice links to it.

Write it to meet the strictest rules that could apply: the EU's GDPR, India's DPDP Act and California's CalOPPA. It must say:

- **Who runs the site:** NoOzyTech, its legal name, its country, and contact@noozytech.com.
- **What data is collected, why, and on what legal basis**, for each kind of data. For this site that's very little: the hosting provider's server logs, emails people send, and analytics if enabled.
- **Who receives it:** Vercel (hosting), Cloudflare (DNS), Zoho (email), and any analytics provider.
- **Transfers abroad:** any transfers outside India or the EU, and how they're protected.
- **Retention:** how long each kind of data is kept.
- **People's rights:** access, correction, deletion and withdrawing consent; how to use them; and how to complain to a regulator, including India's Data Protection Board.
- **Do Not Track:** how the site responds to "Do Not Track" signals, as CalOPPA requires.
- **Effective date:** shown on the page, and updated whenever the notice changes.

India's DPDP Rules were published in November 2025, and the notice and consent duties start in May 2027. Writing to that standard now avoids a rewrite later.

## Cookies and consent

- The site sets no cookies and loads no trackers, so it needs no cookie banner.
- That rules out Google Analytics, advertising pixels, YouTube embeds, and fonts loaded from Google's servers. `next/font` hosts fonts on the site itself, so it's fine.
- **Vercel Web Analytics**, if used, sets no cookies and keeps no personal data. Disclose it in the privacy notice. Some EU regulators read the consent rules broadly enough to cover cookieless analytics too, so keep it disclosed and minimal.

## Terms (`/terms`)

Short website terms covering:

- who runs the site
- acceptable use
- intellectual property, including the NoOzyTech and Caps names and logos
- links to other sites
- no warranties, and the limits of liability
- governing law: India, unless a lawyer advises otherwise
- contact details and an effective date

The Caps app's own terms stay inside the app.

## Company details on the site

No imprint page is needed, because NoOzyTech isn't established in Germany. Still show the legal name, country and contact email on `/about` or `/contact`.

[NEED: the registered address and registration number, if they should be shown.]

## Third-party marks

Wherever the Google Play badge appears, the footer includes this line: "Google Play and the Google Play logo are trademarks of Google LLC."
