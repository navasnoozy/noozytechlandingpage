# Accessibility

Target: WCAG 2.2 level AA on every page, in light and dark mode. It's checked in every change, not added at the end. It's also good design: clear structure, readable text and predictable controls help everyone.

## Structure

- `<html lang="en">`.
- Landmarks: `header`, `nav`, `main` and `footer`, with one `main` per page.
- One `h1` per page. Headings in order. Never skip a level to get a smaller size; style the heading instead.
- A "Skip to content" link as the first focusable element, visible when focused.
- The right element for the job: `<a>` to go somewhere, `<button>` to do something. Never a clickable `div`.

## Keyboard

- Everything works with a keyboard alone, in a logical order.
- Focus is always visible: a clear `:focus-visible` ring, at least 2 px, with 3:1 contrast against its surroundings. Never remove outlines without a replacement.
- Focus never hides under the sticky navigation bar. Set `scroll-padding-top` on the page.
- Menus open with Enter or Space and close with Escape, and focus returns to the button that opened them.

## Color and contrast

- Body text: at least 4.5:1 against its background.
- Large text (24 px, or 18.66 px bold) and UI parts such as borders, icons and focus rings: at least 3:1.
- Check both light and dark mode.
- Text over images needs guaranteed contrast, such as an overlay or a solid area behind it.
- Never use color alone to carry meaning.

## Touch and pointer

- Targets at least 24×24 px, the WCAG minimum. Aim for 44×44 px for main buttons and menu items.
- Hover effects only on devices with real hover (`@media (hover: hover) and (pointer: fine)`), and hover is never the only way to reveal something.

## Images and icons

- Meaningful images get alt text that says what matters in them.
- Decorative images get `alt=""`.
- Logos get the company or product name as alt text.
- Icons next to text inside a button or link get `aria-hidden="true"`. Icon-only buttons get an `aria-label`.

## Motion

- Honor `prefers-reduced-motion`: replace movement with a simple fade, or show the end state.
- Anything that moves on its own for more than 5 seconds gets a pause control.
- Nothing flashes more than 3 times per second.

## Text and zoom

- Never disable zoom: no `maximum-scale` or `user-scalable=no`.
- Pages work at 200% zoom and in a 320 px wide window without sideways scrolling.
- Sizes in `rem`, so they respect the visitor's font size setting.
- Links inside body text are underlined, not only colored.

## Testing every change

1. **Keyboard only:** Tab through everything. Focus is always visible and never gets stuck.
2. **Screen reader:** VoiceOver on macOS or iOS, and TalkBack on Android. Caps users are on Android.
3. **Automated:** Lighthouse and axe DevTools report no violations. These tools catch only some problems, so steps 1 and 2 still matter.
4. **Zoom and width:** zoom to 200%, and check a 320 px wide window.
5. **Reduced motion:** turn it on and check the page still makes sense.
