import { createElement as h } from 'react';
import { ChecklistPanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

/** 14.08 · SDKs (Figma 49:157482). */
export default docsPage('sdks', {
  eyebrow: 'Software development kits',
  lead: 'SDKs can make integration easier by packaging common API interactions for a particular language or platform. Check Acumeet’s current developer resources to confirm whether official SDKs are available, which versions they support, and how they are maintained.',
  primary: CONTACT('View available SDKs'),
  secondary: CONTACT('Request SDK information'),
  panel: h(ChecklistPanel, {
    title: 'Before adopting an SDK',
    lead: 'Verify that it is:',
    checks: [
      'Published or endorsed by Acumeet',
      'Linked to its repository or package source',
      'Clear on supported languages, versions and dependencies',
      'Clear on release status',
    ],
  }),
  sections: [
    [
      'Choose an officially supported package',
      'Before adopting an SDK, verify that it is published or endorsed by Acumeet, identify its repository or package source, and review supported languages, versions, dependencies, and release status.',
    ],
    [
      'Understand what the SDK covers',
      'Check which API operations are supported, how authentication is configured, how errors are surfaced, and whether retries, pagination, or type definitions are provided.',
    ],
    [
      'Keep dependencies maintained',
      'Review release notes and security advisories, pin versions appropriately, and plan updates when API versions or SDK dependencies change.',
    ],
  ],
  points: [
    'Do not imply official SDK support for unverified languages.',
    'Link to the canonical repository or package source once approved.',
    'State compatibility, installation steps, and maintenance status.',
  ],
  related: ['apiDocumentation', 'apiReference'],
  faq: [
    [
      'Which languages are supported?',
      'Confirm the current official SDK list with Acumeet. Do not infer language support from community packages.',
    ],
    [
      'Are community SDKs official?',
      'Only label an SDK official when Acumeet has explicitly approved or maintains it.',
    ],
    [
      'How do I report an SDK issue?',
      'Provide the approved repository issue tracker or support contact for the relevant SDK.',
    ],
  ],
});
