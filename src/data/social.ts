/**
 * Social links. Migrated from Hugo's data/social.toml.
 * `icon` maps to an astro-icon name (fa6-brands set).
 */

export interface SocialLink {
  name: string;
  url: string;
  /** astro-icon name, e.g. "fa6-brands:instagram" */
  icon: string;
}

export const social: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/pulgacion/",
    icon: "fa6-brands:instagram",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@upflychannel/",
    icon: "fa6-brands:youtube",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/marcelaviola/",
    icon: "fa6-brands:linkedin-in",
  },
];
