/**
 * /llms.txt — a plain-text summary of the site for AI assistants
 * (https://llmstxt.org). Generated from the same data files as the pages so
 * it can't drift from what the site says.
 */
import type { APIRoute } from "astro";
import { site, person, offerings, contact } from "../data/site";
import { social } from "../data/social";
import { credentials } from "../data/credentials";
import { faqs } from "../data/faq";
import { process } from "../data/process";

export const GET: APIRoute = () => {
  const lines = [
    `# ${person.name}`,
    "",
    `> ${person.name} is a holistic strength, mobility and nutrition coach based in ${contact.areaServed}. She coaches everyday people and athletes 1-on-1 in person in ${contact.areaServed} and online worldwide, building tailored, sustainable programs that help clients move better, eat better and build lasting healthy habits.`,
    "",
    "Marcela has 20+ years of experience as an aerialist, yoga teacher, handstand practitioner and strength coach, and has been an entrepreneur for over 10 years. She founded her own company in Amsterdam, leading group classes for kids and adults, workshops, and consulting for circus companies around Europe, the USA and Norway. She recently co-founded a coaching app in Singapore, where she runs her personal-training practice, and coaches aerial, mobility and conditioning classes at Milan Pole Dance Studio.",
    "",
    "This is a single-page site. The primary calls to action are the training onboarding form and email.",
    "",
    "## Services",
    "",
    ...offerings.map((o) => `- ${o.name}: ${o.description}`),
    "",
    "## Ways to work together",
    "",
    `- 1-on-1 in-person training (${contact.areaServed})`,
    `- Small group classes (${contact.areaServed})`,
    "- Online live coaching",
    "- Online 4–8 week programs with weekly check-ins",
    "",
    "## How it works",
    "",
    ...process.map((step, i) => `${i + 1}. ${step.title}: ${step.description}`),
    "",
    "## Credentials",
    "",
    ...credentials.map((c) => `- ${c.issuer} — ${c.title} (${c.year})`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Pages",
    "",
    `- [Home](${site.url}/): About, credentials, services, how it works, testimonials, FAQ and contact.`,
    "",
    "## Contact",
    "",
    `- Email: ${contact.email}`,
    `- Training onboarding form: ${contact.onboardingForm}`,
    ...social.map((s) => `- ${s.name}: ${s.url}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
