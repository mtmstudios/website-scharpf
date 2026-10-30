import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARBEITSTAG } from "./karriere-arbeitstag.data";
import morgenbesprechung from "@/assets/morgenbesprechung.png.asset.json";

const FOTOS: Record<string, { src: string; alt: string }> = {
  Zimmerer: { src: morgenbesprechung.url, alt: "Morgenbesprechung bei E. Scharpf" },
  Dachdecker: { src: "/fotos/scharpf_dachdecken_01.jpg", alt: "Dachaufbau mit Dämmung und Lattung" },
  Klempner: { src: "/__l5e/assets-v1/0cace228-0a9f-4149-a7c2-db7e5b2e39fd/scharpf_klempner_referenz_3.jpg", alt: "Klempnerarbeiten am Dach im Detail" },
};

export function KarriereArbeitstag() {
  const [gewerk, setGewerk] = useState("Zimmerer");
  const [index, setIndex] = useState(0);
  const stations = ARBEITSTAG[gewerk] ?? [];
  const station = stations[index];
  const foto = FOTOS[gewerk];
  if (!station || !foto) return null;

  return (
    <section className="mt-16" aria-labelledby="drei-handwerke">
      <h2 id="drei-handwerke" className="font-display text-3xl font-bold text-foreground sm:text-4xl">Drei Handwerke. Unterschiedliche Aufgaben. Ein gemeinsames Ergebnis.</h2>
      <span className="mt-4 block h-1 w-24 bg-primary" aria-hidden="true" />
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">Ob Holz, Dachziegel oder Blech: Entdecke, wie unsere drei Gewerke arbeiten, was sie unterscheidet und wie sie gemeinsam ein Bauprojekt voranbringen.</p>

      <h3 className="mt-10 font-display text-2xl font-bold text-foreground">Ein Tag bei E. Scharpf</h3>
      <p className="mt-3 max-w-3xl text-muted-foreground">Vom ersten Kaffee bis zum Feierabend nehmen wir dich mit durch einen typischen Arbeitstag unserer Zimmerer, Dachdecker und Klempner.</p>
      <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Gewerk auswählen">
        {Object.keys(ARBEITSTAG).map((name) => (
          <Button key={name} variant={name === gewerk ? "default" : "outline"} aria-pressed={name === gewerk} onClick={() => { setGewerk(name); setIndex(0); }}>{name}</Button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
        <img src={foto.src} alt={foto.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
        <div className="flex min-w-0 flex-col justify-between">
          <div role="status" aria-live="polite" aria-atomic="true" className="min-h-48">
            <p className="font-display text-2xl font-bold text-primary">{station.time}{station.time !== "Abschluss" && " Uhr"}</p>
            <h4 className="mt-4 font-display text-2xl font-bold text-foreground">{station.title}</h4>
            <p className="mt-3 leading-relaxed text-muted-foreground">{station.text}</p>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
            <Button variant="outline" size="icon" aria-label="Vorherige Station" title="Vorherige Station" disabled={index === 0} onClick={() => setIndex((value) => value - 1)}><ArrowLeft /></Button>
            <span className="text-sm text-muted-foreground">{index + 1} / {stations.length}</span>
            <Button variant="outline" size="icon" aria-label="Nächste Station" title="Nächste Station" disabled={index === stations.length - 1} onClick={() => setIndex((value) => value + 1)}><ArrowRight /></Button>
          </div>
        </div>
      </div>

      <h3 className="mt-10 font-display text-2xl font-bold text-foreground">Welches Handwerk passt zu dir?</h3>
      <p className="mt-3 text-muted-foreground">Drei Ausbildungsberufe, unterschiedliche Aufgaben und viele Möglichkeiten für deine berufliche Zukunft.</p>
    </section>
  );
}