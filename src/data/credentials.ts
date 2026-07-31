/**
 * Professional credentials. Extracted from the Hugo credentials partial.
 */

export interface Credential {
  issuer: string;
  title: string;
  year: number;
}

export const credentials: Credential[] = [
  { issuer: "NASM", title: "International Certified Personal Trainer (ICPT)", year: 2025 },
  { issuer: "ELEIKO", title: "Eleiko Weightlifting Level 1", year: 2025 },
  { issuer: "Girls Gone Strong", title: "Certified Pre & Post Natal Coach", year: 2022 },
  { issuer: "Flexibility Research", title: "Master Flexibility Training", year: 2021 },
  { issuer: "Precision Nutrition", title: "Precision Nutrition Level 1", year: 2021 },
  { issuer: "All Yoga", title: "Ashtanga yoga YTT", year: 2019 },
];
