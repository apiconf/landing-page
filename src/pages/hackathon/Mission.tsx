import { LINKS } from './constants';
import { Section } from './Section';

export function Mission() {
  return (
    <Section id="mission" title="Your mission" bordered>
      <p className="mb-4 max-w-4xl text-2xl font-bold leading-snug text-[#E1EF9A] md:text-3xl">
        Build an application powered by Monnify APIs.
      </p>
      <p className="max-w-4xl text-lg leading-relaxed text-white/85">
        That&apos;s it. We&apos;re intentionally leaving the challenge open because great ideas come
        from every industry. Compete as a team of 2 — or join{' '}
        <a
          href={LINKS.monnifySlack}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-[#90EAF2] underline decoration-[#90EAF2]/40 underline-offset-4"
        >
          apiconf-hackathon
        </a>{' '}
        on Slack and we&apos;ll help you find a teammate there.
      </p>
    </Section>
  );
}
