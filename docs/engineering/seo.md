# SEO

How the site gets found: by search engines, by AI assistants, and through shared links. Checked in October 2026 against Google Search Central, Bing's guidelines and the Next.js 16.4 docs.

## Principles

- **People first.** Google ranks pages that are useful to people. No trick is worth using.
- **One job per page.** Each page has one main topic, and its title, H1 and first paragraph agree on it.
- **Show who's behind the site:** a real founder, real names, real contact details. Google's guidance puts trust first.
- **The same facts everywhere.** The company facts on the About page, the structured data, and the Instagram, LinkedIn and Google Play profiles all say the same thing. This is also what helps AI assistants describe the company correctly.
- **Fast and accessible.** With Core Web Vitals and mobile-first indexing, the performance and accessibility docs are SEO docs too.

## Site map

| Address | Purpose | Main search intent | In the sitemap |
|---|---|---|---|
| `/` | What NoOzyTech is and makes. Caps featured, the ERP previewed. | The brand: "NoOzyTech" | Yes |
| `/about` | The founder, the story, and a company facts block | Who's behind it (trust) | Yes |
| `/contact` | contact@ for the company, caps@ for Caps | Getting in touch | Yes |
| `/fire-safety-erp` | The ERP, in development, with early access | "ERP for fire & safety companies" | Yes |
| `/privacy` | Privacy notice for this website | Trust | Yes |
| `/terms` | Terms of use for this website | Trust | Yes |
| `/caps` | Permanent redirect to https://caps.noozytech.com | An easy address to share | No |
| Any unknown address | A real 404 page, linking to the home page, Caps and contact | | No |

Later, and only once there's something real to put there: `/press` (logos, a short company description, screenshots), `/journal` (company and ERP topics only; personal finance articles belong on the Caps site), `/accessibility` and `/.well-known/security.txt`. No careers or support pages until they have real content.

## Addresses

- The canonical address is **https://noozytech.com**, with no www and no trailing slash ([decision 0007](../decisions/0007-canonical-address.md)).
- www.noozytech.com, `http://` and the production `*.vercel.app` address all redirect permanently to it.
- Slugs are lowercase words joined by hyphens. A published address never changes without a permanent redirect.
- Vercel marks preview deployments `noindex` automatically. Never attach a custom domain to a preview branch.

## Metadata

Every page exports metadata through the Next.js Metadata API.

- **`metadataBase`:** hard-coded to `https://noozytech.com` in the root layout. Never computed from environment variables, which can pick the wrong host.
- **Title:** unique and descriptive, about 50–60 characters. The root layout's template adds " – NoOzyTech". The home page title starts with the brand.
- **Description:** unique, about 150–160 characters, a plain summary that makes people want to click. Google may rewrite it.
- **Canonical:** `alternates.canonical` on every page, set to the page's own address.
- **Social cards:** Open Graph title, description and image, plus an X card of type `summary_large_image`.
- **Watch the merge.** Metadata merges shallowly. A canonical set in the root layout leaks into every page that doesn't set its own. A page's `openGraph` object replaces the root's completely rather than adding to it.
- Never use `nosnippet` or `max-snippet`. They stop search results and AI answers from quoting the page.

## Keeping pages static

Put `export const ensureStatic = 'navigation'` in the root layout (new in Next.js 16.4). The build then fails if anything makes a route render on every request, instead of the site quietly getting slower.

## Structured data

Write JSON-LD as a plain `<script type="application/ld+json">` in the page, not with `next/script`, and escape `<` as `<`.

