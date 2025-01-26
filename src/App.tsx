import { useRef } from "react";
import "./App.css";
import Header from "./components/2025/Header";
import Sponsor from "./components/sponsor";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { useIsVisible } from "./hooks";

export default function App() {
  const divOneRef = useRef(null);
  const divTwoRef = useRef(null);
  const isDivOneVisible = useIsVisible(divOneRef, 0.75);
  const isDivTwoVisible = useIsVisible(divTwoRef, 0.75);

  const linkButtonStyles =
    "rounded-[320px] cursor-pointer py-4 px-8 font-bold text-2xl font-sans flex-1";

  const divOneVariant = {
    visible: {
      y: isDivOneVisible ? 0 : 32,
      opacity: isDivOneVisible ? 1 : 0,
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

  const divTwoVariant = {
    visible: {
      y: isDivTwoVisible ? 0 : 32,
      opacity: isDivTwoVisible ? 1 : 0,
    },
  };

  return (
    <div className="w-full">
      <Header />
      <main className="bg-dark-purple">
        <motion.div
          ref={divOneRef}
          initial="hidden"
          animate="visible"
          variants={divOneVariant}
          className="px-[8%] sm:px-[5%] 2xl:px-[7.4%] pt-16 flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between w-full"
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-12 lg:gap-8 pb-8 text-white">
            <h1 className="max-w-[640px] font-sans leading-[64px] text-[4rem] font-bold tracking-[-1.28px]">
              API Conference 2024 at a Glance.
            </h1>
            <p className="max-w-[640px] text-lg leading-[normal]">
              The goal of API Conf is to promote API literacy amongst the
              different developer ecosystems that exist within Lagos, and in the
              future, Nigeria/Africa regardless of your expertise or skill
              level.
            </p>
            <div className="text-[#000] flex-col sm:flex-row flex flex-wrap gap-4">
              <a href="" className={`${linkButtonStyles} bg-[#E1EF9A]`}>
                Register
              </a>
              <a href="" className={`${linkButtonStyles} bg-[#ECC89D]`}>
                Apply to Speak
              </a>
              <a
                href=""
                className={`${linkButtonStyles} bg-[#4223D5] text-white`}
              >
                Become A Sponsor
              </a>
            </div>
          </div>
          <div className="content-center">
            <img
              src="/3Dimage2025.png"
              alt="A 3D image with the text: APICONF 2024"
              width={365.532}
              height={128}
              className="mx-auto lg:mx-0"
            />
          </div>
        </motion.div>
        <motion.div
          ref={divTwoRef}
          initial="hidden"
          animate="visible"
          variants={divTwoVariant}
          className="relative z-10 -bottom-[7.75rem] px-[4%] sm:px-[2.5%] 2xl:px-[3.7%]"
        >
          <img src="/heroImage2025.png" alt="" className="w-full" />
          {/* video */}
          <button
            type="button"
            className="cursor-pointer bg-[#E1EF9A] py-4 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 px-8 rounded-[320px] text-[#000] font-sans text-2xl font-bold leading-[normal]"
          >
            Watch
          </button>
        </motion.div>
      </main>
      <div className="mt-[7.75rem] 2xl:mt-[calc(7.75rem_+_2vh)]"></div>
      <Sponsor />
      <Footer newYear />
    </div>
  );
}
