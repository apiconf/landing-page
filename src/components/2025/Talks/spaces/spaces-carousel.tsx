import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import React, { useCallback, useState, useEffect } from "react";
import styles from "./spaces.module.css";

const OPTIONS: EmblaOptionsType = { loop: false };

type props = {
  children?: React.ReactNode;
};

const SpacesCarousel = ({ children }: props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
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
        setSpan((num) => num - 1);
      } else {
        setSpan((num) => num + 1);
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
  }, [emblaApi, swipeHandler]);

  return (
    <div className={styles.embla}>
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>{children}</div>
      </div>
    </div>
  );
};

export default SpacesCarousel;
