import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARBEITSTAG } from "./karriere-arbeitstag.data";
import morgenbesprechung from "@/assets/morgenbesprechung.png.asset.json";
import pauseFoto from "@/assets/dacharbeiter_pause.png.asset.json";
import gaubeFoto from "@/assets/dachsanierung_gaubenfenster.png.asset.json";
import mittagFoto from "@/assets/mittagspause_baustelle.png.asset.json";
import loetFoto from "@/assets/loeten_kupferrinne.png.asset.json";
import stadtFoto from "@/assets/dacharbeiten_ueber_der_stadt.png.asset.json";
import teamFoto from "@/assets/dachdecker_team_dachsanierung.png.asset.json";
import sichernFoto from "@/assets/baustelle_sichern_dachplane.png.asset.json";
import abschlussFoto from "@/assets/gemeinsam_ueber_den_daechern.png.asset.json";
import fahrt from "@/assets/handwerkerfahrt_zur_baustelle.png.asset.json";
import bleche from "@/assets/metallhandwerk_werkstatt.png.asset.json";
import dach8 from "@/assets/dachsanierung_holzfaser_dachfenster.png.asset.json";

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
  useEffect(() => {
    if (stations.length < 2) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % stations.length), 4000);
    return () => clearTimeout(t);
  }, [index, gewerk, stations.length]);
  const foto = station?.time === "Abschluss" ? { src: abschlussFoto.url, alt: "Gemeinsam über den Dächern der Stadt" } : station?.time === "16:45" ? { src: sichernFoto.url, alt: "Dachdecker sichern eine weiße Dachplane" } : station?.time === "16:00" ? { src: teamFoto.url, alt: "Dachdecker-Team bei der Dachsanierung" } : station?.time === "15:00" ? { src: stadtFoto.url, alt: "Dacharbeiten über der Stadt" } : station?.time === "13:00" ? { src: loetFoto.url, alt: "Dachhandwerker beim Löten der Kupferrinne" } : station?.time === "12:30" ? { src: mittagFoto.url, alt: "Gemeinsame Mittagspause auf der Baustelle" } : station?.time === "09:30" ? { src: gaubeFoto.url, alt: "Dachsanierung am Gaubenfenster" } : station?.time === "09:00" ? { src: pauseFoto.url, alt: "Pause der Dacharbeiter über der Stadt" } : station?.time === "08:00" && gewerk !== "Klempner" ? { src: dach8.url, alt: "Dachsanierung mit Holzfaserdämmung und Dachfenster" } : station?.title === "Bleche vorbereiten" ? { src: bleche.url, alt: "Bleche vorbereiten in der Werkstatt" } : station?.time === "06:40" ? FOTOS.Zimmerer : station?.title === "Fahrt zur Baustelle" ? { src: fahrt.url, alt: "Gemeinsame Fahrt zur Baustelle" } : FOTOS[gewerk];
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
          <Button key={name} variant={name === gewerk ? "default" : "outline"} aria-pressed={name === gewerk} onClick={() => { const next = ARBEITSTAG[name] ?? []; const same = next.findIndex((s) => s.time === station.time); setGewerk(name); setIndex(same >= 0 ? same : Math.min(index, Math.max(next.length - 1, 0))); }}>{name}</Button>
        ))}
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8">
        <img src={foto.src} alt={foto.alt} loading="lazy" className="aspect-[4/3] w-full rounded-lg object-cover" />
        <div className="flex min-w-0 flex-col justify-between">
          <div role="status" aria-live="polite" aria-atomic="true" className="min-h-48">
            <p className="font-display text-2xl font-bold text-primary">{station.time}{station.time !== "Abschluss" && " Uhr"}</p>
            <h4 className="mt-4 font-display text-2xl font-bold text-foreground">{station.title}</h4>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">{station.text}</p>
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