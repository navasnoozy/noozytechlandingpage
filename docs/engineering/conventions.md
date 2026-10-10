# Engineering conventions

## Stack

| Part | Choice | Version when chosen (October 2026) |
|---|---|---|
| Framework | Next.js, App Router | 16.4 |
| UI | React Server Components | React 19 |
| Language | TypeScript, strict mode | Pinned at scaffold |
| Styling | Tailwind CSS | 4.3 |
| Package manager | pnpm | Pinned at scaffold |
| Hosting | Vercel | |
| DNS and email | Cloudflare (DNS), Zoho Mail (email) | |

- Exact versions are pinned in `package.json`. Upgrade deliberately, in a change of its own, never as a side effect.
- Install Next.js security releases within a week of their release.
- Next.js 16 changed several APIs. Before writing Next.js code, read the guide for the installed version in `node_modules/next/dist/docs/`. Changes that matter here:
  - `export const ensureStatic = 'navigation'` in the root layout (new in 16.4) makes the build fail if a route stops being static. It needs `cacheComponents`, which is on in `next.config.ts`.
  - On the hero image, use `fetchPriority="high"` or `loading="eager"`. The `priority` prop is deprecated, and the docs prefer these two over `preload`.
  - Route parameters passed to pages, social images, icons and sitemaps are Promises.
  - `middleware` is now called `proxy`.

## Rendering

- Every route is static: built once, served from Vercel's CDN.
- Pages don't read cookies, headers or search params, and never set `dynamic = "force-dynamic"`. Any of these makes a page render on every request.
- After every build, check that the route list shows every route as static.
- Copy and product facts live in the repository, not in an API.

## Components

- Server Components by default. A file gets `"use client"` only when it needs state, effects, event handlers or browser APIs.
- Keep client components small and at the edges of the tree, and pass them only the props they need.
- One component per file. File names in kebab-case (`caps-showcase.tsx`), components in PascalCase (`CapsShowcase`).
- Named exports, except where Next.js requires a default export (pages and layouts).

## Folders

Folders appear as they're needed. The layout:

```
app/            Routes, layouts and metadata files (sitemap, robots, icons, OG images)
assets/         Images that pages import; next/image optimizes them
components/
  brand/        Wordmark and symbol (generated: never edit by hand)
  layout/       Parts of every page: header, footer
  ui/           Small building blocks: ButtonLink, Container, SiteLink
  sections/     Page sections: Hero, CapsShowcase, ErpPreview
content/        Page copy and product facts as typed data
lib/            Helpers: site config, metadata, structured data
public/         Static files: images, badges, brand files
scripts/        Build scripts, such as the brand asset generator
docs/           These docs
```

- Site-wide facts (name, URL, emails, profile links) live in one config file in `lib/`. Never repeat them as literals in components.
- Page copy lives in `content/` as typed data, so it's reviewed in one place and stays in line with `docs/product/`.

## Styling

- Tailwind utilities that use the design tokens from the global stylesheet. No arbitrary values such as `text-[37px]`. If a value is missing, add a token and document it in [tokens](../design/tokens.md).
- No inline styles and no CSS-in-JS libraries.
- Dark mode follows the visitor's system setting.
- **After editing `app/globals.css`, restart `pnpm dev`.** The running dev server doesn't pick up changes to that file, though class changes in components update live ([decision 0009](../decisions/0009-turbopack-file-cache-off.md)).
- Prefer logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) over left and right, so a right-to-left language can be added later without rework.

## Links and images

- Internal links use the Next.js `Link` component. External links are plain `<a>` tags and open in the same tab.
- Images always use the Next.js `Image` component, with width, height and alt text. Details in [performance](performance.md).

## Dependencies

- Every new package needs a reason: something it does that the platform can't. Prefer CSS and browser features, such as scroll-driven animations and view transitions, over libraries.
- No UI kits or component libraries. The design is custom and small.

## Quality gates

Run `pnpm check` before every commit. It runs the linter, the type-checker, the format check and a production build, and all four must pass. The individual commands are listed in AGENTS.md.

## Git

- `main` is production: every push to `main` deploys to noozytech.com.
- One branch per slice. Each branch gets its own Vercel preview URL.
- Vercel: project `noozytech` in the team "noozytech's projects", linked to `navasnoozy/noozytechlandingpage`. Domains: `noozytech.com` (primary) and `www.noozytech.com` (308 redirect to it).
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `perf:`.
- Small commits that each do one thing.

## Secrets

The site needs none at launch. If one is ever needed, store it in Vercel's environment variables and list its name, never its value, in `.env.example`.
