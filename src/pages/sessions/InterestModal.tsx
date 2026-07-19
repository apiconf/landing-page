import { useEffect, useId, useState, type FormEvent } from 'react';
import type { SessionDetails } from './types';
import {
  getStoredInterestEmail,
  storeInterestEmail,
  submitInterest,
  type InterestCounts,
} from './interestApi';
import { buildGoogleCalendarUrl } from './googleCalendar';

type InterestModalProps = {
  open: boolean;
  dayNumber: number;
  timeSlot: string;
  options: SessionDetails[];
  initialSessionId: string;
  onClose: () => void;
  onSaved: (counts: InterestCounts) => void;
};

export function InterestModal({
  open,
  dayNumber,
  timeSlot,
  options,
  initialSessionId,
  onClose,
  onSaved,
}: InterestModalProps) {
  const titleId = useId();
  const [sessionId, setSessionId] = useState(initialSessionId);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSessionId(initialSessionId);
    setEmail(getStoredInterestEmail());
    setSubmitting(false);
    setError(null);
    setDone(false);
  }, [open, initialSessionId]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const selected = options.find((o) => o.id === sessionId);
  const gcalUrl = selected ? buildGoogleCalendarUrl(selected, dayNumber) : null;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selected) return;

    setSubmitting(true);
    setError(null);
    try {
      const counts = await submitInterest({
        email,
        dayNumber,
        timeSlot,
        sessionId: selected.id,
        title: selected.title,
      });
      storeInterestEmail(email);
      onSaved(counts);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 text-[#1F1F1F] shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="space-y-4">
            <h2 id={titleId} className="text-2xl font-bold text-dark-purple">
              You&apos;re locked in
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              You&apos;re set for <span className="font-bold">{selected?.title}</span>.
            </p>
            <div className="flex items-center justify-between gap-3">
              {gcalUrl ? (
                <a
                  href={gcalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Add to Google Calendar"
                  title="Add to Google Calendar"
                  className="inline-flex shrink-0 transition hover:opacity-80"
                >
                  <img
                    src="/google-calendar.svg"
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9"
                  />
                </a>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={onClose}
                className="rounded-full bg-dark-purple px-5 py-3 text-base font-bold text-white"
              >
                Back to schedule
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-dark-purple">
                {timeSlot}
              </p>
              <h2 id={titleId} className="text-2xl font-bold">
                Which breakout are you attending?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Pick one talk in this slot so we can put the right halls where they&apos;re needed.
              </p>
            </div>

            <fieldset className="space-y-3">
              <legend className="sr-only">Sessions</legend>
              {options.map((option) => (
                <label
                  key={option.id}
                  className={`flex cursor-pointer gap-3 rounded-xl border-2 p-3 transition ${
                    sessionId === option.id
                      ? 'border-dark-purple bg-[#F3F0FF]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="breakout-session"
                    value={option.id}
                    checked={sessionId === option.id}
                    onChange={() => setSessionId(option.id)}
                    className="mt-1"
                  />
                  <span className="min-w-0">
                    <span className="block font-bold leading-snug">{option.title}</span>
                    <span className="mt-1 block text-sm text-gray-600">
                      {option.room}
                      {option.speaker ? ` · ${option.speaker}` : ''}
                    </span>
                  </span>
                </label>
              ))}
            </fieldset>

            <div>
              <label htmlFor="breakout-email" className="mb-1 block text-sm font-bold">
                Email
              </label>
              <input
                id="breakout-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-base outline-none ring-dark-purple focus:ring-2"
              />
            </div>

            {error ? <p className="text-sm font-bold text-red-600">{error}</p> : null}

            <div className="flex flex-col gap-2 sm:flex-row-reverse">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-full bg-dark-purple px-5 py-3 text-base font-bold text-white disabled:opacity-60"
              >
                {submitting ? 'Saving…' : 'Lock it in'}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 rounded-full bg-gray-100 px-5 py-3 text-base font-bold text-[#1F1F1F]"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
