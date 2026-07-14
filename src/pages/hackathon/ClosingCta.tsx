import { CtaButton } from './CtaButton';
import { FadeIn } from './FadeIn';
import { LINKS } from './constants';
import { PAGE_GUTTER } from './layout';

export function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-[#251377]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,239,154,0.12),transparent_60%)]"
      />
      <div className={`relative z-10 ${PAGE_GUTTER} py-20 text-center md:py-28`}>
        <FadeIn>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            Ready to build?
          </h2>
          <p className="mx-auto mb-4 max-w-4xl text-lg leading-relaxed text-white/85">
            Whether you&apos;re building your first side project or your next big startup, this is
            your opportunity to create something meaningful, experiment with AI, and showcase your
            work to hundreds of developers, founders, and technology leaders.
          </p>
          <p className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-white/80">
            Join the developer challenge on Slack immediately — introduce yourself in{' '}
            <span className="font-bold text-[#90EAF2]">apiconf-hackathon</span>, then turn on
            notifications. The submission link and all further communications will be shared there.
          </p>
          <p className="mb-10 text-2xl font-bold text-[#E1EF9A] md:text-3xl">Build. Learn. Ship.</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton href={LINKS.monnifyApp} external>
              Get Sandbox Keys
            </CtaButton>
            <CtaButton href={LINKS.monnifySlack} variant="white" external>
              Join apiconf-hackathon on Slack
            </CtaButton>
          </div>
          <p className="mt-8 text-base text-white/70">We can&apos;t wait to see what you create.</p>
        </FadeIn>
      </div>
    </section>
  );
}
