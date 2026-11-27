import { Link } from 'react-router';
import Container from '@/components/ui/Container';
import { ROUTES } from '@/constants/routes';
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
    to: ROUTES.securityPage.identityAccess, // was /security#access-control
  },
  {
    title: 'Retention',
    description: 'How long records are kept',
    icon: iconRetention,
    to: ROUTES.securityPage.dataLifecycle, // was /security#retention
  },
  {
    title: 'Model training',
    description: 'Never used to train public AI models',
    icon: iconModelTraining,
    to: ROUTES.securityPage.aiSecurity, // was /security#model-training
  },
  {
    title: 'SSO and audit logs',
    description: 'Enterprise sign-in and activity history',
    icon: iconSsoAudit,
    to: ROUTES.securityPage.auditMonitoring, // was /security#sso-and-audit-logs
  },
  {
    title: 'Storage and keys',
    description: 'Customer-controlled',
    icon: iconStorageKeys,
    to: ROUTES.securityPage.dataSecurity, // was /security#storage-and-keys
  },
];

function ControlRow({ title, description, icon, to }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-center gap-4 py-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-white/6">
          <img src={icon} alt="" width={20} height={20} />
        </span>
        <span className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-[16px] font-medium text-ink-on-dark">{title}</span>
          <span className="text-[14px] leading-[1.45] text-[#a3a3b5]">{description}</span>
        </span>
        <span
          aria-hidden="true"
          className="text-[16px] text-[#6f6f82] transition-[color,transform] duration-200 group-hover:translate-x-1 group-hover:text-white"
        >
          →
        </span>
      </Link>
    </li>
  );
}

export default function SecuritySection() {
  return (
    <section aria-labelledby="security-heading" className="bg-surface-dark py-20 sm:py-24 lg:py-28">
      <Container className="grid grid-cols-[minmax(0,1fr)] items-center gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:gap-20">
        <div className="flex flex-col gap-5">
          <p className="eyebrow-dark">Security and governance</p>
          <h2
            id="security-heading"
            className="text-[38px] font-medium leading-[1.1] tracking-[-1.1px] text-ink-on-dark text-balance sm:text-[48px] sm:tracking-[-1.44px] lg:text-[56px] lg:tracking-[-1.7px]"
          >
            Your data. Your rules.
          </h2>
          <p className="max-w-[520px] text-[16px] leading-[1.55] text-[#b4b4c6] sm:text-[17px]">
            You decide who sees each meeting and how long it is kept. Meeting data is never used to
            train public AI models, and Enterprise plans add SSO, audit logs and your own storage
            and keys.
          </p>
          <ul className="mt-3 max-w-[560px] divide-y divide-white/10 border-y border-white/10">
            {CONTROLS.map((control) => (
              <ControlRow key={control.title} {...control} />
            ))}
          </ul>
        </div>

        <div className="min-w-0 rounded-[24px] border border-white/10 bg-white/[0.03] p-3 sm:p-4">
          <SecurityProductCards />
        </div>
      </Container>
    </section>
  );
}
