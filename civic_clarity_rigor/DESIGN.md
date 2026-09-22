---
name: Civic Clarity & Rigor
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#0051d5'
  on-tertiary: '#ffffff'
  tertiary-container: '#316bf3'
  on-tertiary-container: '#fefcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Work Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.05em
  citation-apa:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an institutional, transparent, and democratic space designed for citizen oversight, legislative comprehension, and public debate. The visual narrative merges the authority and sobriety of a constitutional library with the agility and clarity of contemporary digital journalism.

### Persona & Narrative
- **Tone:** Impartial, intellectually rigorous, empowering, and accessible.
- **Audience:** Engaged citizens, investigative journalists, policy researchers, students, and institutional observers seeking unmanipulated legislative and electoral data.
- **Emotional Response:** Inspires trust, civic agency, intellectual clarity, and institutional neutrality. It avoids sensationalist editorial tropes in favor of clean information architecture and evidence-based interfaces.

### Aesthetic Movement: Editorial Modernist Civic Tech
The interface avoids heavy, distractingly skeuomorphic effects and loud gradients. Instead, it leans on **warm editorial modernism**:
- Warm ivory/cream foundation that reduces reading fatigue compared to harsh sterile whites.
- High-contrast slate typography to enforce structural gravity.
- Strategic emerald civic accents reminiscent of verified state seals, voting ballots, and civic action indicators.
- Academic rigor evidenced through native citation layouts (APA 7th style), precise categorical tagging, and clear data viz for parliamentary seating and legislative bills.

## Colors

The palette establishes an immediate hierarchy between institutional stability, civic action, and legislative topic categorizations.

### Foundational Colors
- **Primary Civic Green (`#059669` / `#10B981`):** Represents civic participation, consensus, affirmative voting outcomes, and actionable citizen actions. Directly derived from the brand mark's vivid accent.
- **Deep Slate/Institutional Navy (`#0F172A` / `#1E293B`):** The primary color for typography, executive headers, parliamentary seat frames, and structural containers. Provides high-contrast legibility adhering strictly to WCAG 2.1 AAA standards.
- **Ivory / Warm Canvas (`#F9F8F6` / `#F3F0EA`):** The base atmospheric tone directly referencing the brand logotype background. Softens contrast while retaining high legibility.
- **Surface Crisp (`#FFFFFF`):** Reserved for elevated content cards, citation boxes, interactive voting modals, and bill progress containers.

### Topic Taxonomic Colors
Legislative and policy categories utilize distinct, calibrated hues paired with specific soft surface tones:
- **Salud (Health):** Cyan / Turquoise (`#0891B2`, surface: `#ECFEFF`)
- **Economía (Economy & Budget):** Amber / Warm Gold (`#D97706`, surface: `#FFFBEB`)
- **Ambiente (Environment & Territory):** Forest Emerald (`#047857`, surface: `#ECFDF5`)
- **Congreso (Legislative & Institutional):** Slate Indigo (`#4338CA`, surface: `#EEF2FF`)
- **Elecciones (Electoral & Partisan):** Deep Violet (`#7C3AED`, surface: `#F5F3FF`)

### Functional & Feedback Tones
- **Approved / Enacted:** Emerald (`#10B981`)
- **In Commission / Review:** Amber (`#F59E0B`)
- **Rejected / Archived:** Crimson (`#DC2626`)
- **Neutral Rule Border:** Warm Sandstone (`#E5E0D8`)

## Typography

The typographic hierarchy pairs the structured, geometric authority of **Space Grotesk** for display, headings, and quantitative metrics with the humanist neutrality of **Work Sans** for extended legislative reading, civic opinions, and technical annotations.

### Hierarchy & Editorial Rules
- **Display & Headlines (`Space Grotesk`):** Echoes the geometry of the brand's logo mark. Numbers, bill IDs (e.g., *PL 1042/2024*), and section anchors are set with tight tracking (`-0.02em`) to project architectural structure.
- **Body & Citations (`Work Sans`):** Optimized for long-form parliamentary bills, legal texts, and public debate feeds. Maintains an open aperture and tall x-height for readability on mobile screens.
- **Citations (APA 7th Edition Specification):** Academic references and official gazettes are rendered in `citation-apa` with a distinctive hanging indent of `1.5rem` (`24px`), italicized publication/journal containers, and direct link styling in muted slate `#475569` with an underline offset of `3px`.

## Layout & Spacing

The system is calibrated around a disciplined 8-point spatial grid with a 12-column layout on desktop, condensing systematically across viewports.

### Responsive Grids & Canvas
- **Desktop (≥ 1200px):** 12 columns, max-width `1280px` centered, `gutter`: `1.5rem` (`24px`), `margin`: `2rem` (`32px`). Designed for three-pane analytical layouts: Left navigation/filters (3 cols), Center legislative content/timelines (6 cols), Right interactive curules/sources (3 cols).
- **Tablet (768px – 1199px):** 8 columns, `gutter`: `1rem` (`16px`), `margin`: `1.5rem` (`24px`). Secondary analytical panels collapse into slide-over sheets or stacked tabs.
- **Mobile (< 768px):** 4 columns, `gutter`: `0.75rem` (`12px`), `margin`: `1rem` (`16px`). Linear chronological stack. Interactive parliamentary hemicycle views offer horizontal pinch-to-zoom and segment selector chips.

### Spacing Density & Rhythm
- High content density is balanced by generous whitespace around major sections (`space-xl`), while data-dense structures (curul indicators, metadata strips, voting lists) rely on tight increments (`space-xs` and `space-sm`) to keep context intact.

## Elevation & Depth

This design system rejects deep blur dropshadows and glossy treatments in favor of **Crisp Architectural Elevation**, combining subtle structural borders with low-intensity, tinted ambient shadows.

