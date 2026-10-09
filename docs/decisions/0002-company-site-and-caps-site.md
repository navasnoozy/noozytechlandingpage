# 0002: The company site and the Caps site each have one job

Status: Accepted
Date: 2026-10-09

## Context

caps.noozytech.com is live and built to rank for Caps searches. The owner wants noozytech.com to show clearly that Caps Money Manager is a NoOzyTech product. Google treats each hostname as its own site, and two pages aimed at the same searches compete with each other.

## Decision

- **caps.noozytech.com owns the app:** features, FAQ, privacy and support. It's the page that should rank for Caps searches.
- **noozytech.com owns the company:** who NoOzyTech is, the founder, contact details and the ERP.
- **noozytech.com still features Caps prominently,** in a home page section and a footer link:
  - The section shows the name, a short pitch, real screenshots, the Google Play badge and a link to caps.noozytech.com.
  - It says plainly that NoOzyTech makes Caps.
- **There's no indexable Caps page on noozytech.com.** `noozytech.com/caps` permanently redirects to caps.noozytech.com, as an address that's easy to share.
- **Both sites declare the relationship in structured data, with shared IDs:** the company is `https://noozytech.com/#organization`, and Caps is `https://caps.noozytech.com/#app`.
- **caps.noozytech.com gets a visible "Made by NoOzyTech" link** back to noozytech.com.

## Consequences

- Caps keeps one strong page for its searches, and the company site stays about the company.
- The Caps text on this site stays short, so it doesn't duplicate the Caps site.
- The Caps website needs a small update, its structured data and a link back. This is tracked in the [launch checklist](../checklists/launch.md).
