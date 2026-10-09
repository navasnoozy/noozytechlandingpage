# 0006: The ERP is shown as an unnamed preview, with its own page

Status: Accepted
Date: 2026-10-09

## Context

The fire & safety ERP is in early development. It has no name, no launch date and no released features. Caps is live and is the priority. Buyers of this kind of software search for it in plain terms, such as "ERP for fire safety companies", long before they buy.

## Decision

- **Home page:** a short section, clearly second to Caps. It contains:
  - the label "Fire & Safety ERP · In development"
  - one line describing it as an enterprise solution for fire & safety companies
  - at most three planned capabilities
  - a "Request early access" link
- **Its own page at `/fire-safety-erp`:**
  - what problems the product will solve and what it will cover, always in the future tense
  - the same early-access link
  - the address stays when the product gets a name, and redirects permanently if the product ever moves to its own site
- **Never shown:** dates, prices, customers, the launch country (until approved) or screenshots.

## Consequences

- Nothing on the site can become false when plans change.
- The page can start building search visibility before launch, and early-access emails show real interest.
- When the product gets a name, update the [ERP facts](../product/fire-safety-erp.md) and the page, and write a new decision record.
