import { useRef } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useIsVisible } from "../../hooks";
import heroImg from "../../assets/hero/hero-irregular-polygon.png";
import scrollImg from "../../assets/hero/scroll-icon.png";
import heroStyles from "./hero.module.css";

const Hero = () => {
  const elevateRef = useRef(null);
  const theGoalRef = useRef(null);
  const lagosRef = useRef(null);
  const detailsRef = useRef(null);
  const dateRef = useRef(null);
  const figureRef = useRef(null);
  const marqueeRef = useRef(null);
  const isElevateVisible = useIsVisible(elevateRef);
  const isTheGoalVisible = useIsVisible(theGoalRef);
  const isLagosVisible = useIsVisible(lagosRef);
  const isDetailsVisible = useIsVisible(detailsRef);
  const isDateVisible = useIsVisible(dateRef);
  const isFigureVisible = useIsVisible(figureRef);
  const isMarqueeVisible = useIsVisible(marqueeRef);

  return (
    <section className="w-full">
      <div className="w-full pt-[149px] pb-16 px-[8%] sm:px-[5%] 2xl:px-[7.4%]">
        <div className="max-w-[621px] w-full flex flex-col gap-8 text-[#1F1F1F]">
          <motion.h1
            initial={{ y: 32 }}
            animate={{ y: isElevateVisible ? 0 : 32 }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
              delay: 0.2,
            }}
            ref={elevateRef}
            className="mb-[-5px] font-bold text-5xl lg:text-6xl 3xl:text-[64px] leading-none align-middle"
          >
            Elevating API Literacy.
          </motion.h1>
          <motion.p
            initial={{ y: 32, opacity: 0 }}
            animate={{
              y: isTheGoalVisible ? 0 : 32,
              opacity: isTheGoalVisible ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
              delay: 0.2,
            }}
            ref={theGoalRef}
            className="font-normal text-lg leading-[22px]"
          >
            The goal of API Conf is to promote API literacy amongst the
            different developer ecosystems that exist within Lagos, and in the
            future, Nigeria/Africa regardless of your expertise or skill level.
          </motion.p>
        </div>
      </div>
      <div className="w-full py-[72.5px] px-[8%] sm:px-[5%] 2xl:px-[7.4%] flex justify-between bg-[#2F20BF] shadow-[0_-40px_96px_-24px_#2F20BF33]">
        <div className="max-w-[840px] w-full flex flex-col gap-y-8">
          <div className="flex flex-col gap-4 text-white">
            <div className="flex flex-col gap-4">
              <motion.h3
                initial={{ y: 32 }}
                animate={{ y: isLagosVisible ? 0 : 32 }}
                transition={{
                  duration: 1,
                  ease: [0, 0, 0.25, 1],
                  delay: 0.4,
                }}
                ref={lagosRef}
                className="mb-[-12px] font-bold text-5xl lg:text-6xl 3xl:text-[64px] leading-none align-middle"
              >
                Lagos.
              </motion.h3>
              <motion.h4
                initial={{ y: 32, opacity: 0 }}
                animate={{
                  y: isDetailsVisible ? 0 : 32,
                  opacity: isDetailsVisible ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  ease: [0, 0, 0.25, 1],
                  delay: 0.4,
                }}
                ref={detailsRef}
                className="font-normal text-lg leading-[22.32px]"
              >
                More Details Soon
              </motion.h4>
            </div>
            <motion.h3
              initial={{ y: 32 }}
              animate={{ y: isDateVisible ? 0 : 32 }}
              transition={{
                duration: 1,
                ease: [0, 0, 0.25, 1],
                delay: 0.2,
              }}
              ref={dateRef}
              className={heroStyles.date}
            >
              13th July 2024
            </motion.h3>
          </div>
          <a className={heroStyles.register}>Register to Attend</a>
        </div>
        <figure className="hidden lg:block relative max-w-[27vw] 3xl:max-w-[469px] w-full">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: isFigureVisible ? 1 : 0 }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
              delay: 0.4,
            }}
            ref={figureRef}
            className="absolute w-full bottom-[50%] 3xl:bottom-[150px] right-0"
            src={heroImg}
            alt=""
          />
        </figure>
      </div>
      <motion.div
        initial={{ y: 32 }}
        animate={{ y: isMarqueeVisible ? 0 : 32 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
          delay: 0.4,
        }}
        ref={marqueeRef}
      >
        <Marquee
          autoFill={true}
          className="w-full py-3 bg-[#E1EF9A] flex overflow-hidden"
        >
          <h4 className=" flex justify-between items-center">
            <span className="w-[786px] font-bold text-[64px] leading-[52.52px] mx-8">
              API Conference Lagos 2024
            </span>
            <img src={scrollImg} alt="" className="w-[56.6px]" />
          </h4>
        </Marquee>
      </motion.div>
    </section>
  );
};
export default Hero;
