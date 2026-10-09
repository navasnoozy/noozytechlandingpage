# Launch checklist

Everything that must be true before noozytech.com goes live. Items marked **Owner** need Navas, because they involve accounts, money or DNS.

## Vercel

- [ ] **Owner:** move the Vercel team to the Pro plan ($20 per member per month as of October 2026). Vercel's Hobby plan is for non-commercial personal use only, and a company site that advertises products is commercial use. The same applies to the Caps website project.
- [ ] **Owner:** give the Vercel connector access to the team (it currently gets "403 forbidden"), or import the GitHub repository in the Vercel dashboard.
- [ ] The project deploys from GitHub, with `main` as the production branch.

## Security

- [ ] Run the Next.js security release planned for 14 October 2026, or anything later. It fixes two critical and one high-severity vulnerability. **Owner:** update the Caps website too, since it also runs on Next.js.

## Email

- [ ] **Owner:** create contact@noozytech.com in Zoho Mail, as a mailbox or an alias, and test sending and receiving.
- [ ] **Owner:** add a DMARC record in Cloudflare (start with `p=none` and a reporting address), and check that Zoho's DKIM record is in place.

## Domain

- [ ] Add noozytech.com and www.noozytech.com to the Vercel project. www redirects permanently to noozytech.com ([decision 0007](../decisions/0007-canonical-address.md)).
- [ ] **Owner:** in Cloudflare DNS, add the records Vercel shows (usually an A record for the bare domain and a CNAME for www), with the proxy off ("DNS only").
- [ ] Check with `curl -I` that http → https, www → the bare domain, and the `*.vercel.app` address → noozytech.com are all permanent redirects.
- [ ] Cloudflare's managed robots.txt stays off.

## Content

- [ ] No `[NEED` anywhere on the site.
- [ ] **Owner:** approve the legal name, the privacy notice and the terms ([legal](../content/legal.md)).
- [ ] **Owner:** approve the founder story and photo.
- [ ] Caps screenshots show no iPhone status bar.
- [ ] The Google Play badge follows Google's guidelines, and the trademark line is in the footer.

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
