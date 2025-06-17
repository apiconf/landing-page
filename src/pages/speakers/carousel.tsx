import React, { useState } from 'react';

import Header from './Header';
import { AnimatePresence, motion } from 'framer-motion';
import { speakers } from './speaker';

export default function Carousel({ slides }: { slides: speakers[] }) {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeBio, setActiveBio] = useState<number | null>(null);
  const CarouselRef = React.useRef<HTMLDivElement>(null!);

  return (
    <>
      <Header carouselRef={CarouselRef} />

      <div>
        <ul className="grid grid-cols-1 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {slides?.map((speaker, index) => (
            <motion.li
              key={speaker.index}
              className="relative cursor-pointer text-[#F1F1F1]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
            >
              <motion.div
                className="overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => {
                  setActiveItem(null);
                  setActiveBio(null);
                }}
              >
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className={`aspect-[300/350] w-full rounded-2xl object-cover transition-all md:aspect-[345/400] md:rounded-none`}
                  animate={{
                    filter: activeItem === index ? 'grayscale(0%)' : 'grayscale(100%)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                <AnimatePresence>
                  {activeBio === index && (
                    <motion.div
                      className="absolute inset-0 z-10 flex aspect-[300/350] overflow-y-auto bg-[#E1EF9A] p-4 md:aspect-[345/400]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg text-primary-black">{speaker.bio}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                className="mx-4 mt-4 text-center md:text-left"
                animate={{ opacity: activeItem === index || activeBio === index ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setActiveBio(index)}
              >
                <p className="mb-2 font-sans text-3xl font-bold leading-none md:text-[40px]">
                  {speaker.name}
                </p>
                <p className="font-sans text-lg font-medium opacity-80 md:text-xl">
                  {speaker.jobTitle}
                  {speaker.employer.trim() === ''
                    ? ` • ${speaker.sessionFormat}`
                    : ` • ${speaker.employer} • ${speaker.sessionFormat}`}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
