# Performance

Speed is part of the design. Google uses page experience in ranking, and slow pages lose visitors before they see anything.

## Budgets

Hard limits: a change that breaks one isn't done.

| Measure | Limit | Target |
|---|---|---|
| Largest Contentful Paint (LCP) | 2.5 s | under 1.5 s |
| Interaction to Next Paint (INP) | 200 ms | under 100 ms |
| Cumulative Layout Shift (CLS) | 0.1 | 0 |
| Lighthouse on mobile: Performance, Accessibility, Best Practices, SEO | 95 each | 100 each |
| JavaScript on the home page, compressed | 150 kB | as little as possible |
| Home page weight on first load | 1 MB | under 500 kB |

The Core Web Vitals limits are Google's "good" thresholds, measured at the 75th percentile of real visits.

## Images

- Always use the Next.js `Image` component. It resizes images for each screen.
- Turn on AVIF in `next.config` (`images.formats`), with WebP as the fallback. By default Next.js serves only WebP.
- Always give a width and height (or `fill` inside a sized box), so nothing jumps while loading.
- Set `sizes` on responsive images. Without it, browsers download the largest version.
- The hero image loads eagerly with high fetch priority. Everything below the first screen loads lazily, which is the default.
- No text inside images, apart from app screenshots. Text should be real text.
- Source files at most twice the largest size they're shown at. Compress PNG screenshots before committing.
- SVG for logos and icons.

## Fonts

- The typeface is set in [decision 0003](../decisions/0003-typeface.md).
- At most one font family, ideally variable, loaded with `next/font`, subset to Latin, with `display: swap`.
- Never load fonts from an external CDN at runtime.

## JavaScript

- Server Components by default, so most pages ship almost no component JavaScript.
- No third-party scripts by default: no tag managers, chat widgets or social media embeds.
- Analytics, if added, loads after the page is interactive.
- Interactive parts below the first screen load with `next/dynamic` only when needed.
- Import from a package's specific entry point, not a barrel file that pulls in everything.

## Animation

- Animate only `transform` and `opacity`. They don't trigger layout.
- Never use `transition: all`.
- No scroll event listeners for effects. Use CSS scroll-driven animations or `IntersectionObserver`.
- Full rules in [motion](../design/motion.md).

## Video

Not planned for v1. If added later: muted, `playsinline`, a poster image, under 2 MB, a visible pause button, and no autoplay when the visitor prefers reduced motion.

## Measuring

- **Lab:** Lighthouse in Chrome DevTools (mobile, slow 4G) on a production build or a preview URL, never the dev server.
- **Field:** PageSpeed Insights and Search Console once there's traffic, and Vercel Speed Insights if enabled.
- Measure after every change that adds images, fonts, scripts or animation.
