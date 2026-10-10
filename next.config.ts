import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required by `ensureStatic` in app/layout.tsx.
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  images: {
    // AVIF first, WebP as the fallback. Next.js serves only WebP by default.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Off on purpose: with these caches on, edits to app/globals.css were
    // served stale by `next dev` and `next build` (docs/decisions/0009).
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
