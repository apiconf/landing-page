import { CtaButton } from './CtaButton';
import { LINKS, SUBMISSION_DEADLINE } from './constants';
import { Section } from './Section';

export function HowToSubmit() {
  return (
    <Section
      id="submit"
      title="How to submit"
      lead={`Submissions close at ${SUBMISSION_DEADLINE}. Your submission should include a working application or prototype, a public source code repository, and a short demo video (2–5 minutes). Projects may be web, mobile, backend, desktop, AI-native, hardware-enabled, or multi-platform.`}
    >
      <div className="max-w-4xl space-y-5 text-lg leading-relaxed text-white/90">
        <p>
          There is no submission form on this website. Join the developer challenge on Slack
          immediately:
        </p>
        <ol className="list-decimal space-y-4 pl-5 marker:font-bold marker:text-[#E1EF9A]">
          <li className="pl-2">
            Join{' '}
            <a
              href={LINKS.monnifySlack}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#90EAF2] underline decoration-[#90EAF2]/40 underline-offset-4"
            >
              slack.monnify.com
            </a>{' '}
            and head to <span className="font-bold text-[#90EAF2]">#apiconf-hackathon</span>.
          </li>
          <li className="pl-2">
            Introduce yourself. Tell us your name, what technologies you work with, and one fun
            activity you enjoy outside of coding.
          </li>
          <li className="pl-2">
            Turn on notifications for the channel. The submission link and all further
            communications will be shared there.
          </li>
        </ol>
        <div className="pt-2">
          <CtaButton href={LINKS.monnifySlack} variant="white" external>
            Join #apiconf-hackathon on Slack
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
