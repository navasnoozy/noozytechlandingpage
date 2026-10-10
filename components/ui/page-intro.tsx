import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";

/** The top of an inner page: one h1, an optional lede, centered (docs/design/principles.md). */
export function PageIntro({
  title,
  lede,
  eyebrow,
  children,
  className = "",
}: {
  title: string;
  lede?: string;
  eyebrow?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-24 text-center md:py-30 ${className}`}>
      <Container size="text">
        {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
        <h1 className={`text-headline ${eyebrow ? "mt-3" : ""}`}>{title}</h1>
        {lede && (
          <p className="mx-auto mt-6 max-w-measure text-lede text-ink-2">
            {lede}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
