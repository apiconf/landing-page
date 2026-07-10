import { CtaButton } from './CtaButton';
import { FadeIn } from './FadeIn';
import { LINKS } from './constants';

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#251377]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,239,154,0.12),transparent_60%)]"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-[5.9701%] py-20 text-center md:px-[7.4074%] md:py-28">
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            Ready to build?
          </h2>
          <p className="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-white/85">
            Whether you&apos;re building your first side project or your next big startup, this is
            your opportunity to create something meaningful, experiment with AI, and showcase your
            work to hundreds of developers, founders, and technology leaders.
          </p>
          <p className="mb-10 text-2xl font-bold text-[#E1EF9A] md:text-3xl">Build. Learn. Ship.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href={LINKS.monnifyApp} external>
              Get Sandbox Keys
            </CtaButton>
            <CtaButton href={LINKS.register} variant="white">
              Register To Attend
            </CtaButton>
          </div>
          <p className="mt-8 text-base text-white/70">We can&apos;t wait to see what you create.</p>
        </FadeIn>
      </div>
    </section>
  );
}
