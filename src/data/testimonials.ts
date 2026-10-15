/**
 * Client testimonials. Extracted from the hard-coded HTML in the Hugo
 * testimonials partial so they are editable and can power schema.org Review
 * markup.
 */

export interface Testimonial {
  name: string;
  quote: string;
}

/**
 * Short, punchy pull-quotes surfaced as an editorial lead-in above the full
 * verbatim testimonials. Each is a (near-)verbatim fragment from a review.
 */
export interface Highlight {
  phrase: string;
  name: string;
}

export const highlights: Highlight[] = [
  { phrase: "A force of nature", name: "Pin" },
  { phrase: "One of the strongest people I know", name: "Burke" },
  { phrase: "Growth I can measure", name: "Heather" },
  { phrase: "Progress without injuries", name: "Asa" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Burke",
    quote:
      "Full disclosure, Marcela is a friend, but she’s still one of the strongest people I know and when it was time to get myself back in shape, I knew she was the one to hire. Her workout programs and availability were personally suited for both me and my wife without any special treatment and she has always been supportive and conducive to us achieving our goals with well-balanced routines and safety measures. Additionally, her communication and patience have been top-notch in the gym teaching us new training techniques, and understanding new equipment regularly while constantly checking in with us not only in the gym but even online as well.",
  },
  {
    name: "Heather",
    quote:
      "I have made tremendous growth with Marcela’s guidance - growth I can measure because I have the data for it. Marcela shares her expertise in the best of ways. She knows where to start and how to build on. She’s supportive. But she pushes me, too. I look forward to our sessions together!",
  },
  {
    name: "Pin",
    quote:
      "I have been on many different personal training and fitness routines over the past decade. I’ve had many experiences across various highly reputable gyms - from branded personal training studios, and highly commercialized fitness gyms to boutique set-ups. And I thought I had learned it all. But starting my training journey with Marcella a couple of months ago, opened up my horizon to what I understood about fitness, wellness, nutrition, health, and most importantly incorporating that as a core element of lifestyle, instead of fad trends. Marcela’s deep knowledge and experience of anatomy, mobility, and sports is way under-tapped, and I must say exceeds a lot that I have encountered with. Training sessions feel like peeling an onion; new session - new knowledge, busting myths, tips for cravings, sustainable routines and mindsets. Haven’t even mentioned the fact that her genuine and passionate nature makes each training a firm but fun one. I’ve invested tens of thousands of dollars into fitness regimes and PTs but hands on heart - the ROI of training with Marcella is immense and way beyond physical results! Marcela is a force of nature! 🔥",
  },
  {
    name: "Asa",
    quote:
      "I was looking for a trainer for flexibility and weight training, who understands my body type and aerial art. It is not very easy. Marcela understands in-side-out with experience more than 10 years on aerial practice/show and body conditioning. Not only that, she always develops additional skills to enhance the aerialist's performance holistically. She spent time to know me: physically and mentally. The assessment was done with care. The personalized program was created to my needs. Safety was introduced at the first session and well explained. I saw my progress consistently without injuries. I highly recommend Marcela if you are looking for an effective customized program to improve and reach your fitness goal.",
  },
  {
    name: "Windy",
    quote:
      "I've been training with Marcela for five months, both in person and online, and I’m really happy with the experience. The exercise programs she created were not only targeted and effective, but also balanced to be challenging yet achievable so that I can progress without feeling overwhelmed. Beyond physical goals, she has also helped me increase my body awareness and understand more about how my muscles work. This has been incredibly useful in enabling me to train independently outside our sessions.",
  },
];

/** Testimonials by client name, in the order given (unknown names skipped). */
export const testimonialsByName = (names: string[]): Testimonial[] =>
  names.flatMap((name) => testimonials.filter((t) => t.name === name));
