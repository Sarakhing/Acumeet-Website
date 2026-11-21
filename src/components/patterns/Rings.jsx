import PatternImage from './PatternImage';
import { RINGS } from './patternAssets';

/**
 * Figma "Pattern · rings" — concentric magenta (or white, size="hero") circles.
 * Absolutely fills its positioned parent.
 * size: hero | explorer | panel | stepper | card | bento | mini (see patternAssets.js)
 */
export default function Rings({ size = 'panel', position, className }) {
  const defaultPos = { hero: 'bottom', mini: 'bottom', bento: 'bottom', stepper: 'right bottom', card: 'right top', 'card-wide': 'right top', 'card-span': 'right top' };
  return (
    <PatternImage asset={RINGS[size]} position={position ?? defaultPos[size] ?? 'center'} className={className} />
  );
}
