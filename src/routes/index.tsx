import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "../assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt=""
            className="h-full w-full object-cover"
            width={1280}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Willkommen
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Etwas
              <span className="text-primary"> Wunderbares</span>
              <br />
              geschaffen
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Eine kleine, aber feine Website. Schlicht, elegant und auf das
              Wesentliche fokussiert.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Los geht's
              </Link>
              <a
                href="#mehr"
                className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 px-8 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-accent"
              >
                Mehr erfahren
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Features */}
      <section id="mehr" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><path d="m4.93 4.93 14.14 14.14m-14.14 0 14.14-14.14"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Einfach</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Reduziert auf das Wesentliche. Kein Schnickschnack, keine Ablenkung.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Elegant</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Durchdachtes Design mit Liebe zum Detail und klaren Linien.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <h3 className="text-lg font-semibold text-card-foreground">Schnell</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Performance, die begeistert. Keine Wartezeiten, sofort da.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
