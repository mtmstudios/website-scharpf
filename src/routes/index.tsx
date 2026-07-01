import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
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
        <div className="grid</parameter>
              </invoke>