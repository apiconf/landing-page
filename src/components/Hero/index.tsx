import { useRef } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useIsVisible } from "../../hooks";
import scrollImg from "../../assets/hero/scroll-icon.png";

const Hero = () => {
  const apiConfRef = useRef(null);
  const theGoalRef = useRef(null);
  const dateRef = useRef(null);
  const isAPIConfVisible = useIsVisible(apiConfRef, -0.8);
  const isTheGoalVisible = useIsVisible(theGoalRef, -0.6);
  const isDateVisible = useIsVisible(dateRef, -0.8);

  return (
    <section
      className={`bg-[url(/hero/hero-bg.svg)] bg-cover bg-center bg-no-repeat`}
    >
      <div className="flex justify-between pl-8 pt-16 sm:pl-20 2xl:pl-32 text-white 2xl:mt-40">
        <div className="w-full lg:w-3/6 2xl:w-4/6 space-y-8 mb-10 lg:mb-10 md:mt-36 2xl:mb-28 pr-5">
          <motion.h1
            initial={{ y: 32 }}
            animate={{ y: isAPIConfVisible ? 32 : 0 }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
              delay: 0.2,
            }}
            ref={apiConfRef}
            className="mb-[-5px] font-bold text-5xl lg:text-6xl 3xl:text-[64px] leading-none align-middle"
          >
            API Conference 2025.
          </motion.h1>
          <motion.p
            initial={{ y: 32, opacity: 0 }}
            animate={{
              y: isTheGoalVisible ? 32 : 0,
              opacity: isTheGoalVisible ? 0 : 1,
            }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
              delay: 0.2,
            }}
            ref={theGoalRef}
            className="font-normal text-lg leading-[22px] max-w-[640px]"
          >
            The goal of API Conf is to promote API literacy amongst the
            different developer ecosystems that exist within Lagos, and in the
            future, Nigeria/Africa regardless of your expertise or skill level.
          </motion.p>

          <div className="flex sm:flex-row flex-col flex-wrap gap-2 2xl:gap-4 !mt-14">
            <a href="#register">
              <button
                type="button"
                className="w-full cursor-pointer bg-[#E1EF9A] text-primary-black font-bold text-md md:text-lg 2xl:text-2xl py-2 2xl:py-4 px-4 2xl:px-8 rounded-full"
              >
                Register To Attend
              </button>
            </a>

            <a href="#speakers">
              <button
                type="button"
                className="w-full cursor-pointer bg-[#ECC89D] text-primary-black font-bold text-md md:text-lg 2xl:text-2xl py-2 2xl:py-4 px-4 2xl:px-8 rounded-full"
              >
                Apply To Speak
              </button>
            </a>

            <a href="#sponsors">
              <button
                type="button"
                className="w-full cursor-pointer bg-[#FFFFFF] text-[#2F20BF] font-bold text-md md:text-lg 2xl:text-2xl py-2 2xl:py-4 px-4 2xl:px-8 rounded-full"
              >
                Become A Sponsor
              </button>
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-3/6 2xl:w-2/6 bg-[url(/hero/api-icon.svg)] bg-right-bottom bg-contain bg-no-repeat justify-center items-end -mb-12">
          <div className="mb-40">
            <p>Date</p>
            <motion.p
              initial={{ y: 32 }}
              animate={{ y: isDateVisible ? 32 : 0 }}
              transition={{
                duration: 1,
                ease: [0, 0, 0.25, 1],
                delay: 0.2,
              }}
              ref={dateRef}
              className="mb-[-5px] font-bold text-5xl lg:text-6xl 3xl:text-[64px] leading-none align-middle"
            >
              XX July 2025
            </motion.p>
          </div>
        </div>
      </div>
      <Marquee
        autoFill={true}
        className="w-full py-3 bg-white flex overflow-hidden"
      >
        <h4 className="flex justify-between items-center">
          <span className="font-bold text-4xl lg:text-[64px] lg:leading-[52.52px] mx-8">
            API Conference Lagos 2025
          </span>
          <img src={scrollImg} alt="" className="w-[56.6px]" />
        </h4>
      </Marquee>
    </section>
  );
};
export default Hero;
