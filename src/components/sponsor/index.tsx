import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SponsorImage from "../../assets/sponsor.png";
import InquireContact from "./card";

const Sponsor = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const leftSection = document.getElementById("left-section");
      if (leftSection) {
        const leftSectionTop = leftSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        console.log(leftSectionTop, windowHeight * 0.75);
        if (leftSectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("Is Scroll", isVisible);

  const leftVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: -100, // Start above the viewport
    },
  };
  const rightVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  const childVariants = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: -20,
      opacity: 0,
    },
  };

  return (
    <section
      id="left-section"
      className="relative w-screen overflow-hidden bg-highlight min-h-[400px]  justify-around  md:grid grid-cols-5 px-[5%] py-12"
    >
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={leftVariants}
            className="col-span-3 space-y-16 md:py-32"
          >
            <motion.div
              variants={childVariants}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2 w-full"
            >
              <h2 className="font-[720] w-full text-[48px] md:text-[25px] md:text-3xl text-left lg:text-4xl xl:text-[40px] text-black">
                Sponsor API Conf Lagos
              </h2>
              <p className="md:max-w-[90%]  text-left text-[18px] md:text-[25px]">
                Contribute to organising the biggest Convention of API
                Enthusiasts and Builders in Lagos!
              </p>
            </motion.div>

            <motion.div
              variants={childVariants}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="md:flex items-start gap-x-16 space-y-8 md:space-y-0"
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

            <motion.button
              variants={childVariants}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white font-bold rounded-full text-black text-center max-w-[340px] h-[68px] w-full"
            >
              More Details in Deck
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            id="right-section"
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            className="hidden md:block col-span-2"
          >
            <img src={SponsorImage} alt="" />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <div className="inset-0 bg-new-sponsor absolute  w-full bottom-0 shadow-md" />
    </section>
  );
};
export default Sponsor;
