# Design System Document: Premium Agricultural Intelligence

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Estate"**

This design system is engineered to elevate agricultural technology from a utilitarian tool to a premium editorial experience. We reject the "SaaS-template" look in favor of a visual language that mirrors the prestige of high-end Colombian land ownership and the precision of modern data science. 

To achieve this, we employ **Intentional Asymmetry** and **Tonal Depth**. Our layouts should feel curated rather than gridded. By utilizing large-scale typography, overlapping imagery, and a "dark-mode-first" philosophy, we create an environment that feels authoritative, expert, and deeply rooted in the Risaralda region. We move beyond flat surfaces to create a world of layered prestige.

---

## 2. Colors: Gold, Obsidian, and Atmosphere

Our palette transitions from the deep, fertile earth (`surface`) to the luxury of refined gold (`primary`). 

### The Palette
- **Primary (Luxury Gold):** `#f2ca50` (Primary) to `#d4af37` (Container). Use these for high-intent actions and brand-critical indicators.
- **Surface (Obsidian):** `#131313` (Base), `#0e0e0e` (Lowest).
- **Secondary (Bronze/Amber):** `#eac249`. Used for accentuating data visualizations.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Sectioning must be achieved through background shifts. For example, a `surface-container-low` section should sit directly against a `surface` background. The transition of color alone is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Layer 0 (Background):** `surface` (#131313).
- **Layer 1 (Large Sections):** `surface-container-low` (#1c1b1b).
- **Layer 2 (Feature Cards):** `surface-container` (#20201f).
- **Layer 3 (Modals/Popovers):** `surface-bright` (#393939).

### The "Glass & Gradient" Rule
To evoke a high-end feel, use **Glassmorphism** for floating navigation bars or overlay cards. Use `surface_variant` at 60% opacity with a `20px` backdrop-blur. 
**Signature Texture:** Main CTAs should not be flat. Apply a linear gradient from `primary` (#f2ca50) to `primary_container` (#d4af37) at a 135-degree angle to simulate the metallic sheen seen in the brand logo.

---

## 3. Typography: Editorial Authority

We use a high-contrast scale to separate "Data" from "Story."

*   **Display & Headlines (Manrope):** A modern, geometric sans-serif that feels architectural. 
    *   *Display-LG (3.5rem):* Used for hero statements. High tracking (-0.02em).
    *   *Headline-MD (1.75rem):* Used for section titles.
*   **Body & Labels (Inter):** Chosen for its clinical legibility in data-heavy environments.
    *   *Body-LG (1rem):* Standard reading text.
    *   *Label-MD (0.75rem):* Technical data points and metadata.

**The Hierarchy Goal:** Use `on_surface_variant` (#d0c5af) for secondary text to create a soft, sophisticated contrast against the gold accents, ensuring the eyes are drawn to the most important "Result-Oriented" data first.

---

## 4. Elevation & Depth: Tonal Layering

We avoid traditional "material" shadows in favor of ambient lighting.

*   **The Layering Principle:** Place `surface-container-lowest` cards on a `surface-container-low` background. This creates a "recessed" or "pressed" look that feels more integrated than a floating shadow.
*   **Ambient Shadows:** If an element must float (e.g., a "Quick Action" FAB), use a highly diffused shadow: `box-shadow: 0 20px 40px rgba(0,0,0,0.4)`. The shadow color should never be pure black; it should be a tinted version of the surface it sits on.
*   **The "Ghost Border" Fallback:** For interactive inputs, use a "Ghost Border": `outline-variant` (#4d4635) at **15% opacity**. It provides just enough definition for accessibility without breaking the "No-Line" rule.

---

## 5. Components

### Buttons
*   **Primary:** Gradient (Gold/Bronze), `xl` roundedness (0.75rem). No border. Text is `on_primary` (#3c2f00).
*   **Tertiary:** Transparent background, `primary` text, with a `0.5rem` bottom-aligned gold bar that appears only on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Implementation:** Use 32px of vertical white space (Spacing Scale) between list items. Use a subtle `surface-container-high` background on hover to define the active row.
*   **Agricultural Integration:** Cards should occasionally feature high-quality, desaturated imagery of livestock or crops with a `primary` (gold) color overlay at 10% opacity to tie the photography into the brand palette.

### Input Fields
*   **Style:** Minimalist. No containers. Only a `0.5px` Ghost Border at the bottom. 
*   **Active State:** The bottom border transforms into a `primary` gold gradient.

### Precision Chips
*   **Usage:** For livestock status (e.g., "Prime," "Monitoring").
*   **Style:** `surface-container-highest` background with `on_surface` text. `full` roundedness.

---

## 6. Do's and Don'ts

### Do
*   **Do** use expansive white space. Premium brands breathe.
*   **Do** use "Manrope" for large numeric data (e.g., yield percentages) to make them look like high-end financial figures.
*   **Do** overlap elements. Let a gold button slightly overlap the edge of a card or an image to break the "boxed-in" feel.

### Don't
*   **Don't** use pure white (#FFFFFF) for long-form text; use `on_surface` (#e5e2e1) to reduce eye strain against the dark background.
*   **Don't** use standard 4px rounded corners. Use the `xl` (0.75rem) or `lg` (0.5rem) tokens to create a softer, more modern feel.
*   **Don't** use bright, saturated colors for errors. Use the `error_container` (#93000a) to keep the palette sophisticated and muted.

---
**Director's Final Note:** 
Remember, we are not just building a dashboard; we are building a digital legacy for the Ganatech producers. Every pixel should feel like it was placed by hand. If a layout feels too "neat" or "default," break a rule. Move an image off-center. Increase the font size. Make it feel alive.