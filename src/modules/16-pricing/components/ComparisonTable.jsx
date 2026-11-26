import AccentTitle from '@/components/ui/AccentTitle';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { cn } from '@/utils/cn';
import { COMPARISON, PLANS } from '../content/plans';
import { Check } from './icons';

const BIZ = PLANS.findIndex((p) => p.featured);

function Cell({ value, featured }) {
  let content;
  if (value === true) {
    content = (
      <>
        <Check />
        <span className="sr-only">Included</span>
      </>
    );
  } else if (value === false) {
    content = (
      <>
        <span aria-hidden="true" className="text-[14px] text-[#83868e]">
          —
        </span>
        <span className="sr-only">Not included</span>
      </>
    );
  } else {
    content = <span className="text-[13px] font-medium leading-[1.4] text-[#0a0a0b]">{value}</span>;
  }
  return (
    <td className="border-b border-[#e4e4e7] py-3.5">
      <span className={cn('flex h-[22px] items-center justify-center', featured && 'bg-[#eff4ff]')}>
        {content}
      </span>
    </td>
  );
}

/**
 * Figma 16.03 "01 · Comparison" (49:173926): a centred 58px title + lead, then a 1200-wide table —
 * a plan header (name, price, button; Business on a pale blue wash) over a 1.5px rule, then
 * grouped feature rows (450px label + five 150px plan columns). Below lg the table keeps its
 * columns and scrolls sideways inside the container, with the feature column pinned.
 */
export default function ComparisonTable({ title, accent, lead }) {
  return (
    <section
      aria-label="Compare plans"
      className="bg-surface-white pt-14 pb-16 lg:pt-[88px] lg:pb-28"
    >
      <Container className="flex flex-col gap-12">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-4 text-center">
          <AccentTitle
            as="h1"
            accent={accent}
            className="text-[38px] font-medium leading-[1.08] tracking-[-1px] sm:text-[48px] lg:text-[58px] lg:tracking-[-1.45px]"
          >
            {title}
          </AccentTitle>
          <p className="max-w-[700px] text-[17.5px] leading-[1.55] text-[#55575d]">{lead}</p>
        </div>

        <div className="relative -mx-(--gutter) overflow-x-auto px-(--gutter)">
          <table className="w-full min-w-[910px] lg:min-w-[950px] table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[160px] sm:w-[200px] lg:w-[450px]" />
              {PLANS.map((p) => (
                <col key={p.id} className="w-[150px]" />
              ))}
            </colgroup>
            <thead>
              <tr className="border-b-[1.5px] border-[#0a0a0b]">
                <td className="sticky left-0 bg-surface-white pb-[42px] align-bottom text-[13px] font-medium leading-[1.4] text-[#83868e]">
                  Plans
                </td>
                {PLANS.map((p, i) => (
                  <th key={p.id} scope="col" className="px-0 pb-5 align-top font-normal">
                    <span
                      className={cn(
                        'flex flex-col items-center gap-1.5 rounded-[16px] px-2 py-4 text-center',
                        i === BIZ && 'bg-[#eff4ff]',
                      )}
                    >
                      <span className="text-[16px] font-semibold leading-[1.4] text-[#0a0a0b]">
                        {p.name}
                      </span>
                      <span className="text-[13px] leading-[1.4] text-[#55575d]">
                        {p.yearly === 'Custom' ? 'Custom' : `${p.yearly} / mo`}
                      </span>
                      <Button
                        to={p.cta.to}
                        intent={i === BIZ ? 'primary' : 'secondary'}
                        className="text-[14px]! leading-none! px-4!"
                      >
                        {p.cta.label}
                      </Button>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            {COMPARISON.map(([group, rows]) => (
              <tbody key={group}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={PLANS.length + 1}
                    className="pt-9 pb-3 text-[18px] font-semibold leading-[1.3] tracking-[-0.27px] text-[#0a0a0b]"
                  >
                    <span className="sticky left-0">{group}</span>
                  </th>
                </tr>
                {rows.map(([feature, values]) => (
                  <tr key={feature}>
                    <th
                      scope="row"
                      className="sticky left-0 border-b border-[#e4e4e7] bg-surface-white py-3.5 pr-4 text-[15.5px] leading-[1.6] font-normal text-[#0a0a0b]"
                    >
                      {feature}
                    </th>
                    {values.map((v, i) => (
                      <Cell key={PLANS[i].id} value={v} featured={i === BIZ} />
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </Container>
    </section>
  );
}
