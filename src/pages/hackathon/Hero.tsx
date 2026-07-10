import { CtaButton } from './CtaButton';
import { FadeIn } from './FadeIn';
import { LINKS } from './constants';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url(/hero/hero-bg.svg)] bg-cover bg-center bg-no-repeat">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(225,239,154,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(144,234,242,0.16),transparent_50%)]"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-[5.9701%] pb-20 pt-28 md:px-[7.4074%] md:pb-28 md:pt-36">
        <FadeIn onMount className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#E1EF9A] md:text-base">
          API Conference Lagos 2026
        </FadeIn>

        <FadeIn onMount delay={0.1}>
          <h1 className="hero-fluid-heading mb-6 max-w-4xl font-bold leading-none text-white">
            Build With Monnify
          </h1>
        </FadeIn>

        <FadeIn
          onMount
          delay={0.2}
          className="mb-3 max-w-2xl text-xl font-bold text-white md:text-2xl"
        >
          Monnify Developer Challenge
        </FadeIn>

        <FadeIn
          onMount
          delay={0.28}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-white/85"
        >
          We&apos;ve partnered with Monnify Payment Gateway to bring you the official API Conference
          Lagos 2026 Developer Challenge. Build an application powered by Monnify APIs — win up to
          ₦800,000, exclusive swag, and recognition from Africa&apos;s leading payment gateway.
        </FadeIn>

        <FadeIn onMount delay={0.4} className="flex flex-col flex-wrap gap-3 sm:flex-row">
          <CtaButton href={LINKS.monnifyApp} external>
            Get Sandbox Keys
          </CtaButton>
          <CtaButton href={LINKS.register} variant="white">
            Register To Attend
          </CtaButton>
        </FadeIn>
      </div>
    </section>
  );
}
