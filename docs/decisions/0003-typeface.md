# 0003: Inter is the only typeface

Status: Accepted
Date: 2026-10-09

## Context

Apple's websites use SF Pro, but its license only covers mockups of interfaces for Apple platforms, not websites. This site needs a typeface that feels as clear and neutral as SF Pro, looks the same on every device (Caps users are on Android), and costs little to load. The Caps app already uses Inter.

## Decision

- Inter, as a variable font with optical sizes, which give text and display shapes from one file. Self-hosted through `next/font`.
- Weights 400 and 600 only, Latin characters only.

## Options considered

- **The system font stack (`system-ui`):** nothing to download, and real SF Pro on Apple devices. Rejected because it shows Roboto on Android and Segoe UI on Windows, so the brand looks different on each device, and letter spacing can't be tuned for one typeface.
- **SF Pro, self-hosted:** its license doesn't allow it.
- **Geist:** the default for new Next.js projects, so it's strongly associated with template sites.
- **Paid typefaces such as Söhne or Neue Haas Grotesk:** beautiful, but a licensing cost and commitment that's too early for a new company.

## Consequences

- One font download. Its size is measured at scaffold, and it must fit the [performance budget](../engineering/performance.md).
- Using the same typeface on the website and in the Caps app ties the brand together.
- Inter is very common, and paired with gradients and template layouts it's part of the generic "AI look". This site's character has to come from craft: spacing, scale, real product imagery, restraint, and the logo.
