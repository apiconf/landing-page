import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

const Speaker = () => {
  const speakTextRef = useRef(null);
  const applyBtnRef = useRef(null);
  const speakImgRef = useRef(null);
  const isSpeakText = useIsVisible(speakTextRef);
  const isApplyBtn = useIsVisible(applyBtnRef, 0.9);
  const isSpeakImg = useIsVisible(speakImgRef);
  return (
    <div className="flex w-full flex-col gap-16 pt-16 sm:items-center sm:px-[5%] sm:py-16 md:flex-row md:items-stretch 2xl:px-[7.4%]">
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isSpeakText ? 0 : 32,
          opacity: isSpeakText ? 1 : 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0, 0, 0.58, 1],
          delay: 0.1,
        }}
        ref={speakTextRef}
        className="my-auto flex flex-col justify-center px-[8%] text-white sm:w-[90%] sm:px-0 lg:items-start"
      >
        <h2 className="text-inherit w-full max-w-[500px] text-5xl font-bold leading-[59.52px] lg:text-6xl lg:leading-[74.4px] 3xl:max-w-[595px] 3xl:text-[64px] 3xl:leading-[79.36px]">
          Speak at APIConf Lagos 2024
        </h2>
        <p className="text-inherit w-full pb-8 pt-8 text-2xl font-medium leading-[29.76px] opacity-90 sm:w-[73%] lg:text-left">
          Our speakers are pioneers and innovators, drawn from a variety of industries, all united
          by their expertise in APIs. Stay tuned as we reveal our lineup of thought leaders and
          industry veterans who will provide valuable perspectives and inspiring stories.
        </p>
        <motion.a
          initial={{ y: 32, opacity: 0 }}
          animate={{
            y: isApplyBtn ? 0 : 32,
            opacity: isApplyBtn ? 1 : 0,
          }}
          transition={{
            duration: 0.75,
            ease: [0, 0, 0.58, 1],
            delay: 0.2,
          }}
          ref={applyBtnRef}
          href="/2024/sessions"
          rel="noopener noreferrer"
          target="_blank"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[320px] bg-peach p-6 sm:max-w-[329px] sm:px-4 sm:py-8 md:w-4/5 md:max-w-full md:px-8 md:py-[7.21%] lg:w-[70.01%]"
        >
          <span className="text-2xl font-extrabold leading-[29.76px] text-dark">
            View Session Details
          </span>
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isSpeakImg ? 0 : 32,
          opacity: isSpeakImg ? 1 : 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0, 0, 0.58, 1],
        }}
        ref={speakImgRef}
        className="h-[431px] rounded-t-[32px] bg-[url('/src/assets/speak-image.png')] bg-cover bg-top bg-no-repeat object-cover pt-[29.3%] sm:w-[90%] sm:rounded-[32px] md:h-auto md:w-full"
      ></motion.div>
    </div>
  );
};
export default Speaker;
