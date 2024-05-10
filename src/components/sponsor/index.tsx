import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import InquireContact from "./card";

const Sponsor = () => {
  const headerRef = useRef(null);
  const contactRef = useRef(null);
  const buttonRef = useRef(null);
  const bannerRef = useRef(null);
  const isHeaderVisible = useIsVisible(headerRef, 0.75);
  const isContactVisible = useIsVisible(contactRef, 0.75);
  const isButtonVisible = useIsVisible(buttonRef, 0.75);
  const isBannerVisible = useIsVisible(bannerRef, 0.75);

  const childVariant = {
    visible: {
      y: isHeaderVisible ? 0 : 32,
      opacity: isHeaderVisible ? 1 : 0,
      transition: {
        ease: [0, 0, 0.75, 1],
        duration: 1,
      },
    },
    hidden: {
      y: 32,
      opacity: 0,
    },
  };
  const contactVariant = {
    visible: {
      y: isContactVisible ? 0 : 32,
      opacity: isContactVisible ? 1 : 0,
      transition: {
        ...childVariant.visible.transition,
        delay: 0.1,
      },
    },
    hidden: {
      ...childVariant.hidden,
    },
  };
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
      ...childVariant.hidden,
    },
  };
  const bannerVariant = {
    visible: {
      opacity: isBannerVisible ? 1 : 0,
      transition: {
        ease: [0.25, 0, 0.75, 1],
        delay: 0.3,
        duration: 1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <section className="w-full bg-sponsor sm:px-[5%] 2xl:px-[7.4%] pt-16 sm:py-12 flex flex-col items-center sm:items-start lg:items-stretch lg:flex-row lg:justify-between gap-16">
      <div className="lg:mb-[3.18%] px-[8%] sm:px-0 lg:flex flex-col justify-center space-y-8 sm:space-y-16">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate="visible"
          variants={childVariant}
          className="space-y-2 w-full"
        >
          <h2 className="w-full font-bold text-5xl lg:text-6xl 3xl:text-[64px] leading-[59.52px] lg:leading-[74.4px] 3xl:leading-[79.36px] text-black">
            Sponsor API Conference
          </h2>
          <p className="max-w-[330px] sm:max-w-[500px] md:max-w-[594px] text-left font-medium text-lg sm:text-xl md:text-2xl leading-[22.32px] sm:leading-[24.8px] md:leading-[29.76px] opacity-80">
            Contribute to organising the biggest Convention of API Enthusiasts
            and Builders in Lagos!
          </p>
        </motion.div>

        <motion.div
          ref={contactRef}
          initial="hidden"
          animate="visible"
          variants={contactVariant}
          className="flex flex-col sm:flex-row lg:flex-wrap items-start gap-x-16 gap-y-8"
        >
          <InquireContact
            contactName="Sodiq Akinjobi"
            linkedInUrl="https://www.linkedin.com/in/geektutor/"
            email="sodiq.akinjobi@gmail.com"
          />
          <InquireContact
            contactName="Gbadebo Bello"
            linkedInUrl="https://www.linkedin.com/in/gbahdeyboh/"
            email="gbahdeybohbello@gmail.com"
          />
        </motion.div>

        <motion.a
          ref={buttonRef}
          initial="hidden"
          animate="visible"
          variants={buttonVariant}
          className="w-full max-w-[330px] lg:max-w-[467px] lg:w-[70.01%] p-6 sm:px-4 sm:py-8 md:px-8 lg:py-[7.21%] cursor-pointer bg-white flex gap-2 justify-center items-center rounded-[320px]"
        >
          <span className="text-black font-extrabold text-2xl leading-[29.76px]">
            More Details in Deck
          </span>
        </motion.a>
      </div>
      <motion.div
        ref={bannerRef}
        initial="hidden"
        animate="visible"
        variants={bannerVariant}
        className="block sm:hidden lg:block object-cover w-full h-[451.78px] lg:w-[40.414%] md:h-auto rounded-t-[32px] sm:rounded-[32px] bg-[url('/src/assets/sponsor.png')] bg-no-repeat bg-top bg-cover pt-[46.459%]"
      ></motion.div>
    </section>
  );
};
export default Sponsor;
