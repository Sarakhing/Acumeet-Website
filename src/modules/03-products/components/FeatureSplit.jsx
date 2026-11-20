import Split from '@/components/blocks/Split';
import VisualPanel from '@/components/blocks/VisualPanel';

/**
 * Split whose VisualPanel is built from `{ visual: { tint, pattern, content } }`
 * data (same helper as the Solutions pages). Panel = 656×480 by default.
 */
export default function FeatureSplit({ visual, ...props }) {
  return (
    <Split
      {...props}
      visual={
        <VisualPanel tint={visual.tint} pattern={visual.pattern} chip={visual.chip}>
          {visual.content}
        </VisualPanel>
      }
    />
  );
}
