import { ROUTES } from '@/constants/routes';
import { appWindow, floatChip, heroCanvas } from '@/components/visuals/mocks';

/**
 * SolutionHero presets shared by the Use Cases (05.x) and Security (06.x) pages.
 * Each returns `{ hero, carousel? }` to spread into a content object; `primary`
 * defaults to "Book a demo". Positions are Figma 1440-frame coordinates.
 */

const DEMO = { label: 'Book a demo', to: ROUTES.bookDemo };

/**
 * Dark rings hero + "✓ Hero carousel" (05.01, 05.05, 05.08, 05.09, 05.11).
 * slides: [[tab label, 560px card], …] — HeroCarousel draws the 820px app window.
 */
export const ringsHero = ({ eyebrow, title, lead, primary = DEMO, secondary, slides }) => ({
  hero: { variant: 'rings', secondaryStyle: 'link', eyebrow, title, lead, primary, secondary },
  carousel: slides.map(([label, content]) => ({ label, content })),
});

/**
 * Light wash hero with an app window (05.02, 05.04, 05.06, 05.12): a 500px card in a
 * 600px window at 1440-frame (760, 100), a 360px card overlapping its lower left at
 * x 700 (`overlayY` = Figma y), and the "Live in your workspace" chip at (1180, 64).
 * `height` = Figma hero height; the canvas takes the remaining column height (24px bottom pad).
 */
export const windowHero = ({ eyebrow, title, accent, lead, primary = DEMO, secondary, window, overlay, overlayY, height }) => ({
  hero: {
    eyebrow,
    eyebrowStyle: 'chip',
    title,
    accent,
    lead,
    primary,
    secondary,
    visual: heroCanvas(height - 88, [
      [60, 36, appWindow(600, window)],
      [0, overlayY - 64, overlay],
      [480, 0, floatChip()],
    ]),
    visualWidth: 660,
    padBottom: 24,
  },
});

/**
 * Light wash hero with two stacked cards over hairlines (05.03, 05.10): a 440px card at
 * 1440-frame (820, 110) and a 400px card at (940, `frontY`). Outlined secondary button,
 * no accent, 580px copy column with a 540px lead.
 */
export const stackedHero = ({ eyebrow, title, titleSize, lead, primary = DEMO, secondary, back, front, frontY, height }) => ({
  hero: {
    eyebrow,
    eyebrowStyle: 'chip',
    title,
    titleSize,
    lead,
    primary,
    secondary,
    secondaryStyle: 'button',
    pattern: 'hairlines',
    copyTop: 56,
    copyWidth: 580,
    leadWidth: 540,
    visual: heroCanvas(height - 88, [
      [120, 46, back],
      [240, frontY - 64, front],
    ]),
    visualWidth: 660,
    padBottom: 24,
  },
});

/**
 * Centred light hero over a full-bleed hatch (05.00, 05.07, 05.13): chip, 62px title,
 * 19px lead, Book a Demo + arrow link, then a 1280-wide card composition.
 * items: [[1440-frame x, 1440-frame y, node, figmaRotation?], …]. The canvas origin is the
 * topmost card (`top` = its Figma y); `gap` = top − copy bottom. Figma rotations are
 * counter-clockwise, so they are negated for CSS. `compact` = the card shown on phones.
 */
export const centeredHero = ({
  eyebrow,
  title,
  accent,
  lead,
  primary = DEMO,
  secondary,
  top,
  gap,
  height,
  copyHeight,
  items,
  compact,
}) => ({
  hero: {
    variant: 'centered',
    pattern: 'hairlines',
    titleSize: 62,
    leadSize: 19,
    copyWidth: 980,
    secondaryStyle: 'link',
    visualGap: gap,
    eyebrow,
    title,
    accent,
    lead,
    primary,
    secondary,
    // 96 top padding + copy + gap + canvas + 20 bottom padding = Figma hero height
    visual: heroCanvas(
      height - 116 - copyHeight - gap,
      items.map(([x, y, node, rot]) => [x - 80, y - top, node, rot ? -rot : undefined]),
      1280,
    ),
    visualWidth: 1280,
    visualCompact: compact,
    visualCompactWidth: 440,
  },
});

