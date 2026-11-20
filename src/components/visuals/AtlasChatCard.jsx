import orbRing from '@/assets/images/solutions/atlas-orb-ring.svg';
import orbCore from '@/assets/images/solutions/atlas-orb-core.svg';
import sparkBadge from '@/assets/images/solutions/atlas-spark-badge.svg';
import chatbotMask from '@/assets/images/solutions/atlas-chatbot-mask-29x24.png';
import chatbot from '@/assets/images/home/cap-chatbot.png';
import play from '@/assets/images/solutions/ic-play-blue-12.svg';
import sparkleInk from '@/assets/images/solutions/ic-sparkle-ink-11.svg';
import sparklePink from '@/assets/images/solutions/ic-sparkle-pink-14.svg';
import sparkleBlue from '@/assets/images/solutions/ic-sparkle-blue-10.svg';
import { AVATARS } from '@/components/visuals/people';

const mask = {
  maskImage: `url(${chatbotMask})`,
  WebkitMaskImage: `url(${chatbotMask})`,
  maskSize: '100% 100%',
  WebkitMaskSize: '100% 100%',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
};

/** Figma "Atlas/Avatar" (24×24): orb ring + core, masked chatbot glyph, spark badge. */
function AtlasAvatar() {
  return (
    <span aria-hidden="true" className="relative block size-6 shrink-0">
      <img src={orbRing} alt="" width={24} height={24} className="absolute inset-0 size-6" />
      <img
        src={orbCore}
        alt=""
        width={21}
        height={21}
        className="absolute left-[1.5px] top-[1.5px] size-[21px]"
      />
      <span
        className="absolute left-[4.88px] top-[6.5px] h-[11.756px] w-[14.25px] overflow-hidden"
        style={mask}
      >
        <img
          src={chatbot}
          alt=""
          className="absolute left-0 top-[-9.76%] h-[121.22%] w-full max-w-none"
        />
        <span className="absolute inset-0 bg-[rgb(0_96_255/0.1)] mix-blend-saturation" />
      </span>
      <img
        src={sparkBadge}
        alt=""
        width={8.25}
        height={8.25}
        className="absolute left-[17.25px] top-[-1.5px] size-[8.25px] max-w-none"
      />
    </span>
  );
}

const pill =
  'flex shrink-0 items-center gap-[5px] whitespace-pre rounded-pill px-2.5 py-[5px] font-medium leading-normal';

/**
 * Figma "UI · Atlas" (Understand chapter 46:19425, explorer tab 4 46:23703):
 * header, user question bubble, Atlas answer with a transcript quote and
 * source chips, suggested prompts and the composer with filters.
 * answer: (string | { b: string })[]  (`b` = bold)
 * quote: { name, time, text }; sources: string[]; prompts: string[]
 */
export default function AtlasChatCard({
  width = 460,
  question,
  answer = [],
  quote,
  sources = [],
  prompts = [],
}) {
  return (
    <div
      className="flex flex-col gap-3.5 overflow-hidden rounded-mock border border-border-muted bg-surface-white p-[18px] shadow-[0_12px_32px_-4px_rgb(10_10_26/0.07),0_1px_2px_rgb(10_10_26/0.04)]"
      style={{ width }}
    >
      <div className="flex items-center gap-2">
        <AtlasAvatar />
        <p className="text-[14px] font-semibold text-ink-800">Atlas</p>
        <span className="h-px min-w-px flex-1" />
        <span className={`${pill} border border-border-muted text-[10px] text-ink-500`}>
          All meetings
        </span>
      </div>

      <div className="flex justify-end">
        <p className="rounded-[18px] bg-[#e9e9ee] px-3.5 py-2 text-[12.5px] text-ink-800">
          {question}
        </p>
      </div>

      <div className="flex items-start gap-2.5">
        <AtlasAvatar />
        <div className="flex min-w-px flex-1 flex-col gap-2.5">
          <p className="text-[12.5px] leading-[1.5] text-[#33363f]">
            {answer.map((part) =>
              typeof part === 'string' ? (
                part
              ) : (
                <strong key={part.b} className="font-semibold text-ink-800">
                  {part.b}
                </strong>
              ),
            )}
          </p>
          {quote && (
            <div className="flex flex-col gap-[7px] rounded-[12px] border border-[#e9e3fb] bg-[#f8f6fe] px-3 py-2.5">
              <div className="flex items-center gap-1.5">
                <img
                  src={AVATARS[quote.name]}
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] shrink-0 rounded-pill object-cover"
                />
                <span className="whitespace-nowrap text-[11.5px] font-semibold text-ink-800">
                  {quote.name}
                </span>
                <span className="font-mono text-[10.5px] text-ink-500">{quote.time}</span>
                <span className="h-px min-w-px flex-1" />
                <span
                  className={`${pill} border border-border-muted bg-surface-white text-[9.5px] text-ink-700`}
                >
                  Exact transcript
                </span>
              </div>
              <p className="text-[11.5px] leading-[1.5] text-[#33363f]">{quote.text}</p>
            </div>
          )}
          {sources.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10.5px] text-ink-500">Sources</span>
              {sources.map((s) => (
                <span key={s} className={`${pill} bg-[#eaf2ff] text-[10px] text-[#2185f6]`}>
                  <img src={play} alt="" width={12} height={12} className="size-3" />
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {prompts.length > 0 && (
        <div className="flex flex-wrap items-start gap-1.5">
          {prompts.map((p) => (
            <span
              key={p}
              className={`${pill} border border-border-muted text-[10.5px] text-ink-800`}
            >
              <img src={sparkleInk} alt="" width={11} height={11} className="size-[11px]" />
              {p}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2.5 rounded-[14px] border border-[#e4e4ea] bg-surface-white px-3 py-2.5 shadow-[0_4px_12px_-2px_rgb(10_10_26/0.05)]">
        <div className="flex items-center gap-2">
          <img src={sparklePink} alt="" width={14} height={14} className="size-3.5" />
          <span className="h-4 w-0.5 shrink-0 rounded-[1px] bg-brand-blue" />
          <p className="min-w-px flex-1 text-[11.5px] text-[#9a9dab]">
            Ask about your meetings, action items or plan…
          </p>
          <span className="flex size-[26px] shrink-0 items-center justify-center rounded-pill bg-[#f1f2f6] text-[12px] font-medium text-ink-700">
            ↗
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`${pill} bg-[#eef4ff] text-[10px] text-[#2185f6]`}>
            <img src={sparkleBlue} alt="" width={10} height={10} className="size-2.5" />
            Standard
          </span>
          <span className={`${pill} border border-border-muted text-[10px] text-ink-700`}>
            {'All meetings  ▾'}
          </span>
          <span className={`${pill} border border-border-muted text-[10px] text-ink-700`}>
            {'Any date  ▾'}
          </span>
        </div>
      </div>
    </div>
  );
}
