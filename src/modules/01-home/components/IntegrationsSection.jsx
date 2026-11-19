import { useId } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Marquee from '@/components/patterns/Marquee';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import teamsLogo from '@/assets/logos/integrations/microsoft-teams.png';
import zoomLogo from '@/assets/logos/integrations/zoom.png';
import meetLogo from '@/assets/logos/integrations/google-meet.png';
import slackLogo from '@/assets/logos/integrations/slack.png';
import outlookLogo from '@/assets/logos/integrations/outlook.png';

const INTEGRATIONS = [
  { name: 'Microsoft Teams', logo: teamsLogo },
  { name: 'Zoom', logo: zoomLogo, inset: 'top-1 left-1 size-[30px]' },
  { name: 'Google Meet', logo: meetLogo },
  { name: 'Slack', logo: slackLogo },
  { name: 'Outlook', logo: outlookLogo },
];

// Figma "07 · Integrations" (46:8687) background: three soft radial glows
// (amber, magenta, blue at 50% layer opacity) over white.
const GLOW_BACKGROUND = [
  'radial-gradient(ellipse 33.33% 23.81% at 60% 28.57%, rgb(255 186 0 / 0.09), rgb(255 186 0 / 0))',
  'radial-gradient(ellipse 40% 27.03% at 102.4% 64.87%, rgb(158 0 89 / 0.085), rgb(158 0 89 / 0))',
  'radial-gradient(ellipse 43.48% 28.57% at 53.91% 64%, rgb(0 96 255 / 0.1), rgb(0 96 255 / 0))',
  'linear-gradient(#fff, #fff)',
].join(', ');

function IntegrationPill({ name, logo, inset = 'top-[3px] left-[3px] size-[31.294px]' }) {
  return (
    <li className="flex shrink-0 items-center gap-2.5 rounded-[16px] border border-white/90 bg-white/72 px-[22px] py-4 shadow-[0_16px_40px_0_rgb(10_15_51/0.08)] backdrop-blur-[14px]">
      <span aria-hidden="true" className="relative size-[38px] shrink-0 rounded-[7px] bg-[#e3e5ec]">
        <img
          src={logo}
          alt=""
          decoding="async"
          className={cn('absolute max-w-none object-cover', inset)}
        />
      </span>
      <span className="text-[16px] leading-[1.4] font-medium whitespace-nowrap text-ink-900">{name}</span>
    </li>
  );
}

/**
 * Figma "07 · Integrations" (46:8687). The logo row is the
 * "Marquee · Integrations logo row" (46:10757): one 949px loop
 * (24px side padding, 16px gaps) repeated seamlessly.
 */
export default function IntegrationsSection() {
  const headingId = `${useId()}-integrations-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="overflow-hidden py-16 sm:py-20 lg:py-[100px]"
      style={{ backgroundImage: GLOW_BACKGROUND }}
    >
      <Container className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <h2
            id={headingId}
            className="max-w-[800px] text-[30px] leading-[1.15] font-medium tracking-[-0.6px] text-balance text-ink-900 sm:text-[38px] sm:tracking-[-0.76px] lg:text-[48px] lg:tracking-[-0.96px]"
          >
            Works where your meetings already happen
          </h2>
          <p className="max-w-[620px] text-[16px] leading-[1.4] text-ink-600 sm:text-[18px]">
            Connect Microsoft Teams, Zoom and Google Meet, then send actions to the tools your team already uses.
          </p>
        </div>

        <Marquee
          duration={30}
          gap={0}
          fade={false}
          className="-mx-5 w-[calc(100%+40px)] max-w-[949px] sm:mx-0 sm:w-full motion-reduce:[&>div]:[animation-play-state:paused]"
        >
          <ul aria-label="Supported integrations" className="flex items-center gap-4 px-6 py-12">
            {INTEGRATIONS.map((item) => (
              <IntegrationPill key={item.name} {...item} />
            ))}
          </ul>
        </Marquee>

        <Button to={ROUTES.integrations} intent="secondary">
          Explore integrations
        </Button>
      </Container>
    </section>
  );
}
