// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.marcelaviola.com",
  trailingSlash: "always",
  integrations: [sitemap(), icon()],
  build: {
    // Emit /page/index.html so URLs stay directory-style (parity with Hugo)
    format: "directory",
  },
});
