import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import KeysStorageCard from '@/modules/02-solutions/components/visuals/KeysStorageCard';
import { exploreIndustries, industryCtaFull } from './industries';
import { actions, decisions, heroCanvas, industryBreadcrumb } from './detail';

const BOOK = { label: 'Book a demo', to: ROUTES.bookDemo };
const CONTACT = { label: 'Contact our team', to: ROUTES.contactSales };

/** 04.13 · Telecommunications (Figma 48:293592). */
export default {
  breadcrumb: industryBreadcrumb('Telecommunications'),

  /** 01 · Hero (48:293595) — 710 wash with hairlines, overview composition, two buttons. */
  hero: {
    eyebrow: 'Telecommunications',
    eyebrowStyle: 'chip',
    pattern: 'hairlines',
    title: 'Turn telecommunications meetings into coordinated action',
    titleSize: 54,
    copyWidth: 580,
    copyTop: 56,
    leadWidth: 540,
    lead: 'Telecommunications organisations coordinate complex operations, infrastructure programmes, service delivery, vendors and customer experience initiatives. Acumeet helps teams turn meetings into structured summaries, documented decisions and trackable follow-up actions.',
    primary: BOOK,
    secondary: CONTACT,
    secondaryStyle: 'button',
    visual: heroCanvas(
      526,
      [
        [
          140,
          46,
          decisions(
            'Jun 9',
            ['Add weekend NOC cover', 'Prioritise sites with repeated outages'],
            'Vendor delays on core network fixes',
            ['Dropped calls', 'Network uptime', 'Outages', 'Vendors'],
            440,
          ),
        ],
        [
          260,
          186,
          actions(
            5,
            [
              ['Update the tower rollout timeline', 'Jun 27'],
              ['Review dropped-call trends by region', 'May 5'],
              ['Prepare the SLA breach summary', 'Today'],
            ],
            { width: 400, shadow: 'float' },
          ),
        ],
      ],
      680,
    ),
    visualWidth: 680,
    padBottom: 110,
  },

  sections: [
    /** 02 · Bring Operational Discussions Into Focus (48:293758) — visual left. */
    {
      type: 'split',
      size: 'compact',
      reverse: true,
      title: 'Bring operational discussions into focus',
      body: [
        'Operational and technical teams often need to align on service performance, network initiatives, incidents and delivery priorities. Acumeet helps capture the key points from meetings so participants can revisit discussions and agreed next steps.',
      ],
      visual: {
        tint: 'pink',
        pattern: { type: 'rings', size: 'panel' },
        content: h(KeysStorageCard, { width: 440, actions: ['Connected', 'Connected'] }),
      },
    },
    /** 03 · Connect Projects and Stakeholders (48:293806). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Connect projects and stakeholders',
      paragraphs: [
        'Infrastructure rollouts and service improvements can involve engineering, operations, commercial teams, vendors and leadership. Structured meeting records help preserve context across stakeholders and recurring project meetings.',
      ],
    },
    /** 04 · Document Decisions and Responsibilities (48:293812) — dark split, waveform panel. */
    {
      type: 'split',
      size: 'compact',
      tone: 'dark',
      reverse: true,
      title: 'Document decisions and responsibilities',
      body: [
        'Capture decisions, action items and responsibilities from reviews and planning sessions so follow-up is easier to coordinate.',
      ],
      visual: {
        tint: 'night',
        pattern: { type: 'waveform', size: 'panel' },
        content: actions(
          4,
          [
            ['Prepare the SLA breach summary', 'May 7'],
            ['Share the site outage report with the NOC', 'Today'],
            ['Confirm vendor fix for the core network alarm', 'May 17'],
          ],
          { width: 440 },
        ),
      },
    },
    /** 05 · Retain Organisational Knowledge (48:293855). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Retain organisational knowledge',
      paragraphs: [
        'Make meeting-derived context easier to retrieve when teams revisit a project, vendor discussion, operational issue or previously agreed decision.',
      ],
    },
    /** 06 · Workflows this page can speak to (48:293861). */
    {
      type: 'editorial',
      tone: 'white',
      title: 'Workflows this page can speak to',
      paragraphs: [
        'Network and infrastructure project meetings',
        'Service performance and operational reviews',
        'Incident review and lessons-learned discussions',
        'Vendor and partner meetings',
        'Product, commercial and customer experience planning',
      ],
    },
    /** 07 · Security and responsible use (48:293871). */
    {
      type: 'editorial',
      tone: 'subtle',
      title: 'Security and responsible use',
      paragraphs: [
        'Telecommunications discussions may include commercially sensitive or operationally important information. Confirm access controls, retention, redaction and data-handling requirements before processing sensitive material.',
      ],
    },
  ],

  /** Explore more (48:293877). */
  related: exploreIndustries(['publicSector', 'enterprise', 'otherRegulated', 'overview'], { eyebrow: 'Keep exploring' }),

  /** CTA band (48:293887) — with sub-line and two buttons (563 tall). */
  cta: industryCtaFull('Turn Telecommunications Meetings Into Coordinated Action'),
};
