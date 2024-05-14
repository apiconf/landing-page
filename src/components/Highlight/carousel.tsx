import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useState, useEffect } from "react";
import HiglightCard from "./card";
import styles from "./css/style.module.css";

type PropType = {
  slides: { id: number; url: string; alt: string }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [span, setSpan] = useState(0);
  // keyboard gesture - left and right arrow button click
  const keyHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!emblaApi) return;
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
      }
    },
    [emblaApi]
  );
  // mouse gesture - swipe horizontally
  const swipeHandler = useCallback(
    (e: WheelEvent) => {
      if (!emblaApi) return;

      // track only horizontal wheel event
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        return;
      }

      // reduce the span if you swipe to the right, increase the span if you swipe to the left
      if (e.deltaX > 0) {
        setSpan((num) => (num -= 1));
      } else {
        setSpan((num) => (num += 1));
      }

      if (Math.abs(span) < 10) return;

      if (span > 0) {
        emblaApi.scrollPrev();
      } else if (span < 0) {
        emblaApi.scrollNext();
      }

      setSpan(0);
    },
    [emblaApi, span]
  );
  // tracks the keyboard handler
  useEffect(() => {
    window.addEventListener("keydown", keyHandler);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, [keyHandler]);
  // tracks the mouse swipe handler
  useEffect(() => {
    if (!emblaApi) return;

    const containerNode = emblaApi.containerNode();
    if (!containerNode) return;

    containerNode.addEventListener("wheel", swipeHandler);

    return () => {
      containerNode.removeEventListener("wheel", swipeHandler);
    };
  }, [swipeHandler]);

  return (
    <div className={styles.embla}>
      <div className={styles["embla__viewport"]} ref={emblaRef}>
        <div className={styles["embla__container"]}>
          {slides.map((slide, index) => (
            <HiglightCard key={index} {...slide} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
