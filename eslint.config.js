import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      "dist/",
      ".astro/",
      "node_modules/",
      "public/",
      "static/",
      // Legacy Hugo-era browser scripts — removed during migration cleanup
      "src/js/",
      "gruntfile.js",
    ],
  },
];
