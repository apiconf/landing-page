import { JUDGING_CRITERIA } from './constants';
import { Section } from './Section';

export function Judging() {
  return (
    <Section
      id="judging"
      title="Judging criteria"
      lead="Submissions will be scored based on practical value, clarity and storytelling, technical depth, and more. Your solutions should:"
    >
      <ul className="max-w-4xl space-y-4 text-lg leading-relaxed text-white/90">
        {JUDGING_CRITERIA.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#E1EF9A]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
