import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className = "" }: SectionProps) => (
  <section id={id} className={`mb-12 ${className}`}>
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-600">
      {title}
    </h2>
    {children}
  </section>
);