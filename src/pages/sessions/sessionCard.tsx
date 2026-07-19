import { SessionDetails } from './types';

export const SessionCard = ({
  session,
  hideMeta = false,
  extraTopPadding = false,
  interestCount,
  showInterest,
  onIndicateInterest,
}: {
  session: SessionDetails;
  hideMeta?: boolean;
  extraTopPadding?: boolean;
  interestCount?: number;
  showInterest?: boolean;
  onIndicateInterest?: () => void;
}) => {
  return (
    <div
      className={`flex flex-col gap-[9px] rounded-[.75rem] py-6 px-4 ${extraTopPadding ? 'mt-8' : ''}`}
      style={{ backgroundColor: session.color }}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3 rounded-[3.25rem] bg-white px-2 py-1">
          <p className="whitespace-nowrap text-[.625rem] uppercase text-[#6E6E6E] md:text-sm">
            {session.type}
          </p>
        </div>

        {!hideMeta && (
          <div className="flex items-center whitespace-nowrap text-[.625rem] lg:text-[.725rem]">
            <span className="font-bold">{session.timeSlot}</span>
            <span className="mx-1">•</span>
            <span className="font-bold">{session.duration}</span>
            <span className="mx-1">•</span>
            <span className="font-bold">{session.room}</span>
          </div>
        )}
      </div>

      <p className="text-sm font-bold md:text-base">{session.title}</p>

      {(session.speaker || session.host || session.panelist) && (
        <div className="flex flex-col gap-1 lg:flex-row lg:justify-between lg:gap-0">
          {session.speaker && (
            <p className="text-sm font-bold text-gray-700 md:text-base">{session.speaker}</p>
          )}
          {session.host && (
            <p className="text-[.625rem] font-bold text-gray-700 md:text-base">
              Moderator: {session.host}
            </p>
          )}
          {session.panelist && (
            <p className="text-[.65rem] font-bold text-gray-700 md:text-base">
              Panelist: {session.panelist}
            </p>
          )}
        </div>
      )}

      {showInterest ? (
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2 border-t border-black/10 pt-3">
          <p className="text-xs font-bold text-gray-800 md:text-sm">
            {typeof interestCount === 'number' && interestCount > 0
              ? `${interestCount} interested`
              : 'No interest yet'}
          </p>
          {onIndicateInterest ? (
            <button
              type="button"
              onClick={onIndicateInterest}
              className="rounded-full bg-[#1F1F1F] px-3 py-1.5 text-xs font-bold text-white transition hover:bg-black md:text-sm"
            >
              I&apos;m going
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
