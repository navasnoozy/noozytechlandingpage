import { Container } from "@/components/ui/container";
import type { LegalDocument as LegalDocumentData } from "@/content/legal";

/** A legal page: plain headings and readable text at the comfortable line length. */
export function LegalDocument({ document }: { document: LegalDocumentData }) {
  return (
    <article className="py-24 md:py-30">
      <Container size="text">
        <div className="mx-auto max-w-measure">
          <h1 className="text-headline">{document.title}</h1>
          <p className="mt-6 text-lede text-ink-2">{document.lede}</p>
          <p className="mt-4 text-small text-ink-2">
            Effective {document.effectiveDate}
          </p>

          {document.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="text-card-title">{section.heading}</h2>
              <div className="mt-4 space-y-4 [&_li]:mt-2 [&_ul]:list-disc [&_ul]:ps-6">
                {section.body.map((block, index) =>
                  typeof block === "string" ? (
                    <p key={index}>{block}</p>
                  ) : (
                    <div key={index}>{block}</div>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
