import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { erp } from "@/content/erp";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: erp.title,
  description: erp.description,
  path: "/fire-safety-erp",
});

/*
 * The ERP's own page, kept at this address after the product is named
 * (docs/decisions/0006-erp-as-unnamed-preview.md). No product structured
 * data: nothing is released yet.
 */
export default function ErpPage() {
  return (
    <>
      <section className="band-dark py-24 text-center md:py-30 lg:py-36">
        <Container size="text">
          <h1 className="text-headline">{erp.title}</h1>
          <p className="mx-auto mt-4 max-w-measure text-title">{erp.tagline}</p>
          <p className="mt-6 text-ink-2">{erp.status}</p>
          <div className="mt-10">
            <ButtonLink href={erp.earlyAccess.href}>
              {erp.earlyAccess.label}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-30">
        <Container size="text">
          <h2 className="text-title">{erp.audience.headline}</h2>
          <p className="mt-6 max-w-measure text-lede text-ink-2">
            {erp.audience.text}
          </p>
        </Container>
      </section>

      <section className="bg-surface-alt py-24 md:py-30">
        <Container>
          <h2 className="text-center text-title">{erp.modules.headline}</h2>
          <ul className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {erp.modules.items.map((item) => (
              <li key={item.title} className="border-t border-line pt-6">
                <h3 className="text-card-title">{item.title}</h3>
                <p className="mt-3 text-ink-2">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 text-center md:py-30">
        <Container size="text">
          <h2 className="text-title">{erp.closing.headline}</h2>
          <p className="mx-auto mt-6 max-w-measure text-ink-2">
            {erp.closing.text}
          </p>
          <div className="mt-10">
            <ButtonLink href={erp.earlyAccess.href}>
              {erp.earlyAccess.label}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
