// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.marcelaviola.com",
  trailingSlash: "always",
  integrations: [mdx(), sitemap(), icon()],
  build: {
    // Emit /page/index.html so URLs stay directory-style (parity with Hugo)
    format: "directory",
  },
});
