import { useRef } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import APIConnect from "../../assets/APIConnect.png";
import SpacesCarousel from "../Talks/spaces/spaces-carousel";

export default function Events() {
  const bgEventsMobileRef = useRef(null);
  const bgEventsRef = useRef(null);
  const EventsInnerContainerRef = useRef(null);
  const isBgEventsMobile = useIsVisible(bgEventsMobileRef);
  const isBgEvents = useIsVisible(bgEventsRef, 1);
  const isEventsInnerContainer = useIsVisible(EventsInnerContainerRef);

  const slides = Array.from({ length: 4 }, (_, index) => ({
    id: index + 1,
    image: "/heroImage2025.png",
    alt: `Slide #${index + 1}`,
  }));

  return (
    <section className="w-full relative bg-[#e1ef9a]">
      <motion.img
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isBgEventsMobile ? 0 : 32,
          opacity: isBgEventsMobile ? 1 : 0,
        }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={bgEventsMobileRef}
        src={APIConnect}
        alt=""
        className="absolute md:hidden block right-0 bottom-0 z-0"
      />
      <motion.img
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: isBgEvents ? 0 : 32, opacity: isBgEvents ? 1 : 0 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.58, 1],
        }}
        ref={bgEventsRef}
        src={APIConnect}
        alt=""
        className="absolute md:block hidden bottom-0 pb-2 z-0 w-full sm:px-[5%] 2xl:px-[7.4%]"
      />
      <motion.div
        initial={{ y: 32, opacity: 0 }}
        animate={{
          y: isEventsInnerContainer ? 0 : 32,
          opacity: isEventsInnerContainer ? 1 : 0,
        }}
        transition={{
          duration: 0.75,
          ease: [0, 0, 0.58, 1],
          delay: 0.1,
        }}
        ref={EventsInnerContainerRef}
        className="w-full flex-col gap-4 text-[#1f1f1f] font-sans pt-16 flex sm:py-32 sm:px-[5%] 2xl:px-[7.4%]"
      >
        <h2 className="max-w-[843px] font-bold text-5xl leading-[100%] tracking-normal">
          API TESTING: Build, Validate & Ship with Confidence
        </h2>
        <div className="font-medium text-2xl">
          <span>Lagos</span>
          <span> • </span>
          <time dateTime="2025-03-01">March 1st, 2025</time>
        </div>
        <a
          href=""
          className="bg-[#2F20BF] px-8 py-4 rounded-[320px] text-white max-w-fit font-bold text-2xl"
        >
          Register
        </a>
        <div className="mt-16">
          <SpacesCarousel>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full transform flex-[0_0_50%] mr-16"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="min-h-[500px] w-full rounded-6xl"
                />
              </div>
            ))}
          </SpacesCarousel>
        </div>
      </motion.div>
    </section>
  );
}
