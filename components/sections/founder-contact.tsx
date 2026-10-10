import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SiteLink } from "@/components/ui/site-link";
import { community, contact, founder } from "@/content/home";
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

        {/* Events we've taken part in: a short row, no detail pages. */}
        <div className="border-t border-line pt-16 md:col-span-2">
          <h2 className="text-title">{community.headline}</h2>
          <ul className="mt-8 space-y-8">
            {community.events.map((event) => (
              <li
                key={event.name}
                className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
              >
                <Image
                  src={event.poster.src}
                  alt={event.poster.alt}
                  sizes="(min-width: 735px) 224px, 192px"
                  className="w-48 shrink-0 rounded-card border border-line md:w-56"
                />
                <div>
                  <h3 className="text-card-title">{event.name}</h3>
                  <p className="mt-2 max-w-measure text-ink-2">{event.text}</p>
                  <p className="mt-2 max-w-measure">{event.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
