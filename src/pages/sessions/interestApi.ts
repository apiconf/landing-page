export type InterestCounts = Record<string, number>;

export type SubmitInterestPayload = {
  email: string;
  dayNumber: number;
  timeSlot: string;
  sessionId: string;
  title: string;
};

type ApiResponse = {
  ok: boolean;
  counts?: InterestCounts;
  error?: string;
};

type MockVote = {
  email: string;
  dayNumber: number;
  timeSlot: string;
  sessionId: string;
  title: string;
  updatedAt: string;
};

const EMAIL_STORAGE_KEY = 'apiconf_breakout_email';
const MOCK_VOTES_KEY = 'apiconf_breakout_votes_mock';

export function getBreakoutInterestUrl(): string | undefined {
  const url = import.meta.env.VITE_BREAKOUT_INTEREST_URL;
  return typeof url === 'string' && url.trim() ? url.trim() : undefined;
}

/** Live Apps Script when URL is set; otherwise localStorage mock in dev. */
export function isBreakoutInterestMock(): boolean {
  return !getBreakoutInterestUrl() && Boolean(import.meta.env.DEV);
}

export function isBreakoutInterestEnabled(): boolean {
  return Boolean(getBreakoutInterestUrl()) || isBreakoutInterestMock();
}

export function getStoredInterestEmail(): string {
  try {
    return localStorage.getItem(EMAIL_STORAGE_KEY) ?? '';
  } catch {
    return '';
  }
}

export function storeInterestEmail(email: string): void {
  try {
    localStorage.setItem(EMAIL_STORAGE_KEY, email.trim().toLowerCase());
  } catch {
    // ignore quota / private mode
  }
}

function readMockVotes(): MockVote[] {
  try {
    const raw = localStorage.getItem(MOCK_VOTES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as MockVote[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeMockVotes(votes: MockVote[]): void {
  localStorage.setItem(MOCK_VOTES_KEY, JSON.stringify(votes));
}

function countsFromVotes(votes: MockVote[]): InterestCounts {
  return votes.reduce<InterestCounts>((acc, vote) => {
    acc[vote.sessionId] = (acc[vote.sessionId] ?? 0) + 1;
    return acc;
  }, {});
}

function seedMockVotesIfEmpty(): MockVote[] {
  const existing = readMockVotes();
  if (existing.length > 0) return existing;

  // A few fake votes so cards don't all say "No interest yet" on first load
  const seeded: MockVote[] = [
    {
      email: 'demo1@example.com',
      dayNumber: 1,
      timeSlot: '10:00am - 11:00am',
      sessionId: 'monitoring-apis-with-opentelemetry-fri',
      title: 'Monitoring APIs with OpenTelemetry',
      updatedAt: new Date().toISOString(),
    },
    {
      email: 'demo2@example.com',
      dayNumber: 1,
      timeSlot: '10:00am - 11:00am',
      sessionId: 'monitoring-apis-with-opentelemetry-fri',
      title: 'Monitoring APIs with OpenTelemetry',
      updatedAt: new Date().toISOString(),
    },
    {
      email: 'demo3@example.com',
      dayNumber: 1,
      timeSlot: '10:00am - 11:00am',
      sessionId: 'the-lazy-way-to-keep-your-api-docs-in-sync-fri',
      title: 'The lazy way to keep your API Docs in sync',
      updatedAt: new Date().toISOString(),
    },
  ];
  writeMockVotes(seeded);
  return seeded;
}

async function fetchMockCounts(): Promise<InterestCounts> {
  await delay(150);
  return countsFromVotes(seedMockVotesIfEmpty());
}

async function submitMockInterest(payload: SubmitInterestPayload): Promise<InterestCounts> {
  await delay(250);

  const email = payload.email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Valid email required');
  }

  const votes = readMockVotes();
  const idx = votes.findIndex(
    (v) =>
      v.email === email &&
      v.dayNumber === payload.dayNumber &&
      v.timeSlot === payload.timeSlot
  );

  const next: MockVote = {
    email,
    dayNumber: payload.dayNumber,
    timeSlot: payload.timeSlot,
    sessionId: payload.sessionId,
    title: payload.title,
    updatedAt: new Date().toISOString(),
  };

  if (idx >= 0) {
    votes[idx] = next;
  } else {
    votes.push(next);
  }

  writeMockVotes(votes);
  return countsFromVotes(votes);
}

function delay(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export async function fetchInterestCounts(): Promise<InterestCounts> {
  if (isBreakoutInterestMock()) {
    return fetchMockCounts();
  }

  const base = getBreakoutInterestUrl();
  if (!base) return {};

  const url = `${base}${base.includes('?') ? '&' : '?'}action=counts`;
  const res = await fetch(url, { method: 'GET', redirect: 'follow' });
  if (!res.ok) throw new Error(`Counts request failed (${res.status})`);

  const data = (await res.json()) as ApiResponse;
  if (!data.ok) throw new Error(data.error || 'Failed to load interest counts');
  return data.counts ?? {};
}

/**
 * Apps Script web apps: send text/plain JSON to avoid CORS preflight.
 * In dev without a URL, uses a localStorage mock with the same upsert rules.
 */
export async function submitInterest(
  payload: SubmitInterestPayload
): Promise<InterestCounts> {
  if (isBreakoutInterestMock()) {
    return submitMockInterest(payload);
  }

  const base = getBreakoutInterestUrl();
  if (!base) throw new Error('Interest API is not configured');

  const res = await fetch(base, {
    method: 'POST',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`Interest submit failed (${res.status})`);

  const data = (await res.json()) as ApiResponse;
  if (!data.ok) throw new Error(data.error || 'Could not save interest');
  return data.counts ?? {};
}

/** Dev helper: wipe simulated votes from the browser. */
export function clearMockInterestVotes(): void {
  try {
    localStorage.removeItem(MOCK_VOTES_KEY);
  } catch {
    // ignore
  }
}
