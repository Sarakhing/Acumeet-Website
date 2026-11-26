import Container from '@/components/ui/Container';
import SectionHeading from '@/components/blocks/SectionHeading';
import mark from '@/assets/logos/acumeet-mark.svg';

/**
 * Figma "03 · Comparison" (12.02–12.07): on #fafafa, a 44px heading + 17px lead, then a 1200-wide
 * white table (24px radius): a header row (blank · competitor mark + name · blue "Acumeet" column)
 * and one row per criterion (240px bold label · competitor text · Acumeet text on a pale blue wash).
 * Below md the table keeps its columns and scrolls sideways inside the container.
 * rows: [[label, competitor, acumeet], …]; competitor: { name, image }.
 */
export default function CompareTable({ title, lead, competitor, rows = [] }) {
  return (
    <section className="bg-[#fafafa] py-16 lg:py-28">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeading title={title} lead={lead} titleSize={44} />
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[720px] table-fixed border-separate border-spacing-0 overflow-hidden rounded-[24px] border border-[#e4e4e7] bg-surface-white text-left">
            <colgroup>
              <col className="w-[20%]" />
              <col className="w-[40%]" />
              <col className="w-[40%]" />
            </colgroup>
            <thead>
              <tr>
                <td className="h-[62px] px-6" />
                <th scope="col" className="px-6 py-5 text-[15px] font-semibold text-ink-600">
                  <span className="flex items-center gap-2.5">
                    <img
                      src={competitor.image}
                      alt=""
                      width={22}
                      height={22}
                      className="size-[22px] rounded-[6px]"
                    />
                    {competitor.name}
                  </span>
                </th>
                <th
                  scope="col"
                  className="bg-brand-blue px-6 py-5 text-[15px] font-semibold text-white"
                >
                  <span className="flex items-center gap-2.5">
                    <img
                      src={mark}
                      alt=""
                      width={22}
                      height={17}
                      className="h-[17px] w-[22px] brightness-0 invert"
                    />
                    Acumeet
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, them, us]) => (
                <tr key={label}>
                  <th
                    scope="row"
                    className="border-t border-[#e4e4e7] px-6 py-[22px] align-top text-[15px] font-semibold text-[#0a0a0b]"
                  >
                    {label}
                  </th>
                  <td className="border-t border-[#e4e4e7] px-6 py-[22px] align-top text-[15.5px] leading-[1.6] text-ink-600">
                    {them}
                  </td>
                  <td className="border-t border-[#e4e4e7] bg-[#eff4ff] px-6 py-[22px] align-top text-[15.5px] leading-[1.6] text-[#0a0a0b]">
                    {us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
