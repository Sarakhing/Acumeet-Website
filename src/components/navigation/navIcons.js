/**
 * Duotone "Ic / …" icons used by the header mega menu, exported from Figma
 * (Navigation · D Featured, 91:65978) one file per icon × tint colour.
 */
const FILES = import.meta.glob('/src/assets/icons/nav/*.svg', {
  eager: true,
  import: 'default',
  query: '?no-inline', // ~95 small SVGs: emit as files so they load only when a panel opens
});

const BY_NAME = Object.fromEntries(
  Object.entries(FILES).map(([path, url]) => [
    path
      .split('/')
      .pop()
      .replace(/\.svg$/, ''),
    url,
  ]),
);

/** Icon tile background per tint (icon colours live in the SVGs). */
export const TILE_BG = {
  teal: 'bg-[#e5f5f9]',
  green: 'bg-[#e6f6f0]',
  purple: 'bg-[#f1ebfe]',
  blue: 'bg-[#eaf1ff]',
  pink: 'bg-[#fdecf4]',
  orange: 'bg-[#fef0e6]',
};

export function navIcon({ icon, tint, iconFile }) {
  const src = BY_NAME[iconFile ?? `${icon}-${tint}`];
  if (!src && import.meta.env.DEV)
    console.warn(`[megaMenu] missing icon ${iconFile ?? `${icon}-${tint}`}`);
  return src;
}
