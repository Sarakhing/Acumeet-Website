import { cn } from '@/utils/cn';
import appMark from '@/assets/images/home/industries-app-mark.svg';
import { STATUSES } from './industriesData';

/**
 * Figma "App frame" (46:10408) inside Industries / Interactive: a mini
 * Acumeet window with a nav rail, the meeting's decision table and a
 * "Meeting record" side panel. Desktop is 1:1 with Figma; on small screens
 * the rail and "Recorded" column drop and the record panel stacks below.
 */
function Avatar({ owner }) {
  return (
    <span className={cn('flex size-[34px] items-center justify-center rounded-full', owner.ring)}>
      <img
        src={owner.src}
        alt=""
        width={28}
        height={28}
        loading="lazy"
        decoding="async"
        className="size-[28.333px] rounded-full border-[1.417px] border-[rgb(158_0_89/0.17)] object-cover"
      />
    </span>
  );
}

function StatusPill({ status }) {
  const { label, className } = STATUSES[status];
  return (
    <span
      className={cn(
        'inline-flex whitespace-nowrap rounded-pill px-[9px] py-[3px] text-[11px] font-medium leading-normal',
        className,
      )}
    >
      {label}
    </span>
  );
}

function RecordStat({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-3 text-[12.5px] leading-[1.4]">
      <dt className="text-ink-600">{label}</dt>
      <dd className="font-semibold text-ink-900">{value}</dd>
    </div>
  );
}

const TH = 'pb-2 text-left text-[11.5px] font-semibold leading-[1.4] text-ink-400';

export default function IndustryAppPreview({ meeting }) {
  const { title, meta, rows, record } = meeting;

  return (
    <figure
      aria-label={`Example Acumeet meeting record: ${title}`}
      className="w-full min-w-0 rounded-[18px] border border-border-subtle bg-surface-subtle p-3 sm:rounded-[24px] sm:p-5 lg:p-7"
    >
      <div className="flex w-full overflow-hidden rounded-card border border-border-default bg-surface-white">
        {/* Rail */}
        <div
          aria-hidden="true"
          className="hidden shrink-0 flex-col items-center gap-[14px] self-stretch border-r border-border-default px-[14px] py-4 sm:flex"
        >
          <img src={appMark} alt="" width={18} height={14.17} className="h-[14.17px] w-[18px]" />
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="size-4 rounded-[5px] bg-border-default" />
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col lg:flex-row">
          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 p-4 sm:p-5">
            <p className="text-[17px] font-semibold leading-[1.25] text-ink-900 sm:text-[19px]">{title}</p>
            <p className="text-[12.5px] leading-[1.4] text-ink-400">{meta}</p>

            <table className="mt-4 w-full table-fixed border-collapse">
              <caption className="sr-only">Decisions captured in {title}</caption>
              <thead>
                <tr>
                  <th scope="col" className={cn(TH, 'pl-2')}>
                    Decision
                  </th>
                  <th scope="col" className={cn(TH, 'w-[48px] sm:w-[64px]')}>
                    Owner
                  </th>
                  <th scope="col" className={cn(TH, 'hidden w-[80px] sm:table-cell')}>
                    Recorded
                  </th>
                  <th scope="col" className={cn(TH, 'w-[84px] pr-2 sm:w-[92px]')}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.decision} className="border-t border-border-default">
                    <td className="relative py-[11px] pr-2 pl-2 align-middle">
                      <span aria-hidden="true" className="absolute top-[11px] left-0 h-5 w-[3px] bg-brand-blue" />
                      <span className="block text-[12.5px] font-medium leading-[1.4] text-ink-900">{row.decision}</span>
                    </td>
                    <td className="py-[11px] align-middle">
                      <Avatar owner={row.owner} />
                    </td>
                    <td className="hidden py-[11px] align-middle text-[12.5px] leading-[1.4] whitespace-nowrap text-ink-400 sm:table-cell">
                      {row.time}
                    </td>
                    <td className="py-[11px] pr-2 align-middle">
                      <StatusPill status={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Meeting record */}
          <div className="flex shrink-0 flex-col gap-3 self-stretch border-t border-border-default bg-surface-subtle p-4 lg:w-[210px] lg:border-t-0 lg:border-l">
            <p className="text-caption font-semibold leading-[1.4] text-ink-400">Meeting record</p>
            <dl className="flex flex-col gap-3">
              <RecordStat label="Participants" value={record.participants} />
              <RecordStat label="Duration" value={record.duration} />
              <RecordStat label="Fields redacted" value={record.redacted} />
            </dl>
            <p className="rounded-[10px] border border-border-default bg-surface-white p-2.5 text-caption leading-[1.45] text-ink-600">
              {record.note}
            </p>
          </div>
        </div>
      </div>
    </figure>
  );
}
