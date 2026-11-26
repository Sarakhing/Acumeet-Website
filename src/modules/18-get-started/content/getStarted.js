import { ROUTES } from '@/constants/routes';
import { EMAIL, INDUSTRY, NAME, ORG, role } from '../components/LeadForm';

const G = ROUTES.getStartedPage;

/** Home / Get Started / {page}. */
export const gsBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Get Started', to: G.overview },
  { label },
];

/** The Trust Center / Privacy Policy links under every hero-and-form. */
export const TRUST_LINKS = [
  { label: 'Trust Center', to: ROUTES.trustCenter },
  { label: 'Privacy Policy', to: ROUTES.legal.privacy },
];

export const NAMES = [
  {
    name: 'firstName',
    label: 'First name',
    placeholder: 'First name',
    half: true,
    autoComplete: 'given-name',
  },
  {
    name: 'lastName',
    label: 'Last name',
    placeholder: 'Last name',
    half: true,
    autoComplete: 'family-name',
  },
];

export { EMAIL, INDUSTRY, NAME, ORG, role };

const textarea = (name, label, placeholder, optional) => ({
  name,
  label,
  type: 'textarea',
  placeholder,
  optional,
});
const chips = (name, label, options) => ({ name, label, type: 'chips', options });

export { chips, textarea };

/** A HeroForm section: heroForm({ eyebrow, title, lead, value, steps? }, form). */
export const heroForm = (copy, form) => ({ type: 'heroForm', links: TRUST_LINKS, ...copy, form });