The home page carries one graph that describes the company, the website and Caps:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://noozytech.com/#organization",
      "name": "NoOzyTech",
      "alternateName": "NoozyTech",
      "url": "https://noozytech.com/",
      "logo": "https://noozytech.com/<logo file: PNG, at least 112×112 px>",
      "foundingDate": "2026",
      "address": { "@type": "PostalAddress", "addressCountry": "IN" },
      "email": "contact@noozytech.com",
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "general inquiries", "email": "contact@noozytech.com" },
        { "@type": "ContactPoint", "contactType": "customer support", "email": "caps@noozytech.com", "productSupported": "Caps Money Manager" }
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://noozytech.com/#founder",
        "name": "Navas CK",
        "sameAs": ["https://www.linkedin.com/in/navasnoozy/"]
      },
      "sameAs": [
        "https://www.instagram.com/noozytech/",
        "https://play.google.com/store/apps/developer?id=noozytech"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://noozytech.com/#website",
      "url": "https://noozytech.com/",
      "name": "NoOzyTech",
      "publisher": { "@id": "https://noozytech.com/#organization" }
    },
    {
      "@type": "MobileApplication",
      "@id": "https://caps.noozytech.com/#app",
      "name": "Caps Money Manager",
      "url": "https://caps.noozytech.com/",
      "operatingSystem": "Android",
      "applicationCategory": "FinanceApplication",
      "publisher": { "@id": "https://noozytech.com/#organization" },
      "sameAs": "https://play.google.com/store/apps/details?id=com.noozy.caps"
    }
  ]
}
```

- Add `legalName` once the exact registered name is confirmed (see [company facts](../product/company.md)).
- The `@id` values are shared with caps.noozytech.com, which should use the same ones. Never change them.
- `sameAs` lists only profiles that are actively kept up.
- **Mark up only what's visible on the page.**
- **Never copy the Google Play rating or reviews into the markup.** Google forbids marking up reviews collected on other sites.
- **No FAQ or HowTo markup to get rich results.** Google stopped showing both: FAQ on 7 May 2026, HowTo in 2023. A visible FAQ is still fine for people.
- Check every change with Google's Rich Results Test and the Schema Markup Validator.

## Files Next.js generates

| File | What it does |
|---|---|
| `app/sitemap.ts` | Lists every indexable page with its absolute canonical address and an honest last-modified date. Google ignores priority and change frequency, so leave them out. |
| `app/robots.ts` | Allows everything and points to the sitemap. See "AI search" below. |
| `opengraph-image` | A 1200×630 share image with alt text, generated at build time. One for the site, plus one per page where it helps. |
| `favicon.ico`, `icon.png`, `apple-icon.png` | `favicon.ico` must sit at the root of `app/`. Add a PNG icon of at least 48 px. An SVG icon may be added, but never on its own. |
| `app/not-found.tsx` | Returns a real 404 status, and Next.js adds `noindex`. Never redirect unknown addresses to the home page. |
| `manifest.ts` | Optional. No effect on search. |

## On the page

- One `h1` that says what the page is about.
- Links are real `<a href>` links with descriptive text. Every page is linked from at least one other page; the navigation and footer take care of this.
- Images have descriptive alt text and file names (`caps-budget-screen.png`, not `IMG_2041.png`), placed near the text they illustrate.
- The mobile page has the same content as the desktop page.

## Caps and caps.noozytech.com

Decided in [decision 0002](../decisions/0002-company-site-and-caps-site.md):

- caps.noozytech.com is the one page that should rank for Caps searches.
- This site presents Caps on the home page and in the footer, and `/caps` redirects there. There's no indexable Caps page here, because a second one would compete with the first.
- caps.noozytech.com should use the same `@id` values and link back to noozytech.com. This is tracked in the [launch checklist](../checklists/launch.md).

## AI search

- Google's AI Overviews and AI Mode use normal ranking. Google's own guide says no special files, markup or content chunking are needed. Good SEO is the AI strategy.
- What helps assistants: indexable pages, one topic per address, key facts near the top of the page, and the same names and facts across this site, the Caps site and the company profiles.
- **AI crawlers:** robots.txt allows all of them.
  - Crawlers that decide whether the site appears in AI answers: `OAI-SearchBot` (ChatGPT search), `Claude-SearchBot` (Claude), `PerplexityBot` (Perplexity), and Googlebot (AI Overviews).
  - Crawlers used only to train AI models: `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended` and `CCBot`. They're allowed too. Blocking them is the owner's call: it wouldn't affect search, but AI models would learn less about NoOzyTech.
- Keep Cloudflare's managed robots.txt switched off. When it's on, it adds rules that block AI crawlers.
- **`llms.txt`** is only a proposal. Google doesn't use it, and AI crawlers rarely request it. Treat it as optional and low priority, and if it's ever added, generate it from the same facts as the pages.

## After launch

- **Google Search Console:** add a Domain property for noozytech.com, verified with a DNS TXT record in Cloudflare. It covers caps.noozytech.com too. Submit the sitemap.
- **Bing Webmaster Tools:** import the sites from Search Console. Bing's index also powers other search engines and Microsoft Copilot.
- **IndexNow:** put the key file in `public/` and send changed addresses to api.indexnow.org after each deploy. It reaches Bing and others, but not Google. Cloudflare's automatic version doesn't work with "DNS only" records.
- **Watch:** Search Console's indexing, Core Web Vitals and Generative AI reports, and Bing's AI Performance report.

## Sources

Checked on 2026-10-09:

- **Google Search Central:** the SEO starter guide, helpful content, title links, snippets, structured data for organizations and software apps, site names, favicons, the robots meta tag, the AI optimization guide, and the Search updates log.
- **Others:** Bing Webmaster Guidelines, the Next.js 16.4 docs and release notes, Vercel's documentation on domains, preview deployments and fair use, and IndexNow.
