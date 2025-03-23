import WhyAttendBannerImage from '../assets/why-attend/why-attend-banner.jpg';
import { motion } from 'framer-motion';
import { useIsVisible } from '../hooks';
import { useRef } from 'react';

const WhyAttend = () => {
  const eventDetailsRef = useRef(null);
  const whyAttendRef = useRef(null);
  const whyAttendDescRef = useRef(null);
  const imgRef = useRef(null);
  const isEventDetailsVisible = useIsVisible(eventDetailsRef);
  const isWhyAttendVisible = useIsVisible(whyAttendRef);
  const isWhyAttendDescVisible = useIsVisible(whyAttendDescRef);
  const isImgVisible = useIsVisible(imgRef);

  return (
    <div className="bg-white px-[5.9701%] md:px-[7.4074%] py-[82px] md:py-16 flex flex-col md:flex-row items-center gap-16 sm:gap-x-20" id="about">
      <div className="flex-1 space-y-8">
        <motion.span
          ref={eventDetailsRef}
          initial={{ y: 32 }}
          animate={{ y: isEventDetailsVisible ? 0 : 32 }}
          transition={{
            duration: 1,
            ease: [0, 0, 0.25, 1],
          }}
          className="w-[148px] h-[28px] bg-[#FFF] border border-solid border-[#F7E7D4] shadow-[inset_0_0_12px_0_#ECC89D] rounded-2xl flex justify-center items-center text-lg text-[#6E6E6E] font-bold leading-none"
        >
          EVENT DETAILS
        </motion.span>
        <motion.h3
          ref={whyAttendRef}
          initial={{ y: 32 }}
          animate={{ y: isWhyAttendVisible ? 0 : 32 }}
          transition={{
            duration: 1,
            ease: [0, 0, 0.25, 1],
          }}
          className="font-bold text-3xl lg:text-5xl"
        >
          Why Attend?
        </motion.h3>
        <motion.p
          ref={whyAttendDescRef}
          initial={{ y: 32 }}
          animate={{ y: isWhyAttendDescVisible ? 0 : 32 }}
          transition={{
            duration: 1,
            ease: [0, 0, 0.25, 1],
          }}
          className="max-w-[600px]"
        >
API Conf Lagos 2025 is Africa’s premier API literacy and innovation conference, uniting experts and industry leaders to drive digital transformation. This is an opportunity to explore real-world use cases, engage with leaders and disruptors in the ecosystem, and gain insights that will shape the future of technology.

        </motion.p>
      </div>

      <div className="flex-1">
        <motion.img
          ref={imgRef}
          initial={{ y: 32 }}
          animate={{ y: isImgVisible ? 0 : 40 }}
          transition={{
            duration: 1,
            ease: [0, 0, 0.25, 1],
            delay: 0.2,
          }}
          src={WhyAttendBannerImage}
          alt="Conference attendees pose for a drone picture at APIConf 2024"
          className="rounded-[40px]"
        />
      </div>
    </div>
  );
};

export default WhyAttend;
