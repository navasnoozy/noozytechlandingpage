# AGENTS.md

Instructions for AI coding agents working in this repository: Claude Code, Codex, Cursor, GitHub Copilot, Gemini and others. People should start at [docs/README.md](docs/README.md). The same rules apply to them.

## What this is

The company website of **NoOzyTech**, served at https://noozytech.com. It presents two products:

- **Caps Money Manager**: a money manager for Android, live on Google Play, with its own website at https://caps.noozytech.com. This is the featured product.
- **Fire & Safety ERP**: an enterprise solution for fire & safety companies, in development. It gets a short preview only.

What matters, in this order: truthful and clear, fast, accessible, excellent SEO, and a calm, Apple-like look.

## Stack

Next.js 16 (App Router), React, TypeScript, Tailwind CSS 4, pnpm, hosted on Vercel. Every page is generated as static HTML at build time.

The canonical address is `https://noozytech.com`: no www, no trailing slash.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

| Task | Command |
|---|---|
| Install dependencies | `pnpm install` |
| Run locally at http://localhost:3000 | `pnpm dev` |
| Lint | `pnpm lint` |
| Type-check | `pnpm typecheck` |
| Format files | `pnpm format` |
| Production build | `pnpm build` |
| All checks, before every commit | `pnpm check` |

After editing `app/globals.css`, restart `pnpm dev`: the running dev server doesn't pick up changes to that file ([decision 0009](docs/decisions/0009-turbopack-file-cache-off.md)).

## Rules

1. **Take facts only from `docs/product/`.** Never invent numbers, ratings, download counts, prices, dates, features, customers, awards or quotes. If a fact is missing, write `[NEED: what is missing]` and ask.
2. **Spell the brand exactly `NoOzyTech`** in visible text. The capital O is deliberate. See [decision 0005](docs/decisions/0005-brand-name-spelling.md).
3. **Render statically.** Server Components by default. Add `"use client"` only to the smallest component that needs interaction. Pages never fetch data at request time.
4. **Build UI from the design docs and tokens.** No hard-coded colors, font sizes, spacing or durations. Tailwind's default palette and sizes are removed, so only the tokens in `app/globals.css` exist as utilities. Avoid the generic "AI look" listed in the [design principles](docs/design/principles.md).
5. **Meet WCAG 2.2 AA in every change**, not as a later polish step.
6. **Stay inside the performance budgets.** They are limits, not goals.
7. **Give every page a unique title, description and canonical URL.** Add structured data only for content that is visible on the page.
8. **Write copy by the voice guide:** US English, sentence case, specific button labels.
9. **Don't silently reverse a recorded decision.** If one seems wrong, say so and propose a new record in `docs/decisions/`.
10. **Never commit secrets.** No `.env` files except `.env.example`.
11. **Work in small slices.** One topic per change. Run the [definition of done](docs/checklists/definition-of-done.md) before calling anything finished.

## Where to look

| When you are… | Read first |
|---|---|
| writing or changing visible text | [voice and copy](docs/content/voice-and-copy.md), then the matching file in [product](docs/product/) |
| writing the privacy notice or terms | [legal](docs/content/legal.md) |
| mentioning registrations, the legal entity or government schemes | [registrations](docs/content/registrations.md): text only, no emblems or logos, never "approved" or "certified" |
| building or styling UI | [principles](docs/design/principles.md), [tokens](docs/design/tokens.md), [motion](docs/design/motion.md) |
| using the logo or icons | [brand](docs/design/brand.md). The files are generated: never edit them by hand |
| adding a page or route | [SEO](docs/engineering/seo.md), [conventions](docs/engineering/conventions.md) |
| adding images, fonts, video or scripts | [performance](docs/engineering/performance.md) |
| building anything interactive | [accessibility](docs/engineering/accessibility.md) |
| wondering why something is the way it is | [decisions](docs/decisions/) |
| finishing a change | [definition of done](docs/checklists/definition-of-done.md) |
| preparing to go live | [launch checklist](docs/checklists/launch.md) |
