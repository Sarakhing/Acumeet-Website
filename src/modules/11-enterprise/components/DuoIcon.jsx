/**
 * Duotone "Ic / …" icon recoloured at runtime: the tone layer (the `opacity="0.7"` path) takes
 * `tone`, the line layer is ink. Sources are the mega-menu icons (any tint — only the shapes are
 * used), plus the Deployment / Enterprise extras (cloud, funnel-simple).
 */
const RAW = import.meta.glob(
  [
    '/src/assets/icons/nav/*.svg',
    '/src/assets/images/deployment/ic-*.svg',
    '/src/assets/images/enterprise/ic-*.svg',
  ],
  { eager: true, query: '?raw', import: 'default' },
);

const TINTS = /-(teal|green|purple|blue|pink|orange)$/;
const SHAPES = {};
for (const [path, svg] of Object.entries(RAW)) {
  const name = path
    .split('/')
    .pop()
    .replace(/\.svg$/, '')
    .replace(/^ic-/, '')
    .replace(TINTS, '');
  SHAPES[name] ??= svg;
}

const cache = new Map();
const LINE = '#1D1F21';

function dataUri(name, tone) {
  const key = `${name}|${tone}`;
  if (!cache.has(key)) {
    const svg = SHAPES[name];
    if (!svg) return null;
    const out = svg.replace(/<path([^>]*?)fill="#[0-9A-Fa-f]{6}"/g, (m, attrs) =>
      /opacity="0\.7"/.test(m) ? `<path${attrs}fill="${tone}"` : `<path${attrs}fill="${LINE}"`,
    );
    cache.set(key, `data:image/svg+xml;charset=utf-8,${encodeURIComponent(out)}`);
  }
  return cache.get(key);
}

export default function DuoIcon({ name, tone = '#C2185B', size = 16, className }) {
  const src = dataUri(name, tone);
  if (!src) {
    if (import.meta.env.DEV) console.warn(`[DuoIcon] missing icon ${name}`);
    return null;
  }
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: size }}
    />
  );
}
