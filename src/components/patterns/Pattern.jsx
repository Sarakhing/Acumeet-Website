import DotGrid from './DotGrid';
import Hairlines from './Hairlines';
import Rings from './Rings';
import WaveDrift from './WaveDrift';

/**
 * Data-driven pattern switch used by blocks that take `pattern` in their data:
 * type: 'rings' | 'dots' | 'hairlines' | 'waveform' | null, size: frame key.
 */
export default function Pattern({ type, size, ...rest }) {
  if (type === 'rings') return <Rings size={size} {...rest} />;
  if (type === 'dots') return <DotGrid size={size} {...rest} />;
  if (type === 'hairlines') return <Hairlines size={size} {...rest} />;
  if (type === 'waveform') return <WaveDrift size={size} {...rest} />;
  return null;
}
