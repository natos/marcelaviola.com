/**
 * "How it works" — the coaching process, in order. Rendered on the home page
 * and reused by the service pages.
 */

export interface ProcessStep {
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    title: "Get in touch",
    description:
      "Fill in the onboarding form or send an email with your goals, training history and routine.",
  },
  {
    title: "Assessment",
    description:
      "We look at how you move, what has held you back so far, and what matters most to you.",
  },
  {
    title: "Your program",
    description:
      "A personalised plan for strength, mobility, nutrition or all three, built around your schedule.",
  },
  {
    title: "Train and check in",
    description:
      "Train together in person or online, with regular check-ins to adapt the plan as you progress.",
  },
];
