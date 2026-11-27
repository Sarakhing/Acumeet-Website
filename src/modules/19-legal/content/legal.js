import { ROUTES } from '@/constants/routes';

const L = ROUTES.legal;

/** Legal catalogue (Figma "19 · Legal"): hero copy and Figma hero height per document. */
export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    lead: 'How Acumeet collects, uses and protects personal information.',
    to: L.privacy,
    height: 439,
  },
  terms: {
    title: 'Terms & conditions',
    lead: 'The terms that govern your use of Acumeet.',
    to: L.terms,
    height: 432,
  },
  cookies: {
    title: 'Cookie Policy',
    lead: 'How Acumeet uses cookies and similar technologies.',
    to: L.cookies,
    height: 455,
  },
  dpa: {
    title: 'Data Processing Agreement',
    lead: 'The terms under which Acumeet processes personal data on your behalf.',
    to: L.dpa,
    height: 416,
  },
  acceptableUse: {
    title: 'Acceptable Use Policy',
    lead: 'The rules for using Acumeet responsibly.',
    to: L.acceptableUse,
    height: 456,
  },
  security: {
    title: 'Security Policy',
    lead: 'A summary of how Acumeet protects customer data.',
    to: L.security,
    height: 496,
  },
};

const CONTACT = { label: 'Contact us', to: ROUTES.companyPage.contact };

/** "Download PDF" opens the browser's print dialog (save as PDF) until PDFs are published. */
const PDF = { label: 'Download PDF', onClick: () => window.print() };

const SLOTS = [
  { tint: 'lilac', pattern: { type: 'rings', size: 'mini' } },
  { tint: 'pink', pattern: { type: 'dots', size: 'mini' } },
  { tint: 'blue', pattern: { type: 'waveform', size: 'mini' } },
  { tint: 'mint', pattern: { type: 'hairlines', size: 'mini' } },
];

/**
 * Builds a legal page: centred hairline hero (accent = last word of the title), the document,
 * then the 19.01 directory or an "Explore Legal" related row, and the shared CTA band.
 */
export const legalPage = (key, doc, { directory, related } = {}) => {
  const L1 = LEGAL[key];
  const words = L1.title.split(' ');
  const sections = [{ type: 'document', doc }];
  if (directory) sections.push(directory);
  return {
    breadcrumb: [{ label: 'Home', to: ROUTES.home }, { label: L1.title }],
    hero: {
      variant: 'centered',
      minHeight: L1.height,
      pattern: 'hairlines',
      titleSize: 62,
      leadSize: 19,
      copyWidth: 980,
      secondaryStyle: 'link',
      eyebrow: `Legal  ·  ${L1.title}`,
      title: words.slice(0, -1).join(' '),
      accent: words.at(-1),
      lead: L1.lead,
      primary: PDF,
      secondary: CONTACT,
    },
    sections,
    related: related && {
      eyebrow: 'Keep exploring',
      title: 'Explore legal',
      cards: related.map((k, i) => ({
        title: LEGAL[k].title,
        description: 'Legal',
        to: LEGAL[k].to,
        ...SLOTS[i % SLOTS.length],
      })),
    },
    cta: {
      title: 'Questions about this policy?',
      lead: 'Contact our team and we will help.',
      primary: CONTACT,
      secondary: { label: 'Visit the Trust Center', to: ROUTES.trustCenter },
    },
  };
};
