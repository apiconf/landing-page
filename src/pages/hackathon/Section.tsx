import type { ReactNode } from 'react';
import { FadeIn } from './FadeIn';

type SectionProps = {
  id?: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
  tone?: 'primary' | 'deep';
  bordered?: boolean;
  className?: string;
};

const toneClass = {
  primary: 'bg-[#2F20BF]',
  deep: 'bg-[#251377]',
} as const;

export function Section({
  id,
  title,
  lead,
  children,
  tone = 'primary',
  bordered = false,
  className = '',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${bordered ? 'border-t border-white/10' : ''} ${className}`}
    >
      <div className="mx-auto max-w-5xl px-[5.9701%] py-16 md:px-[7.4074%] md:py-20">
        <FadeIn>
          <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:mb-6 md:text-4xl">
            {title}
          </h2>
          {lead ? (
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85">{lead}</p>
          ) : null}
          {children}
        </FadeIn>
      </div>
    </section>
  );
}
