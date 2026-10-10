# Design principles

How the site looks and feels: calm, clear and premium, the way Apple presents its products. These are the rules behind every layout decision. Values live in [tokens](tokens.md), and motion rules in [motion](motion.md).

## What "Apple-like" means here

Not copying Apple's look. Copying its discipline.

1. **The product is the hero.** The interface steps back so content and products stand out.
2. **Typography carries the hierarchy.** One typeface, two weights. Big, confident headlines and calm, readable text.
3. **One idea per section.** A headline, a sentence or two, at most two actions, and one real visual.
4. **Space is structure.** Generous space between sections, tight grouping within them.
5. **Flat and quiet.** Sections are separated by background tone, not borders, shadows or decoration.
6. **The interface is neutral. Color comes from the products,** through their screenshots and logos.
7. **Only real things.** Real screenshots, real facts, real people. Nothing invented, nothing stock.
8. **Motion explains or responds. It never decorates.**
9. **Every detail is finished:** focus states, text selection, dark mode, 320 px screens, headline line breaks.
10. **Fast and accessible by construction**, not through later fixes.

## Layout

- **Hero:** centered. One plain headline says what NoOzyTech makes and for whom, and it's readable on the first frame. Nielsen Norman Group found that people spend about 57% of their viewing time above the fold.
- **Sections:** alternate the `surface` and `surface-alt` backgrounds, with at most one dark band on a light page.
- **Section headers:** centered for statements. Left-aligned, with a link on the right, for galleries.
- **Products side by side:** Apple's home-page tiles. Two tiles per row with 12 px gaps, the copy centered at the top and the product image at the bottom.
- **Text width:** paragraphs are never wider than the `measure` token.
- **Navigation:** one sticky bar with the logo and at most four links, nothing else. Below 834 px the links collapse into a menu button.
- **Footer:** `surface-alt`, small text, links in columns that stack on small screens. It includes the copyright line and the Google Play trademark line.

## Typography

- Headlines at weight 600; text and buttons at 400. Never the thin weights (100–300): they look elegant in mockups and weak on real screens.
- Headlines tight, text open. See the letter-spacing column in [tokens](tokens.md).
- Balance headline lines with `text-wrap: balance`. Avoid a single word on the last line of a paragraph (`text-wrap: pretty`, or a non-breaking space).
- The only label allowed above a headline is a product name (an "eyebrow", as Apple does). No small all-caps labels over every section.

## Color

- Neutral surfaces (white, light gray, black, dark gray) and near-black text.
- **Primary action:** a filled pill button, one per view. Everything else is a text link.
- The brand and the interface are monochrome. Color comes only from product imagery (see [brand](brand.md)).
- Light and dark mode follow the visitor's system setting. Product images get a version for each mode where it matters; Caps has both light and dark themes.

## Images

- Real product screenshots only, never mock interfaces drawn with boxes.
- **Caps is Android-only. Never show it in an iPhone frame or with the iPhone status bar.** Use frameless screenshots with rounded corners, or a plain, unbranded phone outline.
- No stock photos, 3D blobs, abstract gradients or AI-generated illustrations.
- People: only a real photo of the founder, if one is used.

## Details that make it feel finished

- A visible, consistent focus ring on every interactive element.
- Text selection, caret and link underlines styled to match the palette.
- Hover effects only on devices with a mouse or trackpad, and press feedback on touch.
- No layout shift while images and fonts load.
- Works at 320 px wide and at 200% zoom.
- Headline line breaks checked at every breakpoint.

## The "AI look" to avoid

These are signs of a generic, machine-made site. None of them appear anywhere.

- Purple or blue gradients, gradient text, glowing blobs, mesh backgrounds.
- Glass effects anywhere except the navigation bar.
- Emoji as icons, or an icon in a circle on every card.
- A row of three identical cards with the same soft shadow.
- Small all-caps labels above every heading, or 01 / 02 / 03 numbering on things that aren't steps.
- Big statistics in the hero, walls of logos, invented testimonials.
- Everything fading in on scroll, parallax, scroll hijacking, carousels that move by themselves.
- An arrow on every link.
- Black backgrounds everywhere, or thin font weights, to look "premium".
- The copy patterns listed in [voice and copy](../content/voice-and-copy.md).

## Sources

- **Measured** from apple.com's live CSS on 2026-10-09: the home page, the iPhone 18 Pro and Apple Pay pages, and the global navigation and footer.
- **Guidance** from Apple's Human Interface Guidelines, Nielsen Norman Group, Vercel's Web Interface Guidelines, Emil Kowalski, Refactoring UI and Butterick's Practical Typography.
- **Design skills** from Anthropic (frontend-design), Vercel (web-design-guidelines), Paul Bakaus (impeccable) and Addy Osmani (web-quality-skills).
