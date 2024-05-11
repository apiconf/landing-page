import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import HiglightCard from "./card";
import styles from "./css/style.module.css";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;

  const emblaRef = useRef(null);
  const [emblaViewportRef, emblaApi] = useEmblaCarousel(options);

  const [span, setSpan] = useState(0);

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

      if (Math.abs(span) < 1) return;

      if (span > 0) {
        emblaApi.scrollPrev();
      } else if (span < 0) {
        emblaApi.scrollNext();
      }

      setSpan(0);
    },
    [emblaApi, span]
  );

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

  useEffect(() => {
    if (!emblaApi) return;

    const containerNode = emblaApi.containerNode();
    if (!containerNode) return;

    containerNode.addEventListener("wheel", swipeHandler as EventListener);
    window.addEventListener("keydown", keyHandler);

    return () => {
      containerNode.removeEventListener("wheel", swipeHandler as EventListener);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [emblaApi, swipeHandler, keyHandler]);

  const data = { url: "", alt: "" };

  return (
    <div className={styles.embla}>
      <div className={styles["embla__viewport"]} ref={emblaViewportRef}>
        <div className={styles["embla__container"]} ref={emblaRef}>
          {slides.map((index) => (
            <HiglightCard key={index} {...data} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
