import { HASHTAGS, LINKS } from './constants';
import { Section } from './Section';

export function EntryRequirements() {
  return (
    <Section id="requirements" title="Entry requirements" tone="deep" lead="To qualify, you must:">
      <ol className="mb-10 list-decimal space-y-4 pl-5 text-lg leading-relaxed text-white/90 marker:font-bold marker:text-[#E1EF9A]">
        <li className="pl-2">
          Compete as a team of 2. If you still need a teammate, join{' '}
          <a
            href={LINKS.monnifySlack}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#90EAF2] underline decoration-[#90EAF2]/40 underline-offset-4"
          >
            apiconf-hackathon
          </a>{' '}
          on Slack and we&apos;ll help you find one there.
        </li>
        <li className="pl-2">
          Use a Monnify Sandbox API (no live APIs). Get your developer keys on{' '}
          <a
            href={LINKS.monnifyApp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#E1EF9A] underline decoration-[#E1EF9A]/40 underline-offset-4"
          >
            app.monnify.com
          </a>
          .
        </li>
        <li className="pl-2">
          Join the developer challenge on{' '}
          <a
            href={LINKS.monnifySlack}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#90EAF2] underline decoration-[#90EAF2]/40 underline-offset-4"
          >
            Monnify Slack
          </a>{' '}
          specifically <span className="font-bold text-[#90EAF2]">apiconf-hackathon</span>.
          Introduce yourself (name, technologies you work with, and one fun activity outside coding),
          then turn on notifications. The submission link and all further communications will be
          shared in that channel. Bonus points if you help others out while you&apos;re there.
        </li>
        <li className="pl-2">
          Share on social media with{' '}
          {HASHTAGS.map((tag, i) => (
            <span key={tag}>
              {i > 0 ? ' and ' : null}
              <span className="font-bold text-[#ECC89D]">{tag}</span>
            </span>
          ))}
          .
        </li>
        <li className="pl-2">Be submitted by 12pm WAT on July 21, 2026.</li>
      </ol>

      <div className="max-w-4xl border-l-4 border-[#90EAF2] pl-5">
        <p className="text-lg leading-relaxed text-white/90">
          <span className="font-bold text-white">Note:</span> You must be a registered attendee of
          API Conference Lagos 2026 and attend in person to qualify. Winners will be announced live
          on stage.{' '}
          <a href={LINKS.register} className="font-bold text-[#90EAF2] underline underline-offset-4">
            Get your conference ticket
          </a>
        </p>
      </div>
    </Section>
  );
}
