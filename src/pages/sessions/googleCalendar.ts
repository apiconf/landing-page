import type { SessionDetails } from './types';

/** API Conf Lagos 2026 dates (WAT). */
const EVENT_DATES: Record<number, string> = {
  1: '20260724',
  2: '20260725',
};

/**
 * Build a Google Calendar "create event" TEMPLATE URL.
 * @see https://calendar.google.com/calendar/render?action=TEMPLATE&...
 */
export function buildGoogleCalendarUrl(
  session: SessionDetails,
  dayNumber: number
): string | null {
  const day = EVENT_DATES[dayNumber];
  if (!day) return null;

  const range = parseTimeSlot(session.timeSlot);
  if (!range) return null;

  const dates = `${day}T${range.start}/${day}T${range.end}`;
  const location = [session.room, 'API Conf Lagos 2026'].filter(Boolean).join(' · ');
  const details = [
    session.speaker ? `Speaker: ${session.speaker}` : null,
    session.host ? `Moderator: ${session.host}` : null,
    `Room: ${session.room}`,
    `Time: ${session.timeSlot}`,
    '',
    'API Conf Lagos 2026',
  ]
    .filter((line) => line !== null)
    .join('\n');

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: session.title,
    dates,
    ctz: 'Africa/Lagos',
    details,
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function parseTimeSlot(
  timeSlot: string
): { start: string; end: string } | null {
  const parts = timeSlot.split(/\s*-\s*/);
  if (parts.length !== 2) return null;

  const start = toCompactTime(parts[0]);
  const end = toCompactTime(parts[1]);
  if (!start || !end) return null;

  return { start, end };
}

/** "10:00am" / "12:05pm" → "100000" / "120500" (HHMMSS, local floating with ctz). */
function toCompactTime(raw: string): string | null {
  const match = raw
    .trim()
    .toLowerCase()
    .match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/);
  if (!match) return null;

  let hour = Number(match[1]);
  const minute = Number(match[2] ?? '0');
  const meridian = match[3];

  if (hour < 1 || hour > 12 || minute > 59) return null;

  if (meridian === 'pm' && hour !== 12) hour += 12;
  if (meridian === 'am' && hour === 12) hour = 0;

  return `${String(hour).padStart(2, '0')}${String(minute).padStart(2, '0')}00`;
}
