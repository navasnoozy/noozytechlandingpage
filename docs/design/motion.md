# Motion

Motion explains or responds. It never decorates. Values live in [tokens](tokens.md).

## When things move

- **One authored moment per page:** the first product imagery entering. It's the only choreographed animation. On the home page, the Caps phones rise into view (the `reveal` class in `app/globals.css`).
- **The hero headline is visible on the first frame.** Never fade it in. It's usually the page's Largest Contentful Paint, and hiding it delays both the visitor and that measurement. The authored moment animates the product imagery instead.
- **Sections may reveal once** as they scroll into view: a short rise and fade, for the whole group at once or with a short stagger. Not every paragraph, card or image.
- **Responses to the visitor:** hover, press and menus. Quick and quiet.
- Nothing else moves.

## How things move

| Moment | Duration | Easing | Notes |
|---|---|---|---|
| Button press | `duration-press` | `ease-out` | Scale to 0.97 |
| Hover | `duration-hover` | `ease-out` | Color and underline only |
| Menu open and close | `duration-menu` | `ease-in-out` | |
| Larger panels | `duration-panel` | `ease-in-out` | |
| Section reveal | `duration-reveal` | `ease-out` | Rise by `reveal-distance` and fade in, with `stagger` between items |

- Animate only `transform` and `opacity`.
- Never `transition: all`; list the properties.
- Leaving is faster than arriving, about two-thirds of the time.
- Never animate from `scale(0)`. Start from 0.95 or more, together with a fade.
- No bounce or elastic easing.
- Motion can be interrupted: a new action takes over smoothly from wherever the old one was.
- Hover effects apply only under `@media (hover: hover) and (pointer: fine)`.

## Never

- Scroll hijacking: the page always scrolls at the visitor's speed.
- Parallax.
- Carousels or sliders that move on their own.
- An animated headline that delays reading the first screen.
- Effects that follow the cursor.
- Loops longer than 5 seconds without a pause button.

## Reduced motion, and no JavaScript

- With `prefers-reduced-motion: reduce`, movement becomes a short fade (200 ms or less), or the end state appears straight away.
- Content is visible without JavaScript. Reveals are layered on top and are never needed to see the content.
- Scroll reveals use CSS scroll-driven animations (`animation-timeline: view()`) inside `@supports` and a `prefers-reduced-motion: no-preference` query. Browsers without support show the content immediately. No scroll event listeners.

## Translucent navigation

The navigation bar is the only glass surface: an 80% opaque background with a 20 px blur. It turns solid with `prefers-reduced-transparency: reduce`, and where `backdrop-filter` isn't supported.
