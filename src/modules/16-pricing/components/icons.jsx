/** Small inline icons for the Pricing cards and table (all decorative). */

/** Figma "Icon/sparkle" (20px, brand blue): a large and a small four-point star. */
export function Sparkle({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M8 4.5c.5 3 1.9 4.4 4.9 4.9-3 .5-4.4 1.9-4.9 4.9-.5-3-1.9-4.4-4.9-4.9 3-.5 4.4-1.9 4.9-4.9Z"
        stroke="#0060ff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 2c.25 1.5.95 2.2 2.5 2.5-1.55.3-2.25 1-2.5 2.5-.25-1.5-.95-2.2-2.5-2.5 1.55-.3 2.25-1 2.5-2.5Z"
        fill="#0060ff"
      />
    </svg>
  );
}

/** The 14px ⓘ beside each plan feature. */
export function Info() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="7" cy="7" r="6.25" stroke="#83868e" strokeWidth="1" />
      <path d="M7 6.2v3.6" stroke="#83868e" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="4.3" r=".75" fill="#83868e" />
    </svg>
  );
}

/** Comparison "included" mark: 22px pale-green disc with a green tick. */
export function Check() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="#eaf7f0" />
      <path
        d="m7 11.2 2.7 2.6L15 8.4"
        stroke="#12a05c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m4 6 4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
