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
const PUBLIC_DIR = path.resolve(process.env.ASSET_OUTPUT_DIR || "public");

// Auch direkt im Seiteninhalt verwendete Asset-URLs muessen auf IONOS liegen.
async function collectAssetUrls(dir = path.resolve("src")) {
  const urls = new Set();
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      for (const url of await collectAssetUrls(file)) urls.add(url);
    } else if (/\.(tsx?|css|json)$/.test(entry.name)) {
      const source = await readFile(file, "utf8");
      for (const match of source.matchAll(/\/__l5e\/assets-v1\/[^\s"'`<>\\)]+/g)) {
        urls.add(match[0]);
      }
    }
  }
  return urls;
}

async function main() {
  const files = (await readdir(ASSET_DIR)).filter((f) => f.endsWith(".asset.json"));
  const urls = await collectAssetUrls();

  let ok = 0;
  const failed = [];

  for (const file of files) {
    const meta = JSON.parse(await readFile(path.join(ASSET_DIR, file), "utf8"));
    const url = meta.url;
    if (!url || !url.startsWith("/")) {
      failed.push(`${file}: ungueltige url (${url})`);
      continue;
    }
    urls.add(url);
  }
  for (const url of urls) {
    const target = path.join(PUBLIC_DIR, url);
    try {
      const existing = await stat(target).catch(() => null);
      if (existing && existing.size > 0) {
        console.log(`= ${url} (bereits vorhanden, ${existing.size} B)`);
        ok++;
        continue;
      }
      const res = await fetch(`${HOST}${url}`, { signal: AbortSignal.timeout(60000) });
      if (!res.ok) {
        failed.push(`${url}: HTTP ${res.status}`);
        continue;
      }
      if (!(res.headers.get("content-type") || "").match(/^(image\/|video\/|audio\/|application\/octet-stream)/)) {
        failed.push(`${url}: keine Mediendatei erhalten`);
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

  console.log(`\n${ok}/${urls.size} Assets bereit in ${PUBLIC_DIR}.`);
  if (failed.length) {
    console.error("Fehlgeschlagen:");
    for (const f of failed) console.error(`  ! ${f}`);
    process.exit(1);
  }
}

main();
