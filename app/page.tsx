import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

// Temporary: a preview of the design tokens, replaced by the real home page in
// a later slice. Kept out of search results until then.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
};

const typeScale = [
  {
    token: "display",
    className: "text-display",
    sample: "A habit worth carrying forward.",
  },
  {
    token: "headline",
    className: "text-headline",
    sample: "Everyday spending. Every way you pay.",
  },
  {
    token: "title",
    className: "text-title",
    sample: "Your credit cards, all accounted for.",
  },
  {
    token: "card-title",
    className: "text-card-title",
    sample: "Set your limits. Keep your freedom.",
  },
  {
    token: "lede",
    className: "text-lede",
    sample: "Track cash, bank accounts, and credit cards together.",
  },
  {
    token: "eyebrow",
    className: "text-eyebrow",
    sample: "Caps Money Manager",
  },
  {
    token: "body",
    className: "text-body",
    sample:
      "Caps is a local-first money manager for wallets, bank accounts, credit cards, loans, budgets, and daily transactions. No ads, no data selling, and no bank logins.",
  },
  {
    token: "small",
    className: "text-small",
    sample: "Free to download. Caps Pro is an optional upgrade.",
  },
  {
    token: "caption",
    className: "text-caption",
    sample:
      "Google Play and the Google Play logo are trademarks of Google LLC.",
  },
];

const colors = [
  { token: "surface", className: "bg-surface" },
  { token: "surface-alt", className: "bg-surface-alt" },
  { token: "surface-raised", className: "bg-surface-raised" },
  { token: "ink", className: "bg-ink" },
  { token: "ink-2", className: "bg-ink-2" },
  { token: "ink-3", className: "bg-ink-3" },
  { token: "line", className: "bg-line" },
  { token: "action", className: "bg-action" },
  { token: "focus", className: "bg-focus" },
];

export default function StylePreview() {
  return (
    <>
      <section className="py-24 text-center md:py-30 lg:py-36">
        <Container size="text">
          <p className="text-eyebrow">{site.caps.name}</p>
          <h1 className="mt-3 text-display">A habit worth carrying forward.</h1>
          <p className="mx-auto mt-6 max-w-measure text-lede text-ink-2">
            Built for clear, private money tracking.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={site.caps.url}>Explore Caps</ButtonLink>
            <a href={site.caps.googlePlay} className="underline">
              View on Google Play
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-surface-alt py-24 md:py-30 lg:py-36">
        <Container>
          <h2 className="text-headline">Type scale</h2>
          <ul className="mt-12 space-y-10">
            {typeScale.map(({ token, className, sample }) => (
              <li key={token}>
                <p className="text-caption text-ink-2">{token}</p>
                <p className={`mt-2 max-w-measure ${className}`}>{sample}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 md:py-30 lg:py-36">
        <Container>
          <h2 className="text-headline">Color</h2>
          <ul className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {colors.map(({ token, className }) => (
              <li key={token}>
                <div
                  className={`aspect-square rounded-card border border-line ${className}`}
                />
                <p className="mt-3 text-small text-ink-2">{token}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
