import { Principles } from "@/components/sections/principles";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteLink } from "@/components/ui/site-link";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: about.description,
  path: "/about",
});

/*
 * Who's behind NoOzyTech. The facts block matches the structured data and
 * the company's profiles, which helps search engines and AI assistants
 * describe the company correctly (docs/engineering/seo.md).
 */
export default function AboutPage() {
  return (
    <>
      <PageIntro title={about.title} lede={about.lede} />

      <section className="bg-surface-alt py-24 md:py-30">
        <Container size="text">
          <h2 className="text-title">{about.mission.headline}</h2>
          {about.mission.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-measure text-lede">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section className="py-24 md:py-30">
        <Container size="text">
          <h2 className="text-title">{about.founder.headline}</h2>
          <p className="mt-6 text-card-title">{about.founder.name}</p>
          {about.founder.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-measure text-ink-2">
              {paragraph}
            </p>
          ))}
          <p className="mt-6">
            <SiteLink href={about.founder.linkedin.href} className="underline">
              {about.founder.linkedin.label}
            </SiteLink>
          </p>
        </Container>
      </section>

      <Principles />

      <section className="py-24 md:py-30">
        <Container size="text">
          <h2 className="text-title">{about.facts.headline}</h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {about.facts.rows.map((row) => (
              <div
                key={row.term}
                className="grid gap-1 py-4 md:grid-cols-3 md:gap-6"
              >
                <dt className="text-ink-2">{row.term}</dt>
                <dd className="md:col-span-2">
                  {row.href ? (
                    <SiteLink href={row.href} className="underline">
                      {row.detail}
                    </SiteLink>
                  ) : (
                    row.detail
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </>
  );
}
