import { Container } from "@/components/ui/container";
import { SiteLink } from "@/components/ui/site-link";
import { contact, founder } from "@/content/home";
import { site } from "@/lib/site";

/** Who's behind the company, and how to reach it: the trust signals search engines look for. */
export function FounderContact() {
  return (
    <section className="py-24 md:py-30 lg:py-36">
      <Container className="grid gap-16 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-title">{founder.headline}</h2>
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-measure text-ink-2">
              {paragraph}
            </p>
          ))}
          <p className="mt-6">
            <SiteLink href={founder.link.href} className="underline">
              {founder.link.label}
            </SiteLink>
          </p>
        </div>

        <div>
          <h2 className="text-title">{contact.headline}</h2>
          <ul className="mt-4 space-y-4">
            {contact.channels.map((channel) => (
              <li key={channel.email}>
                <p className="text-ink-2">{channel.label}</p>
                <SiteLink
                  href={`mailto:${channel.email}`}
                  className="underline"
                >
                  {channel.email}
                </SiteLink>
              </li>
            ))}
            <li>
              <p className="text-ink-2">Instagram</p>
              <SiteLink href={site.profiles.instagram} className="underline">
                @noozytech
              </SiteLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
