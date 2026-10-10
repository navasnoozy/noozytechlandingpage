# Launch checklist

Everything that must be true before noozytech.com goes live. Items marked **Owner** need Navas, because they involve accounts, money or DNS.

## Vercel

- [ ] **Owner:** decide on the Vercel plan. Vercel's Hobby plan is for non-commercial personal use only, and a company site that advertises products is commercial use; Pro was $20 per member per month in October 2026. The same applies to the Caps website project. (October 2026: the owner chose to stay on the current plan for now.)
- [x] **Owner:** give the Vercel connector access to the team, and Vercel's GitHub app access to the repository. Done 2026-10-10.
- [x] The project `noozytech` (team "noozytech's projects") deploys from GitHub, with `main` as the production branch. First deployment 2026-10-10.

## Security

- [ ] Run the Next.js security release planned for 14 October 2026, or anything later. It fixes two critical and one high-severity vulnerability. **Owner:** update the Caps website too, since it also runs on Next.js.

## Email

- [ ] **Owner:** create contact@noozytech.com in Zoho Mail, as a mailbox or an alias, and test sending and receiving.
- [ ] **Owner:** add a DMARC record in Cloudflare (start with `p=none` and a reporting address), and check that Zoho's DKIM record is in place.

## Domain

- [x] Add noozytech.com and www.noozytech.com to the Vercel project. www redirects permanently (308) to noozytech.com ([decision 0007](../decisions/0007-canonical-address.md)). Done 2026-10-10.
- [ ] **Owner:** in Cloudflare DNS, add these records, each with the proxy off ("DNS only", grey cloud). These are the values Vercel recommended on 2026-10-10:

  | Type | Name | Value |
  |---|---|---|
  | A | `@` | `216.198.79.1` |
  | A | `@` | `64.29.17.1` |
  | CNAME | `www` | `db0a955da7ba0297.vercel-dns-017.com` |

- [ ] Once noozytech.com serves the site, redirect the `noozytech.vercel.app` address to it permanently (a host-based redirect in `next.config.ts`).
- [ ] Check with `curl -I` that http → https, www → the bare domain, and the `*.vercel.app` address → noozytech.com are all permanent redirects.
- [ ] Cloudflare's managed robots.txt stays off.

## Content

- [ ] No `[NEED` anywhere on the site.
- [ ] **Owner:** approve the legal name, the privacy notice and the terms, including the two policy decisions in them: email retention (two years) and response time (30 days). See [legal](../content/legal.md).
- [ ] **Owner:** approve the founder story and photo.
- [ ] **Owner:** use `public/brand/noozytech-avatar-1080.png` as the Instagram profile picture, so the profile matches the site.
- [x] Caps screenshots show no iPhone status bar.
- [x] The Google Play link is a text button ("Get it on Google Play") without Google's logo, and the trademark line is in the footer. If the official badge is used later, download it from Google and follow its badge guidelines.

## Measurement

- [ ] **Owner:** decide on analytics. The recommendation is Vercel Web Analytics, which sets no cookies and needs no banner but must be listed in the privacy notice, or no analytics at all.

## Search

- [ ] **Owner:** add a Domain property for noozytech.com in Google Search Console, verified with a DNS TXT record in Cloudflare. It covers caps.noozytech.com too. Submit https://noozytech.com/sitemap.xml.
- [ ] Bing Webmaster Tools: import the sites from Search Console.
- [ ] The home page passes the Rich Results Test and the Schema Markup Validator with no errors.
- [ ] Share previews look right: LinkedIn Post Inspector, and a test message in WhatsApp.
- [ ] The IndexNow key file is in place. Notify IndexNow after launch.

## The Caps website and app (in their own repositories)

- [ ] caps.noozytech.com structured data:
  - The publisher becomes `{"@id": "https://noozytech.com/#organization", "name": "NoOzyTech", "url": "https://noozytech.com/"}`.
  - The app gets `"@id": "https://caps.noozytech.com/#app"`.
  - Add a WebSite node named "Caps Money Manager".
- [ ] caps.noozytech.com: add a visible "Made by NoOzyTech" link to https://noozytech.com.
- [ ] Caps app: change "Operated by NoozyTech" to "NoOzyTech" in the next release.

## After launch

- [ ] Run Lighthouse on the live site, and check Core Web Vitals in Search Console once data arrives.
- [ ] Watch Search Console's indexing and Generative AI reports, and Bing's AI Performance report.
