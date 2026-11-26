import { createElement as h } from 'react';
import { EventPanel } from '../components/panels';
import { CONTACT, docsPage } from './developers';

/** 14.06 · Webhooks (Figma 49:157036). */
export default docsPage('webhooks', {
  eyebrow: 'Event-driven integrations',
  lead: 'Where supported, webhooks can notify your application when defined events occur, helping you trigger downstream workflows. Confirm available event types, delivery behaviour, and security requirements in Acumeet’s current webhook documentation.',
  primary: CONTACT('Explore webhook support'),
  secondary: CONTACT('Discuss event-driven workflows'),
  panel: h(EventPanel),
  sections: [
    [
      'Choose the events your workflow needs',
      'Start by identifying the event that should trigger your process and the minimum information required to respond. Confirm that the event is supported and understand its payload.',
    ],
    [
      'Verify incoming notifications',
      'Implement the verification method documented by Acumeet before trusting a webhook request. Keep secrets protected and reject requests that fail verification.',
    ],
    [
      'Handle delivery and retries',
      'Design handlers to be resilient to duplicate, delayed, or out-of-order notifications unless the documented contract guarantees otherwise. Confirm timeout, retry, ordering, and replay behaviour.',
    ],
    [
      'Monitor and recover',
      'Record delivery outcomes without logging sensitive payloads unnecessarily. Establish alerting, failure handling, and a recovery process that matches the supported webhook model.',
    ],
  ],
  points: [
    'Verify event types and payload schemas before development.',
    'Design for duplicate delivery unless documented otherwise.',
    'Confirm retries, ordering, signature verification, and replay support.',
  ],
  related: ['apiDocumentation', 'authentication', 'integrationGuides'],
  faq: [
    [
      'Which webhook events are available?',
      'Use the current Acumeet webhook documentation to confirm supported events and payloads.',
    ],
    [
      'Are webhook requests signed?',
      'The signature or verification mechanism must be confirmed in the official documentation.',
    ],
    [
      'Are events guaranteed to arrive in order?',
      'Do not assume ordering or exactly-once delivery. Confirm the documented delivery guarantees and design defensively.',
    ],
    [
      'Can failed events be replayed?',
      'Replay or redelivery functionality must be confirmed with Acumeet.',
    ],
  ],
});
