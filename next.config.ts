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
  async redirects() {
    return [
      // An easy address to share. Caps lives on its own site (decision 0002).
      {
        source: "/caps",
        destination: "https://caps.noozytech.com",
        permanent: true,
      },
      // Vercel's production addresses point to the one canonical address
      // (decision 0007). Preview deployments keep their own addresses.
      ...[
        "noozytech.vercel.app",
        "noozytech-noozytech-s-projects.vercel.app",
      ].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://noozytech.com/:path*",
        permanent: true,
      })),
    ];
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
