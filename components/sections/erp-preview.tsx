import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SiteLink } from "@/components/ui/site-link";
import { erpPreview } from "@/content/home";

/** The ERP on the home page: short, clearly second to Caps, in the page's one dark band (decision 0006). */
export function ErpPreview() {
  return (
    <section
      aria-labelledby="erp-heading"
      className="band-dark py-24 md:py-30 lg:py-36"
    >
      <Container size="text" className="text-center">
        <p className="text-eyebrow">{erpPreview.eyebrow}</p>
        <h2 id="erp-heading" className="mt-3 text-headline">
          {erpPreview.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-measure text-lede text-ink-2">
          {erpPreview.lede}
        </p>

        <ul className="mt-16 grid gap-10 text-start md:grid-cols-3 md:gap-8">
          {erpPreview.modules.map((module) => (
            <li key={module.title} className="border-t border-line pt-6">
              <h3 className="text-card-title">{module.title}</h3>
              <p className="mt-3 text-ink-2">{module.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink href={erpPreview.earlyAccess.href}>
            {erpPreview.earlyAccess.label}
          </ButtonLink>
          <SiteLink href={erpPreview.more.href} className="underline">
            {erpPreview.more.label}
          </SiteLink>
        </div>
      </Container>
    </section>
  );
}
