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

const EMAIL_STORAGE_KEY = 'apiconf_breakout_email';

export function getBreakoutInterestUrl(): string | undefined {
  const url = import.meta.env.VITE_BREAKOUT_INTEREST_URL;
  return typeof url === 'string' && url.trim() ? url.trim() : undefined;
}

export function isBreakoutInterestEnabled(): boolean {
  return Boolean(getBreakoutInterestUrl());
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

export async function fetchInterestCounts(): Promise<InterestCounts> {
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
 */
export async function submitInterest(
  payload: SubmitInterestPayload
): Promise<InterestCounts> {
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
