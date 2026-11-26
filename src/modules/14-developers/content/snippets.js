/** Code samples shared by the Developers pages (Figma "Dev · API console" variants). */

const KEY = '$ACUMEET_API_KEY';
const BASE = 'https://api.acumeet.ai/v1';

export const SUMMARY_JSON = `{
  "meeting_id": "mtg_8f2c",
  "title": "Weekly Stand-up Call",
  "duration_minutes": 60,
  "summary": "Team reviewed vendor approvals and the ERP sync audit.",
  "topics": ["Vendor approval", "ERP sync"],
  "action_items": 3
}`;

export const SNIPPETS = {
  summary: {
    cURL: `curl ${BASE}/meetings/mtg_8f2c/summary \\\n  -H "Authorization: Bearer ${KEY}"`,
    JavaScript: `const res = await fetch("${BASE}/meetings/mtg_8f2c/summary", {\n  headers: { Authorization: \`Bearer \${process.env.ACUMEET_API_KEY}\` }\n});\nconst summary = await res.json();`,
    Python: `import os, requests\nr = requests.get("${BASE}/meetings/mtg_8f2c/summary",\n    headers={"Authorization": f"Bearer {os.environ['ACUMEET_API_KEY']}"})\nsummary = r.json()`,
  },
};

/** API console endpoints: [method, path, url, description, request, response, kind]. */
export const CONSOLE = [
  [
    'GET',
    '/meetings',
    `${BASE}/meetings`,
    'List your recorded meetings with title, date, duration and participants.',
    `curl ${BASE}/meetings \\\n  -H "Authorization: Bearer ${KEY}"`,
    `{\n  "data": [{\n    "id": "mtg_8f2c",\n    "title": "Weekly Stand-up Call",\n    "started_at": "2026-05-08T08:00:00Z",\n    "participants": 9\n  }]\n}`,
  ],
  [
    'GET',
    '/meetings/{id}/summary',
    `${BASE}/meetings/mtg_8f2c/summary`,
    'Get the AI summary, key topics and decisions for a meeting.',
    SNIPPETS.summary,
    SUMMARY_JSON,
  ],
  [
    'GET',
    '/meetings/{id}/action-items',
    `${BASE}/meetings/mtg_8f2c/action-items`,
    'Pull assigned follow-ups into Jira, Asana or your own tracker.',
    `curl ${BASE}/meetings/mtg_8f2c/action-items \\\n  -H "Authorization: Bearer ${KEY}"`,
    `{\n  "data": [{\n    "task": "Review vendor approval cycle",\n    "assignee": "Faith",\n    "status": "open"\n  }]\n}`,
  ],
  [
    'POST',
    '/ask',
    `${BASE}/ask`,
    'Ask a question across all your meetings and get an answer with citations.',
    `curl -X POST ${BASE}/ask \\\n  -H "Authorization: Bearer ${KEY}" \\\n  -d '{ "question": "What did we decide about the ERP audit?" }'`,
    `{\n  "answer": "George will finish the ERP sync audit by Friday.",\n  "sources": ["mtg_8f2c"]\n}`,
  ],
  [
    'POST',
    '/bots',
    `${BASE}/bots`,
    'Send the Acumeet notetaker to a Zoom, Google Meet or Teams call.',
    `curl -X POST ${BASE}/bots \\\n  -H "Authorization: Bearer ${KEY}" \\\n  -d '{ "meeting_url": "https://zoom.us/j/123456789" }'`,
    `{\n  "bot_id": "bot_41a9",\n  "status": "joining"\n}`,
  ],
  [
    'EVENT',
    'summary.ready',
    'POSTed to your webhook URL',
    "Get a webhook the moment a meeting's summary and tasks are ready.",
    '// POSTed to your webhook URL',
    `{\n  "event": "summary.ready",\n  "meeting_id": "mtg_8f2c",\n  "created_at": "2026-05-08T09:02:11Z"\n}`,
  ],
];
