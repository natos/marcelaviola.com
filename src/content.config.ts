/**
 * Content collections. Each service page is a Markdown file in
 * src/content/services/ — the frontmatter drives the page sections, cards and
 * structured data; the body is the "Approach" copy. Editable without code.
 */
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      /** Service name, e.g. "Strength Training". */
      name: z.string(),
      /** Position in menus and card grids. */
      order: z.number(),
      /** <title> for the page (the site name is appended). */
      title: z.string(),
      /** Meta description, ~150 characters. */
      description: z.string(),
      /** Page <h1>. */
      headline: z.string(),
      /** One-line promise under the headline. */
      promise: z.string(),
      /** Short summary for service cards and schema.org Service. */
      summary: z.string(),
      image: image(),
      imageAlt: z.string(),
      /** "Who it's for" bullets. */
      audience: z.array(z.string()),
      /** Formats this service is offered in. */
      formats: z.array(z.string()),
      /** Names of testimonials (src/data/testimonials.ts) to show. */
      testimonials: z.array(z.string()).default([]),
      faqs: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .default([]),
      /** Ids of related service pages. */
      related: z.array(z.string()).default([]),
      /**
       * Open questions for Marcela, shown in a "draft for review" box on the
       * page. Empty this list before going live.
       */
      reviewNotes: z.array(z.string()).default([]),
    }),
});

export const collections = { services };
