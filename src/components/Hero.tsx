import { motion, useInView } from 'framer-motion';

import Marquee from 'react-fast-marquee';
import scrollImg from '../assets/hero/scroll-icon.png';
import { useRef } from 'react';

export default function Hero() {
  const apiConfRef = useRef(null);
  const dateRef = useRef(null);
  const buttonsRef = useRef(null);

  const isAPIConfVisible = useInView(apiConfRef, { margin: "0px 0px -50px 0px" });
  const isButtonsVisible = useInView(buttonsRef, { margin: "0px 0px -50px 0px", once: false });


  const buttonContainerVariants = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-[url(/hero/hero-bg.svg)] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between px-[5.9701%] md:px-[7.4074%] pt-[155px] md:pt-36 text-white 2xl:mt-40">
        <div className="w-full lg:w-3/6 2xl:w-4/6 space-y-5 mb-10 lg:mb-10 2xl:mb-28 pr-5">
          <motion.h1
            ref={apiConfRef}
            initial={{ y: 30, opacity: 0 }}
            animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="mb-[-5px] text-xl font-bold hero-fluid-heading 3xl:text-[64px] leading-none align-middle xl:whitespace-nowrap"
          >
            API Conference Lagos
          </motion.h1>
          <motion.p
            ref={dateRef}
            initial={{ y: 30, opacity: 0 }}
            animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="lg:hidden text-lg md:text-2xl font-bold  text-white inline-block "
          >
            18th - 19th July 2025
          </motion.p>
          <motion.p
            className="font-normal text-lg leading-[22px] max-w-[640px]"
          >
            Elevating API Literacy for Mass Innovation.
          </motion.p>


          <motion.div
            initial="hidden"
            ref={buttonsRef}
            animate={isButtonsVisible ? "visible" : "hidden"}
            variants={buttonContainerVariants}
            className="flex sm:flex-row flex-col flex-wrap gap-2 2xl:gap-4 !mt-14"
          >
            <motion.a href="/register" target='_blank' variants={buttonVariants}>
              <button className="w-full cursor-pointer bg-[#E1EF9A] text-primary-black font-bold text-md md:text-lg 2xl:text-2xl py-2 2xl:py-4 px-4 2xl:px-8 rounded-full">
                Register To Attend
              </button>
            </motion.a>

            <motion.a href="/cfp" target='_blank'  variants={buttonVariants}>
              <button className="w-full cursor-pointer bg-[#ECC89D] text-primary-black font-bold text-md md:text-lg 2xl:text-2xl py-2 2xl:py-4 px-4 2xl:px-8 rounded-full">
                Apply To Speak
              </button>
            </motion.a>

            <motion.a href="/sponsors/form" variants={buttonVariants} target='_blank'>
              <button className="w-full cursor-pointer bg-[#FFFFFF] text-[#2F20BF] font-bold text-md md:text-lg 2xl:text-2xl py-2 2xl:py-4 px-4 2xl:px-8 rounded-full">
                Become A Sponsor
              </button>
            </motion.a>
          </motion.div>
        </div>

        <div className="hidden lg:flex lg:w-3/6 2xl:w-2/6 bg-[url(/hero/api-icon.svg)] bg-right-bottom bg-cover bg-no-repeat justify-end items-end -mb-12 overflow-visible">
          <div className="mb-40">
            <p>Date</p>
            <motion.p
              ref={dateRef}
              initial={{ y: 30, opacity: 0 }}
              animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: 0.2,
              }}
              className="mb-[-5px] font-bold text-[1.75rem] lg:text-[2.125rem] 3xl:text-[2.25rem] leading-none align-middle"
            >
              18th - 19th July 2025
            </motion.p>
          </div>
        </div>
      </div>
      <Marquee autoFill={true} className="w-full py-3 bg-white flex overflow-hidden">
        <h4 className="flex justify-between items-center">
          <span className="font-bold text-4xl lg:text-[64px] lg:leading-[52.52px] mx-8">
            API Conference Lagos 2025
          </span>
          <img src={scrollImg} alt="" className="w-[56.6px]" />
        </h4>
      </Marquee>
    </section>
  );
}


