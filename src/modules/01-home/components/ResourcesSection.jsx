import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import Waveform from '@/components/patterns/Waveform';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import ringsPattern from '@/assets/images/home/resources-pattern-rings.svg';
import dotsPattern from '@/assets/images/home/resources-pattern-dots.svg';

/* Figma "Waveform · Live · bars 120x32|24|R|158,0,89" */
function WavePattern({ seed }) {
  return (
    <Waveform bars={24} barWidth={2} gap={3} height={32} color="rgb(158 0 89 / 0.4)" seed={seed} className="w-[120px] overflow-hidden" />
  );
}

function RingsPattern() {
  return <img src={ringsPattern} alt="" width={120} height={32} className="motion-breathe block h-8 w-[120px] [--motion-origin:left_center]" />;
}

function DotsPattern() {
  return (
    <div aria-hidden="true" className="relative h-8 w-[120px] overflow-hidden">
      <img src={dotsPattern} alt="" width={112} height={22} className="motion-pan absolute top-[5px] left-[5px] block h-[22px] w-[112px]" />
    </div>
  );
}

const RESOURCES = [
  {
    id: 'productivity-leakage',
    title: 'Productivity leakage calculator',
    summary: 'Understand the potential cost of meeting inefficiency.',
    body: "Use the Productivity Leakage Calculator to estimate how meeting time, administrative overhead and follow-up challenges may affect your organisation's productivity. Explore the potential impact and identify opportunities to improve how meetings are managed.",
    cta: 'Calculate your productivity leakage',
    to: ROUTES.resources,
    bg: 'bg-[#f4f1fa]',
    pattern: <WavePattern seed={7} />,
  },
  {
    id: 'governance-maturity',
    title: 'Governance & compliance maturity score calculator',
    summary: 'Assess your governance and compliance maturity.',
    body: "Evaluate your organisation's approach to meeting governance, data handling, access controls and oversight through a guided self-assessment. Identify potential areas for improvement as your organisation considers AI adoption and enterprise governance requirements.",
    cta: 'Assess your governance maturity',
    to: ROUTES.resources,
    bg: 'bg-[#fbf0f5]',
    pattern: <RingsPattern />,
  },
  {
    id: 'blogs-insights',
    title: 'Blogs & insights',
    summary: 'Ideas and guidance for better meeting intelligence.',
    body: 'Explore articles, AI meeting guides and practical insights covering meeting productivity, enterprise meeting management, AI adoption, security and governance. Find useful perspectives to help your team understand the opportunities and considerations involved in bringing AI into meeting workflows.',
    cta: 'Explore blogs & insights',
    to: ROUTES.resources,
    bg: 'bg-[#eef4ff]',
    pattern: <DotsPattern />,
  },
  {
    id: 'trust-center',
    title: 'Trust Center',
    summary: "Understand Acumeet's approach to enterprise trust.",
    body: "Explore information about Acumeet's security practices, privacy and data handling, deployment considerations and available compliance documentation. Access relevant information to support your organisation's evaluation of enterprise meeting intelligence.",
    cta: 'Visit the Trust Center',
    to: ROUTES.trustCenter,
    bg: 'bg-[#f1faf5]',
    pattern: <WavePattern seed={11} />,
  },
];

function ResourceCard({ resource }) {
  const { title, summary, body, cta, to, bg, pattern } = resource;
  return (
    <li className={cn('flex flex-col gap-3 rounded-[24px] p-7 xl:min-h-[427px]', bg)}>
      <div aria-hidden="true">{pattern}</div>
      <h3 className="text-[20px] leading-[1.35] font-medium tracking-[-0.2px] text-ink-800">{title}</h3>
      <p className="text-[15px] leading-[1.5] font-medium text-ink-800">{summary}</p>
      <p className="text-[14px] leading-[1.5] text-[#4f5566]">{body}</p>
      <Link
        to={to}
        className="group inline-flex items-center gap-1.5 self-start text-[15px] leading-[1.5] font-medium text-ink-800 underline-offset-4 hover:underline"
      >
        {cta}
        <span aria-hidden="true" className="text-brand-magenta transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </li>
  );
}

/** Figma "11 · Resources" (46:10124). */
export default function ResourcesSection() {
  return (
    <section aria-labelledby="resources-title" className="bg-surface-white py-20 sm:py-24 lg:py-[120px]">
      <Container width="wide" className="flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <h2
            id="resources-title"
            className="max-w-[880px] text-balance text-[32px] leading-[1.12] font-medium tracking-[-0.9px] text-ink-800 sm:text-[40px] lg:text-[48px] lg:tracking-[-1.44px]"
          >
            AI meeting productivity resources
          </h2>
          <p className="max-w-[820px] text-body leading-[1.5] text-[#4f5566] sm:text-[18px]">
            Discover practical AI meeting guides, meeting intelligence insights and AI meeting best
            practices to help your organisation improve meeting productivity and make more informed
            decisions.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 xl:grid-cols-4">
          {RESOURCES.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
