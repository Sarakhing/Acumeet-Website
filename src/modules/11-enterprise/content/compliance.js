import { actions, audit } from '@/components/visuals/mocks';
import { ROUTES } from '@/constants/routes';
import { secTasks } from '@/modules/09-integrations/content/shared';
import { entPage } from './shared';
import {
  checklist,
  entBreadcrumb,
  exploreEnterprise,
  link,
  RELATED,
  statement,
  TRUST,
} from './enterprise';

/** 11.06 · Compliance (Figma 49:68654). */
export default {
  breadcrumb: entBreadcrumb('Compliance'),

  /** 01 · Hero (664): audit log in the window, action items overlapping, "Live" chip. */
  ...entPage('compliance', {
    hero: 'window',
    eyebrow: 'Compliance',
    title: 'A clearer path from conversation to',
    accent: 'approval and action',
    lead: 'Give compliance, risk and audit teams searchable records of meetings, decisions and actions.',
    primary: link('Explore compliance', ROUTES.compliance),
    secondary: TRUST,
    window: audit(
      [
        ['10:21', 'Signed in via SSO', 'Ruth Godwin'],
        ['10:14', 'Applied legal hold', 'Admin'],
        ['10:00', 'Edited action item', 'George Nwokoro'],
        ['09:39', 'Approved redactions', 'Faith Oluwale'],
      ],
      { width: 500 },
    ),
    overlay: actions(5, secTasks(['Fri', 'May 23', 'Jun 28']), { width: 360, shadow: 'float' }),
    overlayY: 311,
    height: 664,
  }),

  sections: [
    statement(
      'Acumeet structures transcripts, summaries, decisions and actions into searchable records and supports auditability through governed access and activity logs. Teams spend less time reconstructing',
      'context during reviews.',
    ),
    checklist(
      'Records that support your compliance work',
      'Meeting records that help teams show what was discussed, decided and assigned.',
      [
        ['Traceable meeting records', 'list-checks', 'magenta'],
        ['Decisions and approvals', 'seal-check', 'blue'],
        ['Action accountability', 'kanban', 'purple'],
        ['Search', 'magnifying-glass', 'green'],
        ['Audit logs', 'list-checks', 'amber'],
      ],
    ),
  ],

  related: exploreEnterprise(RELATED),
};
