import React from "react";
import type { speakers } from ".";
import Header from "./Header";
import styles from "./style.module.css";

export default function Carousel({ slides }: { slides: speakers[] }) {
  const [activeItem, setActiveItem] = React.useState(2);
  const CarouselRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Header carouselRef={CarouselRef} />
      <div className="h-full min-h-max w-full items-center justify-center flex">
        <div
          ref={CarouselRef}
          className={`w-[1200px] max-w-full overflow-x-scroll ${styles.hideScrollbar} `}
        >
          <ul className="flex gap-8 h-[80vh]">
            {slides.map((speaker, index) => (
              <li
                aria-current={activeItem === index}
                onMouseMove={() => setActiveItem(index)}
                onTouchMove={() => setActiveItem(index)}
                key={speaker.index}
                className="flex flex-col h-[25rem] rounded-2xl w-[10%] transition-all flex-[10%_10_0] [&[aria-current='true']]:w-[48%] [&[aria-current='true']]:flex-[48%_48_0]"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={`rounded-2xl w-full h-full object-cover flex-[9_9_0] ${
                    activeItem !== index ? "grayscale" : ""
                  }`}
                />
                <div className="flex-1">
                  <div
                    className={`${
                      activeItem === index
                        ? "opacity-100 block"
                        : "opacity-0 hidden"
                    } mt-8`}
                  >
                    <p className="text-[#F1F1F1] font-sans mb-2 text-2xl font-bold">
                      {speaker.name}
                    </p>
                    <p className="text-[#F1F1F1] font-sans text-lg font-medium">
                      {speaker.jobTitle}
                      {speaker.employer.trim() === ""
                        ? ""
                        : ` • ${speaker.employer}`}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
