import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

/**
 * Plan summary shown on the Home teaser.
 * TODO: move to a shared pricing data file when the Pricing section is built.
 */
const PLANS = [
  { id: 'free', name: 'Free', price: '$0', audience: 'Evaluating Acumeet' },
  { id: 'individual', name: 'Individual', price: '$7.99', audience: 'Solo professionals' },
  { id: 'teams', name: 'Teams', price: '$14.99', audience: 'Small teams', popular: true },
  { id: 'business', name: 'Business', price: '$24.99', audience: 'Larger organisations' },
  { id: 'enterprise', name: 'Enterprise', price: 'Custom', audience: 'Advanced requirements' },
];

function PlanCard({ plan }) {
  const { name, price, audience, popular } = plan;
  return (
    <li
      className={cn(
        'flex w-[220px] shrink-0 snap-start flex-col rounded-card bg-surface-white px-[22px] py-6 sm:w-[240px] lg:w-auto lg:min-w-0 lg:flex-1',
        popular ? 'border-[1.5px] border-brand-blue' : 'border border-border-default',
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-heading-4 text-ink-900">{name}</h3>
        {popular && (
          <Badge tone="solid" className="px-[9px]! py-[3px]! text-caption! font-normal!">
            Popular
          </Badge>
        )}
      </div>
      <p
        className={cn(
          'mt-3.5 whitespace-nowrap text-display-3',
          popular ? 'text-brand-blue' : 'text-ink-900',
        )}
      >
        {price}
        {popular && <span className="sr-only"> (most popular plan)</span>}
      </p>
      <p className="mt-2 text-body-sm text-ink-400">{audience}</p>
    </li>
  );
}

/** Figma "10 · Pricing teaser" (46:8693). The hidden "Pricing banner" child is intentionally not built. */
export default function PricingTeaser() {
  return (
    <section
      aria-labelledby="pricing-teaser-title"
      className="border-y border-border-default bg-surface-subtle pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-[110px] lg:pb-[170px]"
    >
      <Container className="flex flex-col gap-6 lg:gap-8">
        <h2
          id="pricing-teaser-title"
          className="max-w-[720px] text-balance text-[32px] leading-[1.1] font-medium tracking-[-0.9px] text-ink-900 sm:text-[40px] lg:text-[48px] lg:tracking-[-1.2px]"
        >
          A Plan That Fits How Your Team Works
        </h2>
        <p className="max-w-[820px] text-body leading-[1.55] text-ink-600 sm:text-[18px]">
          Whether you&apos;re exploring Acumeet with a smaller team or evaluating it across your
          organisation, choose the plan that matches how you work today. For enterprises with
          specific security, governance, deployment or support requirements, talk to our team about
          the right setup for your organisation.
        </p>

        <ul
          aria-label="Plans"
          className="relative -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          <Button to={ROUTES.pricing} intent="primary">
            See pricing
          </Button>
          <Button to={ROUTES.contactSales} intent="secondary">
            Talk to Sales
          </Button>
        </div>
      </Container>
    </section>
  );
}
