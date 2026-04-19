import Carousel from '@/pages/2025/speakers/carousel';
import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';
import { speakers } from '@/pages/2025/speakers/speaker';

export default function SpeakersInHome() {
  return (
    <>
      <Main />
    </>
  );
}

function Main() {
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
    <main className="relative z-20 bg-[#2F20BF] px-8 pb-24 pt-24 sm:px-12 lg:min-h-screen xl:px-32 xl:pb-32 xl:pt-32">
      <section className="mx-auto w-full max-w-7xl">
        <Carousel slides={speakers} />
      </section>

      <motion.a
        href="/2025/speakers"
        rel="noopener noreferrer"
        target="_blank"
        ref={buttonRef}
        initial="hidden"
        animate="visible"
        variants={buttonVariant}
        className="mx-auto mt-4 flex h-full max-h-[126px] w-full max-w-[330px] cursor-pointer items-center justify-center rounded-[320px] bg-[#E1EF9A] px-8 py-8 lg:w-[70.01%] lg:max-w-[466px] lg:py-12"
      >
        <span className="text-black text-2xl font-bold leading-[29.76px]">SEE ALL SPEAKERS</span>
      </motion.a>
    </main>
  );
}
