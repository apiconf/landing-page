// import { SessionGridForOutdoorUse } from "../../pages/sessions";

import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

export default function SessionsInHome() {
  const buttonRef = useRef(null);
  const isButtonVisible = useIsVisible(buttonRef, 0.75);
  const buttonVariant = {
    visible: {
      y: isButtonVisible ? 0 : 32,
      opacity: isButtonVisible ? 1 : 0,
      transition: {
        ease: [0, 0, 0.58, 1],
        delay: 0.3,
        y: { duration: 0.75 },
        opacity: { duration: 1 },
      },
    },
    hidden: {
      y: 32,
      opacity: 0,
    },
  };
  return (
    <section className="min-h-screen bg-[#2F20BF] px-12 pb-16 pt-10 xl:px-32 xl:pb-[108px] xl:pt-16">
      {/* <SessionGridForOutdoorUse no={3} /> */}
      <motion.a
        href="/2024/sessions"
        rel="noopener noreferrer"
        target="_blank"
        ref={buttonRef}
        initial="hidden"
        animate="visible"
        variants={buttonVariant}
        className="mx-auto mt-6 flex h-full max-h-[126px] w-full max-w-[330px] cursor-pointer items-center justify-center rounded-[320px] bg-[#E1EF9A] px-8 py-8 lg:w-[70.01%] lg:max-w-[466px] lg:py-12"
      >
        <span className="text-black text-2xl font-bold leading-[29.76px]">SEE ALL SESSIONS</span>
      </motion.a>
    </section>
  );
}
