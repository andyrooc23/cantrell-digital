# Cantrell Digital — Quietly Cultivated Design System

This specification defines a system, not a fixed mockup. Values may be tuned during visual implementation, but changes should remain semantic and consistent.

## 1. Foundations

### 1.1 Color palette

#### Core colors

| Token | Value | Intended use |
| --- | --- | --- |
| `canvas` | `#F4F0E6` | Default page background |
| `canvas-soft` | `#FAF8F2` | Elevated light surfaces and inputs |
| `surface` | `#E9E1D2` | Cards, bands, quiet grouping |
| `surface-deep` | `#DCCFBA` | Emphasized cards and image placeholders |
| `ink` | `#20241F` | Primary text |
| `ink-muted` | `#5F655B` | Secondary text |
| `moss` | `#506044` | Secondary actions, icons, accents |
| `moss-deep` | `#34402E` | Dark sections and strong controls |
| `clay` | `#C08064` | Primary action background and key markers |
| `ochre` | `#C49A55` | Sparing highlight and status accent |
| `line` | `#CFC6B5` | Dividers and borders |
| `line-strong` | `#AFA48F` | Controls and emphasized dividers |
| `success` | `#3E6748` | Success status |
| `error` | `#9A4438` | Validation and errors |

#### Color usage rule

Use the 70/20/10 ratio as a guide:

- 70% parchment and light neutral surfaces.
- 20% ink and moss structure.
- 10% clay/ochre emphasis, including buttons and small marks.

Clay is not a text color for small copy. It is a fill or decorative accent paired with dark ink. The proposed primary combinations were pre-checked for contrast:

| Foreground / background | Approximate contrast | Intended result |
| --- | ---: | --- |
| `ink` / `canvas` | 13.84:1 | AAA body text |
| `ink-muted` / `canvas` | 5.27:1 | AA body text |
| `moss-deep` / `canvas` | 9.62:1 | AAA body text |
| `canvas-soft` / `moss-deep` | 10.31:1 | AAA inverse text |
| `ink` / `surface` | 12.12:1 | AAA body text |
| `ink` / `ochre` | 6.07:1 | AA body text |

Re-test final colors with automated and manual accessibility checks after implementation. Antialiasing, font weight, gradients, and imagery can affect real-world legibility.

### 1.2 Typography

#### Recommended families

- **Display:** Newsreader, variable weight 400–600, open-source OFL.
- **Interface/body:** Manrope, variable weight 400–700, open-source OFL.
- **Fallback display:** Georgia, `Times New Roman`, serif.
- **Fallback body:** system UI stack.

Use `next/font/google` so font files are self-hosted by the built application. Limit loaded axes and weights to those actually used.

#### Roles

| Role | Desktop | Mobile | Weight / line height | Notes |
| --- | --- | --- | --- | --- |
| Display XL | `clamp(4rem, 7.5vw, 7.5rem)` | fluid | 450 / 0.92 | Hero only; slight negative tracking |
| Display L | `clamp(3rem, 5vw, 5.25rem)` | fluid | 450 / 0.98 | Major section statement |
| Heading 1 | `clamp(2.5rem, 4vw, 4.25rem)` | fluid | 500 / 1.02 | Internal page hero |
| Heading 2 | `clamp(2.125rem, 3.2vw, 3.5rem)` | fluid | 500 / 1.06 | Section heading |
| Heading 3 | `1.625rem–2rem` | `1.5rem` | 500 / 1.15 | Card titles |
| Lead | `1.25rem` | `1.125rem` | 450 / 1.55 | Introductory copy |
| Body L | `1.125rem` | `1.0625rem` | 450 / 1.65 | Long-form and descriptions |
| Body | `1rem` | `1rem` | 450 / 1.6 | Default UI copy |
| Small | `0.875rem` | `0.875rem` | 500 / 1.5 | Metadata and support |
| Eyebrow | `0.75rem` | `0.75rem` | 700 / 1.2 | Uppercase; tracking `0.14em` |

