/**
 * Site-wide metadata and navigation.
 * Migrated from Hugo's config.toml ([params], [[menu.main]], [author]).
 * Single source of truth for SEO, header, footer, and llms.txt.
 */

export const site = {
  /** Short brand name shown in the header and footer wordmark. */
  title: "Marcela",
  /** Full name used as the site name in search results and link previews. */
  name: "Marcela Viola",
  /** Home page <title>; other pages render as "<page> — Marcela Viola". */
  homeTitle: "Marcela Viola — Strength, Mobility & Nutrition Coach in Singapore",
  url: "https://www.marcelaviola.com",
  description:
    "Personal strength, mobility and nutrition coaching with Marcela Viola, a NASM-certified coach. 1-on-1 training in Singapore and online coaching worldwide.",
  keywords:
    "coach, marcela, viola, health, wellness, coaching, personal, trainer, strength, mobility, flexibility, nutrition, training, fitness",
  author: "Natan Santolo",
  languageCode: "en-US",
  ogImage: "/og-image.jpg",
  ogImageAlt:
    "Marcela Viola smiling, beside the words: personal coach in Singapore and online — strength, mobility and nutrition coaching.",
} as const;

/**
 * The person the site is about (drives schema.org Person JSON-LD).
 * Distinct from `site.author`, which credits the site's developer.
 */
export const person = {
  name: "Marcela Viola",
  jobTitle: "Strength, Mobility & Nutrition Coach",
  description:
    "Holistic strength, mobility and nutrition coach based in Singapore, with 20+ years as an aerialist, yoga teacher and strength coach.",
  /** Square headshot (800×800) for knowledge panels and structured data. */
  image: "/marcela-viola.jpg",
  /** Areas of expertise, for schema.org `knowsAbout`. */
  knowsAbout: [
    "Strength training",
    "Weightlifting",
    "Mobility training",
    "Flexibility training",
    "Nutrition coaching",
    "Pre- and postnatal fitness",
    "Aerial arts",
    "Handstands",
    "Yoga",
  ],
} as const;

/** One step of a breadcrumb trail (schema.org BreadcrumbList). */
export interface Breadcrumb {
  name: string;
  /** Root-relative path, e.g. "/strength-training/". */
  path: string;
}

export interface NavItem {
  name: string;
  url: string;
}

/**
 * Primary navigation — anchors into the home page. Root-relative ("/#about")
 * so the same links work from the service pages.
 */
export const nav: NavItem[] = [
  { name: "About", url: "/#about" },
  { name: "Credentials", url: "/#credentials" },
  { name: "Services", url: "/#services" },
  { name: "Testimonials", url: "/#testimonials" },
  { name: "FAQ", url: "/#faq" },
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