### Depth Tiers
1. **Base Layer (Level 0 - `#F9F8F6`):** The primary cream canvas. No shadow, anchoring the editorial reading experience.
2. **Surface Flat (Level 1 - `#FFFFFF`):** Cards, timeline segments, and bill summaries. Bound by a crisp `1px solid #E5E0D8` border. No drop shadow is applied at rest, ensuring high informational cleanliness.
3. **Interactive & Focus (Level 2):** Elevated cards on hover or expanded state. Shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 4px -1px rgba(15, 23, 42, 0.03)`, with border shifting from `#E5E0D8` to `#CBD5E1`.
4. **Floating Overlays & Curul Tooltips (Level 3):** Modal dialogs, MP/Congressperson inspection popovers, and sticky voting bars. Shadow: `0 12px 32px -4px rgba(15, 23, 42, 0.10), 0 4px 8px -2px rgba(15, 23, 42, 0.04)`, bordered by `1px solid #0F172A/10`.

## Shapes

The shape vocabulary uses restrained, architectural corner radiuses (`roundedness: 1` — Soft, 4px base radius) to communicate institutional precision, avoiding overly playful or child-like pill forms on core content cards.

### Shape Conventions
- **Cards, Panels & Data Containers:** `rounded-sm` (4px) to `rounded-md` (8px). Maintains razor-sharp geometric alignment for complex civic tables and timelines.
- **Topic Badges & Categorical Tags:** `rounded-sm` (4px) with uppercase tracking.
- **Interactive Buttons & Form Inputs:** `rounded-sm` (4px) to keep a stable, civic-registry feel.
- **Hemicycle Curules & Avatars:** Curul dots utilize perfect geometric circles (`rounded-full`), scaling between 8px and 16px depending on chamber capacity.

## Components

### 1. Buttons & Civic Actions
- **Primary Civic Action ("Sé parte", "Votar", "Suscribir"):** Background `#059669`, text `#FFFFFF`, font `Space Grotesk` Medium (`14px`), border radius `4px`. Hover state transitions to `#047857` with a subtle elevation shift. Focus outline: `2px solid #059669` offset by `2px`.
- **Institutional Secondary ("Ver Expediente", "Descargar Dictamen"):** Background `#FFFFFF`, border `1px solid #0F172A`, text `#0F172A`. Hover: background `#0F172A`, text `#FFFFFF`.
- **Tertiary / Link ("Leer más", "Ver historial"):** Background transparent, text `#059669`, with an animated underline on hover.

### 2. Category & Status Badges (Thematic Chips)
- Displayed with `padding: 2px 8px`, `font-size: 11px`, `font-weight: 600`, `letter-spacing: 0.04em`, uppercase, `border-radius: 4px`.
- **Salud:** `#0891B2` on `#ECFEFF` with `border: 1px solid #CFFAFE`.
- **Economía:** `#D97706` on `#FFFBEB` with `border: 1px solid #FDE68A`.
- **Ambiente:** `#047857` on `#ECFDF5` with `border: 1px solid #A7F3D0`.
- **Congreso:** `#4338CA` on `#EEF2FF` with `border: 1px solid #C7D2FE`.
- **Elecciones:** `#7C3AED` on `#F5F3FF` with `border: 1px solid #DDD6FE`.

### 3. Cards (Legislative Bill & Debate Cards)
- Pure white container (`#FFFFFF`), `border: 1px solid #E5E0D8`, `border-radius: 6px`, `padding: space-md` to `space-lg`.
- Top row aligns thematic badge, official legislative number (e.g., *Proyecto de Ley 4921/2023-CR*), and date.
- Title rendered in `headline-sm` (`Space Grotesk`), followed by a 2-line plain-language summary in `body-sm`.
- Footer displays commission author tags, current status indicator (e.g., *Dictamen Favorable*, *En Debate Plenario*), and citizen opinion pulse (Agree / Disagree percentage bar).

### 4. Interactive Hemicycle / Curules Map (Mapa de Curules)
- Semicircular SVG visualization representing the legislative floor.
- Individual seat dots: `10px` circles with `1.5px` transparent border. Colors mapped to political benches or vote stance (Green: A favor, Red: En contra, Yellow: Abstención, Grey: Ausente).
- On hover/tap: Instantly triggers a `Level 3` floating inspection card displaying MP photo, caucus name, attendance rate, and voting rationale with verified APA reference.

### 5. Legislative Chronological Timeline
- Vertical or horizontal spine drawn in `1.5px solid #E5E0D8`.
- Milestone nodes: `12px` solid rings. Passed phases are filled with `#059669`; active phase blinks with a soft concentric ping; pending phases are hollow grey `#CBD5E1`.
- Dates set in `Space Grotesk` tabular figures to guarantee vertical alignment.

### 6. APA 7th Edition Citation Block
- Container: `#F3F0EA`, border-left: `3px solid #0F172A`, `padding: 12px 16px`, `margin-top: 16px`.
- Text styled in `citation-apa` with hanging indent formatting.
- Includes quick-copy button ("Copiar APA 7"), DOI direct hyperlink, and archival verification stamp (e.g., "Verificado en Diario Oficial El Peruano / Gaceta Parlamentaria").

### 7. Form Controls & Opinion Pulse
- **Inputs:** Clean white box, `border: 1px solid #CBD5E1`, placeholder `#94A3B8`, focused ring `2px solid #059669`.
- **Checkboxes & Radios:** Sharp `2px` corners for checkboxes, circular for radios; checked state filled with `#059669` featuring crisp white glyph.
- **Opinion Meter:** Split progress bar comparing citizen sentiment with parliamentary vote outcome for transparent contrast.