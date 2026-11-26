import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/blocks/SectionHeading';
import videoCamera from '@/assets/images/integrations/ic-video-camera.svg';
import calendarCheck from '@/assets/images/integrations/ic-calendar-check.svg';
import userCheck from '@/assets/images/integrations/ic-user-check.svg';
import database from '@/assets/images/integrations/ic-database.svg';
import shieldCheck from '@/assets/images/integrations/ic-shield-check.svg';
import pulse from '@/assets/images/integrations/ic-pulse.svg';
import handshake from '@/assets/images/integrations/ic-handshake.svg';
import kanban from '@/assets/images/integrations/ic-kanban.svg';
import plugsConnected from '@/assets/images/integrations/ic-plugs-connected.svg';

const INDEX_ICONS = {
  'video-camera': videoCamera,
  'calendar-check': calendarCheck,
  'user-check': userCheck,
  database,
  'shield-check': shieldCheck,
  pulse,
  handshake,
  kanban,
  'plugs-connected': plugsConnected,
};

/* Mark tint + accent (arrow and corner rings at 16%), in Figma tile order. */
const TONES = [
  ['#fbf0f5', '#9e0059'],
  ['#eef4ff', '#0060ff'],
  ['#f4f1fa', '#6b3fd4'],
  ['#f1faf5', '#0e8a5f'],
  ['#fff8e8', '#b7791f'],
  ['#f6f6f8', '#4f5566'],
];

/* Six quarter rings (r 21.5 → 131.5, 22px pitch) centred on the tile's top-right corner. */
function CornerRings({ color }) {
  return (
    <svg
      aria-hidden="true"
      width="416"
      height="135"
      viewBox="0 0 416 135"
      fill="none"
      className="pointer-events-none absolute right-0 top-0"
    >
      {[21.5, 43.5, 65.5, 87.5, 109.5, 131.5].map((r) => (
        <circle key={r} cx="416" cy="0" r={r} stroke={color} strokeOpacity="0.16" />
      ))}
    </svg>
  );
}

/**
 * Figma "Index · Find Your Integration" (09.01, 48:383981): on #fafafb, a 48px heading with
 * a gradient accent and an 18px lead, then a 3-up grid of 416×150 white link tiles — a tinted
 * 40px icon mark, a coloured "↗", the category name and faint corner rings.
 * items: [{ title, to, icon }] (icon = key of INDEX_ICONS); `id` anchors the hero's "Explore integrations".
 */
export default function IntegrationIndex({ id, title, accent, lead, items = [] }) {
  return (
    <section id={id} className="scroll-mt-20 bg-surface-muted py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-10">
        <SectionHeading title={title} accent={accent} lead={lead} titleSize={48} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const [tint, accentColor] = TONES[i % TONES.length];
            return (
              <li key={it.to}>
                <Link
                  to={it.to}
                  className="group relative flex h-[150px] flex-col gap-7 overflow-hidden rounded-[20px] border border-border-muted bg-surface-white p-[22px] transition-shadow hover:shadow-mock"
                >
                  <CornerRings color={accentColor} />
                  <span className="relative flex items-center justify-between">
                    <span
                      className="flex size-10 items-center justify-center rounded-[12px]"
                      style={{ backgroundColor: tint }}
                    >
                      <img
                        src={INDEX_ICONS[it.icon]}
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-[16px] font-medium transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      style={{ color: accentColor }}
                    >
                      ↗
                    </span>
                  </span>
                  <span className="relative text-[18px] font-medium leading-[1.3] text-ink-900">
                    {it.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
