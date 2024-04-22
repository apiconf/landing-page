import Spaces from "./Spaces";
import Speaker from "./Speaker";
import Mic from "../../assets/mic.svg";
import MicFrequency from "../../assets/mic-frequency.svg";
import ArrowUp from "../../assets/arrow-up.svg";
import BGSpaces from "../../assets/Spaces.png";
import BGSpacesMobile from "../../assets/Spaces-mobile.png";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";

const TalkEvent = () => {
  const bgSpacesMobileRef = useRef(null);
  const bgSpacesRef = useRef(null);
  const spacesInnerContainerRef = useRef(null);
  const isBgSpacesMobile = useIsVisible(bgSpacesMobileRef);
  const isBgSpaces = useIsVisible(bgSpacesRef);
  const isSpacesInnerContainer = useIsVisible(spacesInnerContainerRef);

  return (
    <section className="w-full relative  bg-dark-purple flex justify-center items-center ">
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
        className="absolute md:block hidden bottom-0 top-0 z-0"
      />
      <div className=" w-full  md:w-[75%]">
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
          className="md:w-[70%] md:mt-0 mt-28 md:mb-0 mb-32 relative z-50 md:mx-auto flex md:flex-row flex-col justify-center lg:justify-start gap-5"
        >
          <Spaces
            iconOne={Mic}
            iconTwo={MicFrequency}
            title="API Error Handling"
            subTitle="@Anitaihuman • 30th March 2024"
            btnIcon={ArrowUp}
            btnText="Play Recording"
            link="https://lu.ma/apiconflagos24"
          />
          <Spaces
            iconOne={Mic}
            iconTwo={MicFrequency}
            title="API Error Handling"
            subTitle="@Anitaihuman • 30th March 2024"
            btnIcon={ArrowUp}
            btnText="Play Recording"
            link="https://lu.ma/apiconflagos24"
          />
        </motion.div>
        <Speaker />
      </div>
    </section>
  );
};
export default TalkEvent;
