/**
 * Frequently asked questions. Rendered on the home page and emitted as
 * schema.org FAQPage markup, so search engines and AI assistants can quote
 * the answers directly.
 *
 * Every answer restates something already on the site. Pricing, session
 * length and training locations are deliberately missing until Marcela
 * confirms them — add them here when she does.
 */

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Who do you coach?",
    answer:
      "Everyday people and athletes: complete beginners who don't know where to start at the gym, experienced lifters who aren't seeing results, aerialists and performers, and clients before and after pregnancy.",
  },
  {
    question: "Do I need any gym experience?",
    answer:
      "No. Whether you are brand new to training or have been at it for years, your program starts from where you are today and progresses at a pace that is challenging but achievable.",
  },
  {
    question: "Do you coach in person or online?",
    answer:
      "Both. Marcela offers 1-on-1 in-person training and small group classes in Singapore, live online coaching, and 4–8 week online programs with weekly check-ins for clients anywhere in the world.",
  },
  {
    question: "What happens when I get started?",
    answer:
      "You fill in a short onboarding form about your goals, training history and routine. Marcela then assesses how you move and what matters to you, builds a personalised program, and checks in regularly to adapt it as you progress.",
  },
  {
    question: "What does nutrition coaching include?",
    answer:
      "Building better habits around food and learning to fuel for your activity level. For specific goals it can cover calorie targets, body recomposition, macro planning, meal prepping, eating out while staying on track, and grocery lists.",
  },
  {
    question: "Can mobility training help with back or neck pain?",
    answer:
      "Mobility coaching combines flexibility work with the strength needed to support your muscles and joints, which can ease nagging aches and help prevent recurring injuries. It is not a substitute for medical treatment, so see a doctor or physiotherapist about pain that is severe or getting worse.",
  },
  {
    question: "Can I train during or after pregnancy?",
    answer:
      "Yes. Marcela is a Girls Gone Strong Certified Pre & Postnatal Coach. Check with your doctor or midwife before you start, then training is adapted to where you are in pregnancy or recovery.",
  },
  {
    question: "What qualifications does Marcela have?",
    answer:
      "NASM International Certified Personal Trainer, Eleiko Weightlifting Level 1, Girls Gone Strong Certified Pre & Postnatal Coach, Precision Nutrition Level 1, Master Flexibility Training (Flexibility Research) and Ashtanga Yoga Teacher Training, plus 20 years as an aerialist, yoga teacher and strength coach.",
  },
];
