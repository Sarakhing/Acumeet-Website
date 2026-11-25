import { ROUTES } from './routes';

/**
 * Header mega menu — Figma "Navigation · D Featured" (120:64520), variants
 * Product 120:64536 · Solutions 120:64693 · Industries 120:64855 · Security 120:64977 · Resources 120:65144.
 * Each panel's first group opens with an "<Section> overview" link.
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
            link('Product overview', ROUTES.products, 'stack', 'teal'),
            link('Meeting Capture', `${P}/meeting-capture`, 'video-camera', 'purple'),
            link('AI Transcription', `${P}/ai-transcription`, 'file-text', 'orange'),
            link('Speaker Recognition', `${P}/speaker-recognition`, 'user-focus', 'blue'),
            link('AI Redaction', `${P}/ai-redaction`, 'eye-slash', 'purple'),
          ],
        },
        {
          title: 'Act',
          links: [
            link('Action Item Management', `${P}/action-item-management`, 'list-checks', 'green'),
          ],
        },
      ],
      [
        {
          title: 'Understand',
          links: [
            link('AI Meeting Summaries', `${P}/ai-meeting-summaries`, 'stack', 'blue'),
            link('Meeting Intelligence', `${P}/meeting-intelligence`, 'lightning', 'green'),
            link('Analytics', `${P}/analytics`, 'pulse', 'pink'),
          ],
        },
        {
          title: 'Remember',
          links: [
            link('Knowledge Repository', `${P}/knowledge-repository`, 'books', 'blue'),
            link('Atlas', `${P}/atlas`, 'sparkle', 'pink'),
          ],
        },
      ],
      [
        {
          title: 'Integrations',
          links: [
            link('Meeting Platforms', `${INT}/meeting-platforms`, 'video-camera', 'orange'),
            link('Productivity', `${INT}/productivity`, 'briefcase', 'pink'),
            link('Identity', `${INT}/identity`, 'user-check', 'green'),
            link('Storage', `${INT}/storage`, 'database', 'teal'),
            link('Security', `${INT}/security`, 'shield-check', 'orange'),
            link('Analytics', `${INT}/analytics`, 'pulse', 'teal'),
            link('CRM', `${INT}/crm`, 'handshake', 'orange'),
            link('Project Management', `${INT}/project-management`, 'kanban', 'teal'),
            link('Developer Integrations', `${INT}/developer-integrations`, 'cpu', 'blue'),
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
            link('Solutions overview', ROUTES.solutions.overview, 'stack', 'green'),
            link('Protect', ROUTES.solutions.protect, 'shield-check', 'blue'),
            link('Control', ROUTES.solutions.control, 'key', 'pink'),
            link('Secure', ROUTES.solutions.secure, 'lock-key', 'green'),
            link('Govern', ROUTES.solutions.govern, 'scales', 'orange'),
            link('Understand', ROUTES.solutions.understand, 'lightning', 'purple'),
            link('Connect', ROUTES.solutions.connect, 'plugs-connected', 'orange'),
            link('Enterprise Meeting Intelligence', ROUTES.solutions.emi, 'buildings', 'green'),
          ],
        },
      ],
      [
        {
          title: 'Use cases',
          links: [
            link('Executive & Board Meetings', `${U}/executive-board-meetings`, 'target', 'purple'),
            link('Risk & Compliance', `${U}/risk-compliance`, 'scales', 'teal'),
            link(
              'Credit & Investment Committees',
              `${U}/credit-investment-committees`,
              'briefcase',
              'purple',
            ),
            link('Audit', `${U}/audit`, 'seal-check', 'orange'),
            link('Fraud & AML', `${U}/fraud-aml`, 'magnifying-glass', 'purple'),
            link('Project Governance', `${U}/project-governance`, 'kanban', 'pink'),
            link('Customer Strategy', `${U}/customer-strategy`, 'handshake', 'teal'),
          ],
        },
      ],
      [
        {
          title: null,
          links: [
            link('Sales', `${U}/sales`, 'storefront', 'teal'),
            link('Customer Success', `${U}/customer-success`, 'user-check', 'green'),
            link('Operations', `${U}/operations`, 'wrench', 'blue'),
            link('Product Teams', `${U}/product-teams`, 'stack', 'pink'),
            link('Management Meetings', `${U}/management-meetings`, 'users-three', 'green'),
            link(
              'Enterprise Knowledge Management',
              `${U}/enterprise-knowledge-management`,
              'books',
              'teal',
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
            link('Industries overview', ROUTES.industries, 'stack', 'pink'),
            link('Financial Services', FS, 'briefcase', 'purple'),
            link('Telecommunications', `${I}/telecommunications`, 'globe-hemisphere-west', 'blue'),
            link('Public Sector', `${I}/public-sector`, 'buildings', 'green'),
            link('Enterprise', `${I}/enterprise`, 'stack', 'teal'),
            link(
              'Other Regulated Industries',
              `${I}/other-regulated-industries`,
              'scales',
              'green',
            ),
          ],
        },
      ],
      [
        {
          title: 'Financial services',
          links: [
            link('Banking', `${FS}/banking`, 'storefront', 'teal'),
            link('Insurance', `${FS}/insurance`, 'shield-check', 'pink'),
            link('Executive Meetings', `${FS}/executive-meetings`, 'target', 'orange'),
            link('Credit Committees', `${FS}/credit-committees`, 'briefcase', 'pink'),
            link('Risk Committees', `${FS}/risk-committees`, 'scales', 'blue'),
            link('Compliance Meetings', `${FS}/compliance-meetings`, 'seal-check', 'orange'),
          ],
        },
      ],
      [
        {
          title: null,
          links: [
            link('Fraud Investigations', `${FS}/fraud-investigations`, 'magnifying-glass', 'blue'),
            link('Board Meetings', `${FS}/board-meetings`, 'users-three', 'teal'),
            link('Audit Meetings', `${FS}/audit-meetings`, 'list-checks', 'purple'),
            link('AML Reviews', `${FS}/aml-reviews`, 'eye-slash', 'blue'),
            link('Customer Strategy', `${FS}/customer-strategy`, 'handshake', 'orange'),
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
            link('Security overview', ROUTES.security, 'stack', 'orange'),
            link(
              'Zero Trust Architecture',
              `${SEC}/zero-trust-architecture`,
              'shield-check',
              'teal',
            ),
            link('Identity & Access', `${SEC}/identity-access`, 'user-check', 'orange'),
            link('Data Security', `${SEC}/data-security`, 'database', 'teal'),
            link('AI Security', `${SEC}/ai-security`, 'cpu', 'pink'),
            link('Audit & Monitoring', `${SEC}/audit-monitoring`, 'pulse', 'teal'),
            link('Data Lifecycle', `${SEC}/data-lifecycle`, 'clock-counter-clockwise', 'blue'),
          ],
        },
      ],
      [
        {
          title: 'Trust Center',
          links: [
            link('Privacy', `${TC}/privacy`, 'eye-slash', 'blue'),
            link('Data Processing', `${TC}/data-processing`, 'arrows-clockwise', 'orange'),
            link('Data Residency', `${TC}/data-residency`, 'map-pin', 'teal'),
            link('Subprocessors', `${TC}/subprocessors`, 'users-three', 'pink'),
            link('Security Architecture', `${TC}/security-architecture`, 'stack', 'green'),
            link('Policies', `${TC}/policies`, 'file-text', 'purple'),
            link('Certifications', `${TC}/certifications`, 'seal-check', 'orange'),
            link('Security Documentation', `${TC}/security-documentation`, 'books', 'blue'),
            link('Trust Updates', `${TC}/trust-updates`, 'clock', 'orange'),
          ],
        },
      ],
      [
        {
          title: 'Compliance',
          links: [
            link('NDPR', `${COMP}/ndpr`, 'seal-check', 'purple'),
            link('ISO 27001', `${COMP}/iso-27001`, 'seal-check', 'blue'),
            link('SOC 2', `${COMP}/soc-2`, 'seal-check', 'purple'),
            link('GDPR', `${COMP}/gdpr`, 'seal-check', 'orange'),
            link('CBN Requirements', `${COMP}/cbn-requirements`, 'buildings', 'purple'),
            link(
              'Financial Services Compliance',
              `${COMP}/financial-services`,
              'briefcase',
              'orange',
            ),
            link('Data Governance', `${COMP}/data-governance`, 'database', 'green'),
            link('Audit Readiness', `${COMP}/audit-readiness`, 'list-checks', 'orange'),
            link('Regulatory Support', `${COMP}/regulatory-support`, 'handshake', 'blue'),
            link('Compliance Documentation', `${COMP}/documentation`, 'file-text', 'green'),
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
            link('Resources overview', ROUTES.resources, 'stack', 'blue'),
            link('Blog', `${RES}/blog`, 'file-text', 'pink'),
            link('Case Studies', `${RES}/case-studies`, 'briefcase', 'teal'),
            link('Whitepapers', `${RES}/whitepapers`, 'books', 'green'),
            link('Guides', `${RES}/guides`, 'list-checks', 'pink'),
            link('Reports', `${RES}/reports`, 'pulse', 'orange'),
            link('Webinars', `${RES}/webinars`, 'video-camera', 'teal'),
            link('Product Updates', `${RES}/product-updates`, 'sparkle', 'purple'),
            link('Customer Stories', `${RES}/customer-stories`, 'users-three', 'green'),
            link(
              'Meeting Productivity Calculator',
              `${RES}/meeting-productivity-calculator`,
              'clock',
              'teal',
            ),
            link('Acumeet Documentation', `${RES}/documentation`, 'books', 'pink'),
          ],
        },
      ],
      [
        {
          title: 'Developers',
          links: [
            link('API', `${DEV}/api`, 'cpu', 'teal'),
            link('API Documentation', `${DEV}/api-documentation`, 'file-text', 'green'),
            link('Authentication', `${DEV}/authentication`, 'key', 'pink'),
            link('REST APIs', `${DEV}/rest-apis`, 'cpu', 'purple'),
            link('Webhooks', `${DEV}/webhooks`, 'lightning', 'orange'),
            link('Integration Guides', `${DEV}/integration-guides`, 'books', 'purple'),
            link('SDKs', `${DEV}/sdks`, 'stack', 'green'),
            link('API Reference', `${DEV}/api-reference`, 'file-text', 'teal'),
            link('Developer Resources', `${DEV}/resources`, 'books', 'purple'),
          ],
        },
      ],
      [
        {
          title: 'Support',
          links: [
            link('Getting Started', `${SUP}/getting-started`, 'target', 'purple'),
            link('Feature Guides', `${SUP}/feature-guides`, 'books', 'blue'),
            link('Administration', `${SUP}/administration`, 'user-check', 'green'),
            link('Billing', `${SUP}/billing`, 'storefront', 'pink'),
            link('Security', `${SUP}/security`, 'shield-check', 'teal'),
            link('Troubleshooting', `${SUP}/troubleshooting`, 'wrench', 'green'),
            link('FAQs', `${SUP}/faqs`, 'magnifying-glass', 'orange'),
            link('Contact Support', `${SUP}/contact`, 'lifebuoy', 'green'),
            link('Raise a Ticket', `${SUP}/raise-a-ticket`, 'file-text', 'blue'),
            link('Ticket Status', `${SUP}/ticket-status`, 'clock', 'purple'),
            link('Service Status', `${SUP}/service-status`, 'pulse', 'green'),
            link('Support Plans', `${SUP}/support-plans`, 'handshake', 'blue'),
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
