import PatternImage from './PatternImage';
import { HAIRLINES } from './patternAssets';

/** Figma "Pattern · hairlines" — 45° hairline stripes. size: explorer | card | bento | mini */
export default function Hairlines({ size = 'explorer', position, className }) {
  return <PatternImage asset={HAIRLINES[size]} position={position ?? 'left top'} className={className} />;
}
