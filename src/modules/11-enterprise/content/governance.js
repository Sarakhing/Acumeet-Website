import { retention } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { entPage, POLICY_ROWS, rollout } from './shared';
import { checklist, entBreadcrumb, exploreEnterprise, link, statement, TRUST } from './enterprise';

const heroActions = rollout(4, ['Jun 3', 'Next week', 'Jun 13'], { width: 400, shadow: 'float' });

/** 11.04 · Governance (Figma 49:68418). */
export default {
  breadcrumb: entBreadcrumb('Governance'),

  /** 01 · Hero (809): retention policy behind action items. */
  ...entPage('governance', {
    hero: 'centered',
    eyebrow: 'Governance',
    title: 'Consistent controls for meeting',
    accent: 'records',
    lead: 'Govern how meeting records are captured, accessed, retained and shared.',
    primary: link('Explore governance', ROUTES.compliancePage.dataGovernance),
    secondary: TRUST,
    height: 809,
    copyHeight: 288,
    top: 430,
    gap: 46,
    items: [
      [783, 445, retention(POLICY_ROWS, { status: 'All meetings', width: 350, shadow: 'float' })],
      [300, 430, heroActions],
    ],
    compact: heroActions,
  }),

  sections: [
    statement(
      'Acumeet supports accountability, traceability and policy-aligned handling',
      'of meeting information.',
    ),
    checklist(
      'Governance controls you can configure',
      'Set the rules for how meeting records are kept, protected and shared.',
      [
        ['Retention policies', 'file-text', 'amber'],
        ['Redaction', 'shield-check', 'teal'],
        ['Access controls', 'user-check', 'magenta'],
        ['Audit logs', 'list-checks', 'blue'],
      ],
    ),
  ],

  related: exploreEnterprise(['overview', 'architecture', 'administration']),
};
