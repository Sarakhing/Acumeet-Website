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
            link('Meeting capture', `${P}/meeting-capture`, 'video-camera', 'purple'),
            link('AI transcription', `${P}/ai-transcription`, 'file-text', 'orange'),
            link('Speaker recognition', `${P}/speaker-recognition`, 'user-focus', 'blue'),
            link('AI redaction', `${P}/ai-redaction`, 'eye-slash', 'purple'),
          ],
        },
        {
          title: 'Act',
          links: [
            link('Action item management', `${P}/action-item-management`, 'list-checks', 'green'),
          ],
        },
      ],
      [
        {
          title: 'Understand',
          links: [
            link('AI meeting summaries', `${P}/ai-meeting-summaries`, 'stack', 'blue'),
            link('Meeting intelligence', `${P}/meeting-intelligence`, 'lightning', 'green'),
            link('Analytics', `${P}/analytics`, 'pulse', 'pink'),
          ],
        },
        {
          title: 'Remember',
          links: [
            link('Knowledge repository', `${P}/knowledge-repository`, 'books', 'blue'),
            link('Atlas', `${P}/atlas`, 'sparkle', 'pink'),
          ],
        },
      ],
      [
        {
          title: 'Integrations',
          links: [
            link('Meeting platforms', `${INT}/meeting-platforms`, 'video-camera', 'orange'),
            link('Productivity', `${INT}/productivity`, 'briefcase', 'pink'),
            link('Identity', `${INT}/identity`, 'user-check', 'green'),
            link('Storage', `${INT}/storage`, 'database', 'teal'),
            link('Security', `${INT}/security`, 'shield-check', 'orange'),
            link('Analytics', `${INT}/analytics`, 'pulse', 'teal'),
            link('CRM', `${INT}/crm`, 'handshake', 'orange'),
            link('Project management', `${INT}/project-management`, 'kanban', 'teal'),
            link('Developer integrations', `${INT}/developer-integrations`, 'cpu', 'blue'),
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
      label: 'Meeting capture',
      title: 'Capture every important business conversation.',
      cta: { label: 'Explore meeting capture', to: `${P}/meeting-capture` },
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
            link('Executive & board meetings', `${U}/executive-board-meetings`, 'target', 'purple'),
            link('Risk & compliance', `${U}/risk-compliance`, 'scales', 'teal'),
            link(
              'Credit & Investment Committees',
              `${U}/credit-investment-committees`,
              'briefcase',
              'purple',
            ),
            link('Audit', `${U}/audit`, 'seal-check', 'orange'),
            link('Fraud & AML', `${U}/fraud-aml`, 'magnifying-glass', 'purple'),
            link('Project governance', `${U}/project-governance`, 'kanban', 'pink'),
            link('Customer strategy', `${U}/customer-strategy`, 'handshake', 'teal'),
          ],
        },
      ],
      [
        {
          title: null,
          links: [
            link('Sales', `${U}/sales`, 'storefront', 'teal'),
            link('Customer success', `${U}/customer-success`, 'user-check', 'green'),
            link('Operations', `${U}/operations`, 'wrench', 'blue'),
            link('Product teams', `${U}/product-teams`, 'stack', 'pink'),
            link('Management meetings', `${U}/management-meetings`, 'users-three', 'green'),
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
      label: 'Meeting intelligence',
      title: 'Turn every meeting into business intelligence.',
      cta: { label: 'Explore meeting intelligence', to: ROUTES.solutions.emi },
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
            link('Financial services', FS, 'briefcase', 'purple'),
            link('Telecommunications', `${I}/telecommunications`, 'globe-hemisphere-west', 'blue'),
            link('Public sector', `${I}/public-sector`, 'buildings', 'green'),
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
            link('Executive meetings', `${FS}/executive-meetings`, 'target', 'orange'),
            link('Credit committees', `${FS}/credit-committees`, 'briefcase', 'pink'),
            link('Risk committees', `${FS}/risk-committees`, 'scales', 'blue'),
            link('Compliance meetings', `${FS}/compliance-meetings`, 'seal-check', 'orange'),
          ],
        },
      ],
      [
        {
          title: null,
          links: [
            link('Fraud investigations', `${FS}/fraud-investigations`, 'magnifying-glass', 'blue'),
            link('Board meetings', `${FS}/board-meetings`, 'users-three', 'teal'),
            link('Audit meetings', `${FS}/audit-meetings`, 'list-checks', 'purple'),
            link('AML reviews', `${FS}/aml-reviews`, 'eye-slash', 'blue'),
            link('Customer strategy', `${FS}/customer-strategy`, 'handshake', 'orange'),
          ],
        },
      ],
    ],
    footerLinks: [{ label: 'Industries overview', to: ROUTES.industries }],
    feature: {
      tone: 'magenta',
      badge: 'Industries',
      label: 'Financial services',
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
            link('Identity & access', `${SEC}/identity-access`, 'user-check', 'orange'),
            link('Data security', `${SEC}/data-security`, 'database', 'teal'),
            link('AI security', `${SEC}/ai-security`, 'cpu', 'pink'),
            link('Audit & monitoring', `${SEC}/audit-monitoring`, 'pulse', 'teal'),
            link('Data lifecycle', `${SEC}/data-lifecycle`, 'clock-counter-clockwise', 'blue'),
          ],
        },
      ],
      [
        {
          title: 'Trust Center',
          links: [
            link('Privacy', `${TC}/privacy`, 'eye-slash', 'blue'),
            link('Data processing', `${TC}/data-processing`, 'arrows-clockwise', 'orange'),
            link('Data residency', `${TC}/data-residency`, 'map-pin', 'teal'),
            link('Subprocessors', `${TC}/subprocessors`, 'users-three', 'pink'),
            link('Security architecture', `${TC}/security-architecture`, 'stack', 'green'),
            link('Policies', `${TC}/policies`, 'file-text', 'purple'),
            link('Certifications', `${TC}/certifications`, 'seal-check', 'orange'),
            link('Security documentation', `${TC}/security-documentation`, 'books', 'blue'),
            link('Trust updates', `${TC}/trust-updates`, 'clock', 'orange'),
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
            link('CBN requirements', `${COMP}/cbn-requirements`, 'buildings', 'purple'),
            link(
              'Financial Services Compliance',
              `${COMP}/financial-services`,
              'briefcase',
              'orange',
            ),
            link('Data governance', `${COMP}/data-governance`, 'database', 'green'),
            link('Audit readiness', `${COMP}/audit-readiness`, 'list-checks', 'orange'),
            link('Regulatory support', `${COMP}/regulatory-support`, 'handshake', 'blue'),
            link('Compliance documentation', `${COMP}/documentation`, 'file-text', 'green'),
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
      label: 'AI redaction',
      title: 'Protect sensitive data before it becomes a risk',
      cta: { label: 'Explore AI redaction', to: `${P}/ai-redaction` },
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
            link('Case studies', `${RES}/case-studies`, 'briefcase', 'teal'),
            link('Whitepapers', `${RES}/whitepapers`, 'books', 'green'),
            link('Guides', `${RES}/guides`, 'list-checks', 'pink'),
            link('Reports', `${RES}/reports`, 'pulse', 'orange'),
            link('Webinars', `${RES}/webinars`, 'video-camera', 'teal'),
            link('Product updates', `${RES}/product-updates`, 'sparkle', 'purple'),
            link('Customer stories', `${RES}/customer-stories`, 'users-three', 'green'),
            link(
              'Meeting Productivity Calculator',
              `${RES}/meeting-productivity-calculator`,
              'clock',
              'teal',
            ),
            link('Acumeet documentation', `${RES}/documentation`, 'books', 'pink'),
          ],
        },
      ],
      [
        {
          title: 'Developers',
          links: [
            link('API', `${DEV}/api`, 'cpu', 'teal'),
            link('API documentation', `${DEV}/api-documentation`, 'file-text', 'green'),
            link('Authentication', `${DEV}/authentication`, 'key', 'pink'),
            link('REST APIs', `${DEV}/rest-apis`, 'cpu', 'purple'),
            link('Webhooks', `${DEV}/webhooks`, 'lightning', 'orange'),
            link('Integration guides', `${DEV}/integration-guides`, 'books', 'purple'),
            link('SDKs', `${DEV}/sdks`, 'stack', 'green'),
            link('API reference', `${DEV}/api-reference`, 'file-text', 'teal'),
            link('Developer resources', `${DEV}/resources`, 'books', 'purple'),
          ],
        },
      ],
      [
        {
          title: 'Support',
          links: [
            link('Getting started', `${SUP}/getting-started`, 'target', 'purple'),
            link('Feature guides', `${SUP}/feature-guides`, 'books', 'blue'),
            link('Administration', `${SUP}/administration`, 'user-check', 'green'),
            link('Billing', `${SUP}/billing`, 'storefront', 'pink'),
            link('Security', `${SUP}/security`, 'shield-check', 'teal'),
            link('Troubleshooting', `${SUP}/troubleshooting`, 'wrench', 'green'),
            link('FAQs', `${SUP}/faqs`, 'magnifying-glass', 'orange'),
            link('Contact support', `${SUP}/contact`, 'lifebuoy', 'green'),
            link('Raise a ticket', `${SUP}/raise-a-ticket`, 'file-text', 'blue'),
            link('Ticket status', `${SUP}/ticket-status`, 'clock', 'purple'),
            link('Service status', `${SUP}/service-status`, 'pulse', 'green'),
            link('Support plans', `${SUP}/support-plans`, 'handshake', 'blue'),
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
