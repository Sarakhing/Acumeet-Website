import { ROUTES } from '@/constants/routes';
import avatarOne from '@/assets/images/home/industries-avatar-1.jpg';
import avatarTwo from '@/assets/images/home/industries-avatar-2.jpg';
import avatarThree from '@/assets/images/home/industries-avatar-3.jpg';
import avatarFour from '@/assets/images/home/industries-avatar-4.jpg';

/**
 * Content for Figma "Industries / Interactive" (46:10376) — one entry per
 * variant: Financial services (46:10377), Banking (46:10472),
 * Insurance (46:10567), Regulated enterprises (46:10662).
 */

// Owner avatars: photo + coloured ring, as used across the four variants.
const OWNERS = {
  blue: { src: avatarOne, ring: 'bg-brand-blue' },
  magenta: { src: avatarTwo, ring: 'bg-brand-magenta' },
  green: { src: avatarThree, ring: 'bg-signal-green' },
  amber: { src: avatarFour, ring: 'bg-brand-amber' },
  ink: { src: avatarTwo, ring: 'bg-ink-900' },
};

export const INDUSTRIES = [
  {
    id: 'financial-services',
    label: 'Financial services',
    panelBg: 'bg-tint-magenta',
    description: 'Capture investment discussions, approvals and risk reviews in a searchable meeting record.',
    cta: 'Explore financial services',
    to: `${ROUTES.industries}/financial-services`,
    meeting: {
      title: 'Investment committee',
      meta: '18 Sep, 9 participants',
      rows: [
        { decision: 'Approve Q4 fixed-income allocation', owner: OWNERS.blue, time: '00:12:40', status: 'approved' },
        { decision: 'Review counterparty exposure', owner: OWNERS.magenta, time: '00:27:05', status: 'review' },
        { decision: 'Update risk appetite statement', owner: OWNERS.green, time: '00:48:22', status: 'open' },
      ],
      record: {
        participants: '9',
        duration: '64 min',
        redacted: '3',
        note: 'Atlas: “Which allocations were approved this quarter?”',
      },
    },
  },
  {
    id: 'banking',
    label: 'Banking',
    panelBg: 'bg-[#eef4ff]',
    description:
      'Keep credit committee discussions, customer conversations and operational reviews clearly documented.',
    cta: 'Explore banking',
    to: `${ROUTES.industries}/banking`,
    meeting: {
      title: 'Credit approval meeting',
      meta: '25 Sep, 7 participants',
      rows: [
        { decision: 'SME facility, Lagoon Foods', owner: OWNERS.blue, time: '00:08:14', status: 'approved' },
        { decision: 'Retail overdraft limit review', owner: OWNERS.amber, time: '00:21:50', status: 'deferred' },
        { decision: 'KYC exceptions report', owner: OWNERS.magenta, time: '00:39:02', status: 'open' },
      ],
      record: {
        participants: '7',
        duration: '52 min',
        redacted: '6',
        note: 'Account and BVN details masked automatically.',
      },
    },
  },
  {
    id: 'insurance',
    label: 'Insurance',
    panelBg: 'bg-tint-green',
    description: 'Preserve the details behind claims reviews, underwriting discussions and policy decisions.',
    cta: 'Explore insurance',
    to: `${ROUTES.industries}/insurance`,
    meeting: {
      title: 'Claims review board',
      meta: '22 Sep, 6 participants',
      rows: [
        { decision: 'Motor claim CL-20931', owner: OWNERS.green, time: '00:06:33', status: 'approved' },
        { decision: 'Flood exposure, Lekki portfolio', owner: OWNERS.magenta, time: '00:19:47', status: 'review' },
        { decision: 'Reinsurance renewal terms', owner: OWNERS.blue, time: '00:36:10', status: 'open' },
      ],
      record: {
        participants: '6',
        duration: '45 min',
        redacted: '4',
        note: 'Policyholder names and numbers masked in the record.',
      },
    },
  },
  {
    id: 'regulated-enterprises',
    label: 'Regulated enterprises',
    panelBg: 'bg-tint-amber',
    description:
      'Maintain clear records of governance, compliance and business meetings. Manage how long they are retained.',
    cta: 'Explore regulated industries',
    to: `${ROUTES.industries}/other-regulated-industries`,
    meeting: {
      title: 'Board risk committee',
      meta: '15 Sep, 11 participants',
      rows: [
        { decision: 'Data retention policy update', owner: OWNERS.amber, time: '00:10:21', status: 'approved' },
        { decision: 'Vendor security assessment', owner: OWNERS.green, time: '00:31:44', status: 'review' },
        { decision: 'Incident post-mortem actions', owner: OWNERS.ink, time: '00:58:09', status: 'open' },
      ],
      record: {
        participants: '11',
        duration: '78 min',
        redacted: '2',
        note: 'Every decision links back to the moment it was made.',
      },
    },
  },
];

/** Status pill styles (Figma "Status pill" 19239:426xx). */
export const STATUSES = {
  approved: { label: 'Approved', className: 'bg-tint-green text-signal-green' },
  review: { label: 'In review', className: 'bg-tint-amber text-[#9e6605]' },
  open: { label: 'Open', className: 'bg-surface-subtle text-ink-600' },
  deferred: { label: 'Deferred', className: 'bg-tint-blue text-brand-blue' },
};
