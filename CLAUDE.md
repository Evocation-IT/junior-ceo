# Junior CEO — One-Page Campaign Site — Build Plan

A single-page, highly animated landing page for the **Junior CEO** youth entrepreneurship program by Leadpedia. Use this as the spec inside Claude Code.

---

## 1. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **React + Vite** | Fast, component-based, good for scroll animation control |
| Styling | **Tailwind CSS** | Utility-first, quick to match the bold brand look |
| Animation | **Framer Motion** | Scroll reveals, staggered entrances, hover physics |
| Scroll effects | **react-intersection-observer** (or Framer's `whileInView`) | Trigger animations on scroll |
| Icons | **lucide-react** | Clean, consistent line icons |
| Counters | **react-countup** | Animated number stats |
| Fonts | **Poppins** (Google Fonts) | Matches the original deck |

> If a build tool isn't wanted, this can collapse to a **single `index.html`** with Tailwind CDN + vanilla JS `IntersectionObserver` + CSS keyframes. React is recommended because of the number of animated, repeating sections (curriculum, timeline, cards).

```bash
npm create vite@latest junior-ceo -- --template react
cd junior-ceo
npm i framer-motion lucide-react react-countup react-intersection-observer
npm i -D tailwindcss postcss autoprefixer && npx tailwindcss init -p
```

---

## 2. Design System

### Colors (CMYK-playful brand)
```
--jc-yellow:  #FFC629   (primary accent / CTAs)
--jc-cyan:    #00B4D8   (secondary)
--jc-magenta: #E63975   (highlights)
--jc-blue:    #2D4EF5   (from logo sunglasses)
--jc-ink:     #14161B   (near-black text/bg)
--jc-slate:   #3A3F4B   (muted text)
--jc-cloud:   #F7F8FA   (light section bg)
--jc-white:   #FFFFFF
```
Use a rotating accent per section so the page feels energetic but stays branded. Gradients: `magenta → blue`, `yellow → cyan` for hero and CTA.

### Typography
- Headings: **Poppins** 700/800, tight leading, generous size (`clamp()`).
- Body: Poppins 400/500.
- Section eyebrow labels: uppercase, letter-spaced, accent color.

### Motion language
- Entrances: fade + 24px upward slide, `ease-out`, 0.6s.
- Stagger children by 0.08–0.12s.
- Hover on cards: lift `-6px` + soft shadow + slight scale (1.02).
- Respect `prefers-reduced-motion` — disable transforms, keep opacity fades.

### Placeholders
- Logo: `/public/placeholders/logo.svg` — labelled box `[ JUNIOR CEO LOGO ]`.
- Images: `<Placeholder label="..." ratio="16/9" />` component rendering a dashed-border box with the intended subject. Easy to swap later.

---

## 3. Page Structure (section order)

Fixed nav → Hero → Intro → Mission/Vision/Goals → Program Pillars (STEAM) → Market Trends → SDG Alignment → SWOT → Socio-Economic Impact → Value Proposition → What We Do → The Journey → Curriculum Timeline → Investment → Final CTA → Footer.

---

### 3.1 Sticky Navbar
- Transparent over hero, gains solid `--jc-ink` bg + shadow after 60px scroll.
- Left: logo placeholder. Right: anchor links (Program, Curriculum, Impact, Pricing) + **"Join Now"** pill button (yellow).
- Mobile: hamburger → slide-in menu.
- Animation: slide down on load; underline-grow on link hover.

### 3.2 Hero — "Educate to Shine, Inspire to Soar"
- Full-viewport. Split layout: left text, right image placeholder (confident kid-CEO).
- Headline animates word-by-word (Framer stagger). Subline: *"The Junior CEO Program empowers young minds with entrepreneurial, leadership & innovation skills."*
- Two buttons: **Join the Program** (solid yellow), **Explore Curriculum** (ghost).
- Background: subtle animated floating CMYK dots / gradient blob drift.
- Scroll-down chevron bounce indicator.

### 3.3 Event Introduction
- Centered narrative block, max-width prose.
- Text reveals line by line. Keyword highlights (`entrepreneurial`, `leadership`, `SDGs`) in accent colors.
- Small floating decorative shapes parallaxing on scroll.

### 3.4 Mission / Vision / Goals
- 3 cards, staggered entrance.
  - **Mission:** Enable students to launch their business.
  - **Vision:** Empower youth to lead, innovate, and transform the future.
  - **Goals:** Business & social innovation with leadership knowledge for **100,000 students by 2030**.
- Each card: icon (Rocket / Eye / Target), accent top-border, hover lift.
- The "100,000" and "2030" render as **CountUp** on scroll.

### 3.5 Program Pillars — STEAM + Entrepreneurship
- Ties levels (Primary · Secondary · College/University → **STARTUP**) and the STEAM breakdown.
- Row of 6 animated tiles: **Science, Technology, Sustainability, Arts, Mathematics, Entrepreneurship** — each icon + label, flip/scale on hover, staggered in.
- Below: a small "learning ladder" showing Primary → Secondary → University → Startup with a drawing-line animation connecting them.

### 3.6 Global Market Trends
- 3 stat-driven blocks: **Global**, **ASEAN**, **Malaysia**.
- Animated stat highlights:
  - Startup ecosystem **15.4% CAGR**
  - Youth-startup funding **+22% (2023)**
  - ASEAN youth business **18.2% CAGR**
- Present as counters + short caption. Optional simple animated bar visuals (pure CSS width transitions on scroll).

### 3.7 SDG Alignment
- "Program Designed as per UN SDGs."
- Grid of SDG badge placeholders (`[ SDG 4 ]`, `[ SDG 8 ]`, `[ SDG 9 ]`, `[ SDG 10 ]`, etc.) fading/popping in with stagger. Note to user: drop official SDG icons later.

### 3.8 SWOT / Strengths & Opportunities
- Two columns: **Strengths** vs **Opportunities** (4 items each, from deck).
- Alternating slide-in from left/right. Checkmark icons. Accent left-border per item.

### 3.9 Socio-Economic Impact
- 3 pillars: **Youth Empowerment**, **Economic Growth**, **Social Development** (SDG-aligned).
- Icon cards; center one slightly elevated. Hover reveals the supporting sentence.

### 3.10 Value Proposition
- Headline: transforms students into leaders and innovators.
- 3 stacked highlight bullets, revealed sequentially:
  - Platform for youth to create social & economic change.
  - Practical, hands-on entrepreneurial training.
  - Exposure to global business strategies & market trends.
- Optional side image placeholder with parallax.

### 3.11 What We Do
- 3 cards: **A Step-by-Step Process**, **A Mindset for Success**, **Skills for Your Future** — each with its description from the deck.
- Numbered (01/02/03), staggered, hover lift.

### 3.12 The Journey — "Graduate as Junior CEO"
- Visual path: **Startup → SLT → Degree Graduate by 20 y/o**.
- Animated connecting line (SVG `pathLength` draw-on-scroll).
- Three level badges: **Basic (12 wks) → Intermediate (12 wks) → Advance (12 wks)**, each with its focus text (foundation/ideation → UX & proof of concept → marketing & pitching → operations).

### 3.13 Curriculum Timeline (14 weeks) — signature interactive section
- Horizontal (desktop) / vertical (mobile) timeline of 14 weeks:
  1 Intro to Entrepreneurship · 2 Generating Ideas · 3 Market Research & Validation · 4 Product Development · 5 Financial Literacy · 6 Marketing & Branding · 7 Sales Strategy · 8 Building a Business Plan · 9 Communication & Leadership · 10 Business Pitch Prep · 11 Business Pitch Day · 12 Final Presentation · 13 Bazaar Preparation · 14 Bazaar & Graduation.
- Each node: number bubble, title, animates in as it scrolls into view; active node highlights accent.
- Progress line fills as user scrolls through the section.

### 3.14 Investment / Pricing
- Clean pricing card, centered, elevated:
  - **RM 2,499 / student / month**
  - **RM 50** one-time registration fee.
  - Includes: Program fee, materials, trainers/industry experts' professional fees.
  - School contribution: **RM 50/student** (one-time). *T&C applied.*
- Card scales in; **"Enroll Now"** CTA pulses subtly. CountUp on the price.

### 3.15 Final CTA — "Join Our Program Now!"
- Full-width gradient band (magenta→blue).
- Big headline + **Join Now** button.
- Contact block: **Leadpedia Sdn Bhd**, Unit 19A First Floor, Lorong 8/1e, Seksyen 8, Petaling Jaya 46050, Selangor · +6012-272 8314 / +603-7495 9045 · program@leadpediaglobal.com · www.leadpediaglobal.com.

### 3.16 Footer
- Logo placeholder, quick anchor links, socials placeholder, "Organised by / Supported by" logo-placeholder row, copyright.

---

## 4. Reusable Components

```
/src/components
  Navbar.jsx
  Hero.jsx
  Section.jsx            // wrapper: padding + whileInView reveal
  SectionEyebrow.jsx     // uppercase accent label
  Placeholder.jsx        // dashed image/logo box, props: label, ratio
  Card.jsx               // hover-lift card shell
  StatCounter.jsx        // react-countup + label
  PillarTile.jsx         // STEAM tile
  TimelineWeek.jsx       // curriculum node
  JourneyStep.jsx        // level badge
  CTAButton.jsx          // variant: solid | ghost | pill
  FloatingShapes.jsx     // decorative animated CMYK dots
/src/data
  content.js             // all copy + stats in one editable file
/src/hooks
  useReducedMotion.js
```

Put **all text/stats/pricing in `content.js`** so copy edits don't touch markup.

---

## 5. Animation Recipes (Framer Motion)

```jsx
// Standard reveal
const reveal = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// Usage
<motion.div variants={container} initial="hidden"
  whileInView="show" viewport={{ once: true, margin: "-80px" }}>
  {items.map(i => <motion.div key={i.id} variants={reveal}>…</motion.div>)}
</motion.div>
```

- **Timeline line draw:** SVG `<motion.path>` with `pathLength` tied to `useScroll` progress.
- **Counters:** `<CountUp end={100000} enableScrollSpy scrollSpyOnce />`.
- **Hero blobs:** infinite `animate={{ x/y/scale }}` loops with long durations.
- Wrap all transform-based motion in a reduced-motion check.

---

## 6. Responsiveness
- Mobile-first. Hero stacks (text over image). Timeline goes vertical below `md`. Pillar row wraps to 2–3 cols. Nav collapses to drawer. Tap targets ≥ 44px.

## 7. Accessibility
- Semantic landmarks (`header/nav/main/section/footer`), `h1`→`h2` order.
- Alt text on placeholders describing intended image. Focus-visible rings on buttons. `prefers-reduced-motion` honored. Contrast-check yellow text (use dark text on yellow).

## 8. Build Order (suggested)
1. Scaffold Vite + Tailwind + fonts + color tokens.
2. `Section`, `Placeholder`, `CTAButton`, `content.js`.
3. Navbar + Hero (get the motion feel right here first).
4. Static sections top-to-bottom using `content.js`.
5. Signature interactive pieces: STEAM tiles, Journey line, 14-week timeline, counters.
6. Final CTA + footer.
7. Polish pass: reduced-motion, mobile, contrast, swap-ready placeholders.

## 9. Handoff Notes
- Replace `/public/placeholders/*` with real logo + photos.
- Drop official UN SDG icons into section 3.7.
- All copy lives in `src/data/content.js`.
