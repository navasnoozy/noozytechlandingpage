import { Container } from "@/components/ui/container";
import { principles } from "@/content/home";

/** The four rules every product follows, in the founder's words. */
export function Principles() {
  return (
    <section
      aria-labelledby="principles-heading"
      className="bg-surface-alt py-24 md:py-30 lg:py-36"
    >
      <Container>
        <h2
          id="principles-heading"
          className="mx-auto max-w-text text-center text-headline"
        >
          {principles.headline}
        </h2>
        <ul className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {principles.items.map((item) => (
            <li key={item.title}>
              <h3 className="text-card-title">{item.title}</h3>
              <p className="mt-3 text-ink-2">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
