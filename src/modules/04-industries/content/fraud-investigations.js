import { exploreIndustries, industryCta } from './industries';
import { actions, capture, explorerItems, fsBreadcrumb, NOTE_CTAS, search, summary, windowHero } from './detail';

/** 04.08 · Fraud Investigations (Figma 48:289851). */
export default {
  breadcrumb: fsBreadcrumb('Fraud Investigations'),

  /** 01 · Hero (48:289854) — 630 wash, Banking composition. */
  hero: windowHero({
    eyebrow: 'Fraud Investigations',
    title: 'Organise Investigation Discussions and',
    accent: 'Follow-Up Actions',
    lead: 'Acumeet helps teams document investigation-related meetings, preserve discussion context and record agreed next steps, subject to appropriate information safeguards.',
    decisions: [
      'Jun 4',
      ['Close three alerts as false positives', 'Tighten monitoring rules for new accounts'],
      'Alert backlog above service level',
      ['Evidence', 'Monitoring rules', 'Case reviews', 'Alerts'],
    ],
    actions: [
      4,
      [
        ['Confirm case owner for the card fraud cluster', 'May 3'],
        ['Review alerts above the risk threshold', 'Jun 8'],
        ['Update the case log with new evidence', 'Today'],
      ],
    ],
  }),

  /** Tabs explorer (48:289936) + "✓ Explorer · " (48:269276; tab 1 from the page instance). */
  explorer: {
    items: explorerItems([
      {
        title: 'Keep Investigation Discussions Structured',
        body: 'Create organised summaries of case briefings, internal escalations, findings discussions and outstanding questions.',
        visual: summary('AML Review Meeting', [47, 75, 57], [
          'Investigations flagged linked accounts across two branches.',
          'Alert backlog will be reviewed again on Thursday.',
        ]),
      },
      {
        title: 'Capture Decisions and Responsibilities',
        body: 'Record agreed actions and responsibilities so follow-up is easier to coordinate across authorised stakeholders.',
        visual: actions(4, [
          ['Confirm case owner for the card fraud cluster', 'Jun 7'],
          ['Review alerts above the risk threshold', 'This week'],
          ['Update the case log with new evidence', 'Jun 9'],
        ]),
      },
      {
        title: 'Retrieve Relevant Meeting Context',
        body: 'Make previous meeting-derived information easier to find when a case is revisited or additional discussions are required.',
        visual: search(
          'case 1042 escalation',
          [
            ['Escalation Committee', 'Jun 26', '…escalated case 1042 to the MLRO.'],
            ['Fraud Case Review', 'Apr 9', '…linked accounts frozen pending review.'],
            ['AML Review Meeting', 'May 18', '…three alerts closed as false positives.'],
          ],
          { width: 460 },
        ),
      },
      {
        title: 'Investigation Workflows',
        body: 'Support investigation briefings, case reviews, internal coordination, escalation meetings and lessons-learned discussions.',
        visual: capture('Thu, May 25', [
          ['Investigation Update', '4:00 PM · Zoom'],
          ['Escalation Committee', '9:00 AM · Meet'],
          ['Fraud Case Review', '2:00 PM · Teams'],
        ]),
      },
    ]),
  },

  /** 06 · Handle Sensitive Information Carefully (48:289938). */
  note: {
    title: 'Handle Sensitive Information Carefully',
    body: 'Investigation records may be highly confidential. Confirm access controls, retention, redaction and data-handling arrangements before using Acumeet for sensitive case information.',
    ctas: NOTE_CTAS,
  },

  /** Explore more (48:289947). */
  related: exploreIndustries(['boardMeetings', 'auditMeetings', 'amlReviews', 'customerStrategy'], {
    eyebrow: 'Keep exploring',
  }),

  cta: industryCta('Organise Investigation Discussions and Follow-Up Actions'),
};
