import { capture, keys } from '@/components/visuals/mocks';
import { windowHero } from '@/components/blocks/heroPresets';
import { ninReview, po, supplierAtlas, taskList } from './shared';
import {
  checklist,
  cmpBreadcrumb,
  COMPARE_TILES,
  cta,
  DEMO,
  exploreCompare,
  LOGOS,
  statement,
  table,
  vs,
  whyChoose,
} from './compare';

/** 12.03 · Acumeet vs Traditional Meeting Notes (Figma 49:116107). */
export default {
  breadcrumb: cmpBreadcrumb('Acumeet vs Traditional Meeting Notes'),

  /** 01 · Hero (695): upcoming meetings in the window, action items overlapping, "Live" chip. */
  ...windowHero({
    eyebrow: 'Comparison',
    title: 'Stop relying on memory, minutes and',
    accent: 'manual follow-up',
    lead: 'Traditional notes capture what one person had time to write. Acumeet captures the whole conversation and helps you turn decisions into action.',
    primary: DEMO,
    window: capture(
      'Fri, Jun 10',
      [
        ['Weekly ProcureCentro Stand-up', '2:00 PM · Meet'],
        ['Monthly Marketing Strategy Review', '4:00 PM · Teams'],
        ['Product Development Sync-Up', '9:00 AM · Zoom'],
      ],
      { width: 500 },
    ),
    overlay: taskList(5, po(['Fri', 'Jun 14', 'May 19']), { width: 360, shadow: 'float' }),
    overlayY: 342,
    height: 695,
  }),

  sections: [
    LOGOS,
    vs('meetingNotes'),
    statement(
      'Manual notes were never built to',
      'carry organisational memory',
      'They are incomplete, hard to find and easy to lose. Decisions get buried, follow-up depends on memory and sensitive detail gets copied into unmanaged places.',
    ),
    table('meetingNotes', 'Acumeet vs traditional meeting notes', 'Traditional notes', [
      [
        'Capture',
        'Depends on what the note-taker hears and writes.',
        'Builds the record from the conversation itself.',
      ],
      [
        'Speaker context',
        'Who said what is often lost.',
        'Speaker labels keep context and accountability.',
      ],
      [
        'Decisions',
        'Buried in paragraphs or scattered across files.',
        'Key discussions, decisions and outcomes structured for retrieval.',
      ],
      [
        'Action items',
        'Manual assignment and reminders.',
        'Commitments identified, owners assigned, status tracked.',
      ],
      ['Search', 'Depends on where each person saved the file.', 'One searchable repository.'],
      [
        'Sensitive information',
        'Copied by hand into documents and messages.',
        'Redaction AI helps identify and protect sensitive content.',
      ],
      ['Scale', 'Meeting by meeting.', 'Reusable knowledge across your meeting history.'],
    ]),
    statement(
      'The goal is not better minutes. It',
      'is better follow-through.',
      'When the record is searchable and actions are visible, teams spend less time reconstructing context and more time moving work forward.',
      'dark',
    ),
    checklist(
      'Where manual notes create the',
      'most risk',
      'The meetings where a missed detail costs the most.',
      [
        ['Executive meetings', 'video-camera', 'magenta'],
        ['Risk and compliance reviews', 'seal-check', 'blue'],
        ['Audit discussions', 'list-checks', 'purple'],
        ['Project governance', 'kanban', 'green'],
        ['Customer and partner meetings', 'handshake', 'amber'],
        ['Financial and operational reviews', 'funnel-simple', 'teal'],
      ],
    ),
    COMPARE_TILES,
    whyChoose([
      keys(['Manage', 'Connected'], { width: 480 }),
      taskList(
        5,
        [
          ['Begin ERP sync audit diagnostics', 'This week'],
          ['Identify top recurring items for PO automation pilot', 'Jun 9'],
          ['Confirm supplier onboarding checklist owners', 'Today'],
        ],
        { width: 480, footer: false },
      ),
      ninReview(4, '90%', 480),
      supplierAtlas,
    ]),
  ],

  related: exploreCompare(['why', 'aiAssistants']),
  cta: cta(
    'Give your meetings a memory',
    'See how Acumeet turns conversations into structured knowledge, decisions and actions.',
  ),
};
