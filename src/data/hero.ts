/**
 * Hero background video sources. Migrated from Hugo's data/hero.toml.
 * Files are served as-is from public/assets/videos/.
 *
 * Each orientation ships an AV1 encode (smaller, picked by browsers that can
 * decode it) and an H.264 fallback. The clips are a 15-second cut of the
 * original 47-second montage, starting on the poster frame and ending on a
 * scene cut so the loop reads as just another cut. To replace a clip, keep
 * the poster in sync with its first frame and bump the date prefix so caches
 * pick up the new file.
 */

export const hero = {
  video: {
    landscape: {
      av1: "/assets/videos/261015_marce_marina_bay_16_9.av1.mp4",
      h264: "/assets/videos/261015_marce_marina_bay_16_9.mp4",
      poster: "/assets/videos/hero-landscape-poster.jpg",
    },
    portrait: {
      av1: "/assets/videos/261015_marce_marina_bay_9_16.av1.mp4",
      h264: "/assets/videos/261015_marce_marina_bay_9_16.mp4",
      poster: "/assets/videos/hero-portrait-poster.jpg",
    },
  },
  copy: {
    kicker: "Marcela Viola · Personal Coach in Singapore",
    title: ["Get stronger.", "Move freer.", "Feel better."],
    lede: "Personalised strength, mobility and nutrition coaching for everyday people and athletes — one-on-one in Singapore and online worldwide.",
    primaryCta: { label: "Start your journey", url: "#contact" },
    secondaryCta: { label: "Explore coaching", url: "#services" },
  },
} as const;
