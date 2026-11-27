import { ROUTES } from '@/constants/routes';
import { exploreIndustries, industryCtaFull } from './industries';
import { industryBreadcrumb, search, windowHero } from './detail';

const RESULTS_QUERY = 'phase two budget release';

/** 04.14 · Public Sector (Figma 48:293890). */
export default {
  breadcrumb: industryBreadcrumb('Public sector'),

  /** 01 · Hero (48:293893) — 726 wash, Banking composition, Book a Demo + "Contact our team →". */
  hero: windowHero({
    eyebrow: 'Public sector',
    title: 'Make public sector meetings easier to document',
    accent: 'and follow through',
    lead: 'Public sector organisations bring together departments, programme teams, agencies, service providers and community stakeholders to discuss policy, services and public initiatives. Acumeet helps turn these discussions into structured meeting records, documented decisions and trackable actions.',
    decisions: [
      'Jun 6',
      ['Approve phase two of the programme', 'Add two agencies to the working group'],
      'Delayed budget release for phase two',
      ['Consultation', 'Reporting', 'Programme delivery', 'Budget'],
    ],
    actions: [
      4,
      [
        ['Share the stakeholder feedback summary', 'May 21'],
        ['Update the programme risk log', 'Next week'],
        ['Prepare the quarterly progress report', 'May 4'],
      ],
    ],
    primary: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact our team', to: ROUTES.contactSales },
    padBottom: 100,
  }),

  sections: [
    /** 02 · Create Clear Records of Discussions (48:293981). */
    {
      type: 'split',
      size: 'compact',
      reverse: true,
      title: 'Create clear records of discussions',
      body: [
        'Support consistent documentation of programme reviews, stakeholder consultations and internal coordination meetings so key points are easier to revisit.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: search(
          RESULTS_QUERY,
          [
            ['Programme Board Meeting', 'Jun 24', '…approved phase two subject to budget release.'],
            ['Inter-Agency Coordination', 'Apr 7', '…ownership agreed across agencies.'],
            ['Stakeholder Consultation', 'May 16', '…consultation summary to be published.'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 03 · Track Commitments and Next Steps (48:294021). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Track commitments and next steps',
      paragraphs: [
        'Capture agreed actions and responsibilities to help teams follow through on decisions and coordinate across departments and delivery partners.',
      ],
    },
    /** 04 · Preserve Programme Context (48:294027) — dark split, waveform panel. */
    {
      type: 'split',
      size: 'compact',
      tone: 'dark',
      reverse: true,
      title: 'Preserve programme context',
      body: [
        'Retain meeting-derived knowledge across recurring meetings, personnel changes and multi-stage initiatives, subject to the organisation’s records policies.',
      ],
      visual: {
        tint: 'night',
        pattern: { type: 'waveform', size: 'panel' },
        content: search(
          RESULTS_QUERY,
          [
            ['Stakeholder Consultation', 'Apr 3', '…approved phase two subject to budget release.'],
            ['Policy Working Group', 'May 12', '…ownership agreed across agencies.'],
            ['Programme Board Meeting', 'Jun 21', '…consultation summary to be published.'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 05 · Support Cross-Departmental Coordination (48:294057). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Support Cross-Departmental Coordination',
      paragraphs: [
        'Make it easier for teams to understand what was discussed, what was agreed and which actions need attention after a meeting.',
      ],
    },
    /** 06 · Workflows this page can speak to (48:294063). */
    {
      type: 'editorial',
      tone: 'white',
      title: 'Workflows this page can speak to',
      paragraphs: [
        'Programme and project steering meetings',
        'Policy development and review discussions',
        'Interdepartmental coordination meetings',
        'Stakeholder consultations and engagement',
        'Public service delivery reviews',
      ],
    },
    /** 07 · Security and responsible use (48:294073). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Security and responsible use',
      paragraphs: [
        'Public sector use may be subject to statutory records, procurement, privacy, residency, security and accessibility requirements.',
      ],
    },
  ],

  /** Explore more (48:294079). */
  related: exploreIndustries(['enterprise', 'otherRegulated', 'overview', 'financialServices'], { eyebrow: 'Keep exploring' }),

  cta: industryCtaFull('Make Public Sector Meetings Easier to Document and Follow Through'),
};
