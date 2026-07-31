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
  ogImage: "/og-image.jpg",
} as const;

/**
 * The person the site is about (drives schema.org Person JSON-LD).
 * Distinct from `site.author`, which credits the site's developer.
 */
export const person = {
  name: "Marcela Viola",
  jobTitle: "Strength, Mobility & Nutrition Coach",
  image: "/og-image.jpg",
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

/** Contact channels — single source of truth for the form URL and email. */
export const contact = {
  email: "strongwithmarce@gmail.com",
  onboardingForm:
    "https://forms.zohopublic.com/strongwithmarce/form/CounselingIntakeForm/formperma/8USVH11UWDlS7BZzV5T-NTyTmDyxdC4QonTF-DyAqRA",
  areaServed: "Singapore",
} as const;

/** Coaching services — powers the on-page copy and schema.org Service markup. */
export const offerings = [
  {
    name: "Nutrition Coaching",
    description:
      "Build better habits around food and learn to fuel properly for your activity level and goals.",
  },
  {
    name: "Strength Training",
    description:
      "Get stronger, gain muscle and train with a simple, sustainable plan built around you.",
  },
  {
    name: "Mobility Coaching",
    description:
      "Improve your range of motion, ease nagging pain and move with control and confidence.",
  },
] as const;

