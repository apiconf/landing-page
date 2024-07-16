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
      <div className="w-full lg:hidden">
        <ul className="grid gap-12 sm:grid-cols-2 w-full">
          {slides.map((speaker) => (
            <li key={speaker.index} className="text-[#F1F1F1] rounded-2xl">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="mb-8 min-h-[400px] w-full aspect-[329/400] grayscale hover:grayscale-0 rounded-2xl object-cover"
              />
              <p className="font-sans mb-2 text-2xl font-bold">
                {speaker.name}
              </p>
              <p className="font-sans text-lg font-medium">
                {speaker.jobTitle}
                {speaker.employer.trim() === "" ? "" : ` • ${speaker.employer}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex h-full min-h-max w-full items-center justify-center">
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
                className={`
                  relative h-[25rem] rounded-2xl w-[10%] transition-all duration-[0.75s] ease-in-out 
                  flex-[10%_10_0] [&[aria-current='true']]:w-[50%] [&[aria-current='true']]:flex-[50%_50_0]
                  before:absolute before:bottom-0 before:left-[-10px]  
                `}
              >
                <div className="w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`hover:cursor-pointer w-[591.667px] h-[400px] rounded-2xl object-cover ${
                      activeItem !== index ? "grayscale" : ""
                    }`}
                  />
                </div>
                <div>
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
