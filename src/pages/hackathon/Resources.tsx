import { LINKS, RESOURCES } from './constants';
import { Section } from './Section';

export function Resources() {
  return (
    <Section
      id="resources"
      title="Resources to help you get started"
      tone="deep"
      lead={
        <>
          Explore Monnify docs, tutorials, and sandbox access — and join{' '}
          <a
            href={LINKS.monnifySlack}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#90EAF2] underline decoration-[#90EAF2]/40 underline-offset-4"
          >
            apiconf-hackathon
          </a>{' '}
          on Monnify Developer Slack for questions, intros, and the submission link.
        </>
      }
    >
      <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        {RESOURCES.map((resource) => (
          <li key={resource.href}>
            <a
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-5 py-3 text-base font-bold text-white transition hover:border-[#E1EF9A] hover:bg-white/10 hover:text-[#E1EF9A]"
            >
              {resource.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
