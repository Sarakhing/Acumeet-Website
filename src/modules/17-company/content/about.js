import { MarketCard } from '../components/DSections';
import { createElement as h } from 'react';
import { coBreadcrumb, DEMO, PLATFORM, STAGES } from './company';

/** 17.02 · About Acumeet (Figma 49:187863). */
export default {
  breadcrumb: coBreadcrumb('About Acumeet'),
  sections: [
    {
      type: 'hero',
      titleSize: 68,
      eyebrow: 'About Acumeet',
      title: 'Meetings end. Organisational knowledge should not.',
      lead: 'Acumeet is an enterprise meeting intelligence platform that helps organisations capture, structure, protect and use the knowledge created in business meetings.',
      primary: DEMO,
      secondary: PLATFORM,
    },
    {
      type: 'split',
      eyebrow: 'Who we are',
      title: 'We are not building another AI note taker',
      body: 'Meetings in enterprises carry decisions, customer information, financial information and regulatory considerations. Acumeet goes beyond recording and transcription to turn those conversations into structured, searchable and secure knowledge.',
    },
    {
      type: 'split',
      tone: 'dark',
      py: 128,
      eyebrow: 'Why we exist',
      title: 'Too much value disappears when the meeting ends',
      body: 'A decision is made, but months later no one can find the context. An action is agreed, but follow-up is inconsistent. Acumeet gives important conversations a useful life after the meeting.',
    },
    {
      type: 'solve',
      eyebrow: 'What we solve',
      title: 'From conversation to organisational intelligence',
      cards: STAGES.map(([title, body]) => ({ title, body })),
    },
    {
      type: 'split',
      py: 120,
      eyebrow: 'Who we build for',
      title: 'Built for enterprises where meetings carry real weight',
      lead: 'Acumeet is designed for regulated and information-sensitive organisations that need governance, security controls, auditability and data ownership.',
      aside: h(MarketCard, {
        eyebrow: 'Priority market',
        statement:
          'Our strongest focus is financial services, including banks, merchant banks, insurers and other regulated financial institutions.',
        chips: ['Banks', 'Merchant banks', 'Insurers', 'Regulated financial institutions'],
      }),
    },
    {
      type: 'centered',
      eyebrow: 'How we think',
      title: 'AI is useful.',
      accent: 'Governed AI is more useful.',
      lead: 'Enterprise AI should help people work with important information without losing control, accountability or governance. The value is not AI alone. It is AI combined with enterprise security, governance and organisational knowledge.',
    },
    {
      type: 'closing',
      title: 'Your next meeting will create knowledge. Keep it.',
      lead: 'See how Acumeet helps you capture what matters, protect sensitive context and turn meetings into organisational intelligence.',
      cta: DEMO,
    },
  ],
};
