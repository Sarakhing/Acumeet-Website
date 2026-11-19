import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/utils/cn';

/**
 * Figma "CTA band" (19:15139): brand gradient card with headline, sub-line
 * and two CTAs. Headline / sub-line / CTAs are overridable per page.
 * Pass lead={null} to drop the sub-line, secondary={null} for a single CTA.
 */
export default function CtaBand({
  title = 'Make Every Meeting Part of Your Enterprise Knowledge',
  lead = 'Build a more consistent approach to documenting conversations, managing decisions, preserving knowledge, and governing meeting information across your organisation.',
  primary = { label: 'Talk to Our Team', to: ROUTES.contactSales },
  secondary = { label: 'Explore Acumeet', to: ROUTES.products },
  size = 'default',
}) {
  // "home" variant (46:10202): 48px headline, 18px sub-line, no top padding.
  const home = size === 'home';
  return (
    <section className={cn('bg-surface-white pb-14 lg:pb-[86px]', !home && 'pt-14 lg:pt-[86px]')}>
      <Container>
        <div className="flex flex-col items-center overflow-hidden rounded-card bg-[image:var(--gradient-brand)] px-6 py-14 sm:px-10 lg:py-[76px]">
          <div className="flex max-w-[720px] flex-col items-center text-center">
            <h2
              className={cn(
                'text-[30px] font-medium leading-[1.1] text-white text-balance sm:text-[36px]',
                home ? 'tracking-[-1.2px] lg:text-[48px]' : 'tracking-[-0.9px] lg:text-display-2',
              )}
            >
              {title}
            </h2>
            {lead && (
              <p className={cn('mt-4 text-white/85', home ? 'text-[18px] leading-[1.55]' : 'text-body-lead')}>
                {lead}
              </p>
            )}
            <div className="mt-[30px] flex flex-wrap justify-center gap-3">
              {primary && (
                <Button to={primary.to} intent="light">
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button to={secondary.to} intent="ghost-light">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
