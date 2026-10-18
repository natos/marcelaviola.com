# Guides design system · v0.1 (exploration)

Status: **exploring directions**. Everything in sections 1–4 comes from Marcela's lookbook and holds whichever direction we choose. Section 5 lists what each direction proposes. Section 6 lists the decisions still open.

Source: [Visual Identity Lookbook](https://app.notion.com/p/Visual-identity-lookbook-3f8c4e70a1e68069afcefe73ff86857f) ([snapshot](lookbook/visual-identity-lookbook.md)).

---

## 1. Principles

From lookbook §1.6 and §2.5. Use them to judge every page.

| Principle | What it means on the page |
| --- | --- |
| **Easy to enter** | The cover gives the title, what the reader gains, and the topic at a glance |
| **Easy to navigate** | Descriptive headings, short sections, a section label on every page |
| **Easy to learn from** | One idea per page, backed by a diagram, example or stat |
| **Easy to act on** | Every guide ends with a checklist or action plan |
| **Space to breathe** | Leans minimalist. Energy comes from colour and type, not from more stuff |
| **Confident, not intimidating** | Strong type and contrast. No aggressive fitness imagery, nothing clinical |

The brand is **Fresh, Clean, Professional, Practical, Strong**. Design keywords: *Empower, Active, Confident, Movement, Meaningful.*

## 2. Colour

Tokens: [`tokens.css`](tokens.css).

### Core palette

| Token | Hex | Role |
| --- | --- | --- |
| `--swm-aubergine` | `#45264F` | Headings, body text, visual anchors, dark surfaces |
| `--swm-orchid` | `#8755A0` | Signature purple: section labels, icons, highlights |
| `--swm-blush` | `#F2C2D1` | Tips, callouts, small illustrative details |
| `--swm-lavender` | `#E4D7F1` | Info panels, diagrams, secondary backgrounds |
| `--swm-white` | `#FCFAFD` | Page background |

### Topic accents

One per collection. Each guide uses its topic colour for its accents and keeps the core palette for everything else.

| Topic | Token | Hex |
| --- | --- | --- |
| Nutrition | `--swm-topic-nutrition` | `#D995A8` Dusty Rose |
| Training | `--swm-topic-training` | `#8C78B8` Warm Purple |
| Mobility | `--swm-topic-mobility` | `#9CAF9A` Soft Sage |
| Lifestyle | `--swm-topic-lifestyle` | `#C5B8A3` Warm Sand |
| Aerial | `--swm-topic-aerial` | `#986B91` Muted Berry |

### Contrast rules (WCAG 2.1 AA, measured)

The lookbook palette is soft, so text colour is where it can fail. Measured ratios:

| Text on → | Soft White | Lavender | Blush |
| --- | --- | --- | --- |
| Aubergine | **12.3** ✅ | **9.3** ✅ | **8.2** ✅ |
| Orchid | **5.3** ✅ | 4.0 large only | 3.5 large only |
| Training | 3.7 large only | 2.8 ❌ | 2.4 ❌ |
| Aerial | 4.2 large only | 3.2 ❌ | 2.8 ❌ |
| Nutrition / Mobility / Lifestyle | 1.9–2.3 ❌ | ❌ | ❌ |

Rules that follow:

1. **Body text is always Aubergine.** On dark pages, Soft White.
2. **Orchid works as text only on Soft White.** On lavender or blush, use it for large headings only (24px+, or 19px+ bold).
3. **Topic colours are never text on light backgrounds.** Use them as fills, dots, bars and chart marks.
4. **Text on a topic fill:** Aubergine on Nutrition (5.4), Mobility (5.5) and Lifestyle. White on Training (3.8) and Aerial (4.3), large text only.

## 3. Page format

The lookbook says **phone first, tablet and laptop second**, delivered as PDF. Proposal used in every direction:

- **Page: 6 × 9 in portrait (576 × 864 px at 96 dpi).** A 2:3 page fits a phone screen without bars eating the text. It still prints well, and 6 × 9 is a standard book size.
- **Type is sized for the phone, not for print.** Body is 20px on a 576px page. On a 390px-wide phone that reads like ~13.5px. A5 with normal print type (10–11pt) would shrink to ~5pt on a phone, which is unreadable.
- **Margins 44px.** Content width 488px gives about 45–50 characters per line, which suits a phone.
- **Minimum text size 14px** (captions, footers).

### Type scale (all directions)

| Token | px | Use |
| --- | --- | --- |
| `--swm-text-xs` | 14 | Captions, labels, running footer |
| `--swm-text-sm` | 16 | Tables, callouts, step text |
| `--swm-text-base` | 20 | Body |
| `--swm-text-md` | 25 | Sub-heads, pull quotes |
| `--swm-text-lg` | 32 | Page headings (varies by direction) |
| `--swm-text-xl` | 44 | Stats |
| `--swm-text-2xl` | 64 | Cover titles (varies by direction) |

Spacing runs on an 8px grid. Radii are 10 / 18 / 32px plus pill. Rounded edges come straight from the moodboard summary (lookbook §3.2).

## 4. Templates and components

### Templates (lookbook §7.2)

| Template | Shown in the directions |
| --- | --- |
| Cover page | ✅ |
| Introduction | — |
| Educational content | ✅ heading, body, stat, diagram, tip |
| Checklist / action plan | ✅ checklist, week planner, sign-off |
| Recipe / example | ✅ as an exercise session and how-to |
| Summary / final thoughts | — |
| References / resources | — |

### Components (lookbook §7.4)

| Component | Rule |
| --- | --- |
| **Tip / callout** | Blush background, Aubergine text, optional lightbulb icon. One or two sentences |
| **Key stat** | Large number in Orchid or Blush (dark pages) plus one sentence with its source |
| **Diagram** | Soft curves, brand colours, labels on the marks. Say "Illustrative" when not to scale |
| **Table / session** | Exercise · sets × reps · rest. Tabular numbers. Highlight with fills, not grid lines |
| **Step-by-step** | Numbered, one action per step, under 12 words where possible |
| **Checklist** | Empty checkboxes, action verbs first, one line each |
| **Sign-off** | Short encouraging line plus Marcela's handwritten signature (the "personal touch" from §3.2) |
| **Running footer** | Guide name plus page number |

## 5. The five directions

Every direction uses the same sample content (*Strong Foundations*, Training guide 01) so Marcela compares design, not copy. Open [`../directions/index.html`](../directions/index.html).

| # | Direction | Type | Idea | Best if Marcela wants… |
| --- | --- | --- | --- | --- |
| 01 | **Signature** | Plus Jakarta Sans | Arch-cropped photos, lavender panels, signature as the recurring personal mark | The lookbook taken literally. Safest, warmest |
| 02 | **Bold Editorial** | Bebas Neue + Work Sans | The website's fonts in the new palette. Huge condensed headlines, oversized section numbers | A clear link to marcelaviola.com and the most "Strong" energy |
| 03 | **Organic Flow** | Figtree | Blobs, pebble crops, pills, a dotted path through the steps | Illustration-led, the softest and most approachable |
| 04 | **Colour Block** | Archivo (expanded) | Each guide owns its topic colour as a full field. Chunky tiles | The collection to read as a system on a shelf or store page |
| 05 | **Aubergine** | Manrope | Dark covers and closers, light reading pages, blush as the only spark | A premium feel that justifies a paywall |

All five fonts are free (SIL Open Font License) and install on a Mac, so they work in Pages.

### Round 2: cover from 02, reading pages from 01

Natan's feedback on round 1: the 02 cover plus the 01 reading pages. Round 2 starts from exactly that (06) and varies the cover and the typography. The 01 page layouts stay the same in all six.

| # | Direction | Type | What changes |
| --- | --- | --- | --- |
| 06 | **Hybrid** | Bebas Neue (cover only) + Plus Jakarta Sans | The requested combination, as is |
| 07 | **Arch Panel** | Bebas + Jakarta | Photo with a Soft White arch panel. Bebas used for numbers inside |
| 08 | **Split** | Bebas + Jakarta | Photo over an aubergine block. Aubergine band on every page |
| 09 | **Framed** | Barlow Condensed + Barlow | Rounded photo frame, italic condensed title, uppercase headings |
| 10 | **Topic Duotone** | Bebas + Jakarta | Cover photo tinted in the topic colour. Adds a collection page |
| 11 | **Arch Light** | Bebas + Jakarta | Light cover with an arch portrait. Bebas headings inside |

The open question in round 2 is how far Bebas goes: the cover only (06), numbers (07), or all headings (11). The cover-only version keeps the reading pages calmest. Bebas headings link more strongly to the website.

## 6. Open decisions

| Decision | Recommendation | Why it matters |
| --- | --- | --- |
| **Where templates live: HTML or Pages?** | HTML → PDF for production, Pages for quick one-offs | The lookbook asks for templates "easy to edit in Pages". Pages can't do topic theming, auto page numbers across templates, or generate many guides from one source. HTML can, and it prints straight to PDF |
| **Link to the mother brand** | Keep the purple palette. Borrow either the fonts (02) or the dark mood (05) from the site | The site is black, hot pink and Bebas Neue. The lookbook lists "disconnected from the mother brand" as something to avoid, yet its palette shares nothing with the site |
| **Page size** | 6 × 9 in (above) | Every layout depends on it. Confirm before refining a direction |
| **Paywall delivery** | Decide later. The design doesn't depend on it | Options: Gumroad / Lemon Squeezy / Stripe links from the site |
| **Lookbook §9 (technical)** | Fill in with Marcela: file size, links, naming, licensing | Still blank in the lookbook |
| **Miro moodboard** | Get access and add the key references here. The connected Miro account (Affinidi team) can't open the board yet | Lookbook §3–4 and sample pages point to it |
