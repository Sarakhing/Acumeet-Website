import AccentTitle from '@/components/ui/AccentTitle';
import { cn } from '@/utils/cn';

const TITLE_SIZES = {
  // 52px Figma section title (default for Explorer / CardGrid)
  section: 'lg:text-display-section',
  // 48px topic title (Security "Tabs explorer" / "Benefits" heads, 860 wide)
  48: 'lg:text-[48px] lg:tracking-[-1.44px]',
  // 44px intro title (Security 06.05 / 06.06 first explorer: 748 wide, 17px lead, 16px padding)
  44: 'lg:max-w-[748px] lg:text-[44px] lg:tracking-[-1.32px]',
};

/**
 * Block heading: optional 11px mono overline, title with a gradient `accent`, optional
 * 18px lead (780 wide). Items are 16px apart (Figma "Head", Security 06.03 48:325516).
 * titleSize: 'section' (52) | 48 (topic heads) | 44 (intro head: 748 wide, 17px/1.55 lead, 16px padding).
 */
export default function SectionHeading({ eyebrow, title, accent, accentBreak, lead, titleSize = 'section' }) {
  const heading = (
    <AccentTitle
      accent={accent}
      accentBreak={accentBreak}
      className={cn(
        'max-w-[860px] text-[32px] font-medium leading-[1.12] tracking-[-1px] sm:text-[40px]',
        TITLE_SIZES[titleSize] ?? TITLE_SIZES.section,
      )}
    >
      {title}
    </AccentTitle>
  );
  if (!eyebrow && !lead) return heading;
  const intro = titleSize === 44;
  return (
    <div className={cn('flex flex-col gap-4', intro && 'lg:py-4')}>
      {eyebrow && (
        <p className="font-mono text-[11px] uppercase leading-[1.5] tracking-[0.66px] text-ink-500">{eyebrow}</p>
      )}
      {heading}
      {lead && (
        <p
          className={cn(
            'text-[17px] text-ink-700',
            intro ? 'max-w-[748px] leading-[1.55]' : 'max-w-[780px] leading-[1.35] tracking-[-0.18px] sm:text-[18px]',
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
