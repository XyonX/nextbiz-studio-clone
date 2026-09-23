# Responsive brand and hero polish

## Goal
Keep the current premium theme and compact typography while correcting the header, hero-to-partner transition, and footer branding across tablet and phone widths.

## Changes
1. Replace the current NB artwork with the newly supplied darker metallic logo and keep its transparent background.
2. Refine the header brand as a responsive, context-specific lockup:
   - balance the logo and “NextBiz Studio” text with the smaller navigation type;
   - reduce both at tablet and phone breakpoints without clipping;
   - let the navigation columns shrink safely before the mobile menu takes over.
3. Give the footer its own smaller brand proportions so the logo and name fit the footer’s compact visual hierarchy instead of inheriting the header sizing.
4. Fix the hero and trusted-partner boundary:
   - preserve enough space below the full-width responsive hero image;
   - keep the “Trusted Partners Worldwide for Success” label fully visible above its divider;
   - remove fragile overlap behavior at narrow widths and ensure the partner row remains contained.
5. Replace the bright yellow hero backing shape with a deep neutral charcoal accent drawn from the darker logo. This keeps the layered contrast intentional while making the palette more consistent with the rest of the page.
6. Verify the affected areas at desktop, tablet, and phone sizes, including the narrow width where the hero changes from side-by-side to stacked.

## Technical details
- Keep the existing page structure and bespoke components.
- Add responsive, context-specific brand rules rather than one shared fixed size.
- Adjust hero/partner spacing and stacking order without changing the page’s content.
- Preserve reduced-motion support and semantic color tokens.
