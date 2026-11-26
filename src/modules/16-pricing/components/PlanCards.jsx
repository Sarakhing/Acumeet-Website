import { useState } from 'react';
import { Link } from 'react-router';
import AccentTitle from '@/components/ui/AccentTitle';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { PLANS } from '../content/plans';
import { ChevronDown, Info, Sparkle } from './icons';

function PlanCard({ plan, billing }) {
  const { name, unit, audience, cta, ai, includes, features, featured } = plan;
  return (
    <li
      className={cn(
        'flex flex-col gap-3.5 rounded-[18px] bg-surface-white px-5 py-6',
        featured ? 'border-2 border-brand-blue' : 'border border-[#e4e4e7]',
      )}
    >
      <h3 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.27px] text-[#0a0a0b]">
        {name}
      </h3>
      <p className="flex items-center gap-2">
        <span className="text-[38px] font-medium leading-[1.1] tracking-[-0.76px] text-[#0a0a0b]">
          {plan[billing]}
        </span>
        <span className="max-w-[56px] text-[12px] leading-[1.2] text-[#55575d]">{unit}</span>
      </p>
      <p className="text-[13px] font-medium leading-[1.4] text-[#0a0a0b]">{audience}</p>
      <Button
        to={cta.to}
        intent={featured ? 'primary' : 'secondary'}
        className="w-full justify-start text-[14.5px]! leading-none!"
      >
        {cta.label}
      </Button>
      <div
        className={cn(
          'flex items-center gap-2.5 rounded-[12px] p-3',
          featured ? 'bg-[#eff4ff]' : 'bg-[#fafafa]',
        )}
      >
        <Sparkle />
        <p className="flex flex-col gap-0.5">
          <span className="text-[12.5px] font-semibold leading-[1.4] text-[#0a0a0b]">{ai[0]}</span>
          <span className="text-[11.5px] leading-[1.4] text-[#55575d]">{ai[1]}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2.5 pt-2">
        <p className="text-[13px] font-semibold leading-[1.4] text-[#0a0a0b]">{includes}</p>
        <ul className="flex flex-col gap-2.5">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start justify-between gap-2 text-[12.5px] leading-[1.4] text-[#55575d]"
            >
              {f}
              <Info />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

/**
 * Figma 16.01 "01 · Hero and plans" (49:173603, also 16.02 Plans): centred 58px title and lead,
 * a Yearly / Monthly switch, five plan cards (Business outlined in blue) and a "Compare plans"
 * link to 16.03. Cards are 5-up at lg, 2-up at sm and stacked on phones.
 */
export default function PlanCards({ title, accent, lead, compareTo }) {
  const [billing, setBilling] = useState('yearly');
  const option = (value, label, extra) => (
    <button
      type="button"
      aria-pressed={billing === value}
      onClick={() => setBilling(value)}
      className={cn(
        'text-[14px] leading-[1.4] transition-colors',
        billing === value ? 'font-semibold text-brand-blue' : 'text-[#55575d] hover:text-ink-900',
      )}
    >
      {label}
      {extra}
    </button>
  );

  return (
    <section aria-label="Plans and pricing" className="bg-surface-white pt-14 pb-10 lg:pt-20">
      <Container className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <AccentTitle
            as="h1"
            accent={accent}
            className="max-w-[860px] text-[38px] font-medium leading-[1.08] tracking-[-1px] sm:text-[48px] lg:text-[58px] lg:tracking-[-1.45px]"
          >
            {title}
          </AccentTitle>
          <p className="max-w-[640px] text-[17.5px] leading-[1.55] text-[#55575d]">{lead}</p>
        </div>

        <div className="flex w-full flex-col gap-8">
          <div
            role="group"
            aria-label="Billing period"
            className="flex items-center justify-end gap-2.5 pt-6"
          >
            {option('yearly', 'Yearly', <span className="ml-2">SAVE 20%</span>)}
            <span aria-hidden="true" className="text-[14px] text-[#83868e]">
              |
            </span>
            {option('monthly', 'Monthly')}
          </div>
          <ul aria-label="Plans" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} billing={billing} />
            ))}
          </ul>
        </div>

        <Link
          to={compareTo}
          className="flex items-center gap-1.5 pt-6 text-[17px] font-medium leading-[1.4] text-brand-blue hover:underline"
        >
          Compare plans
          <ChevronDown />
        </Link>
      </Container>
    </section>
  );
}
