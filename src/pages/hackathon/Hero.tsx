import { CtaButton } from './CtaButton';
import { FadeIn } from './FadeIn';
import { LINKS } from './constants';
import { PAGE_GUTTER } from './layout';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[url(/hero/hero-bg.svg)] bg-cover bg-center bg-no-repeat">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(225,239,154,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(144,234,242,0.16),transparent_50%)]"
      />
      <div className={`relative z-10 ${PAGE_GUTTER} pb-20 pt-28 md:pb-28 md:pt-36`}>
        <FadeIn
          onMount
          className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#E1EF9A] md:text-base"
        >
          API Conference Lagos 2026
        </FadeIn>

        <FadeIn onMount delay={0.1}>
          <h1 className="hero-fluid-heading mb-6 flex max-w-5xl flex-wrap items-center gap-x-3 gap-y-2 font-bold leading-none text-white md:gap-x-4">
            <span>Build With</span>
            <img
              src="/hackathon/monnify-logo-white.png"
              alt="Monnify"
              className="h-[0.85em] w-auto max-w-[min(100%,280px)] md:max-w-[min(100%,420px)]"
            />
          </h1>
        </FadeIn>

        <FadeIn
          onMount
          delay={0.2}
          className="mb-3 max-w-4xl text-xl font-bold text-white md:text-2xl"
        >
          Monnify Developer Challenge
        </FadeIn>

        <FadeIn
          onMount
          delay={0.28}
          className="mb-10 max-w-4xl text-lg leading-relaxed text-white/85"
        >
          We&apos;ve partnered with Monnify Payment Gateway to bring you the official API Conference
          Lagos 2026 Developer Challenge. Build an application powered by Monnify APIs and win up to
          ₦800,000, exclusive swag, and recognition from Africa&apos;s leading payment gateway.
        </FadeIn>

        <FadeIn onMount delay={0.4} className="flex flex-col flex-wrap gap-3 sm:flex-row">
          <CtaButton href={LINKS.monnifyApp} external>
            Get Sandbox Keys
          </CtaButton>
          {LINKS.hackathonForm ? (
            <CtaButton href={LINKS.hackathonForm} variant="white" external>
              Join the Hackathon
            </CtaButton>
          ) : (
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-full bg-white/70 px-6 py-3 text-lg font-bold text-[#2F20BF] sm:w-auto md:px-8 md:py-4 md:text-xl"
            >
              Join the Hackathon
            </button>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
