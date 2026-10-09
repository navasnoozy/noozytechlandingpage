# 0007: The canonical address is https://noozytech.com

Status: Accepted
Date: 2026-10-09

## Context

A site that answers at several addresses (with and without www, over http and https, at Vercel's own address) splits its search signals unless one is chosen. Which one makes no SEO difference. Vercel suggests www for routing flexibility, but fully supports the bare domain. The bare domain is the address used everywhere else: in email, on the Caps site and on Instagram.

## Decision

- The canonical address is `https://noozytech.com`: no www, no trailing slash, all lowercase.
- `www.noozytech.com`, `http://` and the production `*.vercel.app` address all redirect permanently to it.
- `metadataBase`, canonical tags, the sitemap, structured data and internal links all use it.

## Consequences

- In Cloudflare, the bare domain uses the A record Vercel provides, with the proxy off ("DNS only").
- Changing the address later means updating every place listed above at once, and adding redirects from the old address.
