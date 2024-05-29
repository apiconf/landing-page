import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../hooks";

const Speaker = () => {
  const speakTextRef = useRef(null);
  const applyBtnRef = useRef(null);
  const speakImgRef = useRef(null);
  const isSpeakText = useIsVisible(speakTextRef);
  const isApplyBtn = useIsVisible(applyBtnRef, 0.9);
  const isSpeakImg = useIsVisible(speakImgRef);
  return (
    <div className="w-full pt-16 sm:py-16 sm:px-[5%] 2xl:px-[7.4%] flex flex-col sm:items-center md:items-stretch md:flex-row gap-16">
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
        className="px-[8%] sm:px-0 sm:w-[90%] my-auto flex flex-col lg:items-start justify-center text-white"
      >
        <h2 className="max-w-[500px] 3xl:max-w-[595px] w-full text-inherit font-bold text-5xl lg:text-6xl 3xl:text-[64px] leading-[59.52px] lg:leading-[74.4px] 3xl:leading-[79.36px]">
          Speak at APIConf Lagos 2024
        </h2>
        <p className="text-inherit opacity-90 pt-8 pb-8 font-medium w-full sm:w-[73%] lg:text-left text-2xl leading-[29.76px]">
          Our speakers are pioneers and innovators, drawn from a variety of industries, all united by their
          expertise in APIs. Stay tuned as we reveal our lineup of
          thought leaders and industry veterans who will provide valuable perspectives and inspiring stories.
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
          href="https://sessionize.com/api-conf-lagos-2024/"
          rel="noopener noreferrer"
          target="_blank"
          className="w-full sm:max-w-[329px] md:max-w-full md:w-4/5 lg:w-[70.01%] cursor-pointer p-6 sm:px-4 sm:py-8 md:px-8 md:py-[7.21%] flex gap-2 justify-center items-center bg-peach rounded-[320px]"
        >
          <span className="text-dark font-extrabold text-2xl leading-[29.76px]">
            Apply to Speak
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
        className="object-cover sm:w-[90%] h-[431px] md:w-full md:h-auto rounded-t-[32px] sm:rounded-[32px] bg-[url('/src/assets/speak-image.png')] bg-no-repeat bg-top bg-cover pt-[29.3%]"
      ></motion.div>
    </div>
  );
};
export default Speaker;
