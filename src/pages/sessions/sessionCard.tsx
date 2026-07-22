import { useState } from 'react';
import { speakers } from '../speakers/speaker';
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
  const [showSessionDetails, setShowSessionDetails] = useState(false);
  const [activePanelSpeaker, setActivePanelSpeaker] = useState<string | null>(null);
  const speakerProfile = session.speaker
    ? speakers.find(
        (speaker) => speaker.name.toLowerCase() === session.speaker?.toLowerCase()
      )
    : undefined;
  const locked = interestState === 'locked';
  const selected = interestState === 'selected';
  const gcalUrl =
    selected && dayNumber
      ? buildGoogleCalendarUrl(session, dayNumber)
      : null;

  return (
    <div
      data-session-id={session.id}
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

      {session.speaker ? (
        <>
          {showSessionDetails ? (
            <div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
              role="dialog"
              aria-modal="true"
              aria-label={`${session.title} session details`}
              onClick={() => setShowSessionDetails(false)}
            >
              <div
                className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 text-[#1F1F1F] shadow-2xl sm:p-8"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#2F20BF]">
                      {session.type}
                    </p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                      {session.title}
                    </h2>
                    <p className="mt-3 text-sm text-gray-600">
                      {session.timeSlot} · {session.duration} · {session.room}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowSessionDetails(false)}
                    aria-label="Close session details"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl font-bold transition hover:bg-gray-200"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-7 rounded-2xl bg-[#F3F0FF] p-5 sm:p-6">
                  <p className="whitespace-pre-line leading-relaxed text-gray-700">
                    {session.abstract ??
                      `Join ${session.speaker} for a focused session exploring “${session.title}” and its practical relevance for today’s API ecosystem.`}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-5 rounded-2xl bg-[#2F20BF] p-5 text-white sm:flex-row sm:items-center sm:p-6">
                  {speakerProfile?.image ? (
                    <img
                      src={speakerProfile.image}
                      alt={session.speaker}
                      className="h-28 w-28 shrink-0 rounded-full object-cover ring-4 ring-white/20"
                    />
                  ) : (
                    <span className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-[#E1EF9A] text-3xl font-bold text-[#251377] ring-4 ring-white/20">
                      {session.speaker
                        .split(' ')
                        .slice(0, 2)
                        .map((part) => part[0])
                        .join('')}
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-bold">{session.speaker}</h3>
                    {speakerProfile ? (
                      <>
                        <p className="mt-1 text-sm text-white/75">
                          {[speakerProfile.jobTitle, speakerProfile.employer]
                            .filter(Boolean)
                            .join(' · ')}
                        </p>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      ) : null}

      {session.panelSpeakers?.length ? (
        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold text-gray-700 md:text-base">
            {session.panelSpeakers.map((speaker) => speaker.name).join(' • ')}
          </p>
          <button
            type="button"
            onClick={() => setShowPanelDetails(true)}
            className="w-fit rounded-full border border-[#2F20BF] px-3 py-1.5 text-xs font-bold text-[#2F20BF] transition hover:bg-white/60 md:text-sm"
          >
            View panel details
          </button>
          {showPanelDetails ? (
            <div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
              role="dialog"
              aria-modal="true"
              aria-label="Panel session speakers"
              onClick={() => setShowPanelDetails(false)}
            >
              <div
                className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-[#2F20BF]">
                      Panel session
                    </p>
                    <h2 className="mt-1 text-2xl font-bold text-[#1F1F1F] sm:text-3xl">
                      Meet the panel
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                      {session.timeSlot} · {session.room}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPanelDetails(false)}
                    aria-label="Close panel details"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl font-bold text-[#1F1F1F] transition hover:bg-gray-200"
                  >
                    ×
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {session.panelSpeakers.map((speaker) => {
                    const initials = speaker.name
                      .split(' ')
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('');
                    const isActive = activePanelSpeaker === speaker.name;

                    return (
                      <button
                        key={speaker.name}
                        type="button"
                        onClick={() =>
                          speaker.bio &&
                          setActivePanelSpeaker((current) =>
                            current === speaker.name ? null : speaker.name
                          )
                        }
                        aria-expanded={speaker.bio ? isActive : undefined}
                        className={`relative min-h-[25rem] overflow-hidden rounded-2xl bg-[#2F20BF] text-left text-white shadow-md ${
                          speaker.bio ? 'cursor-pointer' : 'cursor-default'
                        }`}
                      >
                        <div className="flex h-full min-h-[25rem] flex-col">
                          <div className="flex min-h-56 flex-1 items-center justify-center overflow-hidden bg-[#251377] p-8">
                            {speaker.image ? (
                              <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="h-40 w-40 rounded-full object-cover ring-4 ring-white/20"
                              />
                            ) : (
                              <span className="flex h-40 w-40 items-center justify-center rounded-full bg-[#E1EF9A] text-5xl font-bold text-[#251377] ring-4 ring-white/20">
                                {initials}
                              </span>
                            )}
                          </div>
                          <div className="min-h-36 p-5">
                            <p className="text-xl font-bold leading-tight">{speaker.name}</p>
                            <p className="mt-2 text-sm leading-snug text-white/75">{speaker.role}</p>
                            {speaker.bio ? (
                              <p className="mt-4 text-sm font-bold text-[#E1EF9A]">
                                {isActive ? 'Hide profile' : 'View profile'}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        {speaker.bio && isActive ? (
                          <div className="absolute inset-0 overflow-y-auto bg-[#E1EF9A] p-6 text-[#1F1F1F]">
                            <p className="text-xl font-bold">{speaker.name}</p>
                            <p className="mt-2 text-sm font-semibold text-gray-700">{speaker.role}</p>
                            <p className="mt-6 text-sm leading-relaxed">{speaker.bio}</p>
                            <p className="mt-6 text-sm font-bold text-[#2F20BF]">Back to profile</p>
                          </div>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {session.speaker || (showInterest && !locked) ? (
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-3">
          {session.speaker ? (
            <button
              type="button"
              onClick={() => setShowSessionDetails(true)}
              className="rounded-full border border-[#2F20BF] px-3 py-1.5 text-[.625rem] font-bold text-[#2F20BF] transition hover:bg-white/60 md:text-sm"
            >
              View session details
            </button>
          ) : null}

          {showInterest && !locked ? (
            selected ? (
              <div className="flex flex-wrap items-center gap-2">
                {gcalUrl ? (
                  <a
                    href={gcalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Add to Google Calendar"
                    title="Add to Google Calendar"
                    className="inline-flex shrink-0 items-center gap-2 text-[.625rem] font-bold text-[#2F20BF] transition hover:opacity-80 md:text-sm"
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
                ) : null}
                <span className="rounded-[3.25rem] bg-[#1F1F1F] px-3 py-1.5 text-[.625rem] font-bold text-white md:px-4 md:text-sm">
                  Locked in
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={onIndicateInterest}
                disabled={!onIndicateInterest}
                className="rounded-[3.25rem] bg-dark-purple px-3 py-1.5 text-[.625rem] font-bold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 md:px-4 md:text-sm"
              >
                I&apos;ll be there
              </button>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
