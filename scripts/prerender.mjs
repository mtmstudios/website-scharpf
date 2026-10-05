// Statisches Prerendering fuer IONOS (statisches Webhosting).
//
// TanStack Starts eingebauter Prerender ist in diesem Setup defekt, der gebaute
// node-server rendert die Seiten aber einwandfrei. Dieses Skript startet den
// Server aus .output/server, crawlt alle Routen (aus src/routes abgeleitet, BFS
// fuer zusaetzliche verlinkte Seiten) und schreibt das gerenderte HTML als
// .output/public/<route>/index.html. Ergebnis: .output/public ist ein
// vollstaendig statischer Site-Ordner.

import { spawn } from "node:child_process";
import { mkdir, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const PORT = Number(process.env.PRERENDER_PORT ?? 4123);
const ORIGIN = `http://127.0.0.1:${PORT}`;
const PUBLIC_DIR = path.resolve(".output/public");
const SERVER_ENTRY = path.resolve(".output/server/index.mjs");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForServer(timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`${ORIGIN}/`, { redirect: "manual" });
      if (res.status > 0) return;
    } catch {
      // not up yet
    }
    await sleep(250);
  }
  throw new Error(`Server kam nicht innerhalb von ${timeoutMs}ms hoch`);
}

function extractLinks(html) {
  const links = new Set();
  const re = /href\s*=\s*"(\/[^"]*)"/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    let href = m[1];
    if (href.startsWith("//")) continue;
    href = href.split("#")[0].split("?")[0];
    if (/\.[a-z0-9]+$/i.test(href)) continue;
    if (href === "") href = "/";
    links.add(href);
  }
  return links;
}

// Rekursiv src/routes durchlaufen (ordner-basiertes TanStack-File-Routing):
//   index.tsx        -> <base>/           dach/index.tsx -> /dach
//   dachdaemmung.tsx  -> <base>/dachdaemmung
// Uebersprungen: __root, README, dynamische ($param) und Pathless-Routen (_prefix).
async function discoverRoutes(dir = path.resolve("src/routes"), base = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      routes.push(...(await discoverRoutes(path.join(dir, entry.name), `${base}/${entry.name}`)));
      continue;
    }
    if (!entry.name.endsWith(".tsx")) continue;
    const name = entry.name.slice(0, -4);
    if (name === "__root" || name.startsWith("_")) continue;
    if (name.includes("$")) continue;
    if (name === "index") {
      routes.push(base === "" ? "/" : base);
    } else {
      routes.push(`${base}/${name}`);
    }
  }
  return routes;
}

function outputPathFor(route) {
  const clean = route.replace(/^\/+|\/+$/g, "");
  return clean === "" ? "index.html" : path.join(clean, "index.html");
}

async function savePage(route, html) {
  const rel = outputPathFor(route);
  const abs = path.join(PUBLIC_DIR, rel);
  await mkdir(path.dirname(abs), { recursive: true });
  await writeFile(abs, html, "utf8");
  return rel;
}

async function main() {
  const server = spawn(process.execPath, [SERVER_ENTRY], {
    stdio: ["ignore", "inherit", "inherit"],
    env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
  });

  let exitCode = 0;
  try {
    await waitForServer();

    const initial = [...new Set(["/", ...(await discoverRoutes())])];
    const required = new Set(initial);
    const queue = [...initial];
    const seen = new Set(queue);
    const rendered = [];
    const skipped = [];

    while (queue.length) {
      const route = queue.shift();
      const res = await fetch(`${ORIGIN}${route}`, { redirect: "manual" });
      if (res.status !== 200) {
        if (res.status >= 300 && res.status < 400) {
          const to = res.headers.get("location") || "?";
          skipped.push(`${route} (HTTP ${res.status} -> ${to})`);
          continue;
        }
        if (required.has(route)) {
          throw new Error(`Route ${route} lieferte HTTP ${res.status} - Build abgebrochen`);
        }
        skipped.push(`${route} (HTTP ${res.status})`);
        continue;
      }
      const html = await res.text();
      const rel = await savePage(route, html);
      rendered.push(rel);
      for (const link of extractLinks(html)) {
        if (!seen.has(link)) {
          seen.add(link);
          queue.push(link);
        }
      }
    }

    if (skipped.length) {
      console.warn(`[prerender] ${skipped.length} verlinkte Route(n) fehlen und wurden uebersprungen:`);
      for (const s of skipped) console.warn(`  ! ${s}`);
    }

    const notFound = await fetch(`${ORIGIN}/__prerender_404__`, { redirect: "manual" });
    const notFoundHtml = await notFound.text();
    await writeFile(path.join(PUBLIC_DIR, "404.html"), notFoundHtml, "utf8");
    rendered.push("404.html");

    console.log(`[prerender] ${rendered.length} statische Seiten erzeugt:`);
    for (const r of rendered.sort()) console.log(`  - ${r}`);
  } catch (err) {
    console.error("[prerender] Fehlgeschlagen:", err);
    exitCode = 1;
  } finally {
    server.kill("SIGTERM");
  }
  process.exit(exitCode);
}

main();
