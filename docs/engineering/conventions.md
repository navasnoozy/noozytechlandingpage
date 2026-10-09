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
- Next.js 16 changed several APIs. Check the official docs for the installed version before relying on memory. Changes that matter here:
  - `export const ensureStatic = 'navigation'` in the root layout (new in 16.4) makes the build fail if a route stops being static.
  - On the hero image, use `preload` or `fetchPriority="high"`. The `priority` prop is deprecated.
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

Created in the scaffold slice. The planned layout:

```
app/            Routes, layouts and metadata files (sitemap, robots, icons, OG images)
components/
  ui/           Small building blocks: Button, Container, Section
  sections/     Page sections: Hero, CapsShowcase, ErpPreview
content/        Page copy and product facts as typed data
lib/            Helpers: site config, metadata, structured data
public/         Static files: images, badges
docs/           These docs
```

- Site-wide facts (name, URL, emails, profile links) live in one config file in `lib/`. Never repeat them as literals in components.
- Page copy lives in `content/` as typed data, so it's reviewed in one place and stays in line with `docs/product/`.

## Styling

- Tailwind utilities that use the design tokens from the global stylesheet. No arbitrary values such as `text-[37px]`. If a value is missing, add a token and document it in [tokens](../design/tokens.md).
- No inline styles and no CSS-in-JS libraries.
- Dark mode follows the visitor's system setting.
- Prefer logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`) over left and right, so a right-to-left language can be added later without rework.

## Links and images

- Internal links use the Next.js `Link` component. External links are plain `<a>` tags and open in the same tab.
- Images always use the Next.js `Image` component, with width, height and alt text. Details in [performance](performance.md).

## Dependencies

- Every new package needs a reason: something it does that the platform can't. Prefer CSS and browser features, such as scroll-driven animations and view transitions, over libraries.
- No UI kits or component libraries. The design is custom and small.

## Quality gates

Lint, type-check and a production build must all pass before every commit. The exact commands go in AGENTS.md once the app is scaffolded.

## Git

- `main` is production: every push to `main` deploys to noozytech.com.
- One branch per slice. Each branch gets its own Vercel preview URL.
- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `perf:`.
- Small commits that each do one thing.

## Secrets

The site needs none at launch. If one is ever needed, store it in Vercel's environment variables and list its name, never its value, in `.env.example`.
