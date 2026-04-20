import { SessionDetails } from "./types";

export const SessionCard = ({
  session,
  hideMeta = false,
  extraTopPadding = false,
}: {
  session: SessionDetails;
  hideMeta?: boolean;
  extraTopPadding?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-[9px] rounded-[.75rem] py-6 px-4 ${extraTopPadding ? 'mt-8' : ''}`}
      style={{ backgroundColor: session.color }}
    >
      {/* Top metadata row */}
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-3 bg-white rounded-[3.25rem] py-1 px-2">
          <p className="text-[#6E6E6E] text-[.625rem] whitespace-nowrap uppercase md:text-sm">
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

      <p className="font-bold text-sm md:text-base">{session.title}</p>

      {(session.speaker || session.host || session.panelist) && (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-1 lg:gap-0">
          {session.speaker && (
            <p className="font-bold text-sm md:text-base text-gray-700">
              {session.speaker}
            </p>
          )}
          {session.host && (
            <p className="font-bold text-[.625rem] md:text-base text-gray-700">
              Moderator: {session.host}
            </p>
          )}
          {session.panelist && (
            <p className="font-bold text-[.65rem] md:text-base text-gray-700">
              Panelist: {session.panelist}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
