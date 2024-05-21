import Space from "./space";
import Mic from "../../../assets/mic.svg";
import MicFrequency from "../../../assets/mic-frequency.svg";
import ArrowUp from "../../../assets/arrow-up.svg";
import BGSpaces from "../../../assets/Spaces.png";
import BGSpacesMobile from "../../../assets/Spaces-mobile.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../../hooks";

const Spaces = () => {
  const bgSpacesMobileRef = useRef(null);
  const bgSpacesRef = useRef(null);
  const spacesInnerContainerRef = useRef(null);
  const isBgSpacesMobile = useIsVisible(bgSpacesMobileRef);
  const isBgSpaces = useIsVisible(bgSpacesRef);
  const isSpacesInnerContainer = useIsVisible(spacesInnerContainerRef);

  return (
    <section className="w-full px-[8%] sm:px-[5%] 2xl:px-[7.4%] relative bg-dark-purple flex justify-center items-center">
      <motion.img
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isBgSpacesMobile ? 0 : 32,
          opacity: isBgSpacesMobile ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={bgSpacesMobileRef}
        src={BGSpacesMobile}
        alt=""
        className="absolute md:hidden block right-0 top-0 z-0"
      />
      <motion.img
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: isBgSpaces ? 0 : 32, opacity: isBgSpaces ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={bgSpacesRef}
        src={BGSpaces}
        alt=""
        className="absolute md:block hidden bottom-0 top-0 z-0 w-full sm:px-[5%] 2xl:px-[7.4%]"
      />
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isSpacesInnerContainer ? 0 : 32,
          opacity: isSpacesInnerContainer ? 1 : 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0, 0, 0.58, 1],
          delay: 0.1,
        }}
        ref={spacesInnerContainerRef}
        className="w-full py-32 md:pt-[12.091%] md:pb-[9.8154%] 3xl:pt-[178px] 3xl:pb-[144.5px] relative z-50 flex md:flex-row flex-col justify-center gap-8"
      >
        <Space
          iconOne={Mic}
          iconTwo={MicFrequency}
          title="API Security: Strategies for Protecting Sensitive Data"
          subTitle="@PaschalDev • 18th May 2024"
          btnIcon={ArrowUp}
          btnText="Play Recording"
          link="https://x.com/i/spaces/1lPKqbVRmqAGb"
        />
        <Space
          iconOne={Mic}
          iconTwo={MicFrequency}
          title="Best Practices for Integrating APIs with Mobile Applications"
          subTitle="@MajorE_1 • 11th May 2024"
          btnIcon={ArrowUp}
          btnText="Play Recording"
          link="https://x.com/i/spaces/1OyJAWpymdwKb"
        />
      </motion.div>
    </section>
  );
};
export default Spaces;
