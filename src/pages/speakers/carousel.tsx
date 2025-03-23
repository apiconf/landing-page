import React, { useState } from "react";

import Header from "./Header";
import { motion } from "framer-motion";
import type { speakers } from ".";

export default function Carousel({ slides }: { slides: speakers[] }) {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <>
      <Header carouselRef={React.useRef<HTMLDivElement>(null)} />

      <div className="w-full px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {slides.map((speaker, index) => (
            <motion.li
              key={speaker.index}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              className="relative text-[#F1F1F1] rounded-2xl"
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
            >
              <motion.div
                className="overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full aspect-[329/400] object-cover rounded-2xl"
                  animate={{ filter: activeItem === index ? "grayscale(0%)" : "grayscale(100%)" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              <motion.div
                className="mt-4 text-center"
                animate={{ opacity: activeItem === index ? 1 : 0.7 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-sans mb-2 text-lg font-bold">{speaker.name}</p>
                <p className="font-sans text-sm font-medium opacity-80">
                  {speaker.jobTitle}
                  {speaker.employer.trim() === "" ? "" : ` • ${speaker.employer}`}
                </p>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
}
