import { SUBMISSION_DEADLINE } from './constants';
import { Section } from './Section';

export function HowToSubmit() {
  return (
    <Section
      id="submit"
      title="How to submit"
      lead={`Submissions close at ${SUBMISSION_DEADLINE}. Your submission should include a working application or prototype, a public source code repository, and a short demo video (2–5 minutes). Projects may be web, mobile, backend, desktop, AI-native, hardware-enabled, or multi-platform.`}
    >
      <p className="max-w-4xl text-lg font-bold text-[#ECC89D]">
        The submission form will be shared here soon.
      </p>
    </Section>
  );
}
