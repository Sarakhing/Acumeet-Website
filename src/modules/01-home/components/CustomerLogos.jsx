import Container from '@/components/ui/Container';
import Marquee from '@/components/patterns/Marquee';
import ihs from '@/assets/logos/customers/ihs.png';
import snapnet from '@/assets/logos/customers/snapnet.png';
import hcMatrix from '@/assets/logos/customers/hc-matrix.png';
import palmPay from '@/assets/logos/customers/palmpay.png';
import segilola from '@/assets/logos/customers/segilola.png';

/**
 * Figma "09 · Customer proof" (46:8437) using
 * "Marquee · Customer logos (unending)" (46:10866).
 * Logos are desaturated in Figma (black saturation blend) → CSS grayscale.
 * `crop` reproduces Figma's image-fill crop where the frame trims whitespace.
 */
const LOGOS = [
  { name: 'IHS Towers', src: ihs, w: 85.425, h: 47.556 },
  { name: 'Snapnet', src: snapnet, w: 175.251, h: 52.575 },
  { name: 'HC Matrix HR Solutions', src: hcMatrix, w: 175.251, h: 51.293 },
  {
    name: 'PalmPay',
    src: palmPay,
    w: 175.251,
    h: 43.425,
    crop: { width: '112.69%', height: '256.08%', left: '-6.2%', top: '-78.64%' },
  },
  { name: 'Segilola Resources Operating Limited', src: segilola, w: 175.251, h: 58.006 },
];

function LogoItem({ logo }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden grayscale"
      style={{ width: `calc(${logo.w}px * var(--logo-scale))`, height: `calc(${logo.h}px * var(--logo-scale))` }}
    >
      <img
        src={logo.src}
        alt={logo.name}
        loading="lazy"
        className={logo.crop ? 'absolute max-w-none' : 'absolute inset-0 size-full object-cover'}
        style={logo.crop}
      />
    </div>
  );
}

export default function CustomerLogos() {
  return (
    <section
      aria-label="Organisations using Acumeet"
      className="bg-surface-white py-10 [--logo-scale:0.72] sm:py-[60px] sm:[--logo-scale:1]"
    >
      <Container>
        <Marquee duration={40} gap={72} className="h-[59px] sm:hidden">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
        </Marquee>
        <Marquee duration={40} gap={103.393} className="hidden h-[59px] sm:block">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
        </Marquee>
      </Container>
    </section>
  );
}
