# NoOzyTech website docs

How the noozytech.com website is designed, written and built. The docs have two kinds of reader, people and the AI agents that help build the site, and both follow the same rules. AI agents enter through [AGENTS.md](../AGENTS.md), which points here.

## How these docs work

- **They're the source of truth.** If the code and the docs disagree, fix one of them in the same change.
- **Facts live in one place.** Company and product facts are only in `product/`. Pages take their facts from there and nowhere else.
- **Rules come with reasons**, so they can be judged rather than followed blindly.
- **Decisions are recorded.** Anything deliberate that someone could "fix" by mistake gets a [decision record](decisions/).
- **Missing facts are marked, never guessed.** Write `[NEED: …]` and ask.

## Map

```
AGENTS.md                      Entry point for AI agents (CLAUDE.md imports it)
docs/
├── README.md                  This file
├── product/                   Facts: what the site may say
│   ├── company.md             NoOzyTech: name, founder, contacts, profiles
│   ├── caps-money-manager.md  Caps: features, plans, links, claims to avoid
│   └── fire-safety-erp.md     The ERP: what may and may not be said yet
├── content/
│   ├── voice-and-copy.md      Tone, headlines, buttons, words to avoid
│   └── legal.md               What the privacy notice and terms must cover
├── design/
│   ├── brand.md               The logo: idea, files, construction, usage
│   ├── principles.md          The Apple-like rules, and the "AI look" to avoid
│   ├── tokens.md              Type, color, spacing, radius and motion values
│   └── motion.md              When things move, and how
├── engineering/
│   ├── conventions.md         Stack, folders, components, Git
│   ├── performance.md         Speed budgets for images, fonts and JavaScript
│   ├── accessibility.md       WCAG 2.2 AA rules and testing
│   └── seo.md                 Site map, metadata, structured data, AI search
├── decisions/                 Why things are the way they are (0001–0009)
└── checklists/
    ├── definition-of-done.md  Before calling any change finished
    └── launch.md              Before going live
```

## Where the rules come from

Researched in October 2026:

- **Apple's marketing site:** values measured from its live CSS, plus Apple's Human Interface Guidelines.
- **Standards and platforms:** Google Search Central, Bing Webmaster Guidelines, web.dev (Core Web Vitals), W3C (WCAG 2.2), and the Next.js and Vercel docs.
- **Design and usability research:** Nielsen Norman Group, Vercel's Web Interface Guidelines, Emil Kowalski, Refactoring UI and Butterick's Practical Typography.
- **Widely used AI agent skills, read for their rules:**
  - Anthropic's frontend-design
  - Vercel's web-design-guidelines and react-best-practices
  - Addy Osmani's web-quality-skills
  - Emil Kowalski's design skills
  - Corey Haines's marketing skills
  - Paul Bakaus's impeccable

## Keeping them current

- Update a doc in the same change that makes it outdated.
- Re-check the version-specific parts (Next.js APIs, Google's rich results, Vercel's plans) before major work: they change every few months.
