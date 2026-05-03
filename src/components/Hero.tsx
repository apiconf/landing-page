import { motion, useInView } from 'framer-motion';

import Marquee from 'react-fast-marquee';
import scrollImg from '../assets/hero/scroll-icon.png';
import { useRef } from 'react';

export default function Hero() {
  const apiConfRef = useRef(null);
  const dateRef = useRef(null);
  const buttonsRef = useRef(null);

  const isAPIConfVisible = useInView(apiConfRef, { margin: '0px 0px -50px 0px' });
  const isButtonsVisible = useInView(buttonsRef, { margin: '0px 0px -50px 0px', once: false });

  const buttonContainerVariants = {
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative bg-[url(/hero/hero-bg.svg)] bg-cover bg-center bg-no-repeat">
      <div className="relative z-20 flex justify-between px-[5.9701%] pt-[155px] text-white md:px-[7.4074%] md:pt-36 2xl:mt-40">
        <div className="relative z-30 mb-10 w-full space-y-5 pr-5 lg:mb-10 lg:w-3/6 2xl:mb-28 2xl:w-4/6">
          <motion.h1
            ref={apiConfRef}
            initial={{ y: 30, opacity: 0 }}
            animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
              delay: 0.2,
            }}
            className="hero-fluid-heading xl: mb-[-5px] align-middle text-xl font-bold leading-none 3xl:text-[64px]"
          >
            API Conference Lagos
          </motion.h1>
          <motion.div
            ref={dateRef}
            initial={{ y: 30, opacity: 0 }}
            animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col space-y-3 lg:hidden"
          >
            <p className="text-lg font-bold text-white md:text-2xl">25th July 2026</p>
            {/* <div>
              <p className="text-base font-bold text-white md:text-lg">The Zone</p>
              <p className="text-gray-200 text-sm leading-tight">
                Gbagada Industrial Scheme, Lagos
              </p>
            </div> */}
          </motion.div>
          <motion.p className="max-w-[640px] text-lg font-normal leading-[22px]">
            Elevating API Literacy for Mass Innovation.
          </motion.p>

          <motion.div
            initial="hidden"
            ref={buttonsRef}
            animate={isButtonsVisible ? 'visible' : 'hidden'}
            variants={buttonContainerVariants}
            className="relative z-40 !mt-14 flex flex-col flex-wrap gap-2 sm:flex-row 2xl:gap-4"
          >
            <motion.a href="/register" target="_blank" variants={buttonVariants}>
              <button className="text-md relative z-50 w-full cursor-pointer rounded-full bg-[#E1EF9A] px-4 py-2 font-bold text-primary-black transition-shadow hover:shadow-lg md:text-lg 2xl:px-8 2xl:py-4 2xl:text-2xl">
                Register To Attend
              </button>
            </motion.a>

            {/* <motion.a href="/speakers" variants={buttonVariants}>
              <button className="text-md relative z-50 w-full cursor-pointer rounded-full bg-[#ECC89D] px-4 py-2 font-bold text-primary-black transition-shadow hover:shadow-lg md:text-lg 2xl:px-8 2xl:py-4 2xl:text-2xl">
                See All Speakers
              </button>
            </motion.a> */}

            {/* <motion.a href="/schedule" variants={buttonVariants}>
              <button className="text-md relative z-50 w-full cursor-pointer rounded-full bg-[#90EAF2] px-4 py-2 font-bold text-primary-black transition-shadow hover:shadow-lg md:text-lg 2xl:px-8 2xl:py-4 2xl:text-2xl">
                See Event Schedule
              </button>
            </motion.a> */}

            <motion.a href="/sponsors/form" variants={buttonVariants} target="_blank">
              <button className="text-md relative z-50 w-full cursor-pointer rounded-full bg-[#FFFFFF] px-4 py-2 font-bold text-[#2F20BF] transition-shadow hover:shadow-lg md:text-lg 2xl:px-8 2xl:py-4 2xl:text-2xl">
                Become A Sponsor
              </button>
            </motion.a>

            {/* <motion.a
              href="/teams"
              variants={buttonVariants}
              target="_blank"
              className="block sm:hidden"
            >
              <button className="text-md relative z-50 w-full cursor-pointer whitespace-nowrap rounded-full bg-[#ECC89D] px-4 py-2 font-bold text-[#2F20BF] transition-shadow hover:shadow-lg md:text-lg 2xl:px-8 2xl:py-4 2xl:text-2xl">
                Meet the Team
              </button>
            </motion.a> */}
          </motion.div>
        </div>

        <div className="relative z-10 -mb-12 hidden items-end justify-end overflow-visible bg-[url(/hero/api-icon.svg)] bg-cover bg-right-bottom bg-no-repeat lg:flex lg:w-3/6 2xl:w-2/6">
          <div className="mb-40 flex flex-col space-y-6">
            <div>
              <p>Date</p>
              <motion.p
                ref={dateRef}
                initial={{ y: 30, opacity: 0 }}
                animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 1.2,
                  ease: 'easeOut',
                  delay: 0.2,
                }}
                className="mb-[-5px] align-middle text-[1.75rem] font-bold leading-none lg:text-[2.125rem] 3xl:text-[2.25rem]"
              >
                25th July 2026
              </motion.p>
            </div>

            {/* <div>
              <p>Venue</p>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isAPIConfVisible ? { y: 0, opacity: 1 } : {}}
                transition={{
                  duration: 1.2,
                  ease: 'easeOut',
                  delay: 0.4,
                }}
                className="max-w-[300px]"
              >
                <p className="text-[1.25rem] font-bold leading-tight lg:text-[1.5rem] 3xl:text-[1.75rem]">
                  The Zone
                </p>
                <p className="text-gray-200 text-sm font-normal leading-[1.4] lg:text-base 3xl:text-lg">
                  Gbagada Industrial Scheme, Lagos
                </p>
              </motion.div>
            </div> */}
          </div>
        </div>
      </div>
      <Marquee autoFill={true} className="relative z-30 flex w-full overflow-hidden bg-white py-3">
        <h4 className="flex items-center justify-between">
          <span className="mx-8 text-4xl font-bold lg:text-[64px] lg:leading-[52.52px]">
            API Conference Lagos 2026
          </span>
          <img src={scrollImg} alt="" className="w-[56.6px]" />
        </h4>
      </Marquee>
    </section>
  );
}
