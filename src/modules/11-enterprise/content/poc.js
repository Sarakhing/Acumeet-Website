import { capture } from '@/components/visuals/mocks';
import { entPage, rollout } from './shared';
import {
  checklist,
  DEMO,
  ENTERPRISE,
  entBreadcrumb,
  exploreEnterprise,
  RELATED,
  REQUEST_POC,
  statement,
} from './enterprise';

const heroActions = rollout(4, ['May 3', 'Jun 8', 'Today'], { width: 400, shadow: 'float' });
const POC_PAGES = ['requestPoc', 'pocProcess', 'pocScope', 'pocSuccess'];

/** 11.14 · Proof of Concept (Figma 49:69557). */
export default {
  breadcrumb: entBreadcrumb('Proof of Concept'),

  /** 01 · Hero (835): upcoming meetings behind action items. */
  ...entPage('poc', {
    hero: 'centered',
    eyebrow: 'Proof of Concept',
    title: 'Test Acumeet on your',
    accent: 'real workflows',
    lead: 'Evaluate Acumeet against the workflows, controls and outcomes that matter to your organisation.',
    primary: REQUEST_POC,
    secondary: DEMO,
    height: 835,
    copyHeight: 314,
    top: 456,
    gap: 46,
    items: [
      [
        758,
        488,
        capture(
          'Mon, Jun 8',
          [
            ['Pilot Kick-off', '9:00 AM · Teams'],
            ['Implementation Check-in', '2:00 PM · Zoom'],
            ['PoC Review', '4:00 PM · Meet'],
          ],
          { shadow: 'float' },
        ),
      ],
      [300, 456, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'A structured PoC helps business, IT, security and compliance stakeholders validate how Acumeet captures meeting intelligence and fits your environment before',
      'a wider rollout.',
    ),
    checklist(
      'What a proof of concept evaluates',
      'Test Acumeet against your business, technical and governance requirements.',
      [
        ['Business fit', 'briefcase', 'blue'],
        ['Technical fit', 'briefcase', 'purple'],
        ['Security and governance fit', 'shield-check', 'green'],
        ['Workflow validation', 'sparkle', 'amber'],
        ['Stakeholder review', 'handshake', 'teal'],
      ],
    ),

    /** Directory · PROOF OF CONCEPT (49:69689). */
    {
      type: 'directory',
      eyebrow: 'Proof of concept',
      title: 'Explore Proof of Concept',
      items: POC_PAGES.map((k) => ({
        title: ENTERPRISE[k].title,
        description: ENTERPRISE[k].tagline,
        to: ENTERPRISE[k].to,
      })),
    },
  ],

  related: exploreEnterprise(RELATED),
};
