import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SiteLink } from "@/components/ui/site-link";
import { contactPage } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: contactPage.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro title={contactPage.title} lede={contactPage.lede} />

      <section className="pb-24 md:pb-30">
        <Container size="text">
          <ul className="grid gap-3 md:grid-cols-2">
            {contactPage.channels.map((channel) => (
              <li
                key={channel.email}
                className="rounded-card bg-surface-alt p-8 md:p-10"
              >
                <h2 className="text-card-title">{channel.title}</h2>
                <p className="mt-3 text-ink-2">{channel.text}</p>
                <p className="mt-6">
                  <SiteLink
                    href={`mailto:${channel.email}`}
                    className="text-lede underline"
                  >
                    {channel.email}
                  </SiteLink>
                </p>
                {channel.links && (
                  <ul className="mt-6 space-y-1 text-small">
                    {channel.links.map((link) => (
                      <li key={link.href}>
                        <SiteLink
                          href={link.href}
                          className="inline-flex min-h-6 items-center text-ink-2 underline"
                        >
                          {link.label}
                        </SiteLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-title">Elsewhere</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {contactPage.elsewhere.map((item) => (
              <li
                key={item.href}
                className="grid gap-1 py-4 md:grid-cols-3 md:gap-6"
              >
                <span className="text-ink-2">{item.label}</span>
                <SiteLink href={item.href} className="underline md:col-span-2">
                  {item.detail}
                </SiteLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
