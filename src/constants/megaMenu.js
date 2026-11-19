import { ROUTES } from './routes';

/**
 * Header mega menu — Figma "Navigation · D Featured" (91:65978), variants
 * Product 91:65994 · Solutions 91:66147 · Industries 91:66305 · Security 91:66423 · Resources 91:66586.
 *
 * panel → columns[] → groups[] → links[]
 *   group: { title } — `title: null` is a Figma "Group · cont." (continues the previous group; label hidden)
 *   link:  { label, to, icon, tint, iconFile? }
 *     icon  = Figma "Ic / <name>" (files in src/assets/icons/nav/<icon>-<tint>.svg)
 *     tint  = teal | green | purple | blue | pink | orange (icon colour + tile background)
 *     iconFile overrides the file name when Figma uses a one-off variant.
 * footerLinks: blue "label →" links under the columns.
 * feature: the 384px card on the right.
 *   tone  = purple | blue | magenta (card tint, badge + link colour)
 *   stage = capture | intelligence | summaries | redaction | actions (mock under the copy)
 *   media = optional { src, type: 'image' | 'video', alt } — replaces the HTML poster of a
 *           video stage (Figma: "drop acumeet_menu_<name>.gif as fill").
 */

const P = ROUTES.products;
const I = ROUTES.industries;
const U = ROUTES.useCases;
const FS = `${ROUTES.industries}/financial-services`;
const INT = ROUTES.integrations;
const SEC = ROUTES.security;
const TC = ROUTES.trustCenter;
const COMP = ROUTES.compliance;
const RES = ROUTES.resources;
const DEV = ROUTES.developers;
const SUP = ROUTES.support;

const link = (label, to, icon, tint, extra) => ({ label, to, icon, tint, ...extra });

