import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARBEITSTAG } from "./karriere-arbeitstag.data";
import morgenbesprechung from "@/assets/morgenbesprechung-betriebshof.jpg.asset.json";
import pauseFoto from "@/assets/dacharbeiter_pause.png.asset.json";
import gaubeFoto from "@/assets/dachsanierung-am-gaubenfenster.jpg.asset.json";
import mittagFoto from "@/assets/mittagspause_baustelle.png.asset.json";
import loetFoto from "@/assets/loeten_kupferrinne.png.asset.json";
import stadtFoto from "@/assets/dacharbeiten_ueber_der_stadt.png.asset.json";
import teamFoto from "@/assets/dachdecker_team_dachsanierung.png.asset.json";
import sichernFoto from "@/assets/baustelle_sichern_dachplane.png.asset.json";
import abschlussFoto from "@/assets/gemeinsam-abschluss-abends.jpg.asset.json";
import bauwagenFoto from "@/assets/gemeinsames_lachen_bauwagen.png.asset.json";
import fahrt from "@/assets/handwerkerfahrt_zur_baustelle.png.asset.json";
import bleche from "@/assets/metallhandwerk_werkstatt.png.asset.json";
import dach8 from "@/assets/dachsanierung-holzfaser-dachfenster.jpg.asset.json";

const FOTOS: Record<string, { src: string; alt: string }> = {
  Zimmerer: { src: morgenbesprechung.url, alt: "Morgenbesprechung bei E. Scharpf" },
  Dachdecker: { src: "/fotos/scharpf_dachdecken_01.jpg", alt: "Dachaufbau mit Dämmung und Lattung" },
  Klempner: { src: "/__l5e/assets-v1/0cace228-0a9f-4149-a7c2-db7e5b2e39fd/scharpf_klempner_referenz_3.jpg", alt: "Klempnerarbeiten am Dach im Detail" },
};

