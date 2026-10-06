import { createFileRoute } from "@tanstack/react-router";
import { Fragment, type ReactNode } from "react";
import { Section } from "@/components/sections";
import text from "@/content/datenschutz.md?raw";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – E. Scharpf GmbH" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der E. Scharpf GmbH, Fritz-Müller-Str. 115, 73730 Esslingen am Neckar.",
      },
      { property: "og:title", content: "Datenschutz – E. Scharpf GmbH" },
      {
        property: "og:description",
        content: "Datenschutzerklärung der E. Scharpf GmbH aus Esslingen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Datenschutz,
});

// Inline: **fett** und [Link](url)
function inline(s: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  const clean = (t: string) => t.replace(/\\([\[\]().-])/g, "$1");
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(clean(s.slice(last, m.index)));
    if (m[1]) out.push(<strong key={i++}>{clean(m[1])}</strong>);
    else
      out.push(
        <a key={i++} href={m[3]} target="_blank" rel="noopener noreferrer" className="break-all text-primary hover:underline">
          {clean(m[2])}
        </a>,
      );
    last = re.lastIndex;
  }
  if (last < s.length) out.push(clean(s.slice(last)));
  return out;
}

function renderMarkdown(md: string) {
  const blocks = md.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((b, i) => {
    const h = /^(#{1,4})\s+(.*)$/.exec(b);
    if (h) {
      const t = h[2].replace(/\\\./g, ".");
      if (h[1].length <= 2)
        return <h2 key={i} className="pt-6 font-display text-2xl font-bold text-foreground">{t}</h2>;
      if (h[1].length === 3)
        return <h3 key={i} className="pt-2 font-display text-xl font-bold text-foreground">{t}</h3>;
      return <h4 key={i} className="font-semibold text-foreground">{t}</h4>;
    }
    if (/^[-*] /.test(b))
      return (
        <ul key={i} className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
          {b.split("\n").map((l, j) => (
            <li key={j}>{inline(l.replace(/^[-*]\s+/, ""))}</li>
          ))}
        </ul>
      );
    return (
      <p key={i} className="text-base leading-relaxed text-muted-foreground">
        {b.split("\n").map((l, j) => (
          <Fragment key={j}>
            {j > 0 && <br />}
            {inline(l)}
          </Fragment>
        ))}
      </p>
    );
  });
}

function Datenschutz() {
  return (
    <div>
      <Section>
        <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl">
          Datenschutzerklärung
        </h1>
        <div className="mt-8 max-w-3xl space-y-4 break-words">{renderMarkdown(text)}</div>
      </Section>
    </div>
  );
}
