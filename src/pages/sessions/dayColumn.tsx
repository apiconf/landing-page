import { useEffect, useRef, useState } from 'react';

import { SessionCard, type InterestButtonState } from './sessionCard';
import { SessionDetails } from './types';
import { isBreakoutSession } from './breakouts';
import { getSlotPick } from './interestApi';

interface DayColumnProps {
  day: {
    dayNumber: number;
    date: string;
    sessions: SessionDetails[];
  };
  interestEnabled?: boolean;
  /** Bump to re-read local picks after save. */
  picksVersion?: number;
  onIndicateInterest?: (session: SessionDetails) => void;
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

export const DayColumn = ({
  day,
  interestEnabled = false,
  picksVersion = 0,
  onIndicateInterest,
}: DayColumnProps) => {
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
    .reduce(
      (acc, session) => {
        if (!acc[session.timeFrame]) acc[session.timeFrame] = [];
        acc[session.timeFrame].push(session);
        return acc;
      },
      {} as Record<string, SessionDetails[]>
    );

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

  const renderCard = (session: SessionDetails, hideMeta = false, extraTopPadding = false) => {
    const breakout = interestEnabled && isBreakoutSession(session, day.sessions);
    const slotPick = breakout ? getSlotPick(day.dayNumber, session.timeSlot) : undefined;
    // picksVersion forces re-render after localStorage pick changes
    void picksVersion;

    let interestState: InterestButtonState = 'available';
    if (slotPick) {
      interestState = slotPick === session.id ? 'selected' : 'locked';
    }

    return (
      <SessionCard
        key={session.id}
        session={normalizeSession(session)}
        hideMeta={hideMeta}
        extraTopPadding={extraTopPadding}
        showInterest={breakout}
        interestCount={undefined}
        interestState={interestState}
        dayNumber={day.dayNumber}
        onIndicateInterest={
          breakout && interestState === 'available' && onIndicateInterest
            ? () => onIndicateInterest(session)
            : undefined
        }
      />
    );
  };

  const renderSessions = (grouped: Record<string, SessionDetails[]>) => {
    return Object.entries(grouped).map(([key, group]) => {
      const hasGridableItems = group.some(
        (session) =>
          session.type === 'session' ||
          session.type === 'workshop' ||
          session.type === 'Lightning'
      );

      if (!hasGridableItems || (group.length === 1 && !hasGridableItems)) {
        return <div key={key}>{group.map((session) => renderCard(session))}</div>;
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
              <div key={idx} className={`grid ${cols} items-stretch gap-4`}>
                {chunk.map((session) => renderCard(session))}
              </div>
            );
          })}
        </div>
      );
    });
  };

  const renderTimeFrameSection = (
    timeFrame: string,
    sessions: SessionDetails[],
    includeVerticalSpan: boolean = false
  ) => {
    let allSessions = [...sessions];
    if (
      includeVerticalSpan &&
      verticalSpanSession &&
      verticalSpanSession.timeFrame === timeFrame
    ) {
      allSessions.push(verticalSpanSession);
    }

    const grouped = allSessions.reduce(
      (acc, session) => {
        const key = `${session.timeSlot}-${session.duration}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(session);
        return acc;
      },
      {} as Record<string, SessionDetails[]>
    );

    return (
      <div key={timeFrame} className="mb-4 flex flex-col gap-2">
        <div className="flex items-center gap-4 sm:gap-8">
          <h2 className="whitespace-nowrap text-sm font-bold sm:text-base">{timeFrame}</h2>
          <hr className="flex-1 border-t border-[#D9D9D9]" />
        </div>
        <div className="flex flex-col gap-4 sm:ml-8 md:ml-16">{renderSessions(grouped)}</div>
      </div>
    );
  };

  if (isMobile) {
    return (
      <div className="day-column flex flex-col gap-4">
        {sortedTimeFrames.map(([timeFrame, sessions]) => {
          const includeVerticalSpan =
            verticalSpanSession && verticalSpanSession.timeFrame === timeFrame;
          return renderTimeFrameSection(timeFrame, sessions, includeVerticalSpan);
        })}
      </div>
    );
  }

  return (
    <div className="day-column relative flex flex-col gap-4">
      <div className="flex flex-1 flex-col gap-4">
        {preVerticalSpan.map(([timeFrame, sessions]) =>
          renderTimeFrameSection(timeFrame, sessions)
        )}
      </div>

      {verticalSpanSession && (
        <div className="flex gap-6">
          <div ref={containerRef} className="flex flex-1 flex-col gap-4">
            {verticalSpanFrames.map(([timeFrame, sessions]) =>
              renderTimeFrameSection(timeFrame, sessions)
            )}
          </div>

          <div className="w-80 flex-shrink-0">
            <div style={{ position: 'relative', height }}>
              <div className="sticky top-4">
                {renderCard(verticalSpanSession, false, isAsyncSlot)}
                <div className="mt-4 text-center text-xs text-gray-500">
                  <p>Runs parallel to afternoon sessions</p>
                  <p className="mt-1 text-xs">({verticalSpanTimeFrames.join(', ')})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
