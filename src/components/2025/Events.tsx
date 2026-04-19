import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import APIConnect from '@/assets/APIConnect.png';
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
    <section className="relative w-full bg-[#e1ef9a]">
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
        className="absolute bottom-0 right-0 z-0 block md:hidden"
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
        className="absolute bottom-0 z-0 hidden w-full md:block"
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
        className="flex w-full flex-col gap-16 py-[87px] font-sans text-[#1f1f1f] md:py-32"
      >
        <div className="flex w-full flex-col gap-8 px-[5.9701%] md:px-[7.4074%]">
          <h2 className="max-w-[843px] text-5xl font-bold leading-[100%] tracking-normal">
            API Connect
          </h2>
          <div className="text-2xl font-medium">
            <span>
              {' '}
              A quarterly event that brings together mid-level to senior professionals in the API
              industry. Subscribe to our calender to get notified about the next one.
            </span>
          </div>
          <a
            href="https://lu.ma/apiconflagos"
            className="max-w-fit rounded-[320px] bg-[#2F20BF] px-8 py-4 text-2xl font-bold text-white"
          >
            Subscribe
          </a>
          <div className="mt-16">
            <SpacesCarousel>
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="mr-[5.9701%] h-[400px] w-full max-w-[428px] flex-[0_0_100%] transform overflow-hidden rounded-6xl first:mx-[5.9701%] md:mr-[7.4074%] first:md:mx-[7.4074%] lg:h-[500px] lg:max-w-[784px]"
                >
                  <img src={slide.image} alt={slide.alt} className="h-full w-full object-cover" />
                </div>
              ))}
            </SpacesCarousel>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