export function KarriereArbeitstag() {
  const [gewerk, setGewerk] = useState("Zimmerer");
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const stations = ARBEITSTAG[gewerk] ?? [];
  const station = stations[index];
  useEffect(() => {
    if (!playing || stations.length < 2) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % stations.length), 4000);
    return () => clearTimeout(t);
  }, [index, gewerk, stations.length, playing]);
  const foto = station?.time === "17:00" ? { src: bauwagenFoto.url, alt: "Gemeinsames Lachen im Bauwagen" } : station?.time === "Abschluss" ? { src: abschlussFoto.url, alt: "Gemeinsam über den Dächern der Stadt" } : station?.time === "16:45" ? { src: sichernFoto.url, alt: "Dachdecker sichern eine weiße Dachplane" } : station?.time === "16:00" ? { src: teamFoto.url, alt: "Dachdecker-Team bei der Dachsanierung" } : station?.time === "15:00" ? { src: stadtFoto.url, alt: "Dacharbeiten über der Stadt" } : station?.time === "13:00" ? { src: loetFoto.url, alt: "Dachhandwerker beim Löten der Kupferrinne" } : station?.time === "12:30" ? { src: mittagFoto.url, alt: "Gemeinsame Mittagspause auf der Baustelle" } : station?.time === "09:30" ? { src: gaubeFoto.url, alt: "Dachsanierung am Gaubenfenster" } : station?.time === "09:00" ? { src: pauseFoto.url, alt: "Pause der Dacharbeiter über der Stadt" } : station?.time === "08:00" && gewerk !== "Klempner" ? { src: dach8.url, alt: "Dachsanierung mit Holzfaserdämmung und Dachfenster" } : station?.title === "Bleche vorbereiten" ? { src: bleche.url, alt: "Bleche vorbereiten in der Werkstatt" } : station?.time === "06:40" ? FOTOS.Zimmerer : station?.title === "Fahrt zur Baustelle" ? { src: fahrt.url, alt: "Gemeinsame Fahrt zur Baustelle" } : FOTOS[gewerk];
  if (!station || !foto) return null;
  const choose = (name: string) => { const next = ARBEITSTAG[name] ?? []; const same = next.findIndex((s) => s.time === station.time); setGewerk(name); setIndex(same >= 0 ? same : Math.min(index, Math.max(next.length - 1, 0))); };

  return (
    <section className="mt-16" aria-labelledby="drei-handwerke">
      <p className="text-center font-display text-3xl font-bold text-primary sm:text-4xl">Ein Tag auf der Baustelle</p>
      <h2 id="drei-handwerke" className="mx-auto mt-3 max-w-4xl text-center font-display text-3xl font-bold text-foreground sm:text-5xl">Drei Handwerke. <span className="text-primary">Unterschiedliche Aufgaben.</span> Ein gemeinsames Ergebnis.</h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">Ob Holz, Dachziegel oder Blech: Entdecke, wie unsere drei Gewerke arbeiten, was sie unterscheidet und wie sie gemeinsam ein Bauprojekt voranbringen Vom ersten Kaffee bis zum Feierabend nehmen wir dich mit durch einen typischen Arbeitstag unserer Zimmerer, Dachdecker und Klempner.</p>

      <div className="mx-auto mt-8 flex w-full max-w-xl gap-1 rounded-xl border border-border bg-muted p-1" role="group" aria-label="Gewerk auswählen">
        {Object.keys(ARBEITSTAG).map((name) => (
          <Button key={name} className="h-12 min-w-0 flex-1 rounded-lg px-3 text-base" variant={name === gewerk ? "default" : "ghost"} aria-pressed={name === gewerk} onClick={() => choose(name)}>{name}</Button>
        ))}
      </div>

      <div className="mx-auto mt-6 w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
        <div role="status" aria-live="polite" aria-atomic="true" className="flex flex-col-reverse gap-4 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-10">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{gewerk}</p>
            <h4 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">{station.title}</h4>
            <p className="mt-3 max-w-2xl whitespace-pre-line leading-relaxed text-muted-foreground">{station.text}</p>
          </div>
          <div className="shrink-0 rounded-xl bg-background px-6 py-4 text-center shadow-md">
            <span className="font-display text-4xl font-bold text-primary sm:text-5xl">{station.time}</span>
            {station.time !== "Abschluss" && <span className="ml-2 text-sm font-bold uppercase tracking-widest text-primary">Uhr</span>}
          </div>
        </div>
        <figure className="relative w-full bg-background">
          <img src={foto.src} alt={foto.alt} loading="lazy" className={`block aspect-[16/9] w-full sm:aspect-[21/9] ${station.time === "06:40" ? "object-contain" : "object-cover"}`} />
          <figcaption className="absolute bottom-3 left-3 rounded bg-background px-2 py-1 text-sm font-medium leading-normal text-foreground">Mit KI erstellt</figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl">
        <ol className="relative hidden grid-flow-col auto-cols-fr sm:grid" aria-label="Uhrzeiten">
          <span className="absolute left-[4%] right-[4%] top-2 h-px bg-border" aria-hidden="true" />
          {stations.map((s, i) => (
            <li key={s.time + i} className="relative flex justify-center">
              <button type="button" onClick={() => setIndex(i)} aria-current={i === index} className="flex flex-col items-center gap-2 text-sm">
                <span className={`block rounded-full border ${i === index ? "h-4 w-4 border-primary bg-primary" : "mt-0.5 h-3 w-3 border-muted-foreground bg-background"}`} />
                <span className={i === index ? "font-bold text-foreground" : "text-muted-foreground"}>{s.time}</span>
              </button>
            </li>
          ))}
        </ol>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:hidden">
          {stations.map((s, i) => (
            <button key={s.time + i} type="button" onClick={() => setIndex(i)} aria-current={i === index} className={`shrink-0 rounded-full border px-4 py-2 text-base ${i === index ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground"}`}>{s.time}</button>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button variant="outline" className="rounded-full border-primary text-primary" onClick={() => setPlaying((v) => !v)}>{playing ? <Pause /> : <Play />}{playing ? "Tag pausieren" : "Tag abspielen"}</Button>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">Kein Baustellentag läuft genau gleich. Diese Beispiele zeigen dir, wie ein Tag in unseren drei Gewerken bei E. Scharpf aussehen kann.</p>
      </div>

      <h3 className="mt-10 font-display text-2xl font-bold text-foreground">Welches Handwerk passt zu dir?</h3>
      <p className="mt-3 text-muted-foreground">Drei Ausbildungsberufe, unterschiedliche Aufgaben und viele Möglichkeiten für deine berufliche Zukunft.</p>
    </section>
  );
}