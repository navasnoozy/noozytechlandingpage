# 0004: English only, US spelling

Status: Accepted
Date: 2026-10-09

## Context

The owner chose English only for now. The Caps app's text and caps.noozytech.com use US spelling ("color", "organize").

## Decision

- One language, English: `<html lang="en">`.
- US spelling, to match the Caps app and website.
- No translation framework or language switcher in v1.

## Consequences

- Simpler routing and metadata, with no `hreflang` tags.
- Adding Arabic later (for example for the ERP) would need right-to-left layouts. Using logical CSS properties from the start keeps that change small (see [conventions](../engineering/conventions.md)).
