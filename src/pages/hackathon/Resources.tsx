import { RESOURCES } from './constants';
import { Section } from './Section';

export function Resources() {
  return (
    <Section
      id="resources"
      title="Resources to help you get started"
      tone="deep"
      lead={
        <>
          Explore Monnify docs, tutorials, and sandbox access — and ask questions in{' '}
          <span className="font-bold text-white">#apiconf-hackathon</span> on Monnify Developer
          Slack.
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
