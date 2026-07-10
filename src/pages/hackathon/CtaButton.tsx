import type { ReactNode } from 'react';

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'lime' | 'cyan' | 'white';
  external?: boolean;
  className?: string;
};

const variants = {
  lime: 'bg-[#E1EF9A] text-primary-black',
  cyan: 'bg-[#90EAF2] text-primary-black',
  white: 'bg-white text-[#2F20BF]',
} as const;

export function CtaButton({
  href,
  children,
  variant = 'lime',
  external = false,
  className = '',
}: CtaButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={className}
    >
      <button
        type="button"
        className={`w-full cursor-pointer rounded-full px-6 py-3 text-lg font-bold transition-shadow hover:shadow-lg sm:w-auto md:px-8 md:py-4 md:text-xl ${variants[variant]}`}
      >
        {children}
      </button>
    </a>
  );
}
