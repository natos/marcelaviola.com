# marcelaviola.com

Personal coaching site for **Marcela Viola** — strength training, mobility, and nutrition coaching. A fast, static single-page site built with [Astro](https://astro.build/).

[Live → www.marcelaviola.com](https://www.marcelaviola.com)

## Tech stack

- **[Astro](https://astro.build/)** — static site generator (zero JS shipped by default)
- **TypeScript** — typed content/data (`src/data/`)
- **[astro:assets](https://docs.astro.build/en/guides/images/)** (Sharp) — responsive AVIF/WebP image optimization
- **[astro-icon](https://github.com/natemoo-re/astro-icon)** — inlined SVG brand icons
- **[Fontsource](https://fontsource.org/)** — self-hosted fonts (Bebas Neue, Work Sans)
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap generation
- **ESLint + Stylelint + Prettier** — linting and formatting
- Installable **PWA** (web manifest + offline-capable service worker)

## Requirements

- Node `22.22.0` (see [`.nvmrc`](.nvmrc)) — run `nvm use`
- npm `10+`

## Development

```sh
npm install       # install dependencies
npm run dev       # start the dev server (http://localhost:4321)
npm run build     # production build to ./dist
npm run preview   # preview the production build locally
npm run check     # astro type-check
npm run lint      # eslint + stylelint
npm run format    # prettier --write
```

## Project structure

```
public/            Static assets copied verbatim (CNAME, robots, llms.txt,
                   manifest, service worker, icons, videos, favicon)
src/
  components/      Astro UI components (SEO, Menu, Social, sections, …)
  data/            Typed site content (site, social, hero, testimonials, …)
  images/          Source images processed by astro:assets
  layouts/         BaseLayout (document shell, header, footer)
  pages/           Routes (index.astro, 404.astro)
  styles/          global.css
astro.config.mjs   Astro config (site URL, trailing slash, integrations)
```

## Deployment

Hosted on **Cloudflare Pages** via Git integration — every push to the production
branch triggers an automatic build and deploy.

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Custom domain:** `www.marcelaviola.com` (via [`public/CNAME`](public/CNAME))

No manual deploy step is required; push to the production branch and Cloudflare
builds and publishes automatically.