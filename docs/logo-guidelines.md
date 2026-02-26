# Membriko Logo Guidelines

## The Wordmark

The Membriko logo is a pure typographic wordmark. There is no icon, monogram, or graphic element. The brand identity lives entirely in the letterforms, spacing, and color treatment.

```
M E M B R I K O
            ↑
        Amber accent
```

---

## Typography

| Property       | Value                                              |
|----------------|----------------------------------------------------|
| Font family    | Inter (fallback: system-ui, Helvetica Neue, Arial) |
| Case           | All uppercase                                      |
| Weight (main)  | 200 — Extralight                                   |
| Weight (the I) | 300 — Light                                        |
| Letter-spacing | 0.25em                                             |

The wide letter-spacing is essential to the logo's identity. Never compress it below 0.2em or extend it beyond 0.3em.

---

## Sizes

Three standard sizes are defined for digital use:

| Size | Tailwind class | Approx. height | Use case                  |
|------|----------------|----------------|---------------------------|
| sm   | text-xl        | ~20px          | Header / navigation bar   |
| md   | text-2xl       | ~24px          | Footer, secondary branding|
| lg   | text-4xl       | ~36px          | Hero sections, print      |

For custom sizing, maintain the ratio between font size and letter-spacing (0.25em is relative, so it scales automatically).

---

## Colors

### Primary (on dark backgrounds)

| Element          | Color                     | Hex       |
|------------------|---------------------------|-----------|
| Letters MEMBR+KO | White                     | `#FFFFFF` |
| Letter I         | Amber (brand accent)      | `#F59E0B` |
| Background       | Near-black                | `#0A0A0A` |

### Inverted (on light backgrounds)

| Element          | Color                     | Hex       |
|------------------|---------------------------|-----------|
| Letters MEMBR+KO | Near-black                | `#0A0A0A` |
| Letter I         | Amber (brand accent)      | `#F59E0B` |
| Background       | White                     | `#FFFFFF` |

### Monochrome (when color is unavailable)

| Element          | Color                     |
|------------------|---------------------------|
| All letters      | White (on dark) or Black (on light) |
| Letter I         | Same as other letters     |

The amber I must never be changed to another color. If color printing/display is not available, use the monochrome version instead.

---

## Clear Space

Maintain a minimum clear space around the logo equal to the height of the capital M on all four sides. No other text, icons, or graphic elements should intrude into this zone.

```
    ┌─────────────────────────────┐
    │         (clear space)       │
    │   M E M B R I K O          │
    │         (clear space)       │
    └─────────────────────────────┘
         ↕ = height of "M"
```

---

## Minimum Size

- **Digital:** Do not render smaller than 14px font size (below this, the extralight weight becomes illegible on screens).
- **Print:** Do not reproduce smaller than 8mm cap height.

---

## Incorrect Usage

- Do not use bold or regular weight for the main letters
- Do not change the letter-spacing below 0.2em
- Do not use mixed case (e.g., "Membriko" or "membriko")
- Do not change the amber I to any other color
- Do not add outlines, shadows, or effects to the letters
- Do not place the logo on busy backgrounds without sufficient contrast
- Do not rotate or skew the wordmark
- Do not add an icon or symbol to the logo

---

## File Assets

| File                         | Format | Use                              |
|------------------------------|--------|----------------------------------|
| `public/logo.svg`           | SVG    | Web, high-res digital, scalable  |
| `src/components/Logo.tsx`   | React  | In-app usage (Next.js component) |

---

## Brand Context

Membriko is a specialist EPDM membrane applicator. The logo reflects this identity:

- **Extralight weight** — precision and clean lines, like a membrane installation
- **Wide spacing** — engineered, measured, architectural
- **The amber I** — a single point of warmth in an otherwise austere palette, representing the craft within the technical discipline
- **All uppercase** — industrial confidence, structural authority

The logo should feel like it belongs on a building specification document as much as on a website.
