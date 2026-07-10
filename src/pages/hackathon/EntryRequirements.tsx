import { LINKS } from './constants';
import { Section } from './Section';

export function EntryRequirements() {
  return (
    <Section id="requirements" title="Entry requirements" tone="deep" lead="To qualify, you must:">
      <ol className="mb-10 list-decimal space-y-4 pl-5 text-lg leading-relaxed text-white/90 marker:font-bold marker:text-[#E1EF9A]">
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
          Join <span className="font-bold text-[#90EAF2]">#apiconf-hackathon</span> on the Monnify
          Slack channel to meet other hackers, ask questions, or share your excitement. Bonus points
          if you help others out while you&apos;re in that channel.
        </li>
        <li className="pl-2">
          Share on social media with the hashtag{' '}
          <span className="font-bold text-[#ECC89D]">#APIConfMonnifyDeveloperChallenge</span>.
        </li>
        <li className="pl-2">Be submitted by 12pm WAT on July 21, 2026.</li>
      </ol>

      <div className="max-w-4xl border-l-4 border-[#90EAF2] pl-5">
        <p className="text-lg leading-relaxed text-white/90">
          <span className="font-bold text-white">Note:</span> You must be a registered attendee of
          API Conference Lagos 2026 and attend in person to qualify. Winners will be announced live
          on stage.{' '}
          <a
            href={LINKS.register}
            className="font-bold text-[#90EAF2] underline underline-offset-4"
          >
            Register at apiconf.net
          </a>
        </p>
      </div>
    </Section>
  );
}
