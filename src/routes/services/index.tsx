import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Section, LeistungBlock, CtaBanner } from "@/components/sections";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services – Dachdeckerei, Klempnerei, Showroom | E. Scharpf" },
      {
        name: "description",
        content:
          "Dachdeckerarbeiten, Klempnerleistungen aus eigener Werkstatt, Ladekran zum Mieten und Showroom. E. Scharpf GmbH Esslingen – alles aus einer Hand.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      {/* Titel + Intro */}
      <Section>
        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
          Service & Sonstige Leistungen
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Über Holzbau und Restaurierung hinaus bieten wir Ihnen ein
          umfassendes Leistungsspektrum aus einer Hand – von Dachdecker- und
          Klempnerarbeiten über die Ladekran-Vermietung bis zu unserem
          Showroom.
        </p>
        <div className="mt-10">
          <PlaceholderImage
            note="Fuhrpark von E. Scharpf im Einsatz"
            src="/fotos/scharpf_Transporter.jpg"
            ratio="wide"
          />
        </div>
      </Section>

      <Section>
        <LeistungBlock
          title="Dachdeckerleistungen"
          text="Rund ums Dach bieten wir Ihnen alle Gewerke aus einer Hand:"
          bullets={[
            "Dachgauben",
            "Dachfenster",
            "Wärmedämmung",
            "Dacheindeckungen",
            "Klempnerarbeiten",
            "Dachreparaturen",
          ]}
          imageNote="Dachdeckerarbeiten mit Gaube"
          imageSrc="/fotos/scharpf__dachgauben.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Klempnerleistungen"
          text="In unserer eigenen Klempnerwerkstatt fertigen wir Dachrinnen, Fallrohre, Kehl- und Wandanschlussbleche in Kupfer, Zink und Aluminium – präzise gefertigt und schnell montiert."
          imageNote="Klempnerarbeiten an der Gaube"
          imageSrc="/fotos/scharpf_dachgaube_flaschner.jpg"
        />
      </Section>

      <Section>
        <LeistungBlock
          title="Ladekran mieten"
          text="Sie brauchen kurzfristig Hebekapazität? Mieten Sie unseren Ladekran – mit oder ohne Bedienung. Ideal für Materialtransport und Montagearbeiten. Technische Daten und Konditionen erhalten Sie auf Anfrage."
          imageNote="Ladekran von E. Scharpf im Einsatz"
          imageSrc="/fotos/scharpf_ladekran.jpg"
        />
      </Section>

      <Section muted>
        <LeistungBlock
          flip
          title="Ausstellung/Showroom"
          text="Besuchen Sie unseren Showroom und erleben Sie Materialien, Oberflächen und Lösungen zum Anfassen. Vereinbaren Sie gerne einen Termin – die aktuellen Öffnungszeiten teilen wir Ihnen auf Anfrage mit."
          imageNote="Showroom / Ausstellung von E. Scharpf"
          imageSrc="/fotos/scharpf_ausstellung.jpg"
        />
      </Section>

      <CtaBanner title="Wollen Sie ein vergleichbares Projekt anfragen?" />
    </div>
  );
}
