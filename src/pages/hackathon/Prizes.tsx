import { FadeIn } from './FadeIn';
import { PRIZES } from './constants';
import { Section } from './Section';

export function Prizes() {
  return (
    <Section
      id="prizes"
      title="Prizes"
      tone="deep"
      lead="Win cash prizes, exclusive swag, and recognition — winners announced live on stage at API Conference Lagos 2026."
    >
      <div className="grid gap-10 sm:grid-cols-3">
        {PRIZES.map((prize, i) => (
          <FadeIn key={prize.place} delay={0.1 * (i + 1)}>
            <p
              className="mb-2 text-sm font-bold uppercase tracking-[0.14em]"
              style={{ color: prize.accent }}
            >
              {prize.place}
            </p>
            <p className="text-4xl font-bold leading-none text-white md:text-5xl">{prize.amount}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
