# Definition of done

Go through this before calling any change finished. A change that fails an item isn't done.

## Build

- [ ] Lint, type-check and the production build pass.
- [ ] Every route is still static (the build fails if not, thanks to `ensureStatic`).
- [ ] No new client component and no new dependency without a stated reason.

## Content

- [ ] Every fact matches `docs/product/`. Nothing is invented.
- [ ] No `[NEED` is left on any page.
- [ ] Names are spelled right: NoOzyTech, Caps Money Manager, Caps Pro, Fire & Safety ERP.
- [ ] Copy follows the [voice guide](../content/voice-and-copy.md): US English, sentence case, none of the words to avoid.

## Design

- [ ] Only tokens: no hard-coded colors, sizes or durations.
- [ ] Checked at 320, 390, 800, 1000, 1280 and 1440 px wide.
- [ ] Checked in light and dark mode, and with reduced motion on.
- [ ] None of the "AI look" patterns from the [principles](../design/principles.md).

## Accessibility

- [ ] Keyboard pass: everything reachable, focus always visible, nothing hidden under the navigation bar.
- [ ] Contrast meets AA in both modes.
- [ ] One `h1`, headings in order, correct alt text.
- [ ] Lighthouse and axe DevTools report no violations.

## SEO

- [ ] A new page has a unique title, description and canonical (use `pageMetadata()`), and an entry in `app/sitemap.ts`.
- [ ] A page whose content changed has a new last-modified date in `app/sitemap.ts`.
- [ ] Any structured data validates and describes only visible content.
- [ ] Links use descriptive text.

## Performance

- [ ] Lighthouse on mobile scores 95 or more in all four categories, on a preview URL.
- [ ] Images are sized and compressed and have `sizes`. The hero image isn't lazy.
- [ ] The [budgets](../engineering/performance.md) still hold.

## Docs

- [ ] Any doc this change makes outdated is updated in the same change.
- [ ] A new deliberate choice has a new [decision record](../decisions/).
