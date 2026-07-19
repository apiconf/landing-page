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
/** Dev-only simulated Sheet rows. Never used when VITE_BREAKOUT_INTEREST_URL is set. */
const MOCK_VOTES_KEY = 'apiconf_breakout_votes_mock';
/**
 * UX-only cache of this browser's choices: { "1|10:00am - 11:00am": "session-id" }.
 * Not a security control — anyone can edit DevTools. Real uniqueness is enforced in Apps Script.
 */
const PICKS_STORAGE_KEY = 'apiconf_breakout_picks';

function readStorage(storage: Storage, key: string): string | null {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(storage: Storage, key: string, value: string): void {
  try {
    storage.setItem(key, value);
  } catch {
    // ignore quota / private mode
  }
}

function removeStorage(storage: Storage, key: string): void {
  try {
    storage.removeItem(key);
  } catch {
    // ignore
  }
}

export type SlotPicks = Record<string, string>;

export function slotPickKey(dayNumber: number, timeSlot: string): string {
  return `${dayNumber}|${timeSlot}`;
}

export function getSlotPicks(): SlotPicks {
  const raw = readStorage(localStorage, PICKS_STORAGE_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as SlotPicks;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function getSlotPick(dayNumber: number, timeSlot: string): string | undefined {
  return getSlotPicks()[slotPickKey(dayNumber, timeSlot)];
}

export function storeSlotPick(
  dayNumber: number,
  timeSlot: string,
  sessionId: string
): void {
  const next = { ...getSlotPicks(), [slotPickKey(dayNumber, timeSlot)]: sessionId };
  writeStorage(localStorage, PICKS_STORAGE_KEY, JSON.stringify(next));
}

export function clearSlotPicks(): void {
  removeStorage(localStorage, PICKS_STORAGE_KEY);
}

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

/** Prefill only for this tab — avoids long-lived email in localStorage. */
export function getStoredInterestEmail(): string {
  return readStorage(sessionStorage, EMAIL_STORAGE_KEY) ?? '';
}

export function storeInterestEmail(email: string): void {
  writeStorage(sessionStorage, EMAIL_STORAGE_KEY, email.trim().toLowerCase());
  // Drop any older long-lived copy from earlier builds
  removeStorage(localStorage, EMAIL_STORAGE_KEY);
}

function readMockVotes(): MockVote[] {
  if (!isBreakoutInterestMock()) return [];
  const raw = readStorage(localStorage, MOCK_VOTES_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as MockVote[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeMockVotes(votes: MockVote[]): void {
  if (!isBreakoutInterestMock()) return;
  writeStorage(localStorage, MOCK_VOTES_KEY, JSON.stringify(votes));
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

  const url = `${base}${base.includes('?') ? '&' : '?'}action=counts&op=counts`;
  const res = await fetch(url, { method: 'GET', redirect: 'follow' });
  if (!res.ok) throw new Error(`Counts request failed (${res.status})`);

  const data = (await res.json()) as ApiResponse;
  if (!data.ok) throw new Error(data.error || 'Failed to load interest counts');
  return data.counts ?? {};
}

/**
 * Live path uses GET so Interest.gs can share an Apps Script project with AdeBomi
 * (which owns doPost). Sends both `action` and `op` for older/newer script versions.
 * Requires `saved: true` so a counts fallback can never look like a successful vote.
 */
export async function submitInterest(
  payload: SubmitInterestPayload
): Promise<InterestCounts> {
  let counts: InterestCounts;

  if (isBreakoutInterestMock()) {
    counts = await submitMockInterest(payload);
  } else {
    const base = getBreakoutInterestUrl();
    if (!base) throw new Error('Interest API is not configured');

    const params = new URLSearchParams({
      action: 'submit',
      op: 'submit',
      email: payload.email.trim().toLowerCase(),
      dayNumber: String(payload.dayNumber),
      timeSlot: payload.timeSlot,
      sessionId: payload.sessionId,
      title: payload.title,
    });
    const joiner = base.includes('?') ? '&' : '?';
    const res = await fetch(`${base}${joiner}${params.toString()}`, {
      method: 'GET',
      redirect: 'follow',
    });

    if (!res.ok) throw new Error(`Interest submit failed (${res.status})`);

    const data = (await res.json()) as ApiResponse & { saved?: boolean };
    if (!data.ok) throw new Error(data.error || 'Could not save interest');
    // Live Interest.gs returns saved:true. Older deploys that ignore submit and
    // return counts-only would otherwise lock the UI without writing the Sheet.
    if (data.saved !== true) {
      throw new Error(
        'Interest API did not confirm save. Paste latest Interest.gs and redeploy a New version.'
      );
    }
    counts = data.counts ?? {};
  }

  storeSlotPick(payload.dayNumber, payload.timeSlot, payload.sessionId);
  return counts;
}

/** Dev helper: wipe simulated votes from the browser. */
export function clearMockInterestVotes(): void {
  removeStorage(localStorage, MOCK_VOTES_KEY);
  clearSlotPicks();
  removeStorage(sessionStorage, EMAIL_STORAGE_KEY);
  removeStorage(localStorage, EMAIL_STORAGE_KEY);
}
