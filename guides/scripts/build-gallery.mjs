// Build a single gallery page showing all five directions side by side.
//
//   node guides/scripts/build-gallery.mjs [--artifact <out.html>]
//
// Default writes guides/directions/index.html (full document, relative paths).
// --artifact writes a body-only page with assets/ paths, for publishing as a claude.ai Artifact.

import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dir = join(root, "directions");
const artifactOut = process.argv.includes("--artifact") ? process.argv[process.argv.indexOf("--artifact") + 1] : null;

const notes = {
  "01": ["Signature", "The lookbook taken literally. Arch-cropped photos, lavender panels, and Marcela's handwritten signature as the recurring personal mark.", "Plus Jakarta Sans", "The safest, warmest option."],
  "02": ["Bold Editorial", "The website's own typefaces in the new palette. Huge condensed headlines, oversized section numbers, full-bleed photos.", "Bebas Neue + Work Sans", "A clear link to marcelaviola.com and the most energy."],
  "03": ["Organic Flow", "Illustration-led. Soft blobs, pebble-cropped photos, pill rows and a dotted path that carries you through the steps.", "Figtree", "The softest and most approachable."],
  "04": ["Colour Block", "Each guide owns its topic colour as a big confident field. Wide type and chunky rounded tiles make the collection read as a system.", "Archivo Expanded", "The collection to look like a set on a store page."],
  "05": ["Aubergine", "Dark covers and closers echo the website's dark look. Light reading pages, with blush as the only spark.", "Manrope", "A premium feel that supports a paywall."],
  "06": ["Hybrid", "The cover from 02 with the reading pages from 01. Bebas Neue for the cover title only, Plus Jakarta Sans everywhere else.", "Bebas Neue + Plus Jakarta Sans", "The combination we liked, as is."],
  "07": ["Arch Panel", "Full-bleed photo with a Soft White arch panel holding the title. Bebas comes back inside as the face for numbers: stats, steps, page numbers.", "Bebas Neue + Plus Jakarta Sans", "A light, friendly cover that still has the 02 energy."],
  "08": ["Split", "Photo on top, an aubergine block below with a rounded edge. A thin aubergine band carries the cover into every reading page.", "Bebas Neue + Plus Jakarta Sans", "The strongest visual thread from cover to content."],
  "09": ["Framed", "A different condensed voice: Barlow Condensed, italic on the cover for movement. Photo framed with rounded corners instead of full bleed.", "Barlow Condensed + Barlow", "A sportier, more active tone than Bebas."],
  "10": ["Topic Duotone", "The cover photo is tinted in the topic colour, so each guide is recognisable by colour alone. Extra page shows all five topics together.", "Bebas Neue + Plus Jakarta Sans", "A collection that reads as a set at thumbnail size."],
  "12": ["Editorial", "Marcela's pick: Direction 02 with the tips from 01, checked against her Miro notes. Adds four chart and diagram pages: an effort scale, a progression chart, a movement diagram and a Nutrition bar chart.", "Bebas Neue + Work Sans", "The direction to refine into templates."],
  "13": ["Editorial · Mobility", "A second Direction 12 guide after Marcela's first review: soft-rectangle tag, text centred on big numbers, an exercise photo that shows the exercise named, and a closer that points to the next guide. Shows the system switching to the Mobility colour.", "Bebas Neue + Work Sans", "Checking the system holds up on a new topic."],
  "11": ["Arch Light", "A light cover with a tall arch portrait and a Bebas title cut into it. Bebas headings run through the reading pages.", "Bebas Neue + Plus Jakarta Sans", "Warmth and personality, with Marcela's face up front."],
};

const rounds = {
  "01": ["Round 1", "Five broad directions from the lookbook."],
  "13": ["Round 4", "Direction 12 after Marcela's first review, applied to a new guide."],
  "12": ["Round 3", "Marcela chose 02 with the tips from 01, and asked for stronger charts and diagrams."],
  "06": ["Round 2", "The cover from 02 on the reading pages from 01, then five variations on that combination."],
};

const files = (await readdir(dir)).filter((f) => /^\d\d-.*\.html$/.test(f)).sort((a, b) => ((b.startsWith("13") ? 2 : 0) + (b.startsWith("12") ? 1 : 0)) - ((a.startsWith("13") ? 2 : 0) + (a.startsWith("12") ? 1 : 0)) || a.localeCompare(b));
const fonts = new Set();
let styles = "";
let sections = "";
let nav = "";

