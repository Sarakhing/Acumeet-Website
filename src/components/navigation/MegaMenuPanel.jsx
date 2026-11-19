import { Link } from 'react-router';
import menuRings from '@/assets/icons/nav/menu-rings.svg';
import MegaMenuStage from './MegaMenuStage';
import { navIcon, TILE_BG } from './navIcons';
import { cn } from '@/utils/cn';

/** Figma "Link · …": 32px pastel icon tile + 14.5px label. */
export function MegaMenuLink({ link, onNavigate }) {
  return (
    <Link
      to={link.to}
      onClick={onNavigate}
      className="group flex w-full items-center gap-3 rounded-[10px] py-[5px] pr-2 text-[14.5px] leading-[1.3] text-ink-800 transition-colors hover:bg-surface-muted hover:text-brand-blue"
    >
      <span
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-[9px]',
          TILE_BG[link.tint],
        )}
      >
        <img src={navIcon(link)} alt="" width={17} height={17} className="size-[17px]" />
      </span>
      <span className="min-w-0 flex-1">{link.label}</span>
    </Link>
  );
}

/** Mono 11px group label ("CAPTURE"). `title: null` keeps the row height but hides it (Figma "Group · cont."). */
export function GroupLabel({ id, title }) {
  return (
    <p
      id={title ? id : undefined}
      aria-hidden={title ? undefined : true}
      className={cn(
        'font-mono text-[11px] uppercase leading-[1.27] tracking-[0.66px] text-ink-500',
        !title && 'invisible',
      )}
    >
      {title ?? '·'}
    </p>
  );
}

export function ArrowLink({ to, onNavigate, className, children }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={cn(
        'group inline-flex items-center gap-1.5 whitespace-nowrap text-[14px] font-medium leading-[1.27] hover:underline',
        className,
      )}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
      >
        →
      </span>
    </Link>
  );
}

const FEATURE_TONE = {
  purple: { card: 'bg-[#f2eef9]', accent: 'bg-[#6d3fd8]', link: 'text-[#6d3fd8]' },
  blue: { card: 'bg-panel-blue', accent: 'bg-brand-blue', link: 'text-brand-blue' },
  magenta: { card: 'bg-[#fbeff5]', accent: 'bg-[#c2185b]', link: 'text-[#c2185b]' },
};

/** Figma "Feature card · …" (384px, 28px radius, rings pattern). */
export function FeatureCard({ feature, onNavigate, className }) {
  const tone = FEATURE_TONE[feature.tone];
  return (
    <div
      className={cn(
        'relative isolate flex w-[384px] shrink-0 flex-col items-start gap-3.5 overflow-hidden rounded-visual px-7 pt-7',
        tone.card,
        className,
      )}
    >
      {/* Figma "Pattern · rings": 1024×1052, offset -128px left inside a 384×560 frame */}
      <img
        src={menuRings}
        alt=""
        aria-hidden="true"
        width={1024}
        height={1052}
        className="pointer-events-none absolute left-[-128px] top-0 -z-10 h-[1052px] w-[1024px] max-w-none"
      />
      <span className="flex items-center gap-2 rounded-[99px] border border-border-muted bg-white py-[5px] pl-[5px] pr-2.5 font-mono font-medium leading-[1.27]">
        <span
          className={cn(
            'rounded-[6px] px-1.5 py-0.5 text-[10px] uppercase text-white',
            tone.accent,
          )}
        >
          {feature.badge}
        </span>
        <span className="text-[12px] text-ink-800">{feature.label}</span>
      </span>
      <p className="text-[22px] font-medium leading-[1.3] tracking-[-0.33px] text-ink-800">
        {feature.title}
      </p>
      <ArrowLink to={feature.cta.to} onNavigate={onNavigate} className={tone.link}>
        {feature.cta.label}
      </ArrowLink>
      <MegaMenuStage stage={feature.stage} media={feature.media} />
    </div>
  );
}

/**
 * Figma "Mega panel": full-width white sheet under the 68px bar. Absolutely
 * positioned against the fixed <header>.
 */
export default function MegaMenuPanel({
  panel,
  id,
  labelledBy,
  animate,
  onNavigate,
  onPointerEnter,
  onPointerLeave,
}) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      className={cn(
        'absolute inset-x-0 top-full hidden border-t border-border-muted bg-surface-white shadow-[0_24px_24px_rgba(10,10,18,0.08)] lg:block',
        animate && 'animate-mega-in motion-reduce:animate-none',
      )}
    >
      <div className="mx-auto flex w-full max-w-site items-start gap-10 px-8 pb-9 pt-8 xl:px-0">
        <div className="flex min-w-0 flex-1 flex-col gap-6">
          <div className="flex w-full items-start gap-7">
            {panel.columns.map((groups, ci) => (
              <div key={ci} className="flex min-w-0 flex-1 flex-col gap-[22px]">
                {groups.map((group, gi) => {
                  const gid = `${id}-g${ci}-${gi}`;
                  return (
                    <div key={gi} className="flex w-full flex-col gap-0.5">
                      <GroupLabel id={gid} title={group.title} />
                      <div aria-hidden="true" className="h-2" />
                      <ul
                        className="flex w-full flex-col gap-0.5"
                        aria-labelledby={group.title ? gid : undefined}
                        aria-label={group.title ? undefined : `${panel.label} (continued)`}
                      >
                        {group.links.map((l) => (
                          <li key={l.to + l.label}>
                            <MegaMenuLink link={l} onNavigate={onNavigate} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex w-full flex-wrap items-start gap-x-7 gap-y-2 border-t border-border-muted pt-4">
            {panel.footerLinks.map((f) => (
              <ArrowLink
                key={f.label}
                to={f.to}
                onNavigate={onNavigate}
                className="text-brand-blue"
              >
                {f.label}
              </ArrowLink>
            ))}
          </div>
        </div>
        <FeatureCard feature={panel.feature} onNavigate={onNavigate} />
      </div>
    </div>
  );
}
