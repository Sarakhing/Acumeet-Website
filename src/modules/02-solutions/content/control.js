import { createElement as h } from 'react';
import { ROUTES } from '@/constants/routes';
import ControlHeroVisual from '../components/visuals/ControlHeroVisual';
import RetentionPolicyCard from '../components/visuals/RetentionPolicyCard';
import KeysStorageCard from '../components/visuals/KeysStorageCard';
import keyMagenta from '@/assets/images/solutions/ic-key-magenta-18.svg';
import databaseBlue from '@/assets/images/solutions/ic-database-blue-18.svg';
import databaseMagenta24 from '@/assets/images/solutions/ic-database-magenta-24.svg';
import keyBlue24 from '@/assets/images/solutions/ic-key-blue-24.svg';
import keyPurple24 from '@/assets/images/solutions/ic-key-purple-24.svg';
import databaseGreen24 from '@/assets/images/solutions/ic-database-green-24.svg';
import { relatedSolutions, solutionBreadcrumb } from './solutions';

/** 03.03 · Control (Figma 46:16979). */
export const control = {
  breadcrumb: solutionBreadcrumb('Control'),

  hero: {
    variant: 'wash',
    pattern: 'hairlines',
    secondaryStyle: 'button',
    eyebrow: 'Solutions · Control',
    title: 'Your data. Your keys. Your rules.',
    lead: 'Keep greater control over where your meeting data is stored, how it is protected, and how long it is retained. Acumeet supports enterprise data control through customer-managed storage options, customer-managed encryption keys, regional storage configuration, and configurable retention choices.',
    primary: { label: 'Book an enterprise demo', to: ROUTES.bookDemo },
    secondary: { label: 'Explore data storage options', to: ROUTES.deployment },
    visual: h(ControlHeroVisual),
    visualWidth: 540,
    visualAlign: 'end',
    copyTop: 56,
    padBottom: 11, // 748 − 64 − 673 (canvas incl. 64px shadow room)
  },

  /** "02 · Control Where Your Data Lives" (Row 46:17148). */
  storage: {
    title: 'Control where your data lives',
    paragraphs: [
      'Different organisations have different requirements for data ownership, storage, and oversight. Acumeet offers storage options designed to help organisations align meeting data handling with their internal policies and infrastructure preferences.',
      'Keep organisational meeting data logically separated within Acumeet-managed storage. Private storage supports a more controlled environment for managing meeting assets.',
      'Connect your organisation’s own cloud storage so meeting assets can be transferred to infrastructure your organisation manages. Supported storage options include Amazon S3, Google Cloud Storage, and Azure Blob Storage.',
    ],
    cards: [
      {
        icon: databaseMagenta24,
        tone: 'magenta',
        body: 'Following a successful transfer, meeting files can be managed in your connected storage environment, while Acumeet retains the metadata needed to support the service.',
      },
      {
        icon: keyBlue24,
        tone: 'blue',
        body: 'Supported key-management options include AWS Key Management Service (KMS), Azure Key Vault, and Google Cloud Key Management Service (Cloud KMS).',
      },
      {
        icon: keyPurple24,
        tone: 'purple',
        body: 'Because access to encrypted data depends on the configured key, key permissions, availability, rotation, and revocation should be managed carefully.',
      },
      {
        icon: databaseGreen24,
        tone: 'green',
        body: 'Your organisation should assess the full data flow—including processing, metadata, temporary files, and backups—when determining whether a storage arrangement meets its residency obligations.',
      },
    ],
  },

  /** Split 46:17186. */
  retention: {
    size: 'standard',
    reverse: true,
    title: 'Retention that fits your policies',
    body: [
      'Set a retention period that reflects your organisation’s data classification, records management, legal obligations, and internal data-loss prevention (DLP) policies. Available retention choices include 30 days, 90 days, 180 days, and a custom period.',
      'Short-term retention for temporary or highly sensitive meeting information.',
      'Project-based retention for operational records that are needed during delivery.',
      'Longer retention where contractual, regulatory, or records-management requirements apply.',
    ],
    visual: {
      tint: 'mint',
      pattern: { type: 'rings', size: 'panel' },
      content: h(RetentionPolicyCard, {
        width: 440,
        status: 'Committees',
        rules: [
          { label: 'Recordings', keep: '90 days' },
          { label: 'Transcripts', keep: '1 year' },
          { label: 'Summaries', keep: '3 years' },
          { label: 'Audit logs', keep: '7 years' },
        ],
      }),
    },
  },

  /** Split 46:17233 ("04 · Visibility…" Editorial 46:17282 is hidden in Figma). */
  visibility: {
    size: 'standard',
    title: 'Visibility into storage and encryption',
    body: [
      'Give administrators a clearer view of configured storage, connection status, and storage usage. Storage status information helps teams understand whether their connected storage is configured and operating as expected.',
      'Audit records also help support oversight of relevant administrative and data-management activity.',
    ],
    visual: {
      tint: 'lilac',
      pattern: { type: 'rings', size: 'panel' },
      content: h(KeysStorageCard, {
        actions: ['Connected', 'Configure'],
        keyIcon: { src: keyMagenta, tone: 'magenta' },
        storageIcon: { src: databaseBlue, tone: 'blue' },
        iconSize: 36,
      }),
    },
  },

  faq: [
    {
      q: 'What is BYOS?',
      a: 'Bring Your Own Storage allows your organisation to connect its own cloud storage for meeting assets, helping you manage those assets within infrastructure you control.',
    },
    {
      q: 'What is BYOK?',
      a: 'Bring Your Own Key allows your organisation to use its own key-management service to control the master key protecting data encryption keys.',
    },
    {
      q: 'Which storage providers are supported for BYOS?',
      a: 'The supported options include Amazon S3, Google Cloud Storage, and Azure Blob Storage.',
    },
    {
      q: 'Which key-management services are supported for BYOK?',
      a: 'The supported options include AWS KMS, Azure Key Vault, and Google Cloud KMS.',
    },
    {
      q: 'Can we choose where meeting data is stored?',
      a: 'Acumeet-managed storage offers EU, US, and Africa region options. With BYOS, the region is determined by the location of your connected storage bucket.',
    },
    {
      q: 'Can we set how long meeting data is retained?',
      a: 'Available options include 30 days, 90 days, 180 days, and a custom period. Your organisation should choose a period aligned with its applicable policies and obligations.',
    },
    {
      q: 'What happens if our encryption key is disabled or revoked?',
      a: 'Data access may be affected if the key required to decrypt it becomes unavailable. Plan key changes and revocation carefully to avoid unintended loss of access.',
    },
  ],

  related: relatedSolutions('protect', 'secure', 'govern', 'emi'),

  cta: {
    title: 'Enterprise data control, built around your requirements.',
    lead: 'Explore storage, encryption, regional configuration, and retention options that can help your organisation manage meeting data in line with its requirements.',
    primary: { label: 'Discuss your enterprise requirements', to: ROUTES.contactSales },
    secondary: { label: 'Book a demo', to: ROUTES.bookDemo },
  },
};
