// Erzeugt public/sitemap.xml aus den Dateien unter src/routes.
// Aufruf: npm run sitemap  (nach dem Anlegen oder Umbenennen von Seiten).
import { readdirSync, writeFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SITE_URL = "https://holzbau-scharpf.de"; // gleich wie SITE_URL in src/lib/seo.ts
const AUSGESCHLOSSEN = new Set(["/kontakt/danke", "/agb", "/datenschutz"]);

function dateien(ordner) {
  return readdirSync(ordner).flatMap((name) => {
    const pfad = join(ordner, name);
    return statSync(pfad).isDirectory() ? dateien(pfad) : [pfad];
  });
}

const routen = dateien("src/routes")
  .filter((f) => f.endsWith(".tsx") && !f.endsWith("__root.tsx"))
  .map((f) => {
    const p = "/" + relative("src/routes", f).split(sep).join("/").replace(/\.tsx$/, "");
    return p.replace(/\/index$/, "") || "/";
  })
  .filter((p) => !AUSGESCHLOSSEN.has(p))
  .sort();

function prioritaet(p) {
  if (p === "/") return "1.0";
  const tiefe = p.split("/").length - 1;
  if (p.startsWith("/karriere") || p === "/impressum") return "0.5";
  if (p.startsWith("/ratgeber/") || p.startsWith("/referenzen/")) return "0.6";
  return tiefe === 1 ? "0.8" : "0.7";
}

const eintraege = routen
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p === "/" ? "/" : p}</loc>\n    <priority>${prioritaet(p)}</priority>\n  </url>`,
  )
  .join("\n");

writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${eintraege}\n</urlset>\n`,
);
console.log(`public/sitemap.xml: ${routen.length} URLs`);
