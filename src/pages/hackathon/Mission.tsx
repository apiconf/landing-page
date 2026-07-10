import { Section } from './Section';

export function Mission() {
  return (
    <Section id="mission" title="Your mission" bordered>
      <p className="mb-4 max-w-2xl text-2xl font-bold leading-snug text-[#E1EF9A] md:text-3xl">
        Build an application powered by Monnify APIs.
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-white/85">
        That&apos;s it. We&apos;re intentionally leaving the challenge open because great ideas come
        from every industry. Participants may compete individually or as teams of up to two people.
      </p>
    </Section>
  );
}