Rules:

- Serif is used for promises, section titles, project titles, large numbers, and selected pull quotes.
- Sans serif is used for navigation, labels, buttons, body text, form fields, prices, and technical details.
- Keep body measures between 45 and 72 characters.
- Never use all caps for sentences or buttons; reserve it for short eyebrow labels.
- Use true typographic apostrophes where copy is controlled.

### 1.3 Spacing

Base unit: `4px`.

| Token | Value | Common use |
| --- | ---: | --- |
| `space-1` | 4px | Icon micro-gap |
| `space-2` | 8px | Inline gap |
| `space-3` | 12px | Compact controls |
| `space-4` | 16px | Default small gap |
| `space-5` | 20px | Card internals |
| `space-6` | 24px | Mobile section internals |
| `space-8` | 32px | Desktop card internals |
| `space-10` | 40px | Group separation |
| `space-12` | 48px | Major internal separation |
| `space-16` | 64px | Mobile section padding |
| `space-20` | 80px | Tablet section padding |
| `space-24` | 96px | Desktop section padding |
| `space-32` | 128px | Large desktop transitions |

Prefer `clamp()` for section padding: `clamp(4rem, 9vw, 8rem)`.

### 1.4 Grid and containers

- Maximum content width: `1280px`.
- Reading container: `720px`.
- Wide text/image container: `1120px`.
- Page gutters: `20px` mobile, `32px` tablet, `48px` desktop, `64px` wide desktop.
- Desktop grid: 12 columns, 24px gutter.
- Tablet grid: 8 columns, 20px gutter.
- Mobile grid: 4 columns, 16px gutter.
- Breakpoints should follow content needs; initial targets: 640, 768, 1024, and 1280px.

Avoid centering every section. Alternate left-weighted editorial compositions with balanced grids.

### 1.5 Geometry

Nature Distilled feels organic because shapes vary within a controlled family.

| Token | Value | Use |
| --- | --- | --- |
| `radius-control` | 999px | Primary/secondary buttons, pills |
| `radius-input` | 14px | Form controls |
| `radius-card-sm` | 18px 18px 24px 18px | Compact cards |
| `radius-card` | 28px 28px 40px 28px | Standard cards |
| `radius-card-lg` | 48px 48px 72px 48px | Feature sections |
| `radius-image-a` | 44px 44px 120px 44px | Portrait/vertical images |
| `radius-image-b` | 100px 36px 36px 36px | Alternate image mask |

Rules:

- Organic does not mean random. Use the defined shapes consistently.
- Nested elements should have a smaller related radius.
- On screens below 480px, reduce large radii by roughly 30%.
- Do not clip text or interactive content into irregular shapes.

### 1.6 Borders and shadows

- Default border: `1px solid line`.
- Strong border: `1px solid line-strong`.
- Dark-section border: `1px solid rgba(250, 248, 242, 0.18)`.
- Card shadow: `0 20px 60px rgba(52, 64, 46, 0.08)`.
- Hover shadow: `0 28px 72px rgba(52, 64, 46, 0.13)`.
- Buttons should not use a glow.
- Images may use a hard 8px offset “paper layer” instead of a shadow.

### 1.7 Texture

Use a tiny, locally hosted, seamless monochrome noise asset or CSS/SVG data texture at 1.5–2.5% opacity.

- Apply once at the page-shell level, not independently on every card.
- Texture must be `pointer-events: none`.
- Avoid loading a large raster texture.
- Remove it under Windows High Contrast/forced colors.
- Never place texture over small text at an opacity that reduces clarity.

### 1.8 Iconography and line art

- Use 1.5px or 1.75px strokes with rounded joins.
- Default icon sizes: 18, 20, and 24px.
- Use icons to clarify function, not decorate every heading.
- Custom contour lines should be simple SVGs, hidden from assistive technology.
- Avoid filled tech icons and multicolor icon tiles.

