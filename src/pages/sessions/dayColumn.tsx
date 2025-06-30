import { useEffect, useRef, useState } from 'react';

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
  const [_, hour, meridian] = match;
  let h = parseInt(hour, 10);
  if (meridian.toLowerCase() === 'pm' && h !== 12) h += 12;
  if (meridian.toLowerCase() === 'am' && h === 12) h = 0;
  return h;
}

function normalizeSession(session: SessionDetails): SessionDetails {
  if (session.type === 'session') {
    return { ...session, color: '#E1EF8B' };
  }
  if (session.type === 'workshop') {
    return { ...session, color: '#F0E6FF' }; 
  }
  return session;
}

export const DayColumn = ({ day }: DayColumnProps) => {
  const verticalSpanSession = day.sessions.find((s) => s.isFullSpan);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); 
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sessionsByTimeFrame = day.sessions
    .filter((s) => !s.isFullSpan)
    .reduce((acc, session) => {
      if (!acc[session.timeFrame]) acc[session.timeFrame] = [];
      acc[session.timeFrame].push(session);
      return acc;
    }, {} as Record<string, SessionDetails[]>);

  const sortedTimeFrames = Object.entries(sessionsByTimeFrame).sort(
    ([a], [b]) => parseHour(a) - parseHour(b)
  );

  const getVerticalSpanTimeFrames = () => {
    if (!verticalSpanSession) return [];
    const [startTime, endTime] = verticalSpanSession.timeSlot.split(' - ');
    const startHour = parseHour(startTime.replace(/:\d+/, '').trim());
    const endHour = parseHour(endTime.replace(/:\d+/, '').trim());

    return sortedTimeFrames
      .filter(([timeFrame]) => {
        const tfHour = parseHour(timeFrame);
        return tfHour >= startHour && tfHour <= endHour;
      })
      .map(([timeFrame]) => timeFrame);
  };

  const verticalSpanTimeFrames = getVerticalSpanTimeFrames();

  const preVerticalSpan = sortedTimeFrames.filter(
    ([tf]) => !verticalSpanTimeFrames.includes(tf)
  );
  const verticalSpanFrames = sortedTimeFrames.filter(([tf]) =>
    verticalSpanTimeFrames.includes(tf)
  );

  useEffect(() => {
    if (containerRef.current && !isMobile) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, [day.sessions, isMobile]);

  const isAsyncSlot =
    verticalSpanSession?.title?.toLowerCase().includes('async api') ?? false;

  const renderSessions = (grouped: Record<string, SessionDetails[]>) => {
    return Object.entries(grouped).map(([key, group]) => {
      const hasGridableItems = group.some(session => 
        session.type === 'session' || session.type === 'workshop'
      );

      if (!hasGridableItems || (group.length === 1 && !hasGridableItems)) {
        return (
          <div key={key}>
            {group.map((session) => (
              <SessionCard
                key={session.id}
                session={normalizeSession(session)}
              />
            ))}
          </div>
        );
      }

      const chunks: SessionDetails[][] = [];
      for (let i = 0; i < group.length; i += 3) {
        chunks.push(group.slice(i, i + 3));
      }

      return (
        <div key={key} className="flex flex-col gap-4">
          {chunks.map((chunk, idx) => {
            const cols =
              chunk.length === 1
                ? 'grid-cols-1'
                : chunk.length === 2
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

            return (
              <div key={idx} className={`grid ${cols} gap-4`}>
                {chunk.map((session) => (
                  <SessionCard
                    key={session.id}
                    session={normalizeSession(session)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      );
    });
  };

  const renderTimeFrameSection = (timeFrame: string, sessions: SessionDetails[], includeVerticalSpan: boolean = false) => {
    let allSessions = [...sessions];
    if (includeVerticalSpan && verticalSpanSession && verticalSpanSession.timeFrame === timeFrame) {
      allSessions.push(verticalSpanSession);
    }

    const grouped = allSessions.reduce((acc, session) => {
      const key = `${session.timeSlot}-${session.duration}`;
      if (!acc[key]) acc[key] = [];
      acc[key].push(session);
      return acc;
    }, {} as Record<string, SessionDetails[]>);

    return (
      <div key={timeFrame} className="flex flex-col gap-2 mb-4">
        <div className="flex gap-4 sm:gap-8 items-center">
          <h2 className="font-bold text-sm sm:text-base whitespace-nowrap">{timeFrame}</h2>
          <hr className="flex-1 border-t border-[#D9D9D9]" />
        </div>
        <div className="sm:ml-8 md:ml-16 flex flex-col gap-4">
          {renderSessions(grouped)}
        </div>
      </div>
    );
  };



  if (isMobile) {
    return (
      <div className="day-column flex flex-col gap-4">
        {sortedTimeFrames.map(([timeFrame, sessions]) => {
          const includeVerticalSpan = verticalSpanSession && verticalSpanSession.timeFrame === timeFrame;
          return renderTimeFrameSection(timeFrame, sessions, includeVerticalSpan);
        })}
      </div>
    );
  }

  return (
    <div className="day-column flex flex-col gap-4 relative">
      <div className="flex-1 flex flex-col gap-4">
        {preVerticalSpan.map(([timeFrame, sessions]) => 
          renderTimeFrameSection(timeFrame, sessions)
        )}
      </div>

      {verticalSpanSession && (
        <div className="flex gap-6">
          <div ref={containerRef} className="flex-1 flex flex-col gap-4">
            {verticalSpanFrames.map(([timeFrame, sessions]) => 
              renderTimeFrameSection(timeFrame, sessions)
            )}
          </div>

          <div className="w-80 flex-shrink-0">
            <div style={{ position: 'relative', height }}>
              <div className="sticky top-4">
                <SessionCard
                  session={normalizeSession(verticalSpanSession)}
                  hideMeta={isAsyncSlot}
                  extraTopPadding={isAsyncSlot}
                />
                <div className="mt-4 text-xs text-gray-500 text-center">
                  <p>Runs parallel to afternoon sessions</p>
                  <p className="text-xs mt-1">
                    ({verticalSpanTimeFrames.join(', ')})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};