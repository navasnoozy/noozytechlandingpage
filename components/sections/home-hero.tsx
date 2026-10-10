import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SiteLink } from "@/components/ui/site-link";
import { hero } from "@/content/home";
import { site } from "@/lib/site";

// The headline is the page's Largest Contentful Paint: it never animates in
// (docs/design/motion.md).
export function HomeHero() {
  return (
    <section className="py-24 text-center md:py-30 lg:py-36">
      <Container size="text">
        <h1 className="text-display">{hero.headline}</h1>
        <p className="mx-auto mt-6 max-w-measure text-lede text-ink-2">
          {hero.lede}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={site.caps.url}>Explore Caps</ButtonLink>
          <SiteLink href="/fire-safety-erp" className="underline">
            Fire & Safety ERP
          </SiteLink>
        </div>
      </Container>
    </section>
  );
}
