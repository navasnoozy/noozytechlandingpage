# 0009: Turbopack's file-system cache is off

Status: Accepted
Date: 2026-10-10

## Context

Next.js 16.3 and later cache Turbopack's work on disk by default: for `next dev` in `.next/dev/cache`, and for `next build` in `.next/cache`. Vercel restores `.next/cache` before each build.

While building the navigation, new rules added to `app/globals.css` didn't appear. Both the running dev server and a fresh `next build` served the old stylesheet. Utilities from newly edited components did appear. Deleting `.next` fixed it, and so did turning the cache off. With the cache off, a test rule added between two builds appeared in the second one.

A stale stylesheet in production would be a silent bug, and this site builds in a few seconds anyway.

## Decision

`turbopackFileSystemCacheForDev` and `turbopackFileSystemCacheForBuild` are `false` in `next.config.ts`.

## Consequences

- Every dev session and build compiles from scratch. That takes seconds on a site this size.
- Re-test before turning the cache back on in a later Next.js version: add a rule to `app/globals.css` between two builds and check it reaches the second build's CSS.
