import { cn } from "@/lib/utils";

/**
 * Beschrifteter Bild-Platzhalter.
 *
 * Solange keine echten Fotos eingepflegt sind, markiert diese Komponente jede
 * Bildstelle sichtbar und beschreibt, welches Motiv hier später eingesetzt wird.
 * `note` = kurze Beschreibung des benötigten Bildes (Pflichtangabe).
 */
export function PlaceholderImage({
  note,
  className,
  ratio = "landscape",
  src,
}: {
  note: string;
  className?: string;
  ratio?: "landscape" | "portrait" | "square" | "wide";
  src?: string;
}) {
  const ratioClass = {
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
  }[ratio];

  if (src) {
    return (
      <img
        src={src}
        alt={note}
        loading="lazy"
        className={cn(
          "h-full w-full rounded-lg object-cover",
          ratioClass,
          className,
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-border bg-secondary p-6 text-center",
        ratioClass,
        className,
      )}
      role="img"
      aria-label={`Bild-Platzhalter: ${note}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-3 text-primary/70"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
      <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">
        Bild-Platzhalter
      </span>
      <span className="mt-1 max-w-xs text-sm leading-snug text-muted-foreground">
        {note}
      </span>
    </div>
  );
}
