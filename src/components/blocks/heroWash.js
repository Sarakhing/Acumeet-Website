/**
 * The soft hero wash used site-wide, matched to the home hero (Figma 46:8423): white with three
 * faint glows — amber above centre, blue lower centre, magenta at the right edge. Sizes are in px
 * so the glows look the same on short and tall heroes.
 */
export const HERO_WASH = [
  'radial-gradient(480px 300px at 60% 210px, rgb(255 186 0 / 0.16), rgb(255 186 0 / 0))',
  'radial-gradient(620px 360px at 54% 640px, rgb(0 96 255 / 0.14), rgb(0 96 255 / 0))',
  'radial-gradient(560px 340px at 100% 520px, rgb(158 0 89 / 0.12), rgb(158 0 89 / 0))',
  '#fff',
].join(', ');

/** The dark-hero version: the same idea on night, with glows kept low. */
export const HERO_WASH_DARK = [
  'radial-gradient(600px 420px at calc(50% - 320px) 250px, rgb(158 0 89 / 0.26), rgb(10 10 18 / 0))',
  'radial-gradient(560px 420px at calc(50% + 450px) 330px, rgb(0 77 229 / 0.22), rgb(10 10 18 / 0))',
].join(', ');
