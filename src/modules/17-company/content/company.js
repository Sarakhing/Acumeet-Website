import { ROUTES } from '@/constants/routes';
import meet from '@/assets/images/home/hiw-logo-meet.png';
import teams from '@/assets/images/home/hiw-logo-teams.png';
import zoom from '@/assets/images/home/hiw-logo-zoom.png';

const C = ROUTES.companyPage;

/** Company catalogue (Figma "17 · Company"): card title, line and link label per page. */
export const COMPANY = {
  hub: { title: 'Company Hub', to: C.hub },
  about: {
    title: 'About Acumeet',
    body: 'Why we exist, who we build for and the idea behind meeting intelligence.',
    link: 'Learn about Acumeet',
    to: C.about,
  },
  snapnet: {
    title: 'About Snapnet',
    body: 'Learn about Snapnet and the company behind Acumeet.',
    link: 'Learn about Snapnet',
    to: C.snapnet,
  },
  technology: {
    title: 'Our technology',
    body: 'Technology that turns conversations into organisational intelligence.',
    link: 'Explore our technology',
    to: C.technology,
  },
  securityPhilosophy: {
    title: 'Security philosophy',
    body: 'Security is not an add-on. It is part of the reason Acumeet exists.',
    link: 'Our security philosophy',
    to: C.securityPhilosophy,
  },
  partners: {
    title: 'Partners',
    body: 'Better enterprise technology works better together.',
    link: 'Explore partners',
    to: C.partners,
  },
  careers: {
    title: 'Careers',
    body: 'Help build what better enterprise meetings look like.',
    link: 'Explore careers',
    to: C.careers,
  },
  contact: {
    title: 'Contact',
    body: 'Have a question? Talk to the team.',
    link: 'Contact us',
    to: C.contact,
  },
  news: { title: 'News', body: 'What is happening at Acumeet.', link: 'View news', to: C.news },
};

const to = (label, path) => ({ label, to: path });
export const DEMO = to('Book a demo', ROUTES.bookDemo);
export const PLATFORM = to('Explore the platform', ROUTES.products);

/** Home / Company Hub / {page}. */
export const coBreadcrumb = (label) => [
  { label: 'Home', to: ROUTES.home },
  { label: 'Company Hub', to: C.hub },
  { label },
];

/** Link cards for COMPANY keys; `withLink` keeps the magenta "Learn about …" line (17.01 only). */
export const companyCards = (keys, withLink = false) =>
  keys.map((k) => ({
    title: COMPANY[k].title,
    body: COMPANY[k].body,
    to: COMPANY[k].to,
    link: withLink ? COMPANY[k].link : undefined,
  }));

/** The six stages with their one-line descriptions (17.02 cards, 17.04 stack). */
export const STAGES = [
  ['Capture', 'Bring meetings from Microsoft Teams, Zoom and Google Meet into one workflow.'],
  [
    'Understand',
    'Transcripts, summaries and speaker identification make meetings easier to follow.',
  ],
  ['Act', 'Capture decisions, identify actions and give every commitment an owner.'],
  ['Protect', 'Redaction AI and access controls help protect sensitive meeting information.'],
  ['Remember', 'Searchable knowledge stays available beyond the people who were in the room.'],
  ['Learn', 'Atlas and analytics surface answers and organisational insight.'],
];

export const PLATFORMS = [
  ['Microsoft Teams', teams],
  ['Zoom', zoom],
  ['Google Meet', meet],
];

export const INTEGRATIONS_LINK = to('Explore integrations', ROUTES.integrations);

/** Gradient CTA band with a title and the "Book a demo" button (17.03 / 17.04 / 17.05 / 17.09). */
export const ctaBand = (title) => ({ title, lead: ' ', primary: DEMO, secondary: null });
