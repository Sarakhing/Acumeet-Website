/**
 * Figma "Badge / GDPR" · "Badge / NDPR" (Compliance 08.01 splits, 48:369581 / 48:369617):
 * a 278×316 shield-shaped document with a blue tick corner, a bold region label, the
 * standard in 63px type, "DOCUMENTATION" beneath and a thick blue chevron at the foot.
 * Drawn inline so the labels stay live text.
 */
export default function ComplianceBadge({ region, label, className }) {
  return (
    <svg
      role="img"
      aria-label={`${label} documentation`}
      width="278"
      height="316"
      viewBox="0 0 278 316"
      fill="none"
      className={className}
    >
      <path
        d="M4.212 4.212H273.788V240.091L139 311.697L4.212 240.091V4.212Z"
        fill="#fff"
        stroke="#0A0A0B"
        strokeWidth="4.212"
      />
      <path d="M4.212 58.97H273.788" stroke="#0A0A0B" strokeWidth="4.212" />
      <rect x="210.606" y="4.212" width="63.182" height="54.758" fill="#0060FF" />
      <path
        d="M229.561 31.594L237.985 40.018L254.833 23.167"
        stroke="#fff"
        strokeWidth="5.055"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.212 235.879L139 307.485L273.788 235.879" stroke="#0060FF" strokeWidth="14.742" />
      <g fontFamily="Geist, sans-serif" fontWeight="700">
        <text x="25.27" y="42" fontSize="21.06" fill="#0A0A0B">
          {region}
        </text>
        <text x="139" y="168" fontSize="63.18" textAnchor="middle" fill="#0A0A0B">
          {label}
        </text>
        <text x="139" y="210.5" fontSize="17.9" textAnchor="middle" fill="#55575D">
          DOCUMENTATION
        </text>
      </g>
    </svg>
  );
}
