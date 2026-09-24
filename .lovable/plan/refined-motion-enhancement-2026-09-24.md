# Refined Motion Enhancement

## Goal
Add polished movement that makes the homepage feel more alive without changing its established layout, typography, imagery, or restrained visual identity.

## Motion system
- Reveal major section content as it enters the viewport with subtle opacity and short vertical movement.
- Stagger related items such as statistics, service rows, projects, industry icons, team details, and footer columns so each group arrives naturally rather than all at once.
- Keep motion short, soft, and editorial; avoid bouncing, dramatic zooming, spinning, or decorative effects that would make the site feel less premium.
- Let reveals run once per page visit so scrolling back remains calm.

## Ambient and interactive details
- Add a varied set of quiet looping details rather than repeating one effect everywhere: slow icon breathing, tiny arrow drift, gentle underline travel, restrained image-note float, and a soft line sweep on selected accents.
- Enhance custom actions and text links with directional arrow movement and a subtle fill or line response on hover.
- Give service rows, project imagery, statistics, social links, industry icons, and testimonial controls distinct but related hover feedback suited to each element.
- Add brief press feedback on clickable controls so interactions feel tactile without changing their custom shapes.
- Keep ambient loops sparse, independently timed, and paused where appropriate during direct interaction so the page feels crafted rather than constantly moving.

## Breathing accents
- Animate the circular symbol in “Creative Ideas That Inspire Growth” with a slow breathing scale and faint ring expansion.
- Reuse that breathing rhythm selectively on a few small symbols inside section labels and key phone icons; use different motion styles for other accents.
- Let the hero play icon carry a soft orbiting ring, the contact arrow drift diagonally, and image-side handwritten notes float almost imperceptibly.
- Keep all text, cards, photographs, and layout containers stable; breathing will be limited to small accent elements so the page never feels busy.
- Offset the timing between accents so they do not pulse together.

## Custom cursor
- Add a bespoke minimal circular cursor on desktop devices with a precise center point and a softly trailing outer ring.
- Let the cursor subtly expand over links, buttons, project images, and testimonial controls.
- Add a quick, restrained ring pulse at the click position.
- Retain the normal cursor on touch devices and smaller screens so mobile behavior stays natural.

## Quality and accessibility
- Use the existing black, warm-white, and muted neutral palette for every effect.
- Disable decorative movement and restore the standard cursor when reduced-motion is requested.
- Ensure animation classes do not hide content if scripting is unavailable.
- Preserve all current responsive behavior and prevent cursor effects from intercepting clicks.
- Verify desktop and phone layouts, scrolling, menu interaction, testimonial controls, overflow, and current page metadata after implementation.

## Technical details
- Build a small reusable reveal wrapper using an intersection observer rather than adding a heavy animation package.
- Build the cursor as a dedicated client-side component driven by pointer events and animation frames.
- Define shared durations, easing, reveal distances, stagger delays, breathing, and click-pulse styles in the existing visual system.
