import { SOCIAL_LINKS } from "@/lib/site";

/**
 * Vertikale Social-Icon-Leiste am rechten Bildschirmrand (wie XD-Entwurf):
 * Instagram · Pinterest · Facebook · Houzz. Ab Tablet sichtbar –
 * auf dem Smartphone übernimmt die MobileStickyBar.
 */
function Icon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
  };
  switch (name) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "pinterest":
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.85 6.36 9.3-.09-.79-.17-2 .03-2.86.18-.78 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.42 1.81-2.42.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1 .5 1.81 1.48 1.81 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.33 0 .86.33 1.78.74 2.28.08.1.09.19.07.29-.08.33-.25 1-.28 1.14-.05.19-.15.23-.34.14-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.47 0 6.16 2.47 6.16 5.77 0 3.45-2.17 6.22-5.19 6.22-1.01 0-1.97-.53-2.3-1.15l-.62 2.38c-.23.86-.83 1.94-1.24 2.6.94.29 1.92.44 2.96.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common}>
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
        </svg>
      );
    case "houzz":
      return (
        <svg {...common}>
          <path d="M12 2 5 6v16h5v-6h4v6h5V6z" />
        </svg>
      );
    default:
      return null;
  }
}

export function FloatingCta() {
  return (
    <div className="fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-foreground/70 transition-colors hover:text-primary"
        >
          <Icon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
