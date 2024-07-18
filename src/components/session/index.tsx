import { SessionGridForOutdoorUse } from "../../pages/sessions";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import { useRef } from "react";

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
    <section className="bg-[#2F20BF] min-h-screen px-12 xl:px-32 pt-10 xl:pt-16 pb-16 xl:pb-[108px]">
      <SessionGridForOutdoorUse no={3} />
      <motion.a
        href="/sessions"
        rel="noopener noreferrer"
        target="_blank"
        ref={buttonRef}
        initial="hidden"
        animate="visible"
        variants={buttonVariant}
        className="w-full max-w-[330px] lg:max-w-[466px] lg:w-[70.01%] max-h-[126px] h-full mt-6 mx-auto py-8 px-8 lg:py-12 cursor-pointer bg-[#E1EF9A] flex justify-center items-center rounded-[320px]"
      >
        <span className="text-black font-bold text-2xl leading-[29.76px]">
          SEE ALL SESSIONS
        </span>
      </motion.a>
    </section>
  );
}
