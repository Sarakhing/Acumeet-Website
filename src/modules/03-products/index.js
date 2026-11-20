import { createElement, lazy } from 'react';
import { ROUTES } from '@/constants/routes';

/**
 * 03 · Products module (Figma section "03. Products", 46:30442). Routes are
 * children of the root layout, so paths are relative (no leading slash).
 * Unregistered product pages fall through to ComingSoon.
 */
const rel = (path) => path.replace(/^\//, '');
const P = ROUTES.product;

const MeetingCapturePage = lazy(() => import('./pages/MeetingCapturePage'));
const AiTranscriptionPage = lazy(() => import('./pages/AiTranscriptionPage'));

export const productsRoutes = [
  // TODO 02.01 · Product overview — Figma 46:30443 → P.overview ('products')
  { path: rel(P.meetingCapture), element: createElement(MeetingCapturePage) }, // 02.02 · 46:37362
  { path: rel(P.aiTranscription), element: createElement(AiTranscriptionPage) }, // 02.03 · 46:37240
  // TODO 02.04 · AI Meeting Summaries — Figma 46:35486 → P.aiMeetingSummaries ('products/ai-meeting-summaries')
  // TODO 02.05 · Action Item Management — Figma 46:38621 → P.actionItemManagement ('products/action-item-management')
  // TODO 02.06 · Speaker Recognition — Figma 46:39919 → P.speakerRecognition ('products/speaker-recognition')
  // TODO 02.07 · AI Redaction — Figma 46:40048 → P.aiRedaction ('products/ai-redaction')
  // TODO 02.08 · Atlas — Figma 46:41403 → P.atlas ('products/atlas')
  // TODO 02.09 · Meeting Intelligence — Figma 46:41646 → P.meetingIntelligence ('products/meeting-intelligence')
  // TODO 02.10 · Knowledge Repository — Figma 46:43025 → P.knowledgeRepository ('products/knowledge-repository')
  // TODO 02.11 · Analytics — Figma 46:43428 → P.analytics ('products/analytics')
];
