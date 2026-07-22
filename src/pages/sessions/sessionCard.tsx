import { useState } from 'react';
import { SessionDetails } from './types';
import { buildGoogleCalendarUrl } from './googleCalendar';

export type InterestButtonState = 'available' | 'selected' | 'locked';

export const SessionCard = ({
  session,
  hideMeta = false,
  extraTopPadding = false,
  showInterest,
  interestState = 'available',
  dayNumber,
  onIndicateInterest,
}: {
  session: SessionDetails;
  hideMeta?: boolean;
  extraTopPadding?: boolean;
  /** @deprecated Counts are organizer-only (Sheet); kept optional for call-site compatibility. */
  interestCount?: number;
  showInterest?: boolean;
  interestState?: InterestButtonState;
  dayNumber?: number;
  onIndicateInterest?: () => void;
}) => {
  const [showPanelDetails, setShowPanelDetails] = useState(false);
  const locked = interestState === 'locked';
  const selected = interestState === 'selected';
  const gcalUrl =
    selected && dayNumber
      ? buildGoogleCalendarUrl(session, dayNumber)
      : null;

  return (
    <div
      className={`flex h-full flex-col gap-3 rounded-[.75rem] px-4 py-6 ${extraTopPadding ? 'mt-8' : ''}`}
      style={{ backgroundColor: session.color }}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <div className="rounded-[3.25rem] bg-white px-2 py-1">
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

      {session.panelSpeakers?.length ? (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold text-gray-700 md:text-base">
            {session.panelSpeakers.map((speaker) => speaker.name).join(' • ')}
          </p>
          <button
            type="button"
            onClick={() => setShowPanelDetails((visible) => !visible)}
            aria-expanded={showPanelDetails}
            className="w-fit rounded-full border border-[#2F20BF] px-3 py-1.5 text-xs font-bold text-[#2F20BF] transition hover:bg-white/60 md:text-sm"
          >
            {showPanelDetails ? 'Hide panel details' : 'View panel details'}
          </button>
          {showPanelDetails ? (
            <div className="flex flex-col gap-4 border-t border-black/10 pt-3">
              {session.panelSpeakers.map((speaker) => (
                <div key={speaker.name}>
                  <p className="text-sm font-bold md:text-base">{speaker.name}</p>
                  <p className="text-xs font-semibold text-gray-700 md:text-sm">{speaker.role}</p>
                  {speaker.bio ? (
                    <p className="mt-2 text-xs leading-relaxed text-gray-700 md:text-sm">
                      {speaker.bio}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {showInterest && !locked ? (
        <div
          className={`mt-auto flex items-center pt-3 ${
            selected ? 'justify-between' : 'justify-end'
          }`}
        >
          {selected ? (
            <>
              {gcalUrl ? (
                <a
                  href={gcalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Add to Google Calendar"
                  title="Add to Google Calendar"
                  className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-[#2F20BF] transition hover:opacity-80 md:text-sm"
                >
                  <img
                    src="/google-calendar.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="h-7 w-7 md:h-8 md:w-8"
                  />
                  <span>Add to Calendar</span>
                </a>
              ) : (
                <span />
              )}
              <span className="rounded-[3.25rem] bg-[#1F1F1F] px-3 py-1.5 text-[.625rem] font-bold text-white md:px-4 md:text-sm">
                Locked in
              </span>
            </>
          ) : (
            <button
              type="button"
              onClick={onIndicateInterest}
              disabled={!onIndicateInterest}
              className="rounded-[3.25rem] bg-dark-purple px-3 py-1.5 text-[.625rem] font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 md:px-4 md:text-sm"
            >
              I&apos;ll be there
            </button>
          )}
        </div>
      ) : null}
    </div>
  );
};
