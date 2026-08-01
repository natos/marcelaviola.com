/**
 * Hero background video sources. Migrated from Hugo's data/hero.toml.
 * Files are served as-is from public/assets/videos/.
 */

export const hero = {
  video: {
    landscape: "/assets/videos/260801_marce_@_marina_bay_16_9.mp4",
    portrait: "/assets/videos/260801_marce_@_marina_bay_9_16.mp4",
    landscapePoster: "/assets/videos/hero-landscape-poster.jpg",
    portraitPoster: "/assets/videos/hero-portrait-poster.jpg",
  },
  copy: {
    kicker: "Marcela Viola · Holistic Coach",
    title: ["Get stronger.", "Move freer.", "Feel better."],
    lede: "Personalised strength, mobility and nutrition coaching for everyday people and athletes — one-on-one in Singapore and online worldwide.",
    primaryCta: { label: "Start your journey", url: "#contact" },
    secondaryCta: { label: "Explore coaching", url: "#services" },
  },
} as const;