for (const file of files) {
  const html = await readFile(join(dir, file), "utf8");
  const id = file.slice(0, 2);
  const [name, idea, type, best] = notes[id];
  for (const m of html.matchAll(/href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)"/g)) fonts.add(m[1]);
  styles += html.split("<!--direction-style-->")[1].split("<!--/direction-style-->")[0].replace(/<\/?style>/g, "");
  const pages = html.split("<!--direction-pages-->")[1].split("<!--/direction-pages-->")[0];
  nav += `<a href="#d${id}"><b>${id}</b>${name}</a>`;
  if (rounds[id]) sections += `<div class="round"><h2>${rounds[id][0]}</h2><p>${rounds[id][1]}</p></div>`;
  sections += `
    <section class="direction" id="d${id}">
      <header class="direction-head">
        <p class="num">Direction ${id}</p>
        <h2>${name}</h2>
        <p>${idea}</p>
        <dl><div><dt>Type</dt><dd>${type}</dd></div><div><dt>Choose it for</dt><dd>${best}</dd></div><div><dt>File</dt><dd><a href="${file}">${file}</a></dd></div></dl>
      </header>
      <div class="rail">${pages}</div>
    </section>`;
}

const css = (await readFile(join(root, "design-system/tokens.css"), "utf8")) + (await readFile(join(dir, "base.css"), "utf8")) + styles;

const chrome = `
  :root {
    --g-bg: #f4eff7;
    --g-ink: #45264f;
    --g-soft: #6b5573;
    --g-line: #e2d8ea;
    --g-card: #fcfafd;
    color-scheme: light;
  }
  body { background: var(--g-bg); color: var(--g-ink); font-family: Manrope, system-ui, sans-serif; margin: 0; }
  .wrap { max-width: 1240px; margin: 0 auto; padding-block: 40px 80px; padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }
  .intro { display: grid; gap: 12px; max-width: 720px; }
  .intro .eyebrow { font-size: 13px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #8755a0; margin: 0; }
  .intro h1 { font-size: clamp(32px, 5vw, 52px); line-height: 1.05; letter-spacing: -.03em; margin: 0; text-wrap: balance; }
  .intro p { font-size: 17px; line-height: 1.55; color: var(--g-soft); margin: 0; }
  .toc { display: flex; flex-wrap: wrap; gap: 8px; margin: 28px 0 8px; }
  .toc a { display: inline-flex; gap: 8px; align-items: center; padding: 8px 14px; border-radius: 999px; background: var(--g-card); color: var(--g-ink); text-decoration: none; font-weight: 700; font-size: 14px; border: 1px solid var(--g-line); }
  .toc a b { color: #8755a0; }
  .toc a:hover, .toc a:focus-visible { border-color: #8755a0; outline: none; }
  .round { margin-top: 72px; padding-top: 24px; border-top: 2px solid var(--g-ink); display: grid; gap: 4px; }
  .round h2 { margin: 0; font-size: 22px; font-weight: 800; }
  .round p { margin: 0; color: var(--g-soft); font-size: 15px; }
  .direction { margin-top: 56px; display: grid; gap: 20px; }
  .direction-head { display: grid; gap: 8px; max-width: 760px; }
  .direction-head .num { margin: 0; font-size: 13px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: #8755a0; }
  .direction-head h2 { margin: 0; font-size: 32px; letter-spacing: -.02em; }
  .direction-head > p { margin: 0; font-size: 16px; line-height: 1.55; color: var(--g-soft); }
  .direction-head dl { display: flex; flex-wrap: wrap; gap: 8px 28px; margin: 6px 0 0; font-size: 14px; }
  .direction-head dt { font-weight: 800; font-size: 12px; letter-spacing: .1em; text-transform: uppercase; color: var(--g-soft); }
  .direction-head dd { margin: 2px 0 0; }
  .direction-head a { color: var(--g-ink); }
  .rail { overflow-x: auto; margin-inline: -8px; }
  .rail .spread { flex-wrap: nowrap; justify-content: flex-start; gap: 20px; padding: 8px 8px 24px; width: max-content; }
  .rail .page { zoom: .5; }
  @media (max-width: 640px) { .rail .page { zoom: .55; } }
`;

const fontLinks = [...fonts, "https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap"]
  .map((h) => `<link rel="stylesheet" href="${h}" />`)
  .join("\n");

const intro = `
  <header class="intro">
    <p class="eyebrow">Strong with Marce · Guides</p>
    <h1>Design directions for the guides</h1>
    <p>Same sample guide in each, so we compare design and not content. Round 3 is Marcela's pick. Each shows a cover, an educational page, a practical page and an action plan. Pages are 6 × 9 in and sized to read on a phone. Scroll sideways to see all four pages.</p>
    <nav class="toc" aria-label="Directions">${nav}</nav>
  </header>`;

const body = `<div class="wrap">${intro}${sections}</div>`;

if (artifactOut) {
  const page = `<title>Strong with Marce Guides</title>
<meta name="claude:viewport-fit-sides" content="cover">
${fontLinks}
<style>${(css + chrome).replaceAll("../assets/", "assets/")}</style>
${body.replaceAll("../assets/", "assets/").replace(/<dd><a href="[^"]+">([^<]+)<\/a><\/dd>/g, "<dd>$1</dd>")}
`;
  await writeFile(artifactOut, page);
  console.log(`artifact page → ${artifactOut}`);
} else {
  const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Strong with Marce Guides · Design directions</title>
${fontLinks}
<style>${css + chrome}</style>
</head>
<body>
${body}
</body>
</html>
`;
  await writeFile(join(dir, "index.html"), page);
  console.log("gallery → guides/directions/index.html");
}
