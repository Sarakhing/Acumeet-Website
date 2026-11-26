import { Fragment } from 'react';
import { Link } from 'react-router';

/**
 * Figma "Breadcrumb" (19:15126). items: [{ label, to? }] — last item is current page.
 */
export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border-muted bg-surface-white">
      <ol className="mx-auto flex w-full max-w-(--container-page) items-center gap-2.5 overflow-x-auto whitespace-nowrap px-(--gutter) py-3.5 text-[13px]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <Fragment key={item.label}>
              <li>
                {last ? (
                  <span aria-current="page" className="font-medium text-ink-800">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="text-ink-500 hover:text-ink-900">
                    {item.label}
                  </Link>
                )}
              </li>
              {!last && (
                <li aria-hidden="true" className="text-ink-300">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
