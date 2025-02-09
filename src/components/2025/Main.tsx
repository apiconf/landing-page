import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import { useRef } from "react";

export default function Main() {
  const divOneRef = useRef(null);
  const isDivOneVisible = useIsVisible(divOneRef, 0.75);
  const linkButtonStyles =
    "rounded-[320px] cursor-pointer py-2 lg:py-4 px-4 lg:px-8 font-bold text-center whitespace-nowrap text-xl xl:text-2xl font-sans flex-1 flex items-center justify-center";

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
      className="bg-dark-purple flex-grow min-h-full w-full mx-auto max-w-7xl text-center py-24 flex gap-4 md:gap-6 flex-col items-center"
    >
      <h1 className="text-white font-sans text-5xl md:text-9xl font-black">
        APICONF
        <span className="text-[#e1ef9a]">’25</span>
      </h1>
      <span className="font-bold text-lg md:text-3xl lg:text-4xl xl:text-5xl text-center justify-center tracking-widest text-white w-full">
        <time dateTime="2025-07-18">JULY 18</time>-
        <time dateTime="2025-07-19">19, 2025</time>
      </span>
      <div className="text-[#000] flex-col sm:flex-row flex flex-wrap gap-4">
        <a href="https://sessionize.com/api-conf-lagos-2025/" target="_blank" className={`${linkButtonStyles} bg-[#ECC89D]`}>
          Apply to Speak
        </a>
        <a href="https://tinyurl.com/sponsor-apiconf-form"  target="_blank" className={`${linkButtonStyles} bg-[#4223D5] text-white`}>
          Become A Sponsor
        </a>
      </div>
    </motion.main>
  );
}
