import MockCard from '@/components/ui/MockCard';
import UiChip from '@/components/ui/UiChip';
import liveDot from '@/assets/images/solutions/live-dot-green-deep.svg';
import dotGreen from '@/assets/images/solutions/dot-green-7.svg';
import dotBlue from '@/assets/images/solutions/dot-blue-7.svg';
import dotAmber from '@/assets/images/solutions/dot-amber-7.svg';

/** Figma bar heights (of a 120px chart); the last bar is the highlighted one. */
const BARS = [49.4, 67.6, 61.1, 79.3, 75.4, 93.6, 85.8, 105.3, 100.1, 109.2];
const DOTS = { green: dotGreen, blue: dotBlue, amber: dotAmber };

/**
 * Figma "UI · Analytics" — "Meeting analytics" bar chart with a live dot, a
 * range chip and a 3-item legend. Overview Understand tile: width 350, bars
 * 21/31px; EMI hero: width 440, bars 30/40px.
 * legend: [{ label, value, tone: green|blue|amber }]
 */
export default function MeetingAnalyticsCard({
  width = 350,
  range = 'This month',
  barWidth = 21,
  barPitch = 31,
  legend = [],
  shadow = 'mock',
  className,
}) {
  return (
    <MockCard
      title={
        <span className="flex items-center gap-2">
          Meeting analytics
          <span className="relative inline-block size-[7px] shrink-0">
            <img
              src={liveDot}
              alt=""
              width={8}
              height={8}
              className="absolute left-0 top-0 block max-w-none"
            />
          </span>
        </span>
      }
      gap={14}
      width={width}
      shadow={shadow}
      className={className}
      aside={<UiChip tone="outline">{range}</UiChip>}
    >
      <div
        className="relative h-[120px]"
        style={{ width: barPitch * (BARS.length - 1) + barWidth + 10 }}
      >
        {BARS.map((h, i) => (
          <span
            key={h}
            className={
              i === BARS.length - 1
                ? 'absolute rounded-[4px] bg-brand-magenta'
                : 'absolute rounded-[4px] bg-[#e9d3df]'
            }
            style={{ left: 5 + i * barPitch, width: barWidth, height: h, top: 120 - h }}
          />
        ))}
      </div>
      <div className="flex items-start gap-4">
        {legend.map((l) => (
          <span
            key={l.label}
            className="flex items-center gap-1.5 whitespace-nowrap text-[11px] leading-[1.5]"
          >
            <img src={DOTS[l.tone]} alt="" width={7} height={7} className="size-[7px] shrink-0" />
            <span className="text-ink-500">{l.label}</span>
            <span className="font-mono font-medium tracking-[0.44px] text-ink-800">{l.value}</span>
          </span>
        ))}
      </div>
    </MockCard>
  );
}
