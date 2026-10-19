// Render every direction to PDF (one file per direction) and PNG (one per page).
//
//   NODE_PATH="$(npm root -g)" node guides/scripts/render.mjs
//
// Needs Playwright with Chromium available (installed globally or as a dev dependency).
// Output goes to guides/exports/ (git-ignored).

import { createServer } from "node:http";
import { readFile, mkdir, readdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { extname, join, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "exports");
const types = { ".html": "text/html", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml" };

// Masks and fonts need http(s); file:// blocks the signature mask.
const server = createServer(async (req, res) => {
  const path = normalize(join(root, decodeURIComponent(new URL(req.url, "http://x").pathname)));
  if (!path.startsWith(root)) return res.writeHead(403).end();
  try {
    res.writeHead(200, { "content-type": types[extname(path)] ?? "application/octet-stream" });
    res.end(await readFile(path));
  } catch {
    res.writeHead(404).end();
  }
}).listen(0);
const base = `http://localhost:${server.address().port}`;

const only = process.argv[2];
const files = (await readdir(join(root, "directions"))).filter((f) => /^\d\d-.*\.html$/.test(f) && (!only || f.startsWith(only)));
await mkdir(join(out, "pdf"), { recursive: true });
await mkdir(join(out, "png"), { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2, viewport: { width: 1400, height: 1000 } });

for (const file of files) {
  const name = file.replace(/\.html$/, "");
  await page.goto(`${base}/directions/${file}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const pages = await page.$$(".page");
  for (const [i, el] of pages.entries()) {
    await el.screenshot({ path: join(out, "png", `${name}-p${i + 1}.png`) });
  }
  await page.pdf({ path: join(out, "pdf", `${name}.pdf`), preferCSSPageSize: true, printBackground: true });
  console.log(`${name}: ${pages.length} pages`);
}

await browser.close();
server.close();
