import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../hooks";
import SpeakImg from "../../../assets/speak-image.png";

const Speaker = () => {
  const speakTextRef = useRef(null);
  const applyBtnRef = useRef(null);
  const speakImgRef = useRef(null);
  const isSpeakText = useIsVisible(speakTextRef);
  const isApplyBtn = useIsVisible(applyBtnRef);
  const isSpeakImg = useIsVisible(speakImgRef)
  return (
    <div className="flex flex-col lg:flex-row w-full lg:my-[50px] md:my-[50px] ">
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
        className="w-[90%] m-auto flex flex-col lg:items-start justify-center"
      >
        <h2 className="text-[48px] xl:text-[40px] font-[720] text-white lg:w-[90%] xl:w-[70%] lg:text-left lg:mt-5 mb-4">
          Speak at APIConf Lagos 2024
        </h2>
        <p className="text-white opacity-90 pt-2 pb-5 font-medium md:w-[55%] w-full lg:text-left">
          Some body of text to accompany visually solid idea per section.
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
          href="https://forms.gle/Mt4YqBtmzTEPw3EK7"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer sm:px-[5.5rem] sm:py-[1rem] px-[1rem] py-[1rem] flex gap-2 justify-center items-center bg-peach  rounded-6xl mb-8"
        >
          <span className="text-dark font-extrabold">Apply to Speak</span>
        </motion.a>
      </motion.div>
      <div>
        <motion.img
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
          className="h-[300px] sm:w-full m-auto"
          src={SpeakImg}
          alt=""
        />
      </div>
    </div>
  );
};
export default Speaker;
