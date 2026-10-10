/**
 * JSON-LD as a plain script tag, as the Next.js docs recommend. "<" is
 * escaped so the data can never close the script tag early.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
