import { motion } from 'framer-motion';

import { useIsVisible } from '../hooks';
import { useRef } from 'react';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function WorkshopSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIsVisible(sectionRef);

  return (
    <section
      className="relative overflow-hidden bg-[#E9E5FF] px-[5.9701%] py-20 md:px-[7.4074%] md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#90EAF2]/60 blur-3xl"
      />
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        variants={reveal}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-7 shadow-sm md:grid-cols-[1.2fr_.8fr] md:items-center md:p-12"
      >
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2F20BF]">
            Friday, 24 July 2026
          </p>
          <h2 className="text-4xl font-bold leading-none text-[#1F1F1F] md:text-6xl">
            Hands-on workshops
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
            Spend a focused day building with modern API, AI, cloud, security, and developer-tooling
            technologies alongside experienced practitioners.
          </p>
          <a
            href="/workshop"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#2F20BF] px-6 py-3 font-bold text-white transition hover:bg-[#251377]"
          >
            Register For Workshop
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#2F20BF] p-7 text-white md:p-9">
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[28px] border-[#90EAF2]/30"
          />
          <p className="relative text-sm font-bold uppercase tracking-[0.16em] text-[#E1EF9A]">
            What to expect
          </p>
          <div className="relative mt-7 divide-y divide-white/20">
            {[
              ['01', 'Practical sessions'],
              ['02', 'Guidance from experts'],
              ['03', 'Skills you can use immediately'],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-5 py-4 first:pt-0 last:pb-0">
                <span className="text-sm font-bold text-[#90EAF2]">{number}</span>
                <span className="text-xl font-bold md:text-2xl">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function HackathonSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useIsVisible(sectionRef);

  return (
    <section
      className="relative overflow-hidden bg-[#1F1F1F] px-[5.9701%] py-20 text-white md:px-[7.4074%] md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,200,157,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(144,234,242,0.16),transparent_42%)]"
      />
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={visible ? 'visible' : 'hidden'}
        variants={reveal}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center"
      >
        <div className="rounded-[2rem] bg-[#2F20BF] p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E1EF9A]">
            Developer challenge
          </p>
          <img
            src="/hackathon/monnify-logo-white.png"
            alt="Monnify"
            className="mt-7 h-auto w-full max-w-72"
          />
          <p className="mt-6 text-2xl font-bold">Up to ₦2,000,000 for first place</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold leading-none md:text-6xl">Build with Monnify</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            Create an application powered by Monnify APIs and compete for cash prizes, exclusive
            swag, and recognition from one of Africa&apos;s leading payment gateways.
          </p>
          <a
            href="/hackathon"
            className="mt-8 inline-flex rounded-full bg-[#ECC89D] px-6 py-3 font-bold text-[#1F1F1F] transition hover:bg-[#E1EF9A]"
          >
            Explore The Hackathon
          </a>
        </div>
      </motion.div>
    </section>
  );
}
