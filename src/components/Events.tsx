import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsVisible } from '../hooks';
import APIConnect from '../assets/APIConnect.png';
import SpacesCarousel from './Talks/spaces/spaces-carousel';

export default function Events() {
  const bgEventsMobileRef = useRef(null);
  const bgEventsRef = useRef(null);
  const EventsInnerContainerRef = useRef(null);
  const isBgEventsMobile = useIsVisible(bgEventsMobileRef);
  const isBgEvents = useIsVisible(bgEventsRef, 1);
  const isEventsInnerContainer = useIsVisible(EventsInnerContainerRef);

  const slides = [
    {
      id: 1,
      image: '/events/event-1.jpg',
      alt: `Slide 1`,
    },
    {
      id: 2,
      image: '/events/event-2.jpg',
      alt: `Slide 2`,
    },
    {
      id: 3,
      image: '/events/event-3.jpg',
      alt: `Slide 3`,
    },
    {
      id: 4,
      image: '/events/event-4.jpg',
      alt: `Slide 4`,
    },
    {
      id: 5,
      image: '/events/event-5.jpg',
      alt: `Slide 5`,
    },
    {
      id: 6,
      image: '/events/event-6.jpg',
      alt: `Slide 6`,
    },
    {
      id: 7,
      image: '/events/event-7.jpg',
      alt: `Slide 7`,
    },
    {
      id: 8,
      image: '/events/event-8.jpg',
      alt: `Slide 8`,
    },
    {
      id: 9,
      image: '/events/event-9.jpg',
      alt: `Slide 9`,
    },
    {
      id: 10,
      image: '/events/event-10.jpg',
      alt: `Slide 10`,
    },
  ];

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
        className="absolute md:block hidden bottom-0 z-0 w-full"
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
        className="w-full flex flex-col gap-16 text-[#1f1f1f] font-sans py-[87px] md:py-32"
      >
        <div className="w-full px-[5.9701%] md:px-[7.4074%] flex flex-col gap-8">
          <h2 className="max-w-[843px] fluid-h2-48-32">
            API TESTING: Build, Validate & Ship with Confidence
          </h2>
          <div className="fluid-h3-24-18">
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
        </div>
        <div className="w-full">
          <SpacesCarousel>
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="w-full transform flex-[0_0_100%] max-w-[428px] h-[400px] lg:max-w-[784px] lg:h-[500px] mr-[5.9701%] md:mr-[7.4074%] first:mx-[5.9701%] first:md:mx-[7.4074%] rounded-6xl overflow-hidden"
              >
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </SpacesCarousel>
        </div>
      </motion.div>
    </section>
  );
}
