import { createElement as h } from 'react';
import AppWindow from '@/components/ui/AppWindow';
import FloatChip from '@/components/ui/FloatChip';
import DecisionsCard from '@/components/visuals/DecisionsCard';
import ActionItemsCard from '@/components/visuals/ActionItemsCard';
import SummaryCard from '@/components/visuals/SummaryCard';
import KnowledgeSearchCard from '@/components/visuals/KnowledgeSearchCard';
import MeetingCaptureCard from '@/components/visuals/MeetingCaptureCard';
import MeetingAnalyticsCard from '@/components/visuals/MeetingAnalyticsCard';
import RedactionReview from '@/components/visuals/RedactionReview';
import AtlasChatCard from '@/components/visuals/AtlasChatCard';
import IntegrationsCard from '@/components/visuals/IntegrationsCard';
import HeroCanvas from '@/components/visuals/HeroCanvas';
import { AVATARS } from '@/components/visuals/people';
import AuditLogCard from '@/modules/02-solutions/components/visuals/AuditLogCard';
import WorkspaceAccessCard from '@/modules/02-solutions/components/visuals/WorkspaceAccessCard';
import RetentionPolicyCard from '@/modules/02-solutions/components/visuals/RetentionPolicyCard';

/**
 * Data builders for the Figma "UI · …" mock-up cards, shared by content files
 * (Industries 04.x, Use Cases 05.x). Each returns a React node, so a content
 * file stays a plain data object. Widths default to the most common Figma size.
 */

/* Avatars: Figma uses the same three faces in every action-items card. */
const PEOPLE = ['Faith Oluwale', 'Warith Abraham', 'Ruth Godwin'];

/** "Decisions & topics": decisions(date, ['Decision', …], 'Risk text', ['topic', …], width). Last row is the risk. */
export const decisions = (date, decided, risk, topics, width = 480, opts = {}) =>
  h(DecisionsCard, {
    width,
    date,
    rows: [...decided.map((text) => ({ kind: 'decision', text })), { kind: 'risk', text: risk }],
    topics,
    ...opts,
  });

/** "Action items": actions(open, [[title, due], …], { width, shadow }). */
export const actions = (open, tasks, { width = 480, shadow = 'mock' } = {}) =>
  h(ActionItemsCard, {
    width,
    open,
    shadow,
    avatarSize: 20,
    tasks: tasks.map(([title, due], i) => ({ title, due, avatar: AVATARS[PEOPLE[i % PEOPLE.length]] })),
  });

/** "Summary": summary(title, [quality, sentiment, engagement], [insight, …], { width, shadow }). */
export const summary = (title, [q, s, e], insights, { width = 440, shadow = 'mock' } = {}) =>
  h(SummaryCard, {
    width,
    shadow,
    title,
    scores: [
      { label: 'Quality', value: q, bar: 'amber' },
      { label: 'Sentiment', value: s, bar: 'green' },
      { label: 'Engagement', value: e, bar: 'blue' },
    ],
    insights,
  });

/** "Knowledge search": search(query, [[meeting, date, excerpt], …], { width, shadow }). */
export const search = (query, results, { width = 480, shadow = 'mock' } = {}) =>
  h(KnowledgeSearchCard, {
    width,
    shadow,
    query,
    results: results.map(([meeting, date, excerpt]) => ({ meeting, date, excerpt })),
  });

/** "Upcoming meetings": capture(date, [[title, meta], …], { width }). First row is recording. */
export const capture = (date, meetings, { width = 400, shadow = 'mock' } = {}) =>
  h(MeetingCaptureCard, { width, shadow, date, meetings: meetings.map(([title, meta]) => ({ title, meta })) });

/** "Audit log": audit([[time, action, actor], …], { width }). First event is live. */
export const audit = (events, { width = 440, shadow = 'mock' } = {}) =>
  h(AuditLogCard, { width, shadow, events: events.map(([time, action, actor]) => ({ time, action, actor })) });

/* Bar size per card width (Figma: 350 → 21/31, 440 → 30/40, 560 → 42/52). */
const BARS = { 350: [21, 31], 440: [30, 40], 560: [42, 52] };

/** "Meeting analytics": analytics(range, [sentiment, engagement, quality], { width }). */
export const analytics = (range, [sentiment, engagement, quality], { width = 440, shadow = 'mock' } = {}) => {
  const [barWidth, barPitch] = BARS[width] ?? BARS[440];
  return h(MeetingAnalyticsCard, {
    width,
    range,
    barWidth,
    barPitch,
    shadow,
    legend: [
      { label: 'Sentiment', value: `${sentiment}%`, tone: 'green' },
      { label: 'Engagement', value: `${engagement}%`, tone: 'blue' },
      { label: 'Quality', value: `${quality}%`, tone: 'amber' },
    ],
  });
};

/**
 * "Redaction review": redaction(count, ['text', '[TOKEN]', …], [[label, match], …], { width }).
 * Sentence parts in square brackets render as dark token chips; `match` may be '97%' or Figma's 'Match 97%'.
 */
export const redaction = (count, sentence, rows, { width = 440, shadow = 'mock' } = {}) =>
  h(RedactionReview, {
    width,
    shadow,
    count,
    sentence: sentence.map((part) => (/^\[.+\]$/.test(part) ? { token: part } : part)),
    rows: rows.map(([label, match]) => ({ label, match: String(match).replace(/^Match\s*/, '') })),
  });

/** "Atlas": atlas({ scope, question, answer: (string | { b })[], quote: { name, time, text }, sources, prompts, width }). */
export const atlas = ({ width = 440, ...props }) => h(AtlasChatCard, { width, ...props });

/** "Workspace access": access([[name, role], …], { width, shadow }). */
export const access = (members, { width = 440, shadow = 'mock' } = {}) =>
  h(WorkspaceAccessCard, { width, shadow, members: members.map(([name, role]) => ({ name, role })) });

/** "Retention policy": retention([[label, keep], …], { status, width, shadow }). */
export const retention = (rules, { status = 'Default', width = 360, shadow = 'mock' } = {}) =>
  h(RetentionPolicyCard, { width, shadow, status, rules: rules.map(([label, keep]) => ({ label, keep })) });

/** "Integrations": integrations(['Microsoft Teams', …], connected, { width }). */
export const integrations = (names, connected, { width = 460 } = {}) =>
  h(IntegrationsCard, { width, connected, items: names.map((name) => ({ name })) });

/** Chrome app window wrapping a card (hero compositions). */
export const appWindow = (width, child) => h('div', { style: { width } }, h(AppWindow, null, child));

/** Frosted "Live in your workspace" chip. */
export const floatChip = (label = 'Live in your workspace') => h(FloatChip, null, label);

/** Hero visual: heroCanvas(height, [[x, y, node, rotate?], …], width). */
export const heroCanvas = (height, items, width = 660) =>
  h(HeroCanvas, { width, height, items: items.map(([x, y, node, rotate]) => ({ x, y, node, rotate })) });
