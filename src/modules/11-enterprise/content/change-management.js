import { decisions } from '@/components/visuals/mocks';
import { entPage, keySummary } from './shared';
import {
  checklist,
  ENTERPRISE,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TALK,
} from './enterprise';

const heroDecisions = decisions(
  'May 28',
  ['Use customer-managed keys from day one', 'Run failover tests quarterly'],
  'Cutover clashes with month-end',
  ['Storage', 'Keys', 'Failover', 'Cutover'],
  400,
  { shadow: 'float' },
);

/** 11.11 · Change Management (Figma 49:69194). */
export default {
  breadcrumb: entBreadcrumb('Change Management'),

  /** 01 · Hero (826): summary (tilted 3°) behind decisions. */
  ...entPage('changeManagement', {
    hero: 'centered',
    eyebrow: 'Change Management',
    title: 'Make adoption',
    accent: 'stick',
    lead: 'Acumeet changes how meeting knowledge is captured, found and acted on. Adoption works best when teams understand the change and see the value.',
    primary: TALK,
    secondary: link('Explore training', ENTERPRISE.training.to),
    height: 826,
    copyHeight: 250,
    top: 416,
    gap: 70,
    items: [
      [758, 456, keySummary('Architecture Review', [71, 81, 45], ['network', 'cutover'], 400), -3],
      [300, 416, heroDecisions],
    ],
    compact: heroDecisions,
  }),

  sections: [
    statement(
      'Support rollout with clear communication, role-based guidance and adoption measures that',
      'build consistent habits.',
    ),
    checklist(
      'Supporting adoption across teams',
      'Help people understand what changes, why it matters and how to use Acumeet well.',
      [
        ['Stakeholder communication', 'handshake', 'amber'],
        ['Role-based guidance', 'user-check', 'teal'],
        ['Adoption measures', 'target', 'magenta'],
        ['Workflow alignment', 'sparkle', 'blue'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
