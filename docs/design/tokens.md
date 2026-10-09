# Design tokens

The values every component uses. When a value changes, change it here and in the global stylesheet together, never inside a component.

- **[M]** marks values measured from apple.com's live CSS on 2026-10-09.
- **[R]** marks values recommended for this site.
- "Start" values get tuned by eye during the build.

## Typeface

Inter, a variable font with optical sizes ([decision 0003](../decisions/0003-typeface.md)).

Two weights only: 600 for headlines, 400 for text and buttons. Nothing lighter than 400.

## Type scale

Each size has three steps that follow the breakpoints below: large (1069 px and up), medium (735–1068 px) and small (up to 734 px).

| Token | Use | Size in px (large / medium / small) | Line height | Weight | Letter spacing (start) |
|---|---|---|---|---|---|
| `display` | Home page hero headline | 80 / 64 / 48 | 1.05 | 600 | −0.025em |
| `headline` | Section headline | 56 / 48 / 32 | 1.07 | 600 | −0.022em |
| `title` | Smaller headline | 40 / 32 / 28 | 1.1 | 600 | −0.02em |
| `card-title` | Card or tile headline | 28 / 24 / 21 | 1.15 | 600 | −0.016em |
| `lede` | Text under a headline | 21 / 21 / 19 | 1.38 | 400 | −0.012em |
| `eyebrow` | Product name above a headline | 21 / 19 / 17 | 1.2 | 600 | −0.012em |
| `body` | Paragraphs, buttons | 17 | 1.47 | 400 | −0.011em |
| `small` | Navigation, secondary text | 14 | 1.43 | 400 | −0.006em |
| `caption` | Footer, legal text | 12 | 1.33 | 400 | 0 |

- **Sizes and line heights [M]** come from Apple's scale. Body text is 17 px, one step above the browser default, as on apple.com.
- **Letter spacing [R].** Apple's values are tuned for SF Pro. These are starting points for Inter, following its designer's guidance: tighter as the size grows.
- `text-wrap: balance` on headlines, `text-wrap: pretty` on paragraphs.
- Numbers that need to line up (tables, figures) use tabular figures.

## Color

The interface is neutral. Color comes from the products.

### Light mode

| Token | Value | Use | Contrast |
|---|---|---|---|
| `bg` | `#ffffff` | Page background | |
| `bg-alt` | `#f5f5f7` | Alternate sections, tiles, footer | |
| `text` | `#1d1d1f` | Headlines and body text | 16.8 on `bg`, 15.5 on `bg-alt` |
| `text-2` | `#6e6e73` | Secondary text | 5.07 on `bg`, 4.66 on `bg-alt` |
| `text-3` | `#86868b` | Large text (24 px and up) and disabled states only | 3.62 on `bg`: fails for small text |
| `line` | `rgba(0, 0, 0, 0.16)` | Hairlines and borders | |
| `action` | `#1d1d1f` | Primary button background, with a white label | 16.8 |
| `focus` | `#0071e3` | Focus ring | 4.70 on `bg`, 4.31 on `bg-alt` |

### Dark mode

| Token | Value | Use | Contrast |
|---|---|---|---|
| `bg` | `#000000` | Page background | |
| `bg-alt` | `#161617` | Alternate sections, tiles, footer | |
| `raised` | `#1d1d1f` | Cards on `bg` | |
| `text` | `#f5f5f7` | Headlines and body text | 19.3 on `bg`, 16.6 on `bg-alt` |
| `text-2` | `#86868b` | Secondary text | 5.80 on `bg`, 4.99 on `bg-alt`, 4.65 on `raised` |
| `text-3` | `#6e6e73` | Large text and disabled states only | |
| `line` | `rgba(255, 255, 255, 0.24)` | Hairlines and borders | |
| `action` | `#f5f5f7` | Primary button background, with a `#1d1d1f` label | 15.5 |
| `focus` | `#2997ff` | Focus ring | 6.96 on `bg`, 6.00 on `bg-alt` |

- Neutral values are [M]. `action` and `focus` are [R]. Contrast ratios were calculated with the WCAG formula; text needs 4.5, large text and focus rings need 3.
- **There is no brand accent yet.** It comes from the logo work. Until then the primary button is dark on light and light on dark, and links are text-colored with an underline. Blue appears only as the focus ring.
- **The Caps logo colors are for Caps artwork only.** As text on white they fail contrast (coral 3.09, blue 3.88), so never use them for small text.
- **The theme follows the visitor's system setting.** apple.com instead sets light or dark per section; we follow the system because visitors expect it and Caps itself offers light and dark themes.

## Spacing

A 4 px base. Use only these steps: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120 and 144 px.

| Token | Large / medium / small | Source |
|---|---|---|
| `section` padding, top and bottom | 144 / 120 / 96 px | Large and medium [M]. Small [R]: Apple uses 112. |
| `section-compact` padding | 96 / 80 / 64 px | [R] |
| Headline to content | 48 / 40 / 32 px | [M] |
| Between two buttons | 16 px | [R]: Apple uses 17. |

The space between groups is always larger than the space within a group.

## Widths

| Token | Value | Source |
|---|---|---|
| `container` | 1260 px, or 87.5% of the window on smaller screens | [M] |
| `container-text` | 980 px | [M], Apple's classic content width |
| `measure` | 68ch, for paragraphs | [R]: 65–75 characters per line |
| Navigation content | 1024 px | [M] |

## Breakpoints

| Name | Window width | Source |
|---|---|---|
| small | up to 734 px | [M] |
| medium | 735–1068 px | [M] |
| large | 1069–1440 px | [M] |
| xlarge | 1441 px and up | [M] |
| nav | links collapse into a menu below 834 px | [M] |

Mobile first: base styles are for small screens, and wider screens add to them.

## Corner radius

| Token | Value | Use |
|---|---|---|
| `radius-pill` | 9999 px | Buttons and badges |
| `radius-card` | 28 px | Cards, tiles and screenshots |
| `radius-panel` | 18 px | The navigation bar and menus |
| `radius-sm` | 12 px | Small controls |

The values are [M]. For nested corners, the inner radius equals the outer radius minus the padding between them.

## Depth

- No shadows. Separate things with background tone, or a 1 px `line` hairline.
- The navigation bar is the only translucent surface: an 80% opaque background with a 20 px blur [M]. It turns solid when the visitor prefers reduced transparency or the browser can't blur.

## Buttons

| Size | Text | Padding | Height | Source |
|---|---|---|---|---|
| Large | 17 px | 12 × 22 px | 44 px | [M] |
| Small | 14 px | 9 × 16 px | 36 px, with a 44 px touch area | [M], touch area [R] |

## Motion

| Token | Value | Use |
|---|---|---|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Things appearing or leaving, and reveals [R] |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.6, 1)` | Things moving or resizing on screen, such as the menu opening [M] |
| `duration-press` | 100 ms | Button press [R] |
| `duration-hover` | 150 ms | Hover color changes [R] |
| `duration-menu` | 240 ms | Menu open and close [M] |
| `duration-panel` | 320 ms | Larger panels [M] |
| `duration-reveal` | 700 ms | Section reveals [M] |
| `stagger` | 100 ms | Between items in one reveal [R]: Apple uses 150. |
| `reveal-distance` | 24 px | How far a reveal rises [R]: Apple uses 30. |

When and how to use them: [motion](motion.md).
