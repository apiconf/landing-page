import { DayColumn } from './dayColumn';
import { InterestModal } from './InterestModal';
import { ScheduleData, SessionDetails } from './types';
import { useState } from 'react';
import { getSlotPeers } from './breakouts';
import { clearMockInterestVotes, isBreakoutInterestMock } from './interestApi';
import { useBreakoutInterest } from './useBreakoutInterest';

interface ScheduleProps {
  data: ScheduleData;
}

export const Schedule = ({ data }: ScheduleProps) => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const activeDayData = data.days.find((day) => day.dayNumber === activeDay);
  const { enabled, counts, mergeCounts, refresh } = useBreakoutInterest();
  const mockMode = isBreakoutInterestMock();

  const [modalOpen, setModalOpen] = useState(false);
  const [focusSession, setFocusSession] = useState<SessionDetails | null>(null);

  const slotOptions =
    activeDayData && focusSession
      ? getSlotPeers(focusSession, activeDayData.sessions)
      : [];

  const getRoundedClass = (dayNumber: number, isActive: boolean) => {
    const isOddDay = dayNumber % 2 === 1;

    if (isOddDay) {
      return isActive
        ? 'rounded-l-[3.35rem]  md:rounded-[3.35rem]'
        : 'rounded-l-[3.35rem] md:rounded-[3.35rem]';
    }
    return isActive
      ? 'rounded-r-[3.35rem] md:rounded-[3.35rem]'
      : 'rounded-r-[3.35rem] md:rounded-[3.35rem]';
  };

  return (
    <div
      className="bg-[#FFFFFF] bg-contain bg-no-repeat p-8 shadow-sm"
      style={{
        backgroundImage: `url(/session/session-bg.svg), url(/session/Schedule.svg)`,
        backgroundPosition: 'top, right',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundSize: 'contain, contain',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:p-4">
          <h1 className="whitespace-nowrap text-center text-3xl font-bold text-[#1F1F1F] md:text-left md:text-5xl">
            {data.title}
          </h1>
          {enabled ? (
            <div className="max-w-2xl space-y-2 text-center md:text-left">
              <p className="text-sm text-gray-600 md:text-base">
                Breakouts show live interest. Tap{' '}
                <span className="font-bold">I&apos;m going</span> on a talk so we can put popular
                sessions in the right halls.
              </p>
              {mockMode ? (
                <p className="rounded-xl bg-[#FFF6D8] px-3 py-2 text-sm font-bold text-[#5C4B00]">
                  Dev mock mode: votes stay in this browser (localStorage), not Google Sheets.{' '}
                  <button
                    type="button"
                    className="underline"
                    onClick={() => {
                      clearMockInterestVotes();
                      void refresh();
                    }}
                  >
                    Reset mock votes
                  </button>
                </p>
              ) : null}
            </div>
          ) : null}
          <div className="flex justify-center md:justify-start md:gap-2">
            {data.days.map((day) => {
              const isActive = activeDay === day.dayNumber;
              const roundedClass = getRoundedClass(day.dayNumber, isActive);

              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setActiveDay(day.dayNumber)}
                  className={`
                                        whitespace-nowrap border-2 px-6 py-3 text-sm font-bold transition-all duration-200 md:text-xl
                                        ${
                                          isActive
                                            ? `bg-dark-purple text-white ${roundedClass}`
                                            : `border-none bg-[#F5F5F5] text-[#000000] ${roundedClass}`
                                        }
                                    `}
                >
                  Day {day.dayNumber} - {day.date}
                </button>
              );
            })}
          </div>
        </div>
        {activeDayData && (
          <div className="mt-4">
            <DayColumn
              day={activeDayData}
              interestEnabled={enabled}
              interestCounts={counts}
              onIndicateInterest={(session) => {
                setFocusSession(session);
                setModalOpen(true);
              }}
            />
          </div>
        )}
      </div>

      {enabled && focusSession && activeDayData ? (
        <InterestModal
          open={modalOpen}
          dayNumber={activeDayData.dayNumber}
          timeSlot={focusSession.timeSlot}
          options={slotOptions}
          initialSessionId={focusSession.id}
          onClose={() => {
            setModalOpen(false);
            setFocusSession(null);
          }}
          onSaved={(next) => mergeCounts(next)}
        />
      ) : null}
    </div>
  );
};
