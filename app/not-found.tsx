import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

// Next.js returns a real 404 status and adds noindex automatically.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container size="text" className="py-24 text-center md:py-30 lg:py-36">
      <h1 className="text-headline">This page doesn’t exist.</h1>
      <p className="mx-auto mt-6 max-w-measure text-lede text-ink-2">
        The link may be out of date, or the address may have a typo.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <ButtonLink href="/">Go to the home page</ButtonLink>
        <a href={site.caps.url} className="underline">
          Explore Caps
        </a>
      </div>
    </Container>
  );
}
