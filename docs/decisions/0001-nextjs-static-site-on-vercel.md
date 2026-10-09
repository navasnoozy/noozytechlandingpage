# 0001: Next.js static site on Vercel

Status: Accepted
Date: 2026-10-09

## Context

The site has to rank well in search and load fast everywhere, including on slower mobile networks. Its content changes a few times a month at most. The owner already hosts caps.noozytech.com on Vercel.

## Decision

- Build with Next.js (App Router) and TypeScript.
- Generate every page as static HTML at build time.
- Host on Vercel: `main` deploys to production, and every other branch to a preview URL.

## Consequences

- Search engines and visitors get complete HTML straight away, served from a CDN near them.
- There are no servers or databases to run or secure.
- Anything that differs per visitor, such as forms or personalization, needs a separate service or a recorded exception. None is planned for v1.
- Every content change goes through a commit and a deploy, so it's reviewed and versioned.