## 2. Motion system

Motion should feel like settling paper, a branch returning to rest, or a slow reveal—not bouncing UI.

### Durations

| Token | Duration | Use |
| --- | ---: | --- |
| `instant` | 100ms | Press feedback |
| `fast` | 180ms | Color, border, small control |
| `base` | 280ms | Hover transform, menus |
| `slow` | 520ms | Section reveal, image mask |
| `ambient` | 900ms | One-time hero composition |

### Easings

- Standard: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Enter: `cubic-bezier(0.16, 1, 0.3, 1)`.
- Exit: `cubic-bezier(0.4, 0, 1, 1)`.

### Allowed motion

- Fade plus 8–16px vertical translation for section entrances.
- 2–4px card lift on hover.
- Image scale from 1 to 1.025 on pointer hover.
- Underline growth or arrow translation in links.
- Progress fill and step transitions in the questionnaire.
- Very light, viewport-limited parallax of a decorative contour only.

### Prohibited motion

- Scroll hijacking.
- Looping hero animations.
- Large cursor followers.
- Text splitting that harms screen-reader output.
- Movement that blocks interaction until complete.
- Parallax on primary content or mobile.

### Reduced motion

Under `prefers-reduced-motion: reduce`:

- disable transforms and parallax;
- set durations to near-zero;
- retain immediate state changes;
- never hide content pending an animation.

## 3. Component inventory

### 3.1 Global shell

#### Header

- 72px desktop / 64px mobile initial height.
- Transparent over the canvas, then a lightly opaque parchment surface with a 1px divider after scrolling.
- Left: wordmark.
- Center/right: Work, Services, About. Process and scope/pricing remain page sections.
- Rightmost: `Start a project` compact primary button.
- Mobile: wordmark and Menu trigger; full-screen or large-sheet menu with visible close control and focus management.

#### Footer

- Dark moss surface with inverse text.
- Large final statement, direct email, navigation groups, legal/product links.
- Includes copyright and a short technology/availability note only if useful.
- Mindful Eating belongs under `Products`, not main agency navigation.

### 3.2 Buttons

#### Primary

- Clay fill with ink text.
- Pill shape, 48px minimum height, 20–26px horizontal padding.
- Hover: slightly darker fill, 2px upward translation.
- Focus: 3px outline using canvas plus moss outer ring.

#### Secondary

- Transparent or canvas-soft fill, moss-deep text, moss border.
- Same size and focus treatment as primary.

#### Text link

- Inline arrow or arrow-up-right icon.
- Underline appears/grows on hover but text remains identifiable without hover.

No more than two equal-weight buttons in one action group.

### 3.3 Section heading

An optional eyebrow, a serif heading, and an optional 1–3 sentence introduction. Variants: left, centered (rare), split with text on the right.

### 3.4 Project card

An image-led editorial card:

- category and status label;
- project title;
- concise challenge/outcome statement;
- real screenshot or clearly labeled concept image;
- optional service tags;
- entire card can be linked, with a single accessible link target.

Desktop cards may alternate 7/5-column and 5/7-column proportions. Mobile cards stack without horizontal scroll.

### 3.5 Service panel

- Number `01–03`.
- Service name.
- Outcome-first summary.
- List of 3–5 concrete deliverables.
- One line indicating best fit.
- Optional link to details.

Panels should use borders and surface shifts rather than icon boxes.

### 3.6 Process step

- Large serif number.
- Phase title and short explanation.
- “What you receive” line.
- Connected by a thin contour/path line on desktop; simple vertical rule on mobile.

### 3.7 Principle card

Use for the Why Cantrell section. Each card contains one concise principle, evidence, and optional small line illustration. Avoid generic claims such as “innovation.”

### 3.8 Pricing card