export const MEGA_MENU = [
  {
    id: 'product',
    label: 'Product',
    to: ROUTES.products,
    columns: [
      [
        {
          title: 'Capture',
          links: [
            link('Meeting Capture', `${P}/meeting-capture`, 'video-camera', 'teal'),
            link('AI Transcription', `${P}/ai-transcription`, 'file-text', 'green'),
            link('Speaker Recognition', `${P}/speaker-recognition`, 'user-focus', 'purple'),
            link('AI Redaction', `${P}/ai-redaction`, 'eye-slash', 'blue'),
          ],
        },
        {
          title: 'Act',
          links: [
            link('Action Item Management', `${P}/action-item-management`, 'list-checks', 'purple'),
          ],
        },
      ],
      [
        {
          title: 'Understand',
          links: [
            link('AI Meeting Summaries', `${P}/ai-meeting-summaries`, 'stack', 'green'),
            link('Meeting Intelligence', `${P}/meeting-intelligence`, 'lightning', 'pink'),
            link('Analytics', `${P}/analytics`, 'pulse', 'teal'),
          ],
        },
        {
          title: 'Remember',
          links: [
            link('Knowledge Repository', `${P}/knowledge-repository`, 'books', 'orange'),
            link('Atlas', `${P}/atlas`, 'sparkle', 'pink'),
          ],
        },
      ],
      [
        {
          title: 'Integrations',
          links: [
            link('Meeting Platforms', `${INT}/meeting-platforms`, 'video-camera', 'purple'),
            link('Productivity', `${INT}/productivity`, 'briefcase', 'blue'),
            link('Identity', `${INT}/identity`, 'user-check', 'pink'),
            link('Storage', `${INT}/storage`, 'database', 'purple'),
            link('Security', `${INT}/security`, 'shield-check', 'pink'),
            link('Analytics', `${INT}/analytics`, 'pulse', 'blue'),
            link('CRM', `${INT}/crm`, 'handshake', 'orange'),
            link('Project Management', `${INT}/project-management`, 'kanban', 'purple'),
            link('Developer Integrations', `${INT}/developer-integrations`, 'cpu', 'orange'),
          ],
        },
      ],
    ],
    footerLinks: [
      { label: 'Explore the platform', to: ROUTES.products },
      { label: 'Integration overview', to: ROUTES.integrations },
    ],
    feature: {
      tone: 'purple',
      badge: 'Product',
      label: 'Meeting Capture',
      title: 'Capture every important business conversation.',
      cta: { label: 'Explore Meeting Capture', to: `${P}/meeting-capture` },
      stage: 'capture',
      media: null, // e.g. { src: meetingCaptureGif, type: 'image', alt: '' }
    },
  },
  {
    id: 'solutions',
    label: 'Solutions',
    to: ROUTES.solutions.overview,
    columns: [
      [
        {
          title: 'Solutions',
          links: [
            link('Protect', ROUTES.solutions.protect, 'shield-check', 'pink'),
            link('Control', ROUTES.solutions.control, 'key', 'blue'),
            link('Secure', ROUTES.solutions.secure, 'lock-key', 'pink'),
            link('Govern', ROUTES.solutions.govern, 'scales', 'green'),
            link('Understand', ROUTES.solutions.understand, 'lightning', 'purple'),
            link('Connect', ROUTES.solutions.connect, 'plugs-connected', 'orange'),
            link('Enterprise Meeting Intelligence', ROUTES.solutions.emi, 'buildings', 'blue'),
          ],
        },
      ],
      [
        {
          title: 'Use cases',
          links: [
            link('Executive & Board Meetings', `${U}/executive-board-meetings`, 'target', 'orange'),
            link('Risk & Compliance', `${U}/risk-compliance`, 'scales', 'teal'),
            link(
              'Credit & Investment Committees',
              `${U}/credit-investment-committees`,
              'briefcase',
              'purple',
            ),
            link('Audit', `${U}/audit`, 'seal-check', 'orange'),
            link('Fraud & AML', `${U}/fraud-aml`, 'magnifying-glass', 'teal'),
            link('Project Governance', `${U}/project-governance`, 'kanban', 'purple'),
            link('Customer Strategy', `${U}/customer-strategy`, 'handshake', 'orange'),
          ],
        },
      ],
      [
        {
          title: null,
          links: [
            link('Sales', `${U}/sales`, 'storefront', 'teal'),
            link('Customer Success', `${U}/customer-success`, 'user-check', 'orange'),
            link('Operations', `${U}/operations`, 'wrench', 'blue'),
            link('Product Teams', `${U}/product-teams`, 'stack', 'purple'),
            link('Management Meetings', `${U}/management-meetings`, 'users-three', 'orange'),
            link(
              'Enterprise Knowledge Management',
              `${U}/enterprise-knowledge-management`,
              'books',
              'green',
            ),
          ],
        },
      ],
    ],
    footerLinks: [
      { label: 'Solutions overview', to: ROUTES.solutions.overview },
      { label: 'Use cases overview', to: ROUTES.useCases },
      { label: 'Why Acumeet', to: ROUTES.whyAcumeet },
    ],
    feature: {
      tone: 'blue',
      badge: 'Solutions',
      label: 'Meeting Intelligence',
      title: 'Turn every meeting into business intelligence.',
      cta: { label: 'Explore Meeting Intelligence', to: ROUTES.solutions.emi },
      stage: 'intelligence',
      media: null, // Figma: acumeet_menu_meeting_intelligence.gif
    },
  },
  {
    id: 'industries',
    label: 'Industries',
    to: ROUTES.industries,
    columns: [
      [
        {
          title: 'Industries',
          links: [
            link('Financial Services', FS, 'briefcase', 'teal'),
            link(
              'Telecommunications',
              `${I}/telecommunications`,
              'globe-hemisphere-west',
              'orange',
            ),
            link('Public Sector', `${I}/public-sector`, 'buildings', 'pink'),
            link('Enterprise', `${I}/enterprise`, 'stack', 'blue'),
            link(
              'Other Regulated Industries',
              `${I}/other-regulated-industries`,
              'scales',
              'purple',
            ),
          ],
        },
      ],
      [
        {
          title: 'Financial services',
          links: [
            link('Banking', `${FS}/banking`, 'storefront', 'pink'),
            link('Insurance', `${FS}/insurance`, 'shield-check', 'blue'),
            link('Executive Meetings', `${FS}/executive-meetings`, 'target', 'orange'),
            link('Credit Committees', `${FS}/credit-committees`, 'briefcase', 'teal'),
            link('Risk Committees', `${FS}/risk-committees`, 'scales', 'orange'),
            link('Compliance Meetings', `${FS}/compliance-meetings`, 'seal-check', 'teal'),
          ],
        },
      ],
      [
        {
          title: null,
          links: [
            link(
              'Fraud Investigations',
              `${FS}/fraud-investigations`,
              'magnifying-glass',
              'purple',
            ),
            link('Board Meetings', `${FS}/board-meetings`, 'users-three', 'green'),
            link('Audit Meetings', `${FS}/audit-meetings`, 'list-checks', 'blue'),
            link('AML Reviews', `${FS}/aml-reviews`, 'eye-slash', 'pink'),
            link('Customer Strategy', `${FS}/customer-strategy`, 'handshake', 'teal'),
          ],
        },
      ],
    ],
    footerLinks: [{ label: 'Industries overview', to: ROUTES.industries }],
    feature: {
      tone: 'magenta',
      badge: 'Industries',
      label: 'Financial Services',
      title: 'Turn financial meetings into actionable intelligence',
      cta: { label: 'Explore financial services', to: FS },
      stage: 'summaries',
    },
  },
  {
    id: 'security',
    label: 'Security',
    to: ROUTES.security,
    columns: [
      [
        {
          title: 'Security',
          links: [
            link(
              'Zero Trust Architecture',
              `${SEC}/zero-trust-architecture`,
              'shield-check',
              'pink',
            ),
            link('Identity & Access', `${SEC}/identity-access`, 'user-check', 'teal'),
            link('Data Security', `${SEC}/data-security`, 'database', 'pink'),
            link('AI Security', `${SEC}/ai-security`, 'cpu', 'blue'),
            link('Audit & Monitoring', `${SEC}/audit-monitoring`, 'pulse', 'purple'),
            link('Data Lifecycle', `${SEC}/data-lifecycle`, 'clock-counter-clockwise', 'orange'),
          ],
        },
      ],
      [
        {
          title: 'Trust Center',
          links: [
            link('Privacy', `${TC}/privacy`, 'eye-slash', 'purple'),
            link('Data Processing', `${TC}/data-processing`, 'arrows-clockwise', 'blue'),
            link('Data Residency', `${TC}/data-residency`, 'map-pin', 'green'),
            link('Subprocessors', `${TC}/subprocessors`, 'users-three', 'orange'),
            link('Security Architecture', `${TC}/security-architecture`, 'stack', 'blue'),
            link('Policies', `${TC}/policies`, 'file-text', 'green'),
            link('Certifications', `${TC}/certifications`, 'seal-check', 'teal'),
            link('Security Documentation', `${TC}/security-documentation`, 'books', 'pink'),
            link('Trust Updates', `${TC}/trust-updates`, 'clock', 'purple'),
          ],
        },
      ],
      [
        {
          title: 'Compliance',
          links: [
            link('NDPR', `${COMP}/ndpr`, 'seal-check', 'orange', {
              iconFile: 'seal-check-orange-soft',
            }),
            link('ISO 27001', `${COMP}/iso-27001`, 'seal-check', 'pink'),
            link('SOC 2', `${COMP}/soc-2`, 'seal-check', 'teal'),
            link('GDPR', `${COMP}/gdpr`, 'seal-check', 'green'),
            link('CBN Requirements', `${COMP}/cbn-requirements`, 'buildings', 'teal'),
            link(
              'Financial Services Compliance',
              `${COMP}/financial-services`,
              'briefcase',
              'blue',
            ),
            link('Data Governance', `${COMP}/data-governance`, 'database', 'orange'),
            link('Audit Readiness', `${COMP}/audit-readiness`, 'list-checks', 'teal'),
            link('Regulatory Support', `${COMP}/regulatory-support`, 'handshake', 'pink'),
            link('Compliance Documentation', `${COMP}/documentation`, 'file-text', 'orange'),
          ],
        },
      ],
    ],
    footerLinks: [
      { label: 'Security overview', to: ROUTES.security },
      { label: 'Trust Center', to: ROUTES.trustCenter },
      { label: 'Compliance overview', to: ROUTES.compliance },
      { label: 'Deployment overview', to: ROUTES.deployment },
    ],
    feature: {
      tone: 'blue',
      badge: 'Security',
      label: 'AI Redaction',
      title: 'Protect sensitive data before it becomes a risk',
      cta: { label: 'Explore AI Redaction', to: `${P}/ai-redaction` },
      stage: 'redaction',
    },
  },
  {
    id: 'resources',
    label: 'Resources',
    to: ROUTES.resources,
    columns: [
      [
        {
          title: 'Resources',
          links: [
            link('Blog', `${RES}/blog`, 'file-text', 'blue'),
            link('Case Studies', `${RES}/case-studies`, 'briefcase', 'pink'),
            link('Whitepapers', `${RES}/whitepapers`, 'books', 'green'),
            link('Guides', `${RES}/guides`, 'list-checks', 'blue'),
            link('Reports', `${RES}/reports`, 'pulse', 'purple'),
            link('Webinars', `${RES}/webinars`, 'video-camera', 'blue'),
            link('Product Updates', `${RES}/product-updates`, 'sparkle', 'pink'),
            link('Customer Stories', `${RES}/customer-stories`, 'users-three', 'blue'),
            link(
              'Meeting Productivity Calculator',
              `${RES}/meeting-productivity-calculator`,
              'clock',
              'purple',
            ),
            link('Acumeet Documentation', `${RES}/documentation`, 'books', 'teal'),
          ],
        },
      ],
      [
        {
          title: 'Developers',
          links: [
            link('API', `${DEV}/api`, 'cpu', 'purple'),
            link('API Documentation', `${DEV}/api-documentation`, 'file-text', 'teal'),
            link('Authentication', `${DEV}/authentication`, 'key', 'pink'),
            link('REST APIs', `${DEV}/rest-apis`, 'cpu', 'purple'),
            link('Webhooks', `${DEV}/webhooks`, 'lightning', 'green'),
            link('Integration Guides', `${DEV}/integration-guides`, 'books', 'pink'),
            link('SDKs', `${DEV}/sdks`, 'stack', 'orange'),
            link('API Reference', `${DEV}/api-reference`, 'file-text', 'teal'),
            link('Developer Resources', `${DEV}/resources`, 'books', 'green'),
          ],
        },
      ],
      [
        {
          title: 'Support',
          links: [
            link('Getting Started', `${SUP}/getting-started`, 'target', 'orange'),
            link('Feature Guides', `${SUP}/feature-guides`, 'books', 'green'),
            link('Administration', `${SUP}/administration`, 'user-check', 'purple'),
            link('Billing', `${SUP}/billing`, 'storefront', 'teal'),
            link('Security', `${SUP}/security`, 'shield-check', 'pink'),
            link('Troubleshooting', `${SUP}/troubleshooting`, 'wrench', 'purple'),
            link('FAQs', `${SUP}/faqs`, 'magnifying-glass', 'blue'),
            link('Contact Support', `${SUP}/contact`, 'lifebuoy', 'green'),
            link('Raise a Ticket', `${SUP}/raise-a-ticket`, 'file-text', 'pink'),
            link('Ticket Status', `${SUP}/ticket-status`, 'clock', 'blue'),
            link('Service Status', `${SUP}/service-status`, 'pulse', 'purple'),
            link('Support Plans', `${SUP}/support-plans`, 'handshake', 'green'),
          ],
        },
      ],
    ],
    footerLinks: [
      { label: 'Resources overview', to: ROUTES.resources },
      { label: 'Developer overview', to: ROUTES.developers },
      { label: 'Support overview', to: ROUTES.support },
      { label: 'Company hub', to: ROUTES.company },
    ],
    feature: {
      tone: 'purple',
      badge: 'Resources',
      label: 'Guides',
      title: 'Practical playbooks',
      cta: { label: 'Browse guides', to: `${RES}/guides` },
      stage: 'actions',
    },
  },
];
