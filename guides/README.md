# Strong with Marce: Guides

Downloadable PDF guides and ebooks by Marcela Viola: training, nutrition, mobility, lifestyle and aerial conditioning. They might sit behind a paywall later.

This folder holds the guides' design system and design explorations. It is separate from the Astro site (`src/`) and is not part of the site build.

## Sources

| Source | Where |
| --- | --- |
| Visual Identity Lookbook (Marcela, v1.0, 13 Oct 2026) | [Notion](https://app.notion.com/p/Visual-identity-lookbook-3f8c4e70a1e68069afcefe73ff86857f) is the source of truth. Snapshot in [`design-system/lookbook/`](design-system/lookbook/visual-identity-lookbook.md) |
| Moodboard and sample pages | [Miro](https://miro.com/app/board/uXjVEZS0RqM=/). Not captured yet: we still need access |
| Photography | Marcela's own shoots, reused from the website (`src/images/`), resized in [`assets/photos/`](assets/photos) |
| Signature mark | `src/images/logo/logo.png`, copied to [`assets/brand/signature.png`](assets/brand/signature.png) |

## Structure

```
guides/
  design-system/
    README.md      Design system v0.1: principles, tokens, type, components, templates, open decisions
    tokens.css     Colour, type, spacing and radius tokens shared by every direction
    lookbook/      Snapshot of Marcela's Notion lookbook and its palette images
  directions/      Five HTML design directions, 4 sample pages each (6 × 9 in)
    index.html     Gallery of all five, side by side (generated)
  assets/          Photos and brand marks used by the directions
  scripts/         Render to PDF/PNG and build the gallery
  exports/         Generated PDFs and PNGs (git-ignored)
```

## Working on it

Open any `directions/*.html` file in a browser. The signature mask needs http, so serve the folder first:

```sh
npx http-server guides -p 8080   # then open http://localhost:8080/directions/
```

Render PDFs and PNGs, and rebuild the gallery:

```sh
NODE_PATH="$(npm root -g)" node guides/scripts/render.mjs          # all directions → guides/exports/
NODE_PATH="$(npm root -g)" node guides/scripts/render.mjs 03       # just one
node guides/scripts/build-gallery.mjs                               # directions/index.html
```

`render.mjs` needs Playwright and Chromium, installed globally or with `npm i -D playwright`.
