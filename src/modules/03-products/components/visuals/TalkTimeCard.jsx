import MockCard from '@/components/ui/MockCard';
import LiveDot from '@/components/ui/LiveDot';
import { AVATARS } from '@/components/visuals/people';

/* Figma bar fills (46:44320): magenta, blue, green, purple, amber. */
const BAR = {
  magenta: '#9e0059',
  blue: '#0060ff',
  green: '#12b76a',
  purple: '#6e56cf',
  amber: '#d97706',
};

/**
 * Figma "UI · Speaker talk time" (AI Transcription hero carousel slide 2,
 * 46:44320): "Talk time" + crimson live dot + mono duration, then one row per
 * speaker (22px avatar, 86px first name, 8px bar whose fill = share, mono %).
 * speakers: [{ name (AVATARS key), share: number, tone: magenta|blue|green|purple|amber }]
 */
export default function TalkTimeCard({
  duration,
  speakers = [],
  width = 560,
  shadow = 'mock',
  className,
}) {
  return (
    <MockCard
      title={
        <span className="inline-flex items-center gap-2">
          Talk time
          <LiveDot tone="crimson" size={7} pulse />
        </span>
      }
      gap={14}
      width={width}
      shadow={shadow}
      className={className}
      aside={
        <span className="whitespace-nowrap font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
          {duration}
        </span>
      }
    >
      {speakers.map((s) => (
        <div key={s.name} className="flex items-center gap-2.5">
          <img
            src={AVATARS[s.name]}
            alt=""
            width={22}
            height={22}
            className="size-[22px] shrink-0 rounded-[11px] object-cover"
          />
          <span className="w-[86px] shrink-0 text-[12px] font-medium leading-[1.5] text-ink-800">
            {s.name.split(' ')[0]}
          </span>
          <span className="relative h-2 min-w-px flex-1 overflow-hidden rounded-[4px] bg-[#eef0f4]">
            {/* Figma: bar width = share × 350px track (40% → 140px) */}
            <span
              className="absolute inset-y-0 left-0 rounded-[4px]"
              style={{ width: `${s.share}%`, backgroundColor: BAR[s.tone] }}
            />
          </span>
          <span className="w-[30px] shrink-0 text-right font-mono text-[11px] leading-[1.5] tracking-[0.44px] text-ink-500">
            {s.share}%
          </span>
        </div>
      ))}
    </MockCard>
  );
}
