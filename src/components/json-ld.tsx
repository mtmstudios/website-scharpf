/** Gibt Strukturdaten (schema.org) als JSON-LD-Block aus. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // "<" maskieren, damit Inhalte das Script-Tag nicht schließen können.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
