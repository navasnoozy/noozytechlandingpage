import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Screenshot } from "@/components/ui/screenshot";
import { SiteLink } from "@/components/ui/site-link";
import { capsFeatures, capsIntro, capsPrivacy } from "@/content/home";
import { site } from "@/lib/site";

/**
 * Caps Money Manager on the home page: the introduction, four features and
 * the privacy promises. It introduces Caps and links to its own site, which
 * stays the main page for Caps (docs/decisions/0002).
 */
export function CapsShowcase() {
  const { screens } = capsIntro;

  return (
    <section id="caps" aria-labelledby="caps-heading">
      {/* Introduction. The phones rise from the band's bottom edge, which crops them. */}
      <div className="overflow-hidden bg-surface-alt pt-24 md:pt-30 lg:pt-36">
        <Container size="text" className="text-center">
          <p className="text-eyebrow">{capsIntro.eyebrow}</p>
          <h2 id="caps-heading" className="mt-3 text-headline">
            {capsIntro.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-measure text-lede text-ink-2">
            {capsIntro.lede}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <ButtonLink href={site.caps.googlePlay}>
              Get it on Google Play
            </ButtonLink>
            <SiteLink href={site.caps.url} className="underline">
              Explore Caps
            </SiteLink>
          </div>
          <p className="mt-4 text-small text-ink-2">{capsIntro.note}</p>
        </Container>

        <div className="reveal mt-16 flex h-100 justify-center gap-6 md:h-110 lg:mt-20 lg:h-120">
          <Screenshot
            screen={screens.creditCard}
            sizes="240px"
            className="mt-16 hidden w-60 self-start md:block"
          />
          <Screenshot
            screen={screens.home}
            sizes="(min-width: 735px) 288px, 256px"
            className="w-64 self-start md:w-72"
          />
          <Screenshot
            screen={screens.budget}
            sizes="240px"
            className="mt-16 hidden w-60 self-start md:block"
          />
        </div>
      </div>

      {/* Four features in Apple's two-up tile grid. */}
      <div className="py-24 md:py-30 lg:py-36">
        <Container>
          <ul className="grid gap-3 md:grid-cols-2">
            {capsFeatures.map((feature) => (
              <li
                key={feature.title}
                className="flex h-125 flex-col items-center overflow-hidden rounded-card bg-surface-alt px-6 pt-12 text-center md:h-145"
              >
                <h3 className="max-w-measure text-title">{feature.title}</h3>
                <p className="mt-3 max-w-measure text-lede">{feature.text}</p>
                {feature.note && (
                  <p className="mt-2 text-small text-ink-2">{feature.note}</p>
                )}
                <Screenshot
                  screen={feature.screen}
                  sizes="(min-width: 1069px) 288px, 256px"
                  className="mt-10 w-64 shrink-0 lg:w-72"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Privacy: promises that can be checked (docs/content/voice-and-copy.md). */}
      <div className="bg-surface-alt py-24 md:py-30 lg:py-36">
        <Container size="text">
          <h3 className="text-center text-headline">{capsPrivacy.headline}</h3>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {capsPrivacy.points.map((point) => (
              <li key={point.title}>
                <p className="font-semibold">{point.title}</p>
                <p className="mt-2 text-ink-2">{point.text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center">
            <SiteLink href={`${site.caps.url}/privacy`} className="underline">
              {capsPrivacy.policyLink}
            </SiteLink>
          </p>
        </Container>
      </div>
    </section>
  );
}
