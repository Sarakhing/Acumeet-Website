import { analytics, decisions } from '@/components/visuals/mocks';
import { entPage, tasks } from './shared';
import {
  checklist,
  entBreadcrumb,
  exploreEnterprise,
  RELATED,
  REQUEST_POC,
  statement,
  TALK,
} from './enterprise';

/** 11.18 · PoC Success Criteria (Figma 49:70167). */
export default {
  breadcrumb: entBreadcrumb('PoC success criteria', { poc: true }),

  /** 01 · Hero + "Hero carousel · 11.18 · PoC Success Criteria" (49:72683). */
  ...entPage('pocSuccess', {
    hero: 'rings',
    tabKey: 'poc',
    eyebrow: 'PoC success criteria',
    title: 'Agree what success looks like first',
    lead: 'Define measurable outcomes so every stakeholder knows what the PoC needs to prove.',
    primary: REQUEST_POC,
    secondary: TALK,
    slides: [
      ['Analytics', analytics('This month', [88, 30, 78], { width: 560 })],
      [
        'Action items',
        tasks(
          4,
          [
            ['region', 'Next week'],
            ['network', 'Jun 14'],
            ['storage', 'Jun 7'],
          ],
          { width: 560, footer: false },
        ),
      ],
      [
        'Decisions',
        decisions(
          'Jun 9',
          ['Use customer-managed keys from day one', 'Run failover tests quarterly'],
          'Cutover clashes with month-end',
          ['Storage', 'Keys', 'Failover', 'Cutover'],
          560,
        ),
      ],
    ],
  }),

  sections: [
    statement(
      'Success criteria can cover capture quality, decision and action traceability, searchability, security and governance fit, administrative',
      'control and adoption.',
    ),
    checklist(
      'Criteria to measure success',
      'Agree how you will judge the proof of concept before it starts.',
      [
        ['Capture quality', 'target', 'green'],
        ['Decision and action traceability', 'list-checks', 'amber'],
        ['Searchability', 'magnifying-glass', 'teal'],
        ['Security and governance fit', 'shield-check', 'magenta'],
        ['Administrative control', 'sparkle', 'blue'],
        ['Adoption', 'target', 'purple'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
