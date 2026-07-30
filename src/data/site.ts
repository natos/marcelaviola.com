/**
 * Site-wide metadata and navigation.
 * Migrated from Hugo's config.toml ([params], [[menu.main]], [author]).
 * Single source of truth for SEO, header, footer, and llms.txt.
 */

export const site = {
  title: "Marcela",
  url: "https://www.marcelaviola.com",
  description: "Strength training, Mobility and Nutrition coaching.",
  keywords:
    "coach, marcela, viola, health, wellness, coaching, personal, trainer, strength, mobility, flexibility, nutrition, training, fitness",
  author: "Natan Santolo",
  languageCode: "en-US",
  ogImage: "/assets/images/contact/x2/contact.jpg",
} as const;

export interface NavItem {
  name: string;
  url: string;
}

/** Primary navigation — anchors into the one-page home layout. */
export const nav: NavItem[] = [
  { name: "About", url: "#about" },
  { name: "Credentials", url: "#credentials" },
  { name: "Services", url: "#services" },
  { name: "Testimonials", url: "#testimonials" },
  { name: "Get in touch", url: "#contact" },
];

/** Footer photography / crafting credits. */
export const credits = {
  photographers: [
    { handle: "@ted__charles", url: "https://www.instagram.com/ted__charles/" },
    { handle: "@rbr75", url: "https://www.instagram.com/rbr75/" },
  ],
  author: { name: "Natan", url: "https://www.natansantolo.com" },
} as const;
