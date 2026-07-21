import type { SessionDetails } from './types';

const PLENARY_ROOM_MARKERS = ['main stage', 'all halls'];

export function isBreakoutRoom(room: string): boolean {
  const normalized = room.toLowerCase();
  return !PLENARY_ROOM_MARKERS.some((marker) => normalized.includes(marker));
}

/** Sessions in the same day that share this timeSlot and are in breakout halls. */
export function getSlotPeers(
  session: SessionDetails,
  daySessions: SessionDetails[]
): SessionDetails[] {
  if (!isBreakoutRoom(session.room)) return [];
  return daySessions.filter(
    (s) => s.timeSlot === session.timeSlot && isBreakoutRoom(s.room)
  );
}

export function isBreakoutSession(
  session: SessionDetails,
  daySessions: SessionDetails[]
): boolean {
  return getSlotPeers(session, daySessions).length >= 2;
}

export type BreakoutSlot = {
  timeSlot: string;
  sessions: SessionDetails[];
};

export function getBreakoutSlots(daySessions: SessionDetails[]): BreakoutSlot[] {
  const bySlot = new Map<string, SessionDetails[]>();

  for (const session of daySessions) {
    if (!isBreakoutRoom(session.room)) continue;
    const list = bySlot.get(session.timeSlot) ?? [];
    list.push(session);
    bySlot.set(session.timeSlot, list);
  }

  return [...bySlot.entries()]
    .filter(([, sessions]) => sessions.length >= 2)
    .map(([timeSlot, sessions]) => ({ timeSlot, sessions }));
}
