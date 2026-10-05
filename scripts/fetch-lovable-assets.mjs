// Laedt die in src/assets/*.asset.json referenzierten Bilder von Lovables Asset-Host
// herunter und legt sie unter public/<url> ab (Pfad bleibt 1:1 erhalten).
//
// Aufruf:  bun scripts/fetch-lovable-assets.mjs https://<host>

import { readdir, readFile, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const HOST = (process.argv[2] || process.env.LOVABLE_HOST || "").replace(/\/+$/, "");
if (!HOST) {
  console.error("Kein Lovable-Host angegeben. Aufruf: bun scripts/fetch-lovable-assets.mjs https://<host>");
  process.exit(1);
}

const ASSET_DIR = path.resolve("src/assets");
const PUBLIC_DIR = path.resolve("public");

async function main() {
  const files = (await readdir(ASSET_DIR)).filter((f) => f.endsWith(".asset.json"));
  if (!files.length) {
    console.error("Keine .asset.json-Dateien in src/assets gefunden.");
    process.exit(1);
  }

  let ok = 0;
  const failed = [];

  for (const file of files) {
    const meta = JSON.parse(await readFile(path.join(ASSET_DIR, file), "utf8"));
    const url = meta.url;
    if (!url || !url.startsWith("/")) {
      failed.push(`${file}: ungueltige url (${url})`);
      continue;
    }
    const target = path.join(PUBLIC_DIR, url);
    try {
      const existing = await stat(target).catch(() => null);
      if (existing && existing.size > 0) {
        console.log(`= ${url} (bereits vorhanden, ${existing.size} B)`);
        ok++;
        continue;
      }
      const res = await fetch(`${HOST}${url}`);
      if (!res.ok) {
        failed.push(`${url}: HTTP ${res.status}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length === 0) {
        failed.push(`${url}: leere Antwort`);
        continue;
      }
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, buf);
      console.log(`OK ${url} (${buf.length} B)`);
      ok++;
    } catch (err) {
      failed.push(`${url}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  console.log(`\n${ok}/${files.length} Assets bereit in public/.`);
  if (failed.length) {
    console.error("Fehlgeschlagen:");
    for (const f of failed) console.error(`  ! ${f}`);
    process.exit(1);
  }
}

main();
