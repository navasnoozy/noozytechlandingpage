# 0005: The brand name is spelled NoOzyTech

Status: Accepted
Date: 2026-10-09

## Context

The owner chose the spelling NoOzyTech, with a capital O in the middle. Spell-checkers, people and AI tools tend to "correct" it to NoozyTech or Noozytech. The Caps app ("Operated by NoozyTech") and the structured data on caps.noozytech.com still say NoozyTech.

## Decision

- Visible text always says **NoOzyTech**.
- Lowercase only in the domain and in email addresses.
- Structured data uses `"name": "NoOzyTech"` and lists `"NoozyTech"` as an `alternateName`.

## Consequences

- Search engines ignore capitalization when matching names, so this doesn't affect how the site is found.
- The logo and wordmark use this spelling.
- For consistency, the Caps app's "Operated by" line and the publisher name on caps.noozytech.com should change in their next releases. This is tracked in the [launch checklist](../checklists/launch.md).
