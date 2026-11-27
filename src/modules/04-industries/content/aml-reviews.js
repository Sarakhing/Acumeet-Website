import { ROUTES } from '@/constants/routes';
import { exploreIndustries, industryCta } from './industries';
import { actions, capture, explorerItems, fsBreadcrumb, search, summary, windowHero } from './detail';

/** 04.11 · AML Reviews (Figma 48:292310). */
export default {
  breadcrumb: fsBreadcrumb('AML reviews'),

  /** 01 · Hero (48:292313) — 630 wash, Banking composition. */
  hero: windowHero({
    eyebrow: 'AML reviews',
    title: 'Bring structure to anti-money laundering',
    accent: 'review meetings',
    lead: 'Acumeet helps teams document AML-related discussions, capture escalation decisions and organise follow-up actions while leaving screening and monitoring to the appropriate systems.',
    decisions: [
      'May 28',
      ['Freeze the linked accounts pending review', 'Close three alerts as false positives'],
      'Linked accounts across two branches',
      ['Alerts', 'STR filing', 'Escalations', 'Evidence'],
    ],
    actions: [
      4,
      [
        ['Confirm case owner for the card fraud cluster', 'Fri'],
        ['Review alerts above the risk threshold', 'May 17'],
        ['Update the case log with new evidence', 'Jun 22'],
      ],
    ],
  }),

  /** Tabs explorer (48:292395) + "✓ Explorer · " (48:270151; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Document review discussions',
        body: 'Create structured records of AML review meetings, case discussions, policy reviews and internal escalations.',
        visual: summary('Investigation Update', [62, 90, 52], [
          'Investigations flagged linked accounts across two branches.',
          'Alert backlog will be reviewed again on Thursday.',
        ]),
      },
      {
        title: 'Capture Decisions and Follow-Up',
        body: 'Record agreed actions, outstanding questions and responsibilities so authorised stakeholders can coordinate next steps.',
        visual: actions(4, [
          ['Confirm case owner for the card fraud cluster', 'This week'],
          ['Review alerts above the risk threshold', 'Jun 9'],
          ['Update the case log with new evidence', 'Today'],
        ]),
      },
      {
        title: 'Retain meeting context',
        body: 'Make prior meeting-derived information easier to retrieve when relevant issues return for review.',
        visual: search(
          'case 1042 escalation',
          [
            ['Fraud Case Review', 'Jun 5', '…escalated case 1042 to the MLRO.'],
            ['AML Review Meeting', 'Apr 14', '…linked accounts frozen pending review.'],
            ['Investigation Update', 'May 23', '…three alerts closed as false positives.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'AML review workflows',
        body: 'Support AML case review meetings, investigation coordination, suspicious activity escalations, policy discussions and remediation follow-ups.',
        visual: capture('Thu, Jun 20', [
          ['Escalation Committee', '11:00 AM · Zoom'],
          ['Fraud Case Review', '3:30 PM · Meet'],
          ['AML Review Meeting', '10:30 AM · Teams'],
        ]),
      },
    ]),
  },

  /** 06 · Clarify the Role of Meeting Intelligence (48:292397) — Editorial row, white. */
  editorial: {
    tone: 'white',
    title: 'Clarify the role of meeting intelligence',
    paragraphs: ['Acumeet helps organise meeting records.'],
    cta: { label: 'Book a demo', to: ROUTES.bookDemo },
    secondary: { label: 'Contact our team', to: ROUTES.contactSales },
  },

  /** Explore more (48:292408). */
  related: exploreIndustries(['customerStrategy', 'telecommunications', 'publicSector', 'enterprise'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Bring Structure to Anti-Money Laundering Review Meetings'),
};
