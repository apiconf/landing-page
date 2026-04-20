import ArrowUp from '@/assets/arrow-up.svg';
import BGSpaces from '@/assets/Spaces.png';
import BGSpacesMobile from '@/assets/Spaces-mobile.png';
import Mic from '@/assets/mic.svg';
import MicFrequency from '@/assets/mic-frequency.svg';
import Space from './space';
import { SpaceItem } from '@/types';
import SpacesCarousel from './spaces-carousel';
import { motion } from 'framer-motion';
import { useIsVisible } from '@/hooks';
import { useRef } from 'react';

const Spaces = ({ spaces }: { spaces: SpaceItem[] }) => {
  const bgSpacesMobileRef = useRef(null);
  const bgSpacesRef = useRef(null);
  const spacesInnerContainerRef = useRef(null);
  const isBgSpacesMobile = useIsVisible(bgSpacesMobileRef);
  const isBgSpaces = useIsVisible(bgSpacesRef);
  const isSpacesInnerContainer = useIsVisible(spacesInnerContainerRef);

  return (
    <section
      className="relative flex w-full items-center justify-center bg-dark-purple"
      id="spaces"
    >
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
        className="absolute right-0 top-0 z-0 block md:hidden"
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
        className="absolute bottom-0 top-0 z-0 hidden w-full sm:px-[5%] md:block 2xl:px-[7.4%]"
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
        className="relative z-50 flex w-full flex-col justify-center gap-8 py-32 md:flex-row md:pb-[9.8154%] md:pt-[12.091%] 3xl:pb-[144.5px] 3xl:pt-[178px]"
      >
        <SpacesCarousel>
          {spaces.map((item) => (
            <Space
              key={item.key}
              title={item.title}
              subTitle={item.subTitle}
              link={item.link}
              iconOne={item.iconOne ?? Mic}
              iconTwo={item.iconTwo ?? MicFrequency}
              btnIcon={item.btnIcon ?? ArrowUp}
              btnText={item.btnText ?? 'Play Recording'}
            />
          ))}
        </SpacesCarousel>
      </motion.div>
    </section>
  );
};
export default Spaces;
