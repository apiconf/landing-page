import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

export default function ComingSoonBody() {
  const divOneRef = useRef(null);
  const isDivOneVisible = useIsVisible(divOneRef, 0.75);
  const linkButtonStyles =
    'rounded-[320px] cursor-pointer py-2 lg:py-4 px-4 lg:px-8 font-bold text-center whitespace-nowrap text-xl xl:text-2xl font-sans flex-1 flex items-center justify-center';

  const divOneVariant = {
    visible: {
      y: isDivOneVisible ? 0 : 20,
      opacity: isDivOneVisible ? 1 : 0,
      transition: {
        ease: [0, 0, 0.75, 1],
        duration: 1,
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  };

  return (
    <motion.main
      ref={divOneRef}
      initial="hidden"
      animate="visible"
      variants={divOneVariant}
      className="mx-auto flex min-h-full w-full max-w-7xl flex-grow flex-col items-center gap-4 bg-dark-purple py-24 text-center md:gap-6"
    >
      <h1 className="font-sans text-5xl font-black text-white md:text-9xl">
        APICONF
        <span className="text-[#e1ef9a]">’25</span>
      </h1>
      <span className="w-full justify-center text-center text-lg font-bold tracking-widest text-white md:text-3xl lg:text-4xl xl:text-5xl">
        <time dateTime="2025-07-18">JULY 18</time>-<time dateTime="2025-07-19">19, 2025</time>
      </span>
      <div className="flex flex-col flex-wrap gap-4 text-[#000] sm:flex-row">
        <a
          href="https://sessionize.com/api-conf-lagos-2025/"
          target="_blank"
          className={`${linkButtonStyles} bg-[#ECC89D]`}
        >
          Apply to Speak
        </a>
        <a
          href="https://tinyurl.com/sponsor-apiconf-form"
          target="_blank"
          className={`${linkButtonStyles} bg-[#4223D5] text-white`}
        >
          Become A Sponsor
        </a>
      </div>
    </motion.main>
  );
}
