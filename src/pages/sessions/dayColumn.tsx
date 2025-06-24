import { SessionCard } from './sessionCard';
import { SessionDetails } from './types';

interface DayColumnProps {
  day: {
    dayNumber: number;
    date: string;
    sessions: SessionDetails[];
  };
}

function parseHour(tf: string): number {
  const match = tf.match(/(\d+)(am|pm)/i);
  if (!match) return 0;
  let [_, hour, meridian] = match;
  let h = parseInt(hour, 10);
  if (meridian.toLowerCase() === 'pm' && h !== 12) h += 12;
  if (meridian.toLowerCase() === 'am' && h === 12) h = 0;
  return h;
}

function normalizeSession(session: SessionDetails): SessionDetails {
  if (session.type === 'session') {
    return { ...session, color: '#E1EF9A' };
  }
  return session;
}

export const DayColumn = ({ day }: DayColumnProps) => {
  const sessionsByTimeFrame = day.sessions.reduce((acc, session) => {
    if (!acc[session.timeFrame]) acc[session.timeFrame] = [];
    acc[session.timeFrame].push(session);
    return acc;
  }, {} as Record<string, SessionDetails[]>);

  const sortedTimeFrames = Object.entries(sessionsByTimeFrame).sort(
    ([a], [b]) => parseHour(a) - parseHour(b)
  );

  return (
    <div className="day-column flex flex-col gap-4">
      {sortedTimeFrames.map(([timeFrame, sessions]) => {
        const fullSpanSessions = sessions.filter(s => s.isFullSpan);
        const grouped = sessions
          .filter(s => !s.isFullSpan)
          .reduce((acc, session) => {
            const key = `${session.timeSlot}-${session.duration}`;
            if (!acc[key]) acc[key] = [];
            acc[key].push(session);
            return acc;
          }, {} as Record<string, SessionDetails[]>);

        return (
          <div key={timeFrame} className="flex flex-col gap-2 mb-4">
            <div className="flex gap-8 items-center">
              <h2 className="font-bold text-base">{timeFrame}</h2>
              <hr className="flex-1 border-t border-[#D9D9D9]" />
            </div>

            <div className="md:ml-16 flex flex-col gap-4">
              {fullSpanSessions.map(session => (
                <div key={session.id} className="w-full">
                  <SessionCard session={normalizeSession(session)} />
                </div>
              ))}

              {Object.entries(grouped).map(([key, group]) => {
                const isConcurrent = group.length > 1;

                return isConcurrent ? (
                  <div
                    key={key}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {group.map(session => (
                      <SessionCard
                        key={session.id}
                        session={normalizeSession(session)}
                      />
                    ))}
                  </div>
                ) : (
                  <div key={key}>
                    {group.map(session => (
                      <SessionCard
                        key={session.id}
                        session={normalizeSession(session)}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
