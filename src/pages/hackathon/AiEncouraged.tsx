import { Section } from './Section';

export function AiEncouraged() {
  return (
    <Section
      id="ai"
      title="AI is encouraged"
      bordered
      lead="Participants are encouraged, but not required, to incorporate Artificial Intelligence (AI) or AI agents into their projects — assistants, workflow automations, developer tools, support agents, and more. The goal isn't simply to use AI, but to build products that are useful, practical, and well designed."
    >
      <p className="max-w-2xl text-lg font-bold text-[#ECC89D]">
        That said, AI slop is greatly frowned upon.
      </p>
    </Section>
  );
}
