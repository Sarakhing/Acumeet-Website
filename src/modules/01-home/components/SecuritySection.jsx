import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';
import SecurityProductCards from './security/SecurityProductCards';
import iconAccessControl from '@/assets/images/home/sec-icon-access-control.svg';
import iconRetention from '@/assets/images/home/sec-icon-retention.svg';
import iconModelTraining from '@/assets/images/home/sec-icon-model-training.svg';
import iconSsoAudit from '@/assets/images/home/sec-icon-sso-audit.svg';
import iconStorageKeys from '@/assets/images/home/sec-icon-storage-keys.svg';

/** Figma "06 · Security and governance" (46:8480). */

const CONTROLS = [
  {
    title: 'Access control',
    description: 'Who can see each meeting',
    icon: iconAccessControl,
    ring: 'border-[rgba(240,107,174,0.45)]',
    to: ROUTES.securityPage.identityAccess, // was /security#access-control
  },
  {
    title: 'Retention',
    description: 'How long records are kept',
    icon: iconRetention,
    ring: 'border-[rgba(110,168,255,0.45)]',
    to: ROUTES.securityPage.dataLifecycle, // was /security#retention
  },
  {
    title: 'Model training',
    description: 'Never used to train public AI models',
    icon: iconModelTraining,
    ring: 'border-[rgba(167,139,250,0.45)]',
    to: ROUTES.securityPage.aiSecurity, // was /security#model-training
  },
  {
    title: 'SSO and audit logs',
    description: 'Enterprise sign-in and activity history',
    icon: iconSsoAudit,
    ring: 'border-[rgba(74,222,155,0.45)]',
    to: ROUTES.securityPage.auditMonitoring, // was /security#sso-and-audit-logs
  },
  {
    title: 'Storage and keys',
    description: 'Customer-controlled',
    icon: iconStorageKeys,
    ring: 'border-[rgba(245,185,74,0.45)]',
    to: ROUTES.securityPage.dataSecurity, // was /security#storage-and-keys
  },
];

// Two soft radial glows (blue centre-left, magenta right) over Surface/Dark, as in Figma.
const BACKGROUND = [
  'radial-gradient(514px 208px at 44.29% 58.09%, rgba(0,96,255,0.38), rgba(0,96,255,0))',
  'radial-gradient(554px 218px at 93.85% 64%, rgba(158,0,89,0.42), rgba(158,0,89,0))',
].join(', ');

function ControlTile({ title, description, icon, ring, to }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex h-full items-start gap-[18px] rounded-[12px] border border-white/12 bg-white/5 px-[18px] py-3 transition-colors duration-200 hover:border-white/20 hover:bg-white/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <span
          className={cn(
            'flex size-11 shrink-0 items-center justify-center rounded-[12px] border bg-[#1b1b26]',
            ring,
          )}
        >
          <img src={icon} alt="" width={22} height={22} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-[16px] font-medium text-ink-on-dark">{title}</span>
          <span className="text-[13px] leading-[1.4] text-[#a3a3b5]">{description}</span>
        </span>
        <span
          aria-hidden="true"
          className="text-[14px] font-medium text-[#8e8ea0] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          ↗
        </span>
      </Link>
    </li>
  );
}

export default function SecuritySection() {
  return (
    <section
      aria-labelledby="security-heading"
      className="overflow-hidden bg-surface-dark py-20 sm:py-24 lg:py-28"
      style={{ backgroundImage: BACKGROUND }}
    >
      <Container className="flex flex-col items-center gap-14 xl:flex-row xl:gap-16">
        <div className="flex w-full flex-col items-start gap-5 xl:w-[560px] xl:shrink-0">
          <p className="font-mono text-overline uppercase text-[#8e8ea0]">Security and governance</p>
          <h2
            id="security-heading"
            className="text-[38px] font-medium leading-[1.12] tracking-[-1.1px] text-ink-on-dark text-balance sm:text-[48px] sm:tracking-[-1.44px] lg:text-[60px] lg:tracking-[-1.8px]"
          >
            Your data. Your rules.
          </h2>
          <p className="max-w-[540px] text-[16px] leading-[1.5] text-[#b4b4c6] sm:text-[17px]">
            Control who sees your meetings and how long they are kept. Your meeting data is never
            used to train public AI models. Enterprise plans add SSO, audit logs and, on eligible
            plans, customer-controlled storage and keys.
          </p>
          <ul className="grid w-full grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
            {CONTROLS.map((control) => (
              <ControlTile key={control.title} {...control} />
            ))}
          </ul>
          <Button to={ROUTES.security} intent="primary" size="lg">
            Explore security
          </Button>
        </div>

        {/* Figma "Controls panel": 656×650 on desktop, extending 80px into the right gutter. */}
        <div className="flex w-full min-w-0 justify-center xl:h-[650px] xl:flex-1 xl:items-center xl:-mr-20">
          <SecurityProductCards />
        </div>
      </Container>
    </section>
  );
}
