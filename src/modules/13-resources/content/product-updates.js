import { capture, decisions, redaction, summary } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import {
  exploreResources,
  knowSummary,
  knowTasks,
  link,
  RELATED,
  resBreadcrumb,
  resCta,
  talkTime,
} from './resources';

const P = ROUTES.product;

/* Product update rows in Figma order; panels alternate visual-first / copy-first. */
const update = (title, body, to, tint, pattern, visual, reverse) => ({
  type: 'split',
  size: 'standard',
  reverse,
  title,
  body: [body],
  secondary: link('Read the update', to),
  visual: {
    tint,
    pattern: { type: pattern, size: pattern === 'rings' ? 'panel' : 'explorer' },
    content: visual,
  },
});

/** 13.09 · Product Updates (Figma 49:139325). */
export default {
  breadcrumb: resBreadcrumb('Product updates'),

  /** 01 · Hero + "Hero carousel · 13.09 · Product Updates" (49:80982). */
  hero: {
    variant: 'rings',
    secondaryStyle: 'link',
    eyebrow: 'Product updates',
    title: 'What is new in Acumeet',
    lead: 'Platform improvements and new capabilities, explained through the problems they solve.',
    primary: { label: 'View product updates', to: '#updates' },
  },
  carousel: [
    {
      label: 'Summary',
      content: knowSummary('Programme Retrospective', [76, 86, 20], ['handbook', 'tag'], 560),
    },
    {
      label: 'Action items',
      content: knowTasks(5, ['Jun 9', 'Today', 'Jun 12'], { width: 560, footer: false }),
    },
    {
      label: 'Decisions',
      content: decisions(
        'Jun 9',
        ['Keep retrospectives in one folder', 'Add decision summaries to the handbook'],
        'Duplicate notes across teams',
        ['Archive', 'Decisions', 'Lessons learned', 'Policies'],
        560,
      ),
    },
  ],

  sections: [
    /** Checklist · Atlas source citations (49:139353). */
    {
      type: 'checklist',
      id: 'updates',
      eyebrow: 'New',
      title: 'Atlas source',
      accent: 'citations',
      lead: 'Every answer points back to the meeting and the moment it came from, so you can check it yourself.',
      items: [
        ['All updates', 'lightning', 'blue'],
        ['New', 'lightning', 'purple'],
        ['Improved', 'lightning', 'green'],
        ['Integrations', 'plugs-connected', 'amber'],
        ['Security', 'shield-check', 'teal'],
        ['Read the update', 'lightning', 'magenta'],
      ].map(([label, icon, tone]) => ({ label, icon, tone })),
    },

    update(
      'Pre-storage redaction',
      'Mask sensitive details before the record is stored, so they never sit in your archive.',
      P.aiRedaction,
      'pink',
      'rings',
      redaction(
        3,
        [
          'Card ending',
          '[CARD_NUMBER]',
          'was used by',
          '[PERSON_NAME]',
          'from phone',
          '[PHONE_NUMBER]',
        ],
        [
          ['Card number', '100%'],
          ['Phone number', '85%'],
        ],
      ),
      true,
    ),
    update(
      'Due-date inference',
      'When a deadline comes up in the conversation, Acumeet picks it up and suggests it as the due date.',
      P.actionItemManagement,
      'blue',
      'dots',
      knowTasks(3, ['May 6', 'Next week', 'May 16'], { width: 440 }),
      false,
    ),
    update(
      'Speaker confidence scoring',
      'See how sure Acumeet is about each speaker label, so you know what to check.',
      P.speakerRecognition,
      'lilac',
      'hairlines',
      talkTime([40, 12, 18, 14, 16]),
      true,
    ),
    update(
      'Configurable summary depth',
      'Choose how much detail you need, from a quick recap to a fuller account of the discussion.',
      P.aiMeetingSummaries,
      'mint',
      'waveform',
      summary(
        'Monthly Marketing Strategy Review',
        [71, 81, 25],
        [
          'Fredelina flagged missed savings from low supplier engagement.',
          'George asked for a system sync audit before the next release.',
        ],
      ),
      false,
    ),
    update(
      'Cisco Webex',
      'Capture Webex meetings and get searchable transcripts, summaries and actions after the call.',
      ROUTES.integrationsPage.meetingPlatforms,
      'amber',
      'rings',
      capture('Mon, Jun 8', [
        ['Knowledge Sharing Session', '9:00 AM · Webex'],
        ['Leadership Offsite', '2:00 PM · Webex'],
        ['Programme Retrospective', '4:00 PM · Webex'],
      ]),
      true,
    ),
  ],

  related: exploreResources(RELATED),
  cta: resCta('What is new in Acumeet'),
};
