import { Fragment } from 'react';
import { cn } from '@/utils/cn';

/* Figma code colours (dark panels). */
const C = {
  text: 'text-[#e6e6ef]',
  muted: 'text-[#8b8ba0]',
  string: 'text-[#9fe5b9]',
  url: 'text-[#8ab4ff]',
  variable: 'text-[#ffc861]',
  key: 'text-[#9fe5b9]',
  number: 'text-[#e6e6ef]',
  header: 'text-[#ff8fb8]',
};

/* Tokenise one line: comments, $VARS / ${…}, URLs, "strings", numbers. */
const TOKEN =
  /(\/\/.*$|#\s.*$)|(\$\{[^}]+\}|\$[A-Z_]+)|(https?:\/\/[^\s"'\\]+)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')|(\b\d+\b)/g;

function Line({ text }) {
  if (/^(Authorization|Host):/.test(text)) {
    const [k, ...rest] = text.split(':');
    const v = rest.join(':');
    return (
      <>
        <span className={k === 'Authorization' ? C.header : C.text}>{k}:</span>
        <Line text={v} />
      </>
    );
  }
  const out = [];
  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index > last)
      out.push(
        <span key={last} className={C.text}>
          {text.slice(last, m.index)}
        </span>,
      );
    const [tok, comment, variable, url, string] = m;
    let cls = C.number;
    if (comment) cls = C.muted;
    else if (variable) cls = C.variable;
    else if (url) cls = C.url;
    else if (string) cls = /^\s*:/.test(text.slice(m.index + tok.length)) ? C.key : C.string;
    // a URL inside a string keeps the URL colour
    if (string && /^["']https?:/.test(string)) cls = C.url;
    out.push(
      <span key={m.index} className={cls}>
        {tok}
      </span>,
    );
    last = m.index + tok.length;
  }
  if (last < text.length)
    out.push(
      <span key={last} className={C.text}>
        {text.slice(last)}
      </span>,
    );
  return out;
}

/** Syntax-coloured code: `code` is a string (lines split on \n). */
export function Code({ code, className }) {
  return (
    <pre className={cn('overflow-x-auto font-mono text-[12px] leading-[1.75]', className)}>
      <code>
        {code.split('\n').map((l, i) => (
          <Fragment key={i}>
            <Line text={l} />
            {'\n'}
          </Fragment>
        ))}
      </code>
    </pre>
  );
}

const METHOD = {
  GET: 'bg-[#1f8a4c] text-white',
  POST: 'bg-[#2f7cf6] text-white',
  EVENT: 'bg-[#9e0059] text-white',
};

/** Small mono method pill (GET green · POST blue · EVENT magenta). */
export function Method({ m, className }) {
  return (
    <span
      className={cn(
        'inline-flex h-[18px] min-w-[44px] shrink-0 items-center justify-center rounded-[5px] px-1.5 font-mono text-[9.5px] font-semibold tracking-[0.4px]',
        METHOD[m] ?? METHOD.GET,
        className,
      )}
    >
      {m}
    </span>
  );
}

/** Window chrome: three dots + centred mono title. `dark` for code windows. */
export function Chrome({ title, dark, right }) {
  return (
    <div
      className={cn(
        'flex h-[34px] items-center gap-1.5 border-b px-4',
        dark ? 'border-white/10' : 'border-border-muted',
      )}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={cn('size-[9px] rounded-full', dark ? 'bg-white/20' : 'bg-[#e4e4ea]')}
        />
      ))}
      <span
        className={cn(
          'flex-1 text-center font-mono text-[11px]',
          dark ? 'text-[#8b8ba0]' : 'text-ink-500',
        )}
      >
        {title}
      </span>
      {right ?? <span className="w-[39px]" />}
    </div>
  );
}

/** "● Early access" magenta pill. */
export function EarlyAccess({ dark }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-[11px] font-medium',
        dark ? 'bg-[#3a1430] text-[#ff8fb8]' : 'bg-[#fdecf3] text-brand-magenta',
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      Early access
    </span>
  );
}

/** Pale grid (40px) used behind the Developers heroes. */
export const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgb(11 11 18 / 0.045) 1px, transparent 1px), linear-gradient(90deg, rgb(11 11 18 / 0.045) 1px, transparent 1px)',
  backgroundSize: '56px 56px',
};
export const GRID_BG_DARK = {
  backgroundImage:
    'linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px)',
  backgroundSize: '56px 56px',
};