- Package name and `Custom proposal` until a starting price is approved.
- Outcome statement.
- Deliverables.
- Best-for statement.
- `Timeline set by scope` until a timeline range is approved.
- CTA.
- Growth package is emphasized through placement and a surface shift, not scale or a loud badge.
- Clarify that final quotes depend on scope.

### 3.9 Proof block

Testimonials, client logos, client counts, and outcome metrics are intentionally omitted from Phase 1 because no verified material is available. Use evidence the studio can substantiate:

- full-page visual walkthroughs;
- responsive states and component systems;
- concise design rationale;
- scope and deliverable clarity;
- transparent process and standards.

The component may later support a verified testimonial or metric, but it must not ship with placeholder or invented social proof.

### 3.10 Form controls

- Minimum 48px height.
- Persistent visible labels; placeholders supplement labels.
- Warm canvas-soft background, line border, ink text.
- Focus uses moss ring, not color change alone.
- Errors appear directly below the control with error icon and text.
- Required/optional status is explicit.
- Large choices use radio/checkbox cards with selected border, checkmark, and subtle surface change.

### 3.11 Notice/status

Variants: neutral, success, warning, error. Each includes icon, title, and concise message. Color is never the only signal.

## 4. Imagery system

### Priority order

1. Real screenshots of completed work.
2. Device-free cropped interface details.
3. Context photography directly related to the project’s business.
4. Abstract material imagery created specifically for the brand.

### Art direction

- Natural side lighting, honest materials, low saturation.
- Warm whites, wood, stone, paper, linen, and plant tones.
- Images should feel observed rather than staged.
- Use people only when the image communicates collaboration or the customer’s context.
- Do not use generic laptops floating in 3D space.
- Do not place text inside raster images.

### Treatment

- `object-fit: cover` with documented focal point.
- Slightly softened contrast; no universal sepia filter.
- Varied organic masks from the geometry tokens.
- Use AVIF/WebP through Next Image and correct responsive `sizes`.
- Hero’s primary visual should stay below the performance budget in the implementation plan.

## 5. Accessibility definition

- Target WCAG 2.2 AA.
- All interactive elements work with keyboard only.
- Visible focus is never suppressed.
- Landmarks and heading levels form a logical outline.
- Skip link appears on focus.
- Touch targets are at least 44×44px; project target is 48px.
- Text zoom to 200% does not hide content or actions.
- Layout reflows at 320 CSS pixels without horizontal page scrolling.
- Form errors are programmatically associated and summarized after failed submission.
- Menu, dialog, and disclosure behavior follows established ARIA patterns.
- Decorative texture/SVG is hidden from screen readers.
- Motion honors reduced-motion preferences.
- Forced-colors mode retains boundaries and focus.

## 6. Responsive behavior

### Mobile, 320–639px

- Single-column reading order.
- Header collapses to a menu sheet.
- Hero fills approximately the first 1.25 viewports, not a forced full viewport.
- CTAs stack at 100% width below 380px.
- Project imagery appears before supporting metadata unless narrative requires otherwise.
- Pricing cards stack; recommended card appears first.
- Avoid hidden horizontal carousels.

### Tablet, 640–1023px

- 8-column grid.
- Split hero becomes 4/4 or remains editorially stacked depending on copy length.
- Project and service cards may use two columns.
- Navigation can remain collapsed until 900–960px.

### Desktop, 1024px+

- 12-column grid.
- Asymmetrical hero and alternating project layouts.
- Sticky local elements are allowed only where they improve comparison, such as the process label—not for the entire navigation story.

### Wide desktop, 1440px+

- Content stays within 1280px.
- Increase outer whitespace rather than scaling type or card dimensions indefinitely.

## 7. Design governance

Before adding a new token or component, ask:

1. Can an existing semantic token express this?
2. Does the variation communicate meaning or only novelty?
3. Will the new form work across mobile, keyboard, and reduced motion?
4. Can a future editor use it without recreating one-off markup?

Any exception should be recorded with the component that needs it, not added globally by habit.
